import { TrashIcon } from "@heroicons/react/20/solid";

function EditEducation() {
    return (
        <form className="flex flex-col gap-y-4 pb-4 text-gray-900 *:flex *:gap-y-2">
            <div className="flex-col">
                <label htmlFor="school" className="text-base font-bold">
                    School/University
                </label>
                <input
                    type="text"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="University of Cambridge"
                />
            </div>
            <div className="flex-col">
                <label htmlFor="degree" className="text-base font-bold">
                    Degree
                </label>
                <input
                    type="text"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Bachelor's degree in CS"
                />
            </div>

            <div className="flex-col">
                <label htmlFor="startDate" className="text-base font-bold">
                    Start Date
                </label>
                <input
                    type="date"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Enter start date"
                />
            </div>
            <div className="flex-col">
                <label htmlFor="endDate" className="text-base font-bold">
                    End Date
                </label>
                <input
                    type="date"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Enter end date"
                />
            </div>

            <div className="flex-col">
                <label htmlFor="location" className="text-base font-bold">
                    Location
                </label>
                <input
                    type="text"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Cambridge, England"
                />
            </div>
            <div className="flex-row justify-between">
                <button
                    type="button"
                    className="flex items-center gap-x-1 rounded-md border px-3 py-2 font-semibold duration-200 ease-in-out hover:border-red-400 hover:bg-red-400 active:scale-95"
                >
                    <TrashIcon className="h-4 w-4" />
                    <span className="text-base">Delete</span>
                </button>
                <div className="flex gap-x-5 *:rounded-md *:px-3 *:py-2 *:text-base *:font-semibold *:duration-200 *:ease-in-out">
                    <button
                        type="button"
                        className="border hover:border-amber-400 hover:bg-amber-400 active:scale-95"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="bg-sky-500 text-zinc-50 hover:bg-sky-700 active:scale-95"
                    >
                        Save
                    </button>
                </div>
            </div>
        </form>
    );
}

export default EditEducation;
