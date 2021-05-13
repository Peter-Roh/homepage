import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';

function Explorer() {
    return (
        <>
            <div className="w-80 bg-darkblue kanit">
                <div className="text-gray-400 pl-6 my-2 text-xs">EXPLORER</div>
                <div className="flex items-center cursor-pointer font-extrabold">
                    <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                    <div className="text-gray-400 text-lg pl-2 flex items-center">ABOUT ME</div>
                </div>
                <div className="flex items-center cursor-pointer font-extrabold">
                    <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                    <div className="text-gray-400 text-lg pl-2 flex items-center">PROJECTS</div>
                </div>
                <div className="flex items-center cursor-pointer font-extrabold">
                    <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                    <div className="text-gray-400 text-lg pl-2 flex items-center">TECH SKILLS</div>
                </div>
                <div className="flex items-center cursor-pointer font-extrabold">
                    <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                    <div className="text-gray-400 text-lg pl-2 flex items-center">EXPERIENCE</div>
                </div>
                <div className="flex items-center cursor-pointer font-extrabold">
                    <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                    <div className="text-gray-400 text-lg pl-2 flex items-center">EDUCATION</div>
                </div>
                <div className="flex items-center cursor-pointer font-extrabold">
                    <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                    <div className="text-gray-400 text-lg pl-2 flex items-center">LANGUAGE PROFICIENCY</div>
                </div>
            </div>
        </>
    );
}

export default Explorer;
