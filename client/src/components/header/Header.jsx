import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../../contexts/authContext";

export default function Header() {
    const { isAuthenticated } = useContext(AuthContext)

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };


    return (
        <header className="absolute inset-x-0 top-0 z-50">
            <nav
                className="flex items-center justify-between p-6 lg:px-8"
                aria-label="Global"
            >
                <div className="flex lg:flex-1">
                    <Link to="/" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <img
                            className="h-6 w-auto"
                            src="../public/Logo.svg"
                            alt="Voyager"
                        />
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={toggleMenu}
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                            />
                        </svg>
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    <Link to="/" className="text-sm font-semibold leading-6 text-gray-900">
                        Home
                    </Link>
                    <Link to="/discover" className="text-sm font-semibold leading-6 text-gray-900">
                        Discover
                    </Link>
                    {isAuthenticated &&
                        <>
                            <Link to="/create" className="text-sm font-semibold leading-6 text-gray-900">
                                Add entry
                            </Link>

                            <Link to="/profile" className="text-sm font-semibold leading-6 text-gray-900">
                                Profile
                            </Link>
                        </>
                    }
                    <Link to="/about-us" className="text-sm font-semibold leading-6 text-gray-900">
                        About us
                    </Link>

                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    {!isAuthenticated
                        ? <Link to="/log-in" className="text-sm font-semibold leading-6 text-gray-900" style={{ color: '#0CA9E8' }}>
                            Log in <span aria-hidden="true">→</span>
                        </Link>
                        : <Link to="/log-out" className="text-sm font-semibold leading-6 text-gray-900" style={{ color: '#0CA9E8' }}>
                            Log out <span aria-hidden="true">→</span>
                        </Link>
                    }
                </div>
            </nav>

            {/* Mobile menu, show/hide based on menu open state. */}
            {isMenuOpen && (<div className="lg:hidden" role="dialog" aria-modal="true">
                {/* Background backdrop, show/hide based on slide-over state. */}
                <div className="fixed inset-0 z-50" />
                <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                className="h-6 w-auto"
                                src="../public/Logo.svg"
                                alt="Voyager"
                            />
                        </Link>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={closeMenu}
                        >
                            <span className="sr-only">Close menu</span>
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                <Link
                                    to="/"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={closeMenu}
                                >
                                    Home
                                </Link>
                                <Link
                                    to="/discover"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={closeMenu}
                                >
                                    Discover
                                </Link>
                                {isAuthenticated &&
                                    <>
                                        <Link
                                            to="/create"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={closeMenu}
                                        >
                                            Add entry
                                        </Link>
                                        <Link
                                            to="/profile"
                                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                            onClick={closeMenu}
                                        >
                                            Profile
                                        </Link>
                                    </>
                                }
                                <Link
                                    to="/about-us"
                                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    onClick={closeMenu}
                                >
                                    About us
                                </Link>
                            </div>
                            <div className="py-6">
                                {!isAuthenticated
                                    ? <Link
                                        to="/log-in"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#0CA9E8] hover:bg-gray-50"
                                        onClick={closeMenu}
                                    >
                                        Log in
                                    </Link>
                                    : <Link
                                        to="/log-out"
                                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-[#0CA9E8] hover:bg-gray-50"
                                        onClick={closeMenu}
                                    >
                                        Log out
                                    </Link>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>)}
        </header>
    )
}