import React from 'react';
import {
    VscFiles,
    VscSearch,
    VscSourceControl,
    VscDebugAlt2,
    VscExtensions,
    VscAccount,
    VscGear,
    VscMail,
} from "react-icons/vsc";
import { FaDatabase } from "react-icons/fa";

function Header() {
    return (
        <>
            <div className="header flex flex-col justify-between items-center w-16 h-screen bg-darkgray">
                <div className="w-11/12 h-4/6 flex flex-col items-center justify-start">
                    <VscFiles className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <VscSearch className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <VscSourceControl className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <VscDebugAlt2 className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <VscExtensions className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <FaDatabase className="w-3/6 h-12 text-gray-400 hover:text-white" />
                </div>
                <div className="w-full h-2/6 flex flex-col items-center justify-end">
                    <VscAccount className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <VscGear className="w-3/6 h-12 text-gray-400 hover:text-white" />
                    <div className="w-full h-12 flex justify-center items-center">
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=minchul.roh.peter@gmail.com" className="w-full">
                            <VscMail className="w-3/6 h-12 m-auto text-gray-400 hover:text-white" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
