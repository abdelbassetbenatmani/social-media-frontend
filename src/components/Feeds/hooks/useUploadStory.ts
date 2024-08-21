import { useState } from "react";
import axios from "axios";
import { toast } from "../../ui/use-toast";

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>, userId: string) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      console.log("Selected file:", selectedFile);

      await uploadFile(selectedFile, userId);
    }
  };

  const uploadFile = async (file: File, userId: string) => {
    console.log("Uploading story...");
    if (file) {
      console.log("File selected:", file.name);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", userId);

      // Debugging: Log the FormData contents
      for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
      }

      setUploading(true);

      try {
        await axios.post(`${import.meta.env.VITE_BACKEND_URL}/stories`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
      
        toast({
          title: "Story uploaded",
        });
      } catch (error) {
        console.error("Error uploading file", error);
        toast({
          title: "Error uploading file",
        });
      } finally {
        setUploading(false);
      }
    } else {
      console.log("No file selected");
    }
  };

  return { file, uploading, handleFileChange };
};