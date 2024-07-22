import UserComment from "./user-comment/UserComment";

import { useState } from "react";

export default function CommentSection({ comments }) {
    const [username, setUsername] = useState("");
    const [comment, setComment] = useState("")


    const commentSubmitHandler = (e) => {
        e.preventDefault();
        console.log(username);
        console.log(comment);
        console.log("Submitted");
    }

    return (
        <section className="py-24 relative">
            <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-start items-start lg:gap-14 gap-7 inline-flex">
                    <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        Comments
                    </h2>

                    <form className="w-full flex-col justify-start items-start gap-5 flex" onSubmit={commentSubmitHandler}>
                        <div className="w-full rounded-3xl justify-start items-start gap-3.5 inline-flex">
                            <img
                                className="w-10 h-10"
                                src="https://pagedone.io/asset/uploads/1710225753.png"
                                alt="John smith image"
                            />

                            <textarea
                                name=""
                                rows={5}
                                className="w-full px-5 py-3 rounded-2xl border border-gray-300 shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] resize-none focus:outline-none focus:ring-0 focus:border-[#0CA9E8] placeholder-gray-400 text-gray-900 text-lg font-normal leading-7"
                                placeholder="Write a your thoughts here...."
                                onChange={(e) => setComment(e.target.value)}
                                value={comment || ""}
                            />
                        </div>
                        <button className="px-5 py-2.5 bg-[#0CA9E8] hover:bg-[#008bb5] transition-all duration-200 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                            <span className="px-2 py-px text-white text-base font-semibold leading-relaxed">
                                Post your comment
                            </span>
                        </button>
                    </form>

                    <div className="w-full flex-col justify-start items-start gap-8 flex">
                        {comments?.length > 0
                            ? comments.map(comment => <UserComment key={comment._id} {...comment} />)
                            : <p className="text-gray-900 text-2xl font-semibold font-manrope leading-normal">No comments yet</p>
                        }
                    </div>
                </div>
            </div>
        </section>

    )
}