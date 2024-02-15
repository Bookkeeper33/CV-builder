import {
    EnvelopeIcon,
    DevicePhoneMobileIcon,
    MapPinIcon,
} from "@heroicons/react/20/solid";

function PersonalInfo({ details }) {
    return (
        <div className="space-y-5  bg-sky-900 p-5 text-white">
            <h1 className="text-center text-4xl font-bold">
                {details.firstName} {details.lastName}
            </h1>
            <ul className="flex flex-col  items-center gap-y-2 *:flex *:items-center *:gap-x-1 sm:justify-center sm:gap-x-10 md:flex-row">
                {details.email && (
                    <li>
                        <EnvelopeIcon className="h-5 w-5" />
                        <span className="text-base font-semibold">
                            {details.email}
                        </span>
                    </li>
                )}
                {details.phone && (
                    <li>
                        <DevicePhoneMobileIcon className="h-5 w-5" />
                        <span className="text-base font-semibold">
                            {details.phone}
                        </span>
                    </li>
                )}
                {details.address && (
                    <li>
                        <MapPinIcon className="h-5 w-5" />
                        <span className="text-base font-semibold">
                            {details.address}
                        </span>
                    </li>
                )}
            </ul>
        </div>
    );
}

export default PersonalInfo;
