/* eslint-disable react/prop-types */
function PersonalInfo({ info }) {
    return (
        <div className="space-y-5  bg-sky-900 p-5 text-white">
            <h1 className="text-center text-4xl font-bold">{info.fullName}</h1>
            <ul className="flex flex-col items-center gap-y-2 *:flex *:items-center *:gap-x-1 sm:flex-row sm:justify-center sm:gap-x-10">
                <li>
                    <i className="fa-regular fa-envelope text-lg"></i>
                    <span className="text-base font-semibold">
                        {info.email}
                    </span>
                </li>
                <li>
                    <i className="fa-solid fa-phone text-lg"></i>
                    <span className="text-base font-semibold">
                        {info.phone}
                    </span>
                </li>
                <li>
                    <i className="fa-solid fa-location-dot text-lg"></i>
                    <span className="text-base font-semibold">
                        {info.location}
                    </span>
                </li>
            </ul>
        </div>
    );
}

export default PersonalInfo;
