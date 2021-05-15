import React from 'react';
import { AiOutlineRight } from 'react-icons/ai';
import { FaMarkdown } from 'react-icons/fa';

function Explorer() {
    return (
        <>
            <div className="w-80 bg-darkblue kanit">
                <div className="text-gray-400 pl-6 my-2 text-xs py-2">EXPLORER</div>
                <div className="flex flex-col cursor-pointer font-extrabold border-gray-900 border-b py-1">
                    <div className="flex items-center">
                        <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                        <div className="text-gray-400 text-base pl-2 flex items-center">ABOUT ME</div>
                    </div>
                    <div className="flex items-center ml-6 text-sm text-white bree font-thin">
                        {/* slide down */}
                        <div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col cursor-pointer font-extrabold border-gray-900 border-b py-1">
                    <div className="flex items-center">
                        <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                        <div className="text-gray-400 text-base pl-2 flex items-center">PROJECTS</div>
                    </div>
                    <div className="flex items-center ml-6 text-sm text-white bree font-thin">
                        <div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col cursor-pointer font-extrabold border-gray-900 border-b py-1">
                    <div className="flex items-center">
                        <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                        <div className="text-gray-400 text-base pl-2 flex items-center">TECH SKILLS</div>
                    </div>
                    <div className="flex items-center ml-6 text-sm text-white bree font-thin">
                        <div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col cursor-pointer font-extrabold border-gray-900 border-b py-1">
                    <div className="flex items-center">
                        <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                        <div className="text-gray-400 text-base pl-2 flex items-center">EXPERIENCE</div>
                    </div>
                    <div className="flex items-center ml-6 text-sm text-white bree font-thin">
                        <div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col cursor-pointer font-extrabold border-gray-900 border-b py-1">
                    <div className="flex items-center">
                        <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                        <div className="text-gray-400 text-base pl-2 flex items-center">EDUCATION</div>
                    </div>
                    <div className="flex items-center ml-6 text-sm text-white bree font-thin">
                        <div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col cursor-pointer font-extrabold border-gray-900 border-b py-1">
                    <div className="flex items-center">
                        <AiOutlineRight className="text-xl pl-2 text-gray-400" />
                        <div className="text-gray-400 text-base pl-2 flex items-center">LANGUAGE PROFICIENCY</div>
                    </div>
                    <div className="flex items-center ml-6 text-sm text-white bree font-thin">
                        <div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                            <div className="flex flex-row justify-center items-center mt-2">
                                <FaMarkdown />
                                <span className="ml-2">README.md</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Explorer;
