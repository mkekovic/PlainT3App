import Link from 'next/link';
import { useIsAuthenticated } from "@azure/msal-react";
import { SignInButton } from './SignInButton'
import { SignOutButton } from './SignOutButton';
// import { useSession } from "next-auth/react";


const NavBar = () => {
    const isAuthenticated: any = useIsAuthenticated();
    // const { data: sessionData } = useSession(); // For auth with NextAuth
  
    return (
        <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900">
            <div className="container flex flex-wrap items-center justify-between mx-auto">
                <a href="https://www.oaktreecapital.com/" className="flex items-center">
                    <img src="https://th.bing.com/th/id/OIP.IloWI1ovx6pt52KE9wzRcwHaEX?pid=ImgDet&rs=1" className="h-6 mr-3 sm:h-20" alt="Flowbite Logo" />
                </a>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                    <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <Link as="/" href="/" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white ">Home</Link>
                        </li>

                        <li>
                            <Link as="/about/table" href="/about/table" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white ">About</Link>
                        </li>

                        <li>
                            <Link as="/examples/csr" href="/examples/csr" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white ">CSR</Link>
                        </li>

                        <li>
                            <Link as="/examples/ssr" href="/examples/ssr" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white ">SSR</Link>
                        </li>

                        <li>
                            <Link as="/examples/ssg" href="/examples/ssg" className="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100  md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white ">SSG</Link>
                        </li>

                        <li>
                            {isAuthenticated ? SignOutButton() : SignInButton()}
                            {/* {sessionData ? SignOutButton() : SignInButton()} // For auth with NextAuth*/}
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;
