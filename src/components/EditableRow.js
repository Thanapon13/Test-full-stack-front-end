import React from "react";
import defaultImage from "../assets/userPicture.png";

const EditableRow = ({
  handleCancelClick,
  editFormData,
  item,
  handleEditFormChange,
  onClick
}) => {
  return (
    <tr>
      <td className="px-6 py-4 ">
        <img
          src={item.Image.profileImage || defaultImage}
          alt="UserImage"
          className="rounded-full cursor-pointer w-[60px]"
        />
      </td>
      <td className="px-6 py-4 ">
        <div className="border-b-2 border-black ">
          <input
            className="outline-none border-none focus:ring-0 text-black"
            type="text"
            autocomplete="off"
            placeholder="Plese enter First name"
            onChange={handleEditFormChange}
            value={editFormData["First name"]}
            name="First name"
          />
        </div>
      </td>
      <td className="px-6 py-4 ">
        <div className="border-b-2 border-black ">
          <input
            className="outline-none border-none focus:ring-0 text-black"
            type="text"
            autocomplete="off"
            placeholder="Plese enter Lirst name"
            onChange={handleEditFormChange}
            value={editFormData["Last name"]}
            name="Last name"
          />
        </div>
      </td>
      <td className="px-6 py-4 ">
        <select
          className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-gray-400 dark:border-gray-700 outline-none focus:ring-0"
          name="gender"
          value={editFormData.gender}
          onChange={handleEditFormChange}
        >
          <option value="">Please select gender...</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </td>
      <td className="px-6 py-4 ">
        <div className="border-b-2 border-black ">
          <input
            className="outline-none border-none focus:ring-0 text-black"
            type="date"
            placeholder="Plese enter Last name"
            value={editFormData["Birth date"]}
            name="Birth date"
            onChange={handleEditFormChange}
          />
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-600 hover:bg-green-800 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={onClick}
        >
          Save
        </button>
        <button
          type="button"
          className="focus:outline-none text-white bg-gray-600 hover:bg-gray-500 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
          onClick={handleCancelClick}
        >
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;
