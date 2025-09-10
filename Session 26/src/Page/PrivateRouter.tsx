import { Navigate, Outlet } from "react-router-dom";
import { useState } from "react";
const PrivateRouter = () => {
  const [isAuth] = useState(false);
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRouter;
