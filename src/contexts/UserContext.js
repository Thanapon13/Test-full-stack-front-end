import { createContext, useEffect, useState } from "react";
import { getUser, deleteUser, createUser } from "../apis/user-api";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState([]);
  const [open, setOpen] = useState(false);
  // console.log("userDatas:", userData);
  const [inputFirstName, setInputFirstName] = useState("");
  // console.log("inputFirstName:", inputFirstName);
  const [inputLastName, setInputLastName] = useState("");
  // console.log("inputLastName:", inputLastName);
  const [inputGender, setInputGender] = useState("");
  // console.log("inputGender:", inputGender);
  const [inputBirthday, setInputBirthday] = useState("");
  // console.log("inputBirthday:", inputBirthday);

  //Get User
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      setUserData(res.data);
      // console.log("res.data:", res.data);
    };
    fetchUser();
  }, []);

  // Create User
  const handleCreateUser = async () => {
    try {
      const newUserData = {
        "First name": inputFirstName,
        "Last name": inputLastName,
        gender: inputGender,
        "Birth date": inputBirthday
      };
      console.log("newUserData:", newUserData);

      await createUser(newUserData);
      setOpen(true);
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการสร้างคำสั่ง :", error);
    }
  };

  // Delete User
  const handleDelete = async userId => {
    await deleteUser(userId);
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        handleDelete,
        setInputFirstName,
        setInputLastName,
        setInputGender,
        setInputBirthday,
        handleCreateUser,
        open,
        setOpen
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
