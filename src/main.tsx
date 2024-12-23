import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import LoginPage from "./pages/login/LoginPage.tsx";
import PeopleCreatePage from "./pages/people/PeopleCreatePage.tsx";
import PeopleDetailPage from "./pages/people/PeopleDetailPage.tsx";
import PeopleOverviewPage from "./pages/people/OverviewPage.tsx";
import PostOverviewPage from "./pages/posts/PostOverviewPage.tsx";
import ProfilePage from "./pages/profile/ProfilePage.tsx";
import RoomDetailPage from "./pages/rooms/RoomDetailPage.tsx";
import RoomOverviewPage from "./pages/rooms/OverviewPage.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/people' element={<PeopleOverviewPage />} />
        <Route path='/people/:peopleId' element={<PeopleDetailPage />} />
        <Route path='/people/create' element={<PeopleCreatePage />} />
        <Route path='/rooms' element={<RoomOverviewPage />} />
        <Route path='/rooms/:roomId' element={<RoomDetailPage />} />

        <Route path='/feed' element={<PostOverviewPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
