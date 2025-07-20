import React from 'react';
import Navbar from '../Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Footer/Footer';
import ChatComponent from '../Pages/ChatComponent/ChatComponent';

const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        
            <Footer></Footer>
        </div>
    );
};

export default Root;