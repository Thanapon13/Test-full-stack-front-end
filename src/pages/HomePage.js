import ModalUser from "../components/ModalUser";
import AddUser from "./AddUser";
import useUser from "../hooks/useUser";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";

export default function HomePage() {
  const { open, userData, handleDelete, setOpen } = useUser();
  console.log("userData:", userData);

  const navigate = useNavigate();

  const [editFormData, setEditFormData] = useState("");

  const [editContactId, setEditContactId] = useState(null);

  const handleEditClick = (event, item) => {
    event.preventDefault();
    setEditContactId(item.id);

    const formValues = {
      "First name": item["First name"],
      "Last name": item["Last name"],
      gender: item.gender,
      "Birth date": item["Birth date"],
      Image: item.Image
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
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
      <from>
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
              <Fragment>
                {editContactId === item.id ? (
                  <EditableRow
                    handleCancelClick={handleCancelClick}
                    editFormData={editFormData}
                  />
                ) : (
                  <ReadOnlyRow
                    item={item}
                    handleDeleteUser={handleDeleteUser}
                    handleEditClick={handleEditClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </from>

      <ModalUser open={open} onClose={() => setOpen(false)} title="Add User">
        <AddUser onClose={() => setOpen(false)} />
      </ModalUser>
    </div>
  );
}
