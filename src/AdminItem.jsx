import 'flowbite';
import './App.css'
import { Link } from 'react-router-dom';
import { CiBoxList } from "react-icons/ci";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa";
import { FaShopify } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import { MdRestaurantMenu } from "react-icons/md";
import { HiOutlineInformationCircle } from "react-icons/hi2"
import { IoSettingsOutline } from "react-icons/io5";


const AdminItem = () => {
    return (
        <div className='bg-white text-black pt-5 '>
            <ul className='space-y-2  text-[18px] mr-5'>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white gap-3'>
                    <BiCategory className='text-3xl' />
                    <Link className='font-semibold'>Dashboard</Link>
                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3'>
                    <CiBoxList className='text-3xl' />
                    <Link to={'/categories'} className='font-semibold'>Categories</Link>
                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3 '>
                    <MdRestaurantMenu className='text-3xl' />
                    {/* <Link>Menus</Link> */}

                    <button id="dropdownDividerButton" data-dropdown-toggle="dropdownDivider" className=" hover:text-white    text-center inline-flex items-center " type="button">Menus <svg className="w-2.5 h-2.5 ms-36 flex justify-between" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor"  d="m1 1 4 4 4-4" />
                    </svg>
                    </button>

                    
                    <div id="dropdownDivider" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDividerButton">
                            <li>
                                <Link to={'/menu1'} className="block px-4 py-2 hover:bg-[#3B82F6] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">Menu-1</Link>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-[#3B82F6] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">Menu-2</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-[#3B82F6] hover:text-white dark:hover:bg-gray-600 dark:hover:text-white">Menu-3</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Separated link</a>
                        </div>
                    </div>

                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3'>
                    <FaShopify className='text-3xl' />
                    <Link to={'/orders'} className='font-semibold'>Orders</Link>
                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3 '>
                    <GiStarsStack className='text-3xl' />
                    <Link to={'/review'} className='font-semibold'>Review</Link>
                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3 '>
                    <FaUsers className='text-3xl' />
                    <Link to={'/users'} className='font-semibold'>Users</Link>
                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3'>
                    <HiOutlineInformationCircle className='text-3xl' />
                    <Link to={'/about'} className='font-semibold'>About Us</Link>
                </li>
                <li className='flex items-center px-5 py-3 hover:bg-[#3B82F6] hover:text-white  gap-3'>
                    <IoSettingsOutline  className='text-3xl' />
                    <Link to={'/settings'} className='font-semibold'>Settings</Link>
                </li>
            </ul>
        </div>
    );
};

export default AdminItem;