import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";

const PrivateRouter6 = () => {
  const [isAuth] = useState(true);
  return isAuth ? <Outlet /> : <Navigate to="/loginb6" />;
};

export default PrivateRouter6;
