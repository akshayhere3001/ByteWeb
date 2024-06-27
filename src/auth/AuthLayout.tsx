import { Outlet, Navigate } from "react-router-dom";
import AuthSideBar from "./forms/AuthSideBar";

const AuthLayout = () => {
  const isAuth = false;
  return (
    <>
      {isAuth ? (
        <Navigate to="/" />
      ) : (
        <div className="w-full flex flex-row-reverse p-10">
          <section className="flex border flex-col justify-center items-center ">
            <Outlet />
          </section>
          <AuthSideBar />
        </div>
      )}
    </>
  );
};

export default AuthLayout;
