import { useRef, useState } from "react";
import Avatar from "../components/Avatar";
import profileImage from "../assets/userPicture.png";
import InputAdduser from "../components/InputAdduser";
import useUser from "../hooks/useUser";

export default function AddUser({
  onClose,
  onFirstName,
  onLastName,
  onGender,
  onBirthday,
  onClick
}) {
  const { userData } = useUser();
  console.log("userData:", userData);
  const inputEl = useRef();

  const [file, setFile] = useState(null);

  return (
    <div>
      {/* Content */}
      <div className="flex justify-around items-center">
        {/* Picture */}

        <div className="flex flex-col gap-4 items-center p-4">
          <Avatar
            src={file ? URL.createObjectURL(file) : userData.Image}
            size="100"
          />

          <button
            className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
            onClick={() => inputEl.current.click()}
          >
            <p>Upload Profile Picture</p>

            <input
              type="file"
              ref={inputEl}
              className="hidden"
              onChange={e => {
                // console.dir(e.target);
                if (e.target.files[0]) {
                  setFile(e.target.files[0]);
                }
              }}
            />
          </button>

          <button
            type="button"
            className="text-white bg-red-700 hover:bg-red-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 "
            onClick={() => {
              setFile(null);
              inputEl.current.value = null;
            }}
          >
            Delete Picture
          </button>
        </div>

        {/* From input */}
        <div>
          <form className="flex flex-col flex-wrap gap-2">
            <div className="flex gap-6 flex-wrap">
              <div className="flex flex-col gap-2">
                <label className="text-gray-600">First Name</label>
                <InputAdduser
                  placeholder="Plese enter First name"
                  onChange={onFirstName}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-600">Last Name</label>

                <InputAdduser
                  placeholder="Plese enter Last name"
                  onChange={onLastName}
                />
              </div>
            </div>

            <div className="flex gap-6 flex-wrap">
              <div className="flex flex-col gap-2">
                <label className="text-gray-600">Gender</label>

                <select
                  id="countries"
                  className="border-2 border-gray-400 focus:ring-0 focus:border-black rounded-xl"
                  onChange={onGender}
                >
                  <option value="">Please select gender...</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-gray-600">Birthday</label>
                <input
                  type="date"
                  placeholder="Plese enter Last name"
                  className="border-2 border-gray-400 focus:ring-0 focus:border-black  rounded-xl"
                  onChange={onBirthday}
                />
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-end items-center p-6 gap-2">
        <button
          type="button"
          className="text-white bg-gray-600 hover:bg-gray-500 font-medium rounded-lg text-sm px-5 py-2.5"
          onClick={onClose}
        >
          CANCEL
        </button>
        <button
          type="button"
          className="text-white bg-green-600 hover:bg-green-800 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5"
          onClick={onClick}
        >
          SAVE
        </button>
      </div>
    </div>
  );
}
