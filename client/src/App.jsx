import { useEffect } from 'react';
import React from "react";
import { Routes, Route, Navigate } from 'react-router-dom';
import { Slide, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './components/ui/Layout';
import IndexPage from './pages/IndexPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import PlacesPage from './pages/PlacesPage';
import BookingsPage from './pages/BookingsPage';
import PlacesFormPage from './pages/PlacesFormPage';
import PlacePage from './pages/PlacePage';
import ReportPage from './pages/ReportPage';
import SingleBookedPlace from './pages/SingleBookedPlace';
import axiosInstance from './utils/axios';
import { UserProvider } from './providers/UserProvider';
import { PlaceProvider } from './providers/PlaceProvider';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getItemFromLocalStorage } from './utils';
import NotFoundPage from './pages/NotFoundPage';
// import RtlLayout from "layouts/rtl";
import AdminLayout from "./layouts/admin";
// import AuthLayout from "layouts/auth";

function App() {
  useEffect(() => {
    // set the token on refreshing the website
    axiosInstance.defaults.headers.common[
      'Authorization'
    ] = `Bearer ${getItemFromLocalStorage('token')}`;
  }, []);

  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <UserProvider>
        <PlaceProvider>
          <Routes>
          <Route path="admin/*" element={<AdminLayout />} />
      {/* <Route path="rtl/*" element={<RtlLayout />} /> */}
      {/* <Route path="/" element={<Navigate to="/admin" replace />} /> */}
            <Route path="/" element={<Layout />}>
              <Route index element={<IndexPage />} />
              <Route path="/login" element={<LoginPage />} />
              {/* <Route path="admin/*" element={<AdminLayout />} /> */}
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/account" element={<ProfilePage />} />
              <Route path="/account/places" element={<PlacesPage />} />
              <Route path="/account/places/new" element={<PlacesFormPage />} />
              <Route path="/account/places/:id" element={<PlacesFormPage />} />
              <Route path="/place/:id" element={<PlacePage />} />
              <Route path="/account/bookings" element={<BookingsPage />} />
              <Route path="/report" element={<ReportPage />} />
              <Route
                path="/account/bookings/:id"
                element={<SingleBookedPlace />}
              />
              
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <ToastContainer autoClose={2000} transition={Slide} />
        </PlaceProvider>
      </UserProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
