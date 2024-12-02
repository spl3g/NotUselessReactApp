import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { presetGpnDefault, Theme } from "@consta/uikit/Theme";
import MainPage from "../../pages/main-page/MainPage";
import DefaultLayout from "../../layouts/default/DefaultLayout";
import ServicePage from "../../pages/service-page/ServicePage";
import ServiceDetailPage from "../../pages/service-detail-page/ServiceDetailPage";
import LoginPage from "../../pages/login-page/LoginPage";
import ProfilePage from "../../pages/profile-page/ProfilePage";
import Page404 from "../../pages/404-page/Page404";

function App() {
    return (
        <Theme preset={presetGpnDefault}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<DefaultLayout />}>
                        <Route index element={<MainPage />}></Route>
                        <Route
                            path="services"
                            element={<ServicePage />}
                        ></Route>
                        <Route
                            path="services/:id"
                            element={<ServiceDetailPage />}
                        ></Route>
                        <Route path="login" element={<LoginPage />}></Route>
                        <Route path="user" element={<ProfilePage />}></Route>
                    </Route>
                    <Route path="*" element={<Page404 />}></Route>
                </Routes>
            </BrowserRouter>
        </Theme>
    );
}

export default App;
