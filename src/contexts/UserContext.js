import { createContext, useEffect, useState } from "react";
import { getUser, deleteUser, createUser } from "../apis/user-api";
import useLoading from "../hooks/useLoading";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const { stopLoading } = useLoading();
  const [userData, setUserData] = useState([]);
  // console.log("userDatas:", userData);
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [inputFirstName, setInputFirstName] = useState("");
  console.log("inputFirstName:", inputFirstName);
  const [inputLastName, setInputLastName] = useState("");
  console.log("inputLastName:", inputLastName);
  const [inputGender, setInputGender] = useState("");
  console.log("inputGender:", inputGender);
  const [inputBirthday, setInputBirthday] = useState("");
  console.log("inputBirthday:", inputBirthday);

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
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const formData = new FormData();
      formData.append("Image", file);
      formData.append("First name", inputFirstName);
      formData.append("Last name", inputLastName);
      formData.append("gender", inputGender);
      formData.append("Birth date", inputBirthday);
      // console.log("formData:", formData);

      await createUser(formData);
      stopLoading();
      setOpen(false);
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
        handleSubmitForm,
        open,
        setOpen,
        file,
        setFile
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
