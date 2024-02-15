import { format } from "date-fns";

function Experience({ experience }) {
    const formattedStart = format(new Date(experience.startDate), "MMM yyyy");
    const formattedEnd = format(new Date(experience.endDate), "MMM yyyy");

    return (
        <div className="mt-5 flex flex-col gap-y-3 sm:flex-row  sm:gap-x-10">
            <div className="basis-4/12">
                <p>
                    {formattedStart} - {formattedEnd}
                </p>
                <p>{experience.location}</p>
            </div>
            <div className="basis-2/3 space-y-1">
                <h3 className="font-semibold">{experience.companyName}</h3>
                <p className="font-semibold">{experience.position}</p>
                <p>{experience.description}</p>
            </div>
        </div>
    );
}

export default Experience;
