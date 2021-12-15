import React from 'react';
import User01 from '../../images/user-36-01.jpg';
import User02 from '../../images/user-36-02.jpg';
import User03 from '../../images/user-36-03.jpg';
import User04 from '../../images/user-36-04.jpg';
import Link from "next/link";
import {USERS} from "../../../../data/TwitterCards/people";

function DashboardAvatars() {

    return (
        <ul className="flex flex-wrap justify-center sm:justify-start mb-8 sm:mb-0 -space-x-3 -ml-px">
            {USERS.map((user, index) => (
                <li key={index}>
                    <div className="block">
                        <img className="w-9 h-9 rounded-full object-cover" src={user.image} width="36" height="36" alt="User 02" />
                    </div>
                </li>
            ))}
            <li>
                <button className="flex justify-center items-center w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-gray-300 text-indigo-500 shadow-sm transition duration-150 ml-2">
                    <span className="sr-only">Add new user</span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 16 16">
                        <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                </button>
            </li>
        </ul>
    );
}

export default DashboardAvatars;
