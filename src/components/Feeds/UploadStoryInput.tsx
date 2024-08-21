import { useFileUpload } from "./hooks/useUploadStory";


// Input for upload story
const FileInputForm = () => {
  const { handleFileChange, uploading } = useFileUpload();
  return (
    <form>
      <input
        className="hidden"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        disabled={uploading}
        id="story"
      />
      <label
        htmlFor="story"
        className="absolute z-10 bottom-4 right-1 w-[18px] h-[18px] bg-brand flex items-center justify-center text-white font-semibold rounded-full cursor-pointer">
        <span className="text-white">+</span>
      </label>
    </form>
  );
};

export default FileInputForm;
