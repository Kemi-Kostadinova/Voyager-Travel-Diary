import { formatDate } from '../../../utils/dateUtils';

export default function UserComment({
    _id,
    text,
    author,
    _createdOn
}) {

    // console.log(author, "from comment");
    return (
        <div className="w-full lg:p-8 p-5 bg-white rounded-3xl border border-gray-200 flex-col justify-start items-start flex">
            <div className="w-full flex-col justify-start items-start gap-3.5 flex">
                <div className="w-full justify-between items-center inline-flex">
                    <div className="justify-start items-center gap-2.5 flex">
                        <div className="w-10 h-10 bg-stone-300 rounded-full justify-start items-start gap-2.5 flex">
                            <img
                                 className="w-10 h-10 rounded-full object-cover"
                                src={author?.profileImage}
                                alt={author?.username}
                            />
                        </div>
                        <div className="flex-col justify-start items-start gap-1 inline-flex">
                            <h5 className="text-gray-900 text-sm font-semibold leading-snug">
                                {author?.username}
                            </h5>
                            <h6 className="text-gray-500 text-xs font-normal leading-5">
                                {formatDate(_createdOn)}
                            </h6>
                        </div>
                    </div>
                </div>
                <p className="text-gray-800 text-sm font-normal leading-snug">
                    {text}
                </p>
            </div>
        </div>
    )
}