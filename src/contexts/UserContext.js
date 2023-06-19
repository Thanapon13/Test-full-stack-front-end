import { createContext, useEffect, useState } from "react";
import { getUser } from "../apis/user-api";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [userData, setUserData] = useState([]);

  //Get User
  useEffect(() => {
    const fetchUser = async () => {
      const res = await getUser();
      setUserData(res.data);
      // console.log("res.data:", res.data);
    };
    fetchUser();
  }, []);

  // Pagination
  const [listUserData, setListUserData] = useState(userData);
  // console.log("listUserData:", listUserData);

  useEffect(() => {
    setListUserData(userData);
  }, [userData]);

  const [dataInPage, setDataInPage] = useState([]);
  // console.log("dataInPage", dataInPage);
  const [page, setPage] = useState(0);
  // console.log("page", page);

  const userPerPage = 3;

  const pagination = () => {
    const pages = Math.ceil(listUserData.length / userPerPage);

    const newPaymentUser = Array.from({ length: pages }, (el, idx) => {
      const start = idx * userPerPage;
      return listUserData.slice(start, start + userPerPage);
    });
    return newPaymentUser;
  };

  const handlePage = index => {
    setPage(index);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setListUserData(paginate[page] || []);
  }, [page]);

  useEffect(() => {
    const paginate = pagination();
    setDataInPage(paginate);
    setPage(0);
  }, [listUserData]);

  return (
    <UserContext.Provider
      value={{
        userData,
        handlePage,
        pagination,
        page,
        dataInPage
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
