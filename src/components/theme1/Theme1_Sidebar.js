import { FaHome, FaCalendarAlt, FaRegLightbulb, FaChartLine, FaUser, FaInbox, FaPaintBrush, FaCog } from 'react-icons/fa';
import Link from 'next/link';

export default function Theme1_Sidebar() {
  return (
    <div className="w-1/8 p-2 hidden md:block h-full">
      <div className="text-lg text-center font-normal mt-2 mb-6">Logo Here</div>
      <nav className="space-y-4">
        <span className="text-sm text-gray-400">Menu</span>
        <a href="#" className=" p-1 hover:bg-gray-300 hover:rounded cursor-not-allowed opacity-50 flex items-center">
          <FaHome className="mr-2" />
          Home
        </a>
        <a href="#" className=" p-1 hover:bg-gray-300 hover:rounded cursor-not-allowed opacity-50 flex items-center">
          <FaCalendarAlt className="mr-2" />
          Schedule
        </a>
        <a href="#" className=" p-1 hover:bg-gray-300 hover:rounded cursor-not-allowed opacity-50 flex items-center">
          <FaRegLightbulb className="mr-2" />
          Recommendation
        </a>
        <Link href="/theme3" className=" p-1 hover:bg-gray-300 hover:rounded flex items-center">
          <FaChartLine className="mr-2" />
          Analytics
        </Link>
        <Link href="/theme2" className=" p-1 hover:bg-gray-300 hover:rounded  flex items-center">
          <FaUser className="mr-2" />
          Profile
        </Link>
        <a href="#" className=" p-1 hover:bg-gray-300 hover:rounded cursor-not-allowed opacity-50 flex items-center">
          <FaInbox className="mr-2" />
          Inbox
          <span className="ml-16 bg-blue-500 text-white text-sm rounded-full px-2">
            8
          </span>
        </a>
        <Link href="/theme1" className=" p-1 hover:bg-gray-300 hover:rounded flex items-center">
          <FaPaintBrush className="mr-2" />
          Themes
        </Link>
        <hr className="border-gray-400 my-4" />
        <span className="text-sm text-gray-400">Account</span>
        <a href="#" className="hover:rounded cursor-not-allowed opacity-50 p-1 hover:bg-gray-300 flex items-center">
          <FaCog className="mr-2" />
          Settings
        </a>
      </nav>
    </div>
  );
}
