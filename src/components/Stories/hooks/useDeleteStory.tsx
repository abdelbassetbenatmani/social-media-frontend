import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "@/components/ui/use-toast";

const useDeleteStory = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const deleteStory = async (storyId: string) => {
    setIsLoading(true);
    setError(null);

    try {
      // Make a DELETE request to the API endpoint with the storyId
      await axios.delete(`http://localhost:3000/api/v1/stories/${storyId}`);
      // Handle successful deletion
      toast({
        title: "Story deleted successfully",
      });
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 2000);
    } catch (err) {
      // Handle error
      setError(err as null);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, deleteStory };
};

export default useDeleteStory;
