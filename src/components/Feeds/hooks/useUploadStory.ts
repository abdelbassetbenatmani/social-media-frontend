// this is a custom hook to upload a story

import { useState } from "react";
import axios from "axios";
import { toast } from "../../ui/use-toast";

export const useFileUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      const selectedFile = event.target.files[0];
      setFile(selectedFile);
      console.log(selectedFile);

      await uploadFile(selectedFile);
    }
  };

  const uploadFile = async (file: File) => {
    console.log("Uploading story...");
    if (file) {
      console.log("File selected:", file.name);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("userId", "1");
      setUploading(true);

      try {
        await axios.post("http://localhost:3000/api/v1/stories", formData, {
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
