import { TrashIcon } from "@heroicons/react/20/solid";

function ExperienceForm({ formData, onSubmit, onChange, onClick, onDelete }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        onChange(name, value);
    };

    return (
        <form
            className="flex flex-col gap-y-4 text-gray-900 *:flex *:gap-y-2"
            onSubmit={onSubmit}
        >
            <div className="flex-col">
                <label htmlFor="company" className="text-base font-bold">
                    Company Name
                </label>
                <input
                    type="text"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Enter Company Name"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    id="company"
                    required
                    autoComplete="organization"
                />
            </div>
            <div className="flex-col">
                <label htmlFor="position" className="text-base font-bold">
                    Position Title
                </label>
                <input
                    id="position"
                    type="text"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Enter Position title"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    autoComplete="organization-title"
                />
            </div>
            <div className="flex-col">
                <label htmlFor="startDate" className="text-base font-bold">
                    Start Date
                </label>
                <input
                    type="month"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleInputChange}
                    id="startDate"
                    required
                />
            </div>
            <div className="flex-col">
                <label htmlFor="endDate" className="text-base font-bold">
                    End Date
                </label>
                <input
                    type="month"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    name="endDate"
                    value={formData.endDate}
                    onChange={handleInputChange}
                    id="endDate"
                    required
                />
            </div>
            <div className="flex-col">
                <label htmlFor="location" className="text-base font-bold">
                    Location
                    <span className="text-xs font-semibold text-gray-500">
                        (optional)
                    </span>
                </label>
                <input
                    type="text"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="City, country"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                    id="location"
                />
            </div>
            <div className="flex-col">
                <label
                    htmlFor="responsibilities"
                    className="text-base font-bold"
                >
                    Responsibilities
                    <span className="text-xs font-semibold text-gray-500">
                        (optional)
                    </span>
                </label>
                <textarea
                    name="responsibilities"
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                    placeholder="Enter the responsibilities"
                    value={formData.responsibilities}
                    onChange={handleInputChange}
                    id="responsibilities"
                    rows="5"
                ></textarea>
            </div>
            <div className="flex-row justify-between">
                {formData.id && (
                    <button
                        type="button"
                        onClick={() => onDelete(formData.id)}
                        className="flex items-center gap-x-1 rounded-md border px-3 py-2 font-semibold duration-200 ease-in-out hover:border-red-400 hover:bg-red-400 active:scale-95"
                    >
                        <TrashIcon className="h-4 w-4" />
                        <span className="text-base">Delete</span>
                    </button>
                )}
                <div className="flex gap-x-5 *:rounded-md *:px-3 *:py-2 *:text-base *:font-semibold *:duration-200 *:ease-in-out">
                    <button
                        onClick={onClick}
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

export default ExperienceForm;
