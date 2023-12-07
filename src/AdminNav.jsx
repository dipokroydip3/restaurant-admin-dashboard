import 'flowbite';
import { TbBrandWebflow } from "react-icons/tb";
import { Link } from 'react-router-dom';

const AdminNav = () => {
    return (
        <div className='flex border-b shadow-md  items-center justify-between py-4 pr-10'>
            <img className='w-36 ml-5' src="https://i.ibb.co/MkZfjXK/resturent-logo-1.png" alt="" />
            <nav className='flex gap-10 items-center'>
                <div className='bg-blue-200 p-2 rounded-full cursor-pointer'>
                    <Link target='blank' to={'https://restaurant-x1.netlify.app/'}>
                        <TbBrandWebflow className='text-3xl'/>
                    </Link>
                </div>
                <div>

                    <button id="dropdownAvatarNameButton" data-dropdown-toggle="dropdownAvatarName" className="flex items-center text-sm pe-1 font-medium text-black border rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:me-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white" type="button">
                        <span className="sr-only">Open user menu</span>
                        <img className="w-8 h-8 me-2 rounded-full" src="https://i.ibb.co/xGLLjM0/Unicoder.webp" alt="user photo" />
                        Bonnie Green
                        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            {/* <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" /> */}
                        </svg>
                    </button>

                    <div id="dropdownAvatarName" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                            <div className="font-medium ">Pro User</div>
                            <div className="truncate">name@flowbite.com</div>
                        </div>
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                            </li>
                            <li>
                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                            </li>
                        </ul>
                        <div className="py-2">
                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                        </div>
                    </div>

                </div>



            </nav>
        </div>
    );
};

export default AdminNav;