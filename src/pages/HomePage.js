import ModalUser from "../components/ModalUser";
import AddUser from "./AddUser";
import useUser from "../hooks/useUser";
import { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import ReadOnlyRow from "../components/ReadOnlyRow";
import EditableRow from "../components/EditableRow";
import { deleteUser, createUser, editUser } from "../apis/user-api";
import ReactPaginate from "react-paginate";
import useLoading from "../hooks/useLoading";
import validateEditProfile from "../validators/validate-editProfile";

export default function HomePage() {
  const { handlePage, pagination, page, dataInPage } = useUser();
  // console.log("userData:", userData);

  const { startLoading, stopLoading } = useLoading();
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});
  // console.log("error", error);

  const navigate = useNavigate();

  const [addUserData, setAddUserData] = useState({
    "First name": "",
    "Last name": "",
    gender: "",
    "Birth date": "",
    Image: ""
  });

  // onChange Input Adduser
  const handleAddUserFormChange = e => {
    try {
      e.preventDefault();

      const fieldName = e.target.getAttribute("name");
      const fieldValue = e.target.value;

      const newFormData = { ...addUserData };
      newFormData[fieldName] = fieldValue;

      setAddUserData(newFormData);
    } catch (err) {
      console.log("handleEditFormChange Error");
    }
  };

  // Create User
  const handleSubmitForm = async e => {
    try {
      e.preventDefault();
      const result = validateEditProfile(addUserData);
      console.log(result, "result------------------------");
      if (result) {
        setError(result);
      } else {
        console.log("no error");
        setError({});
      }

      const formData = new FormData();
      formData.append("Image", file);
      formData.append("First name", addUserData["First name"]);
      formData.append("Last name", addUserData["Last name"]);
      formData.append("gender", addUserData.gender);
      formData.append("Birth date", addUserData["Birth date"]);
      // console.log("formData:", formData);

      await createUser(formData);
      navigate(0);
      setOpen(false);
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };

  // Delete User
  const handleDelete = async userId => {
    await deleteUser(userId);
    navigate(0);
  };

  // Edit
  const [editFormData, setEditFormData] = useState({
    "First name": "",
    "Last name": "",
    gender: "",
    "Birth date": "",
    Image: ""
  });

  const [editContactId, setEditContactId] = useState(null);

  // onChange Input Edit
  const handleEditFormChange = e => {
    try {
      e.preventDefault();

      const fieldName = e.target.getAttribute("name");
      const fieldValue = e.target.value;

      const newFormData = { ...editFormData };
      newFormData[fieldName] = fieldValue;

      setEditFormData(newFormData);
    } catch (err) {
      console.log("handleEditFormChange Error");
    }
  };

  // Edit User
  const handleEditClick = (e, item) => {
    try {
      e.preventDefault();
      setEditContactId(item.id);

      const formValues = {
        "First name": item["First name"],
        "Last name": item["Last name"],
        gender: item.gender,
        "Birth date": item["Birth date"],
        Image: item.Image
      };

      setEditFormData(formValues);
    } catch (err) {
      console.log("handleEditClick Error");
    }
  };

  // Edit Save
  const handleEditSave = async e => {
    try {
      console.log("editFormDataInSave:", editFormData);
      await editUser(editContactId, editFormData);
      setEditContactId(null);
      navigate(0);
    } catch (err) {
      console.log("edit Error");
    }
  };

  const handleCancelClick = () => {
    setEditContactId(null);
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
          {dataInPage[page]?.map((item, idx) => (
            <Fragment key={idx}>
              {editContactId === item.id ? (
                <EditableRow
                  handleCancelClick={handleCancelClick}
                  editFormData={editFormData}
                  item={item}
                  handleEditFormChange={handleEditFormChange}
                  onClick={() => handleEditSave(item.id)}
                />
              ) : (
                <ReadOnlyRow
                  item={item}
                  handleDelete={() => handleDelete(item.id)}
                  handleEditClick={handleEditClick}
                />
              )}
            </Fragment>
          ))}
        </tbody>
      </table>

      <div className="flex justify-center items-center mb-6">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pagination().length}
          marginPagesDisplayed={2}
          onPageChange={({ selected }) => handlePage(selected)}
          containerClassName={"inline-flex -space-x-px"}
          pageClassName="mt-5"
          pageLinkClassName={
            "px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          }
          previousClassName="mt-5"
          previousLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          nextClassName="mt-5"
          nextLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          breakClassName="mt-5"
          breakLinkClassName="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        />
      </div>

      <ModalUser open={open} onClose={() => setOpen(false)} title="Add User">
        <AddUser
          onClose={() => setOpen(false)}
          handleSubmitForm={handleSubmitForm}
          file={file}
          setFile={setFile}
          handleAddUserFormChange={handleAddUserFormChange}
          addUserData={addUserData}
          error={error}
        />
      </ModalUser>
    </div>
  );
}
