import { Link } from 'react-router-dom'

import { useGetCurrentUser, useGetUserEntries } from '../../hooks/useUser'
import Catalog from '../catalog/Catalog'


export default function Profile() {
    const currentUser = useGetCurrentUser();
    const userEntries = useGetUserEntries(currentUser._id);


    return (
        <section className="relative pt-40 pb-24">
            <img
                src="https://pagedone.io/asset/uploads/1705473908.png"
                alt="cover-image"
                className="w-full absolute top-0 left-0 z-0 h-60"
            />
            <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
                <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                    <img
                        className="w-48 h-48 border-4 border-solid border-white rounded-full object-cover"
                        src={currentUser.profileImage}
                        alt={currentUser.username}
                    />
                </div>
                <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                    <div className="block">
                        <h3 className="font-manrope font-bold text-4xl text-gray-900 mb-1 max-sm:text-center">
                            {currentUser.username}
                        </h3>
                        <p className="font-normal text-base leading-7 text-gray-500  max-sm:text-center">
                            77 Followers | 80 Following
                        </p>
                    </div>
                    {/* <button className="py-3.5 px-5 flex rounded-full bg-[#0CA9E8] items-center shadow-sm shadow-transparent transition-all duration-200 hover:bg-[#008bb5]">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.6"
                            stroke="white"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM3 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 9.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
                            />
                        </svg>

                        <span className="px-2 font-semibold text-base leading-7 text-white">
                            Follow
                        </span>
                    </button> */}
                    <Link to="/create" className="py-3.5 px-5 flex rounded-full bg-[#0CA9E8] items-center shadow-sm shadow-transparent transition-all duration-200 hover:bg-[#008bb5]">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.6"
                            stroke="white"
                            className="size-6"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>


                        <span className="px-2 font-semibold text-base leading-7 text-white">
                            Add new entry
                        </span>
                    </Link>
                </div>
            </div>

            {userEntries?.length > 0
                ? <Catalog travelEntries={userEntries} />
                : <p className="p-40 font-manrope font-bold text-4xl flex items-center justify-center text-gray-900 leading-normal">No travel entries yet</p>
            }
        </section>
    )
}