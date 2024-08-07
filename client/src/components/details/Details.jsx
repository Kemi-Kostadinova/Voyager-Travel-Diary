import { useContext, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";

import { AuthContext } from "../../contexts/AuthContext";
import { LikesContext } from "../../contexts/LikesContext";
import { useGetOneEntry } from "../../hooks/useTravelEntries";
import { useAddLike, useDeleteLike } from "../../hooks/useLikes";

import CommentSection from "../comment-section/CommentSection";
import DeleteEntry from "../delete-entry/DeleteEntry";

export default function Details() {
    const { travelEntryId } = useParams();
    const travelEntry = useGetOneEntry(travelEntryId);

    const { userId, isAuthenticated } = useContext(AuthContext);
    const { likesState, toggleLike } = useContext(LikesContext);

    const addLike = useAddLike();
    const deleteLike = useDeleteLike();

    const liked = likesState[travelEntryId];

    const likeHnadler = async () => {
        try {
            toggleLike(travelEntryId);

            if (liked) {
                await deleteLike(travelEntryId, userId);
            } else {
                await addLike(travelEntryId);
            }

        } catch (error) {
            console.log(error);
            toast.error(`Error on like: ${err.message}`, {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    const [showDelete, setshowDelete] = useState(false);

    const isOwner = userId === travelEntry._ownerId;

    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-20 relative">
            {showDelete && <DeleteEntry onClose={() => setshowDelete(false)} travelEntryId={travelEntryId} />}
            <div
                className="bg-cover h-64 text-center overflow-hidden"
                style={{
                    height: 450,
                    backgroundImage: `url(${travelEntry.imageUrl})`
                }}
            ></div>
            <div className="max-w-2xl mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="">
                        <div className="flex items-center justify-between gap-6 mb-6">
                            <div className="text">
                                <h1 className="text-gray-900 font-bold text-3xl mb-2">
                                    {travelEntry.title}
                                </h1>

                                <p className="text-gray-700 text-xs mt-2">
                                    Written By:{' '}
                                    <a
                                        href="#"
                                        className="text-[#0CA9E8] font-medium hover:text-[#008bb5] transition duration-200 ease-in-out"
                                    >
                                        {travelEntry.owner && travelEntry.owner.username}
                                    </a>
                                </p>
                            </div>
                            {isAuthenticated && <button onClick={likeHnadler} className="group transition-all duration-500 p-0.5">
                                {/* <svg
                                    width={60}
                                    height={60}
                                    viewBox="0 0 60 60"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        className="fill-[#E4EEF3] transition-all duration-500 group-hover:fill-[#C6E7F4]"
                                        cx={30}
                                        cy={30}
                                        r={30}
                                        fill=""
                                    />
                                    <path
                                        className="stroke-[#0CA9E8] transition-all duration-500 group-hover:stroke-[#008bb5]"
                                        d="M21.4709 31.3196L30.0282 39.7501L38.96 30.9506M30.0035 22.0789C32.4787 19.6404 36.5008 19.6404 38.976 22.0789C41.4512 24.5254 41.4512 28.4799 38.9842 30.9265M29.9956 22.0789C27.5205 19.6404 23.4983 19.6404 21.0231 22.0789C18.548 24.5174 18.548 28.4799 21.0231 30.9184M21.0231 30.9184L21.0441 30.939M21.0231 30.9184L21.4628 31.3115"
                                        stroke=""
                                        strokeWidth="1.6"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg> */}

                                <svg
                                    width={60}
                                    height={60}
                                    viewBox="0 0 60 60"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <circle
                                        className="fill-[#E4EEF3] transition-all duration-500 group-hover:fill-[#C6E7F4]"
                                        cx={30}
                                        cy={30}
                                        r={30}
                                        fill="#E4EEF3"
                                    />
                                    <path
                                        className="stroke-[#0CA9E8] transition-all duration-500 group-hover:stroke-[#008bb5]"
                                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                        fill={liked ? "#0CA9E8" : "none"}
                                        strokeWidth="1.6"
                                        strokeMiterlimit={10}
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        transform="scale(1.2) translate(13, 13)" // Adjust as needed
                                    />
                                </svg>


                            </button>}
                        </div>


                        <p className="text-base leading-8 my-5">
                            {travelEntry.description}
                        </p>
                    </div>
                </div>
                {isOwner && <div className="w-full justify-end items-start gap-6 inline-flex">
                    <button onClick={() => setshowDelete(true)} className="sm:w-fit w-full px-5 py-2.5 rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] hover:bg-gray-200 hover:border-transparent transition-all duration-200 ease-in-out border border-gray-200 justify-center items-center flex">
                        <span className="px-2 text-gray-900 text-base font-semibold leading-relaxed">
                            Delete
                        </span>
                    </button>
                    <Link to={`/edit/${travelEntryId}`} className="sm:w-fit w-full px-5 py-2.5 bg-[#0CA9E8] hover:bg-[#008bb5] transition-all duration-200 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                            Edit
                        </span>
                    </Link>
                </div>}
            </div>
            <CommentSection travelEntryId={travelEntryId} />
        </div>

    )
}