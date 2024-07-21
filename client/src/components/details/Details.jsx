export default function Details() {
    return (
        <div className="max-w-screen-xl mx-auto p-5 sm:p-8 md:p-20 relative">
            <div
                className="bg-cover h-64 text-center overflow-hidden"
                style={{
                    height: 450,
                    backgroundImage:
                        'url("https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1")'
                }}
            ></div>
            <div className="max-w-2xl mx-auto">
                <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                    <div className="">
                        <div className="flex items-center justify-between gap-6 mb-6">
                            <div className="text">
                                <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">
                                    Revenge of the Never Trumpers
                                </h1>

                                <p className="text-gray-700 text-xs mt-2">
                                    Written By:{' '}
                                    <a
                                        href="#"
                                        className="text-[#0CA9E8] font-medium hover:text-[#008bb5] transition duration-200 ease-in-out"
                                    >
                                        Ahmad Sultani
                                    </a>
                                </p>
                            </div>
                            <button className="group transition-all duration-500 p-0.5">
                                <svg
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
                                </svg>
                            </button>
                        </div>


                        <p className="text-base leading-8 my-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                            since the 1500s, when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has survived not only
                            five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with
                            the release of Letraset sheets containing Lorem Ipsum passages, and
                            more recently with desktop publishing software like Aldus PageMaker
                            including versions of Lorem Ipsum.
                        </p>
                    </div>
                </div>
                <div className="mt-10 flex items-center justify-end gap-x-6">
                        <a
                            href="#"
                            className="rounded-md bg-[#0CA9E8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#008bb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                        >
                            Edit
                        </a>

                        <a
                            href="#"
                            className="rounded-md bg-[#0CA9E8] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#008bb5] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"

                        >
                            Delete
                        </a>

                    </div>
            </div>
        </div>

    )
}