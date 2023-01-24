import React, { useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css';





const Header = () => {


    const [firebaseData, setFirebaseData] = useState({});
    useEffect(() => {
        fetch('https://new-database-job-task-default-rtdb.firebaseio.com/1p7SzvQt9sGhLINON2sZ5rec2-I5MSVSXRTL2VkNJ4xM/Sheet1.json')
            .then(res => res.json())
            .then(data => setFirebaseData(data))
    }, [])

    const newArrayDataOfObject = Object.values(firebaseData);

    let countMale = 0;
    let countFemale = 0;
    for (const person of newArrayDataOfObject) {
        if (person.Gender === 'Male') {
            countMale++;
        }
        if (person.Gender === 'Female') {
            countFemale++;
        }
    }
    console.log("Total Male", countMale);
    console.log("Total Female", countFemale);

    useEffect(() => {
        AOS.init({
            duration: 1000
        })
    }, [])


    return (
        <div>
            <div className="navbar   lg:px-16 md:px-4 px-0  bg-gray-800 text-white">

                {/* Small Devices */}
                <div className="navbar-start">
                    <div className="dropdown 0 ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box w-52 px-4">
                            <li className='bg-green-700 rounded-lg text-xl  py-2 my-2 px-4'>{countMale}</li>
                            <li className='bg-orange-500  rounded-lg text-xl py-2 my-2 px-4'>{countFemale}</li>

                            <div className="form-control  lg:hidden ">
                                <input type="text" placeholder="Search" className="input input-bordered input-sm w-full max-w-xs text-black" />
                                <BiSearchAlt2 className='text-2xl text-gray-600 relative -top-7 ml-40'></BiSearchAlt2>
                            </div>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-mono lg:-mt-4 mt-0">SECQUR<span className='text-red-600'>AI</span>SE</a>
                </div>

                <div className="form-control hidden lg:flex">
                    <input type="text" placeholder="Search" className="input input-bordered text-black w-96 mt-3" />
                    <BiSearchAlt2 className='text-3xl text-gray-600 relative -top-10 ml-80'></BiSearchAlt2>
                </div>

                {/* Large Devices */}
                <div className="navbar-end hidden md:flex -mt-4">
                    <ul className="menu menu-horizontal px-1 gap-x-4">
                        <li className='bg-green-700 px-8 rounded-lg text-xl my-auto py-2 animation' data-aos="zoom-in">{countMale}</li>
                        <li className='bg-orange-500 px-8 rounded-lg text-xl my-auto py-2 animation' data-aos="zoom-in">{countFemale}</li>
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;