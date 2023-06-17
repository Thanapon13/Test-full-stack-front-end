import ModalUser from "../components/ModalUser";
import AddUser from "./AddUser";
import defaultImage from "../assets/userPicture.png";
import useUser from "../hooks/useUser";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const {
    open,
    userData,
    handleDelete,
    setInputFirstName,
    setInputLastName,
    setInputGender,
    setInputBirthday,
    handleCreateUser,
    setOpen
  } = useUser();

  const navigate = useNavigate();
  const [error, setError] = useState({});

  const handleCreateUsers = () => {
    handleCreateUser();
    navigate(0);
  };

  const handleDeleteUser = userId => {
    handleDelete(userId);
    navigate(0);
  };

  return (
    /* Container All */
    <div>
      {/* Box Top */}
      <div className="border-2 flex justify-between items-center flex-wrap px-4 py-3">
        <h1 className="text-xl text-gray-500 font-medium">User List</h1>

        <button
          onClick={() => setOpen(true)}
          className="text-white bg-[#1DA1F2] hover:bg-[#1893de] focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Add +
        </button>
      </div>

      {/* Box Bottom */}
      <table className="w-[90%] m-auto mt-6 text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-base text-gray-700 bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Profile picture
            </th>

            <th scope="col" className="px-6 py-3">
              First name
            </th>

            <th scope="col" className="px-6 py-3">
              Last name
            </th>

            <th scope="col" className="px-6 py-3">
              Gender
            </th>

            <th scope="col" className="px-6 py-3">
              Birthday
            </th>

            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {userData.map((item, idx) => (
            <tr
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-black text-lg"
              key={idx}
            >
              <td className="px-6 py-4 ">
                <img
                  src={item.Image || defaultImage}
                  alt="UserImage"
                  className="rounded-full cursor-pointer w-[60px]"
                />
              </td>
              <td className="px-6 py-4">{item["First name"]}</td>
              <td className="px-6 py-4">{item["Last name"]}</td>
              <td className="px-6 py-4">{item.gender}</td>
              <td className="px-6 py-4">{item["Birth date"]}</td>
              <td className="px-6 py-4">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
                  onClick={() => handleDeleteUser(item.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <ModalUser open={open} onClose={() => setOpen(false)} title="Add User">
        <AddUser
          onClose={() => setOpen(false)}
          onFirstName={e => setInputFirstName(e.target.value)}
          onLastName={e => setInputLastName(e.target.value)}
          onGender={e => setInputGender(e.target.value)}
          onBirthday={e => setInputBirthday(e.target.value)}
          onClick={handleCreateUsers}
        />
      </ModalUser>
    </div>
  );
}
