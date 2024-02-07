/* eslint-disable react/prop-types */
function Experience({ experience }) {
    return (
        <div className="mt-5 flex flex-col gap-y-3 sm:flex-row  sm:gap-x-10">
            <div className="basis-1/5 ">
                <p>{experience.period}</p>
                <p>{experience.location}</p>
            </div>
            <div className="basis-2/3 space-y-1">
                <h3 className="font-bold">{experience.company}</h3>
                <p className="font-semibold">{experience.position}</p>
                <ul className="list-disc ">
                    {experience.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Experience;
