import React from 'react'
import { useSelector } from "react-redux";
import { useLocation, Redirect } from "wouter";
import { authSelector } from "store/slices/authSlice";

export const ProtectedRoute = ({ children }) => {
    // eslint-disable-next-line
    const [location] = useLocation();

    const { isAuthenticated } = useSelector(authSelector);

    if (!isAuthenticated) {
        return <Redirect to="/login" state={{ from: location }} replace />
    }

    return children
};
