import { useEffect, useState } from "react";
import axios from "axios";
export interface User {
  _id: string;
  username: string;
  email: string;
  avatar: string;
  password: string;
  stories: any[];
}
const useGetUsers = ():User[] => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/users`); // Replace with your API endpoint
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return users;
};

export default useGetUsers;
