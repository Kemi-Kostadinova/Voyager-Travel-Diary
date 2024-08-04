import { useNavigate, useParams } from "react-router-dom";

import { useForm } from "../../hooks/useForm"
import { useGetOneEntry } from "../../hooks/useTravelEntries";

const initialValues = { title: "", location: "", imageUrl: "", description: "" };

export default function EditEntry() {
    const { travelEntryId } = useParams();
    const travelEntry = useGetOneEntry(travelEntryId);
    const navigate = useNavigate()


    const editHandler = (values) => {
        console.log(values, 'editHandler');
    }

    const { values, onChange, onSubmit } = useForm(Object.assign(initialValues, travelEntry), editHandler);

    return (
        <section className="py-28 relative">
            <div className="w-full max-w-3xl px-4 md:px-5 lg:px-5 mx-auto">
                <div className="w-full flex-col justify-center items-center gap-4 inline-flex">
                    <h2 className="text-center text-gray-900 text-4xl font-bold font-manrope leading-normal">
                        Edit entry
                    </h2>
                </div>

                <form onSubmit={onSubmit}>
                    <div className="lg:my-14 my-8 grid  grid-cols-1 gap-8">
                        <div className="w-full flex-col justify-center items-center gap-6 inline-flex">

                            <div className="w-full flex-col justify-center items-center gap-8 flex">
                                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label
                                        htmlFor="title"
                                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                                    >
                                        Title
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={7}
                                            height={7}
                                            viewBox="0 0 7 7"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                                fill="#EF4444"
                                            />
                                        </svg>
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        name="title"
                                        value={values.title}
                                        onChange={onChange}
                                        className="w-full focus:outline-none focus:ring-0 focus:border-[#0CA9E8] text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                                        placeholder="Trip to Chefchaouen"
                                    />
                                </div>

                                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label
                                        htmlFor="location"
                                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                                    >
                                        Location
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={7}
                                            height={7}
                                            viewBox="0 0 7 7"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                                fill="#EF4444"
                                            />
                                        </svg>
                                    </label>
                                    <input
                                        type="text"
                                        id="location"
                                        name="location"
                                        value={values.location}
                                        onChange={onChange}
                                        className="w-full focus:outline-none focus:ring-0 focus:border-[#0CA9E8] text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                                        placeholder="Morocco"
                                    />
                                </div>

                                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label
                                        htmlFor="imageUrl"
                                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                                    >
                                        Image URL
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={7}
                                            height={7}
                                            viewBox="0 0 7 7"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                                fill="#EF4444"
                                            />
                                        </svg>
                                    </label>
                                    <input
                                        type="text"
                                        id="imageUrl"
                                        name="imageUrl"
                                        value={values.imageUrl}
                                        onChange={onChange}
                                        className="w-full focus:outline-none focus:ring-0 focus:border-[#0CA9E8] text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                                        placeholder="https://..."
                                    />
                                </div>

                                <div className="w-full flex-col justify-start items-start gap-1.5 flex">
                                    <label
                                        htmlFor="description"
                                        className="flex gap-1 items-center text-gray-600 text-base font-medium leading-relaxed"
                                    >
                                        Description
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={7}
                                            height={7}
                                            viewBox="0 0 7 7"
                                            fill="none"
                                        >
                                            <path
                                                d="M3.11222 6.04545L3.20668 3.94744L1.43679 5.08594L0.894886 4.14134L2.77415 3.18182L0.894886 2.2223L1.43679 1.2777L3.20668 2.41619L3.11222 0.318182H4.19105L4.09659 2.41619L5.86648 1.2777L6.40838 2.2223L4.52912 3.18182L6.40838 4.14134L5.86648 5.08594L4.09659 3.94744L4.19105 6.04545H3.11222Z"
                                                fill="#EF4444"
                                            />
                                        </svg>
                                    </label>

                                    <textarea
                                        type="text"
                                        id="description"
                                        name="description"
                                        value={values.description}
                                        onChange={onChange}
                                        rows="5"
                                        className="w-full focus:outline-none focus:ring-0 focus:border-[#0CA9E8] text-gray-900 placeholder-gray-400 text-lg font-normal leading-relaxed px-5 py-3 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] border border-gray-200 justify-start items-center gap-2 inline-flex"
                                        placeholder="We arrived..."
                                    >
                                    </textarea>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="mx-auto sm:w-fit w-full px-7 py-3 bg-[#0CA9E8] hover:bg-[#008bb5] transition-all duration-300 ease-in-out rounded-xl shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] justify-center items-center flex">
                        <span className="px-2 text-center text-white text-lg font-semibold leading-8">
                            Edit
                        </span>
                    </button>
                </form>
            </div>
        </section>

    )
}