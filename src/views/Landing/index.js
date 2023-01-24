import React from 'react';
import { useLocation, Redirect } from "wouter";
import { Landing } from 'components/Landing';
import { useSelector } from "react-redux";
import { authSelector } from "store/slices/authSlice";

export function LandingView() {

    const [location] = useLocation();
    const { isAuthenticated } = useSelector(authSelector);

    if (isAuthenticated) return <Redirect to="/buscar" state={{ from: location }} replace />

    return <Landing />
}
