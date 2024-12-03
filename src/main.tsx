import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router";

import App from "./App.tsx";
import PeopleDetailPage from "./pages/people/PeopleDetailPage.tsx";
import PeopleOverviewPage from "./pages/people/OverviewPage.tsx";
import ProfilePage from "./pages/profile/ProfilePage.tsx";
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
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
