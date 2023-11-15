import { Outlet, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";

const Layout = () => {
    const user = useSelector((state) => state.user)
    const navigate = useNavigate();

    useEffect(() => {
        if(user.currentUserId === -1)
            navigate("/login");

    }, [user])

    return (
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
};

export default Layout;