import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../pages/auth/LoginPage";
import SignUp from "../pages/auth/SignUpPage";
import UserLeave from "../pages/auth/UserLeavePage";
import FindId from "../pages/auth/FindIdPage";
import FindPw from "../pages/auth/FindPwPage";
import CheckID from "../pages/auth/CheckIDPage";
import CheckPW from "../pages/auth/CheckPWPage";
import ChangePassWord from "../pages/auth/ChangePassWordPage";
import Error from "../pages/auth/ErrorPage";
import MainPage from "../pages/main/MainPage";
import DiaryPage from "../pages/auth/DiaryPage";
import MyPage from "../pages/auth/MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/UserLeave" element={<UserLeave />} />
        <Route path="/FindId" element={<FindId />} />
        <Route path="/FindPw" element={<FindPw />} />
        <Route path="/CheckId" element={<CheckID />} />
        <Route path="/CheckPw" element={<CheckPW />} />
        <Route path="/ChangePw" element={<ChangePassWord />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/MainPage" element={<MainPage />} />
        <Route path="/DiaryPage" element={<DiaryPage />} />
        <Route path="/MyPage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
