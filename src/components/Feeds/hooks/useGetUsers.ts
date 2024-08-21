import { useEffect, useState } from "react";
import axios from "axios";
export interface User {
  id: number;
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
        const response = await axios.get("http://localhost:3000/api/v1/users"); // Replace with your API endpoint
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
