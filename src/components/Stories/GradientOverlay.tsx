export const GradientOverlay = ({ position,rotate }: { position: string,rotate:string }) => (
  <div
    style={{
      background: `linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`,
    }}
    className={`absolute ${position} ${rotate}  left-0 right-0 h-20 rounded-2xl`}></div>
);
