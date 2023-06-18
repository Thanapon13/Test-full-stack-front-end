import React from "react";
import defaultImage from "../assets/userPicture.png";

const ReadOnlyRow = ({ item, handleDeleteUser, handleEditClick }) => {
  return (
    <tr className="bg-white border-b dark:bg-gray-900 dark:border-gray-700 text-black text-lg">
      <td className="px-6 py-4 ">
        <img
          src={item.Image.profileImage || defaultImage}
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
          onClick={event => handleEditClick(event, item)}
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
  );
};

export default ReadOnlyRow;
