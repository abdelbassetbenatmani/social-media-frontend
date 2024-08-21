import React, { useEffect, useState } from 'react';

const ProgressBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    let startTime: number | undefined;

    const updateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const percentage = Math.min((elapsed / duration) * 100, 100);
      setProgress(percentage);

      if (percentage < 100) {
        requestAnimationFrame(updateProgress);
      } else {
        // Reset progress and start again after a short delay
        setTimeout(() => {
          startTime = undefined; // Reset startTime to allow restart
          setProgress(0);
          requestAnimationFrame(updateProgress);
        }, 500); // Optional delay before restarting
      }
    };

    requestAnimationFrame(updateProgress);

    // Cleanup on unmount
    return () => {
      setProgress(0);
    };
  }, []);

  return (
    <div className="relative w-full h-[2px] overflow-hidden bg-white/50 rounded-lg z-10">
      <div
        className="h-[3px] rounded-full duration-100 ease-out bg-white transition-width"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;