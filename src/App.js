import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate, useLocation, NavLink, useNavigate } from "react-router-dom";


import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import { NoticeSnackbar } from "./components/NoticeSnackbar";
import EditPage from "./pages/EditPage";


function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <NavLink to="/main" className="font-bold select-none self-stretch flex items-center mr-auto">ordinary days</NavLink>

            {location.pathname == "/main" &&
            <NavLink to="/write"  className="slect-none self-stretch flex items-center">할 일 추가</NavLink>}
            {location.pathname != "/main" &&
            <span to="/main" className="slect-none cursor-pointer self-stretch flex items-center" onClick={(() => navigate(-1))}>리스트
            </span>}
          
        </Toolbar>
      </AppBar>
      <NoticeSnackbar/>
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit/:id" element={<EditPage/>} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;