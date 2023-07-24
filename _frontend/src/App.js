import React from "react";
import { Routes, Route } from "react-router-dom";
import Payload from "./views/payload/Payload";
//import "react-id-swiper/lib/styles/css/swiper.css";
import {
  Login,
  Register,
  Dashboard,
  Notfound,
  Home,
  Member,
  Profile,
  Schedule,
  Tasks,
  Users,
  Settings,
  Charts,
  Listings,
  Trylog,
  Mainpage,
  SinglePage,
  Dashlayout,
} from "./pages";
import { NewProduct } from "./operations/";
import "./App.css";
import { MformProvider } from "./views/payload/MformContext";
import FormContext from "./Multiforms/FormContext";

const App = () => {
  return (
    <div className="bg-color">
      <Routes>
        <Route path="/dashboard" element={<Dashlayout />}>
          <Route path="Profile" element={<Profile />} />
          <Route path="Schedule" element={<Schedule />} />
          <Route path="Tasks" element={<Tasks />} />
          <Route path="Users" element={<Users />} />
          <Route path="Charts" element={<Charts />} />
          <Route path="Member" element={<Member />} />
          <Route path="Settings" element={<Settings />} />
          <Route path="listings" element={<Listings />} />
          <Route path="newproduct" element={<NewProduct />} />
          <Route path="mainpage" element={<Mainpage />} />
          <Route path="singlepage/:id" element={<SinglePage />} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Trylog />} />
        <Route path="*" element={<Notfound />} />

        <Route path="/payload" element={<Payload />} />
        <Route path="/Dashlayout" element={<Dashlayout />} />

        {/* <Route path="/sidebar" element={<Sidebar />} /> */}
      </Routes>
    </div>
  );
};

export default App;
