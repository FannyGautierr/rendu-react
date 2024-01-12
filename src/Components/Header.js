import { IoIosMenu } from "react-icons/io";
import { IoMdSearch } from "react-icons/io";
import { IoBagHandle } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header(){

    return(
        <header className="fixed top-0 z-50 w-full shadow-sm py-2 bg-white">
            <nav className="flex items-center justify-between w-full p-4 bg-white ">
                <div className="flex items-center justify-between w-1/3">
                    <IoIosMenu  className="h-5 w-5"/>
                    <p className="text-sm text-black">New</p>
                    <p className="text-sm text-black">Shop all</p>
                    <p className="text-sm text-black">Collections</p>
                </div>
                <div className="flex items-center justify-between">
                    <h1 className="text-xl font-bold">E-commerce</h1>
                </div>
                <div className="flex items-center justify-end w-1/3 gap-10 ">
                    <div className="flex items-center justify-between gap-2">
                        <IoMdSearch/>
                        <p className="text-sm text-black">Search</p>
                    </div>
                    {/* <div className="flex items-center justify-between gap-2">
                        <FaUser/>
                        <p className="text-sm text-black">Login</p>
                    </div> */}
                    <div className="flex items-center justify-between gap-2">
                        <IoBagHandle/>
                        <Link to={'/mycart'} className="text-sm text-black">Your Bag (0)</Link>
                    </div>
                </div>
            </nav>
        </header>
    )
}