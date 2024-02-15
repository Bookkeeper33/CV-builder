import { format } from "date-fns";

function Education({ education }) {
    const formattedStart = format(new Date(education.startDate), "MMM yyyy");
    const formattedEnd = format(new Date(education.endDate), "MMM yyyy");

    return (
        <div className="mt-5 flex flex-col gap-y-2 sm:flex-row sm:gap-x-10">
            <div className="basis-4/12">
                <p>
                    {formattedStart} - {formattedEnd}
                </p>
                <p>{education.location}</p>
            </div>
            <div className="basis-2/3 ">
                <h3 className="font-bold">{education.school}</h3>
                <p>{education.degree}</p>
            </div>
        </div>
    );
}

export default Education;
