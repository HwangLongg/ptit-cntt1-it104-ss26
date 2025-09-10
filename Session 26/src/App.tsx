import { Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import ProductDetail from "./Page/ProductDetail";
import Student from "./Page/Bai02";
import StudentSearch from "./Page/Bai03";
import StudentResult from "./Page/Bai04";
import Login from "./Page/Bai05";
import Account from "./Page/Account";
import PrivateRouter from "./Page/PrivateRouter";
import Login6 from "./Page/Bai06";
import Account6 from "./Page/Accountb6";
import PrivateRouter6 from "./Page/PrivateRouter6";
import Teams from "./Page/Teams";
import TeamsIndex from "./Page/TeamsIndex";
import Team from "./Page/Team";
import Loginb6 from "./Page/Bai06";
const LazyLoadComp = lazy(() => import("./Page/Bai08"));
function App() {
  return (
    <Routes>
      {/* ================== Bài 1 ================== */}
      <Route path="/product/:id" element={<ProductDetail />} />
      {/* ================== Bài 2 ================== */}
      <Route path="/student/:name" element={<Student />} />
      {/* ================== Bài 3 ================== */}
      <Route path="/student" element={<StudentSearch />} />
      {/* ================== Bài 4 ================== */}
      <Route path="/student-result" element={<StudentResult />} />
      {/* ================== Bài 5 ================== */}
      <Route path="/login" element={<Login />} />
      <Route path="/account"element={<PrivateRouter><Account /></PrivateRouter>}/>
      {/* ================== Bài 6 ================== */}
      <Route path="/login6" element={<Loginb6 />} />
      <Route path="/account6"element={<PrivateRouter6><Account6 /></PrivateRouter6>}/>
      {/* ================== Bài 7 ================== */}
      <Route path="/teams" element={<Teams />}>
        <Route index element={<TeamsIndex />} />
        <Route path=":teamId" element={<Team />} />
      </Route>
      {/* ================== Bài 8 (Lazy Loading) ================== */}
      <Route path="/lazy"element={<LazyLoadComp />}/></Routes>
  );
}

export default App;
