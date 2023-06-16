import { Outlet } from "react-router-dom";

export default function HeaderNavbar() {
  return (
    <>
      <div className="bg-[#1DA1F2] px-4 py-2 flex justify-between items-center">
        <h1 className="text-white text-xl ">User Management</h1>
        <div className="w-[40px] h-[40px] border-[1px] border-black bg-white rounded-full flex items-center justify-center">
          <h1 className="text-xl text-gray-500 cursor-pointer">D</h1>
        </div>
      </div>
      <Outlet />
    </>
  );
}
