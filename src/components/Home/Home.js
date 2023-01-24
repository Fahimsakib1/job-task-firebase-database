import React, { useEffect, useState } from 'react';
import { TbAdjustmentsHorizontal } from 'react-icons/tb';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';



const Home = () => {


    const [firebaseData, setFirebaseData] = useState({});
    useEffect(() => {
        fetch('https://new-database-job-task-default-rtdb.firebaseio.com/1p7SzvQt9sGhLINON2sZ5rec2-I5MSVSXRTL2VkNJ4xM/Sheet1.json')
            .then(res => res.json())
            .then(data => setFirebaseData(data))
    }, [])
    const newArrayDataOfObject = Object.values(firebaseData);


    const [personInfo, setPersonInfo] = useState({})
    const [displayInfo, setDisplayInfo] = useState(false);
    const [toggle, setToggle] = useState(false);
    const [selected, setSelected] = useState(new Date());
    const [initialDisplayData, setInitialDisplayData] = useState(true);

    const showPersonDetails = (person) => {
        console.log("After Click", person);
        setPersonInfo(person);
        setDisplayInfo(true);
        setInitialDisplayData(false);
        window.scrollTo({top: 0, left: 0, behavior:"smooth"}) 
    }

    const HandleToggleIcon = () => {
        setToggle(!toggle);
    }


    return (

        <div className='flex justify-between gap-x-20  px-6 md:px-12 lg:px-12 mt-8 lg:flex-row flex-col mb-12'>

            {
                initialDisplayData &&
                <>
                    {
                        newArrayDataOfObject.slice(0, 1).map((data, index) =>
                            <div key={index} className='lg:w-1/2 w-full md:mb-0 mb-8  flex justify-center md:flex-row flex-col' >
                                <div className='lg:mb-0 mb-8 pr-4 w-3/4'>
                                    <p className='text-justify text-4xl font-bold' >{data.ID}</p>
                                    <p className='text-lg font-semibold mb-4'>Person Detected</p>
                                    <p className='text-xl mb-1'>Name <span className='ml-10'>: {data.Name}</span></p>
                                    <p className='text-xl mb-1'>Location <span className='ml-[18px]'>: {data.Location}</span></p>
                                    <p className='text-xl mb-1'>Date <span className='ml-[51px]'>: {data.Date.split('T')[0].split("-").reverse().join("-").replace("01", "Jan")}</span></p>
                                    <p className='text-xl mb-1'>Time <span className='ml-[51px]'>: {data.Time.split('T')[1].split('.')[0]}</span></p>
                                    <p className='text-xl mt-8'>Description: </p>
                                    <p className='text-xl'>{data.Name} detected at </p>
                                    <p className='text-xl'>{data.Location} on {data.Date.split('T')[0].split("-").reverse().join("-").replace("01", "January")}</p>
                                </div>

                                <div className=''>
                                    <h1 className='text-2xl font-bold mb-2 lg:ml-10 md:ml-2 ml-2'>{data.Gender}</h1>
                                    <img src={data.Image} alt="" className=' rounded-2xl lg:ml-8 ml-0' />
                                </div>
                            </div>
                        )
                    }
                </>
            }


            {
                displayInfo &&

                <div className='lg:w-1/2 w-full md:mb-0 mb-8  flex justify-center md:flex-row flex-col' >
                    <div className='lg:mb-0 mb-8 pr-4 w-3/4'>
                        <p className='text-justify text-4xl font-bold' >{personInfo.ID}</p>
                        <p className='text-lg font-semibold mb-4'>Person Detected</p>
                        <p className='text-xl mb-1'>Name <span className='ml-10'>: {personInfo.Name}</span></p>
                        <p className='text-xl mb-1'>Location <span className='ml-[18px]'>: {personInfo.Location}</span></p>
                        <p className='text-xl mb-1'>Date <span className='ml-[51px]'>: {personInfo.Date.split('T')[0].split("-").reverse().join("-").replace("01", "Jan")}</span></p>
                        <p className='text-xl mb-1'>Time <span className='ml-[51px]'>: {personInfo.Time.split('T')[1].split('.')[0]}</span></p>
                        <p className='text-xl mt-8'>Description: </p>
                        <p className='text-xl'>{personInfo.Name} detected at </p>
                        <p className='text-xl'>{personInfo.Location} on {personInfo.Date.split('T')[0].split("-").reverse().join("-").replace("01", "January")}</p>
                    </div>

                    <div className=''>
                        <h1 className='text-2xl font-bold mb-2 lg:ml-10 md:ml-2 ml-2'>{personInfo.Gender}</h1>
                        <img src={personInfo.Image} alt="" className=' rounded-2xl lg:ml-8 ml-0' />
                    </div>
                </div>
            }



            <div className='lg:w-1/2 bg-gray-300 px-4 rounded-lg lg:mt-0 mt-12'>
                <div className='bg-white p-4 my-4 rounded-md'>
                    <div className='flex items-center mb-3 lg:gap-x-[480px] md:gap-x-[470px] gap-x-36 '>
                        <h1 className='text-[25px] font-bold'>Events</h1>
                        <TbAdjustmentsHorizontal tabIndex={0} className='text-4xl lg:text-5xl font-bold rounded-lg  hover:text-blue-600' title='See More Options' onClick={HandleToggleIcon}></TbAdjustmentsHorizontal>
                    </div>

                    {
                        toggle &&
                        <>
                            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 rounded-box md:w-96 w-80 md:ml-0 -ml-6">

                                <li tabIndex={0} className="text-white rounded-lg  md:px-4 px-0 mt-1 hover:bg-gray-700">
                                    <a className="justify-between text-lg">
                                        Location
                                    </a>
                                    <ul className="p-2">
                                        <li className=''><a className='text-white bg-gray-700 mt-1 font-semibold text-[16px] px-6 ml-2 py-2'>Chennai</a></li>
                                        <li className=''><a className='text-white bg-gray-700 mt-1 font-semibold text-[16px] px-6 ml-2 py-2'>Hyderabad </a></li>
                                        <li className=''><a className='text-white bg-gray-700 mt-1 font-semibold text-[16px] px-6 ml-2 py-2'>Bangalore</a></li>
                                    </ul>
                                </li>

                                <li tabIndex={0} className="text-white rounded-lg  md:px-4 px-0 mt-1 hover:bg-gray-700">
                                    <a className="justify-between text-lg" >
                                        Gender
                                    </a>
                                    <ul className="p-2">
                                        <li className=''><a className='text-white bg-gray-700 mt-1 font-semibold text-[16px] px-6 ml-2 py-2'>Male</a></li>
                                        <li className=''><a className='text-white bg-gray-700 mt-1 font-semibold text-[16px] px-6 ml-2 py-2'>Female</a></li>
                                    </ul>
                                </li>
                                <DayPicker mode="single" selected={selected} onSelect={setSelected} className='text-white bg-gray-700 md:p-4 p-0 text-sm md:text-[16px] rounded-xl w-68' />
                            </ul>
                        </>
                    }

                    {
                        newArrayDataOfObject.map((userData, index) =>
                            <div key={index} className="my-2 bg-gray-300 py-4 rounded-md px-4 hover:bg-gray-600 hover:text-white flex lg:flex-row flex-col gap-x-28 justify-around flex-start cursor-pointer" onClick={() => showPersonDetails(userData)} >
                                <div className=''>
                                    <p className='text-lg font-semibold'>{userData.ID}: {userData.Location}</p>
                                    <p className='text-lg font-semibold mt-2'>Person Detected.</p>
                                </div>
                                <p className='text-md font-semibold'>{userData.Date.split('T')[0].split("-").reverse().join("-")} <span className='ml-2'>{userData.Time.split('T')[1].split('.')[0]}</span></p>
                            </div>)
                    }

                </div>

            </div>

        </div>
    );
};

export default Home;