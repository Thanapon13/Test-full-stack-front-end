import React from "react";
import Avatar from "./Avatar";

const EditableRow = ({ handleCancelClick, editFormData }) => {
  return (
    <tr>
      <div className="flex flex-col gap-4 items-center p-4">
        <Avatar src={editFormData.Image.profileImage} size="70" />
      </div>
      <td className="px-6 py-4 ">
        <div className="border-b-2 border-black ">
          <input
            className="outline-none border-none focus:ring-0 text-black"
            type="text"
            autocomplete="off"
            placeholder="Plese enter First name"
            value={editFormData["First name"]}
            name="firstName"
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
            value={editFormData["Last name"]}
            name="lirstName"
          />
        </div>
      </td>
      <td className="px-6 py-4 ">
        <select
          className="block py-2.5 px-0 w-full text-black bg-transparent border-0 border-b-2 border-black appearance-none dark:text-gray-400 dark:border-gray-700 outline-none focus:ring-0"
          value={editFormData.gender}
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
            name="firstName"
          />
        </div>
      </td>
      <td className="px-6 py-4">
        <button
          type="button"
          className="focus:outline-none text-white bg-green-600 hover:bg-green-800 font-medium text-sm px-5 py-2.5 mr-2 mb-2"
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
