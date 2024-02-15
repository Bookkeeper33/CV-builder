import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";

function Preview({ details, educationList, experienceList }) {
    return (
        <div className="space-y-7 self-start rounded-sm bg-white shadow-md sm:w-[700px] md:max-w-[700px]">
            <PersonalInfo details={details} />
            <div className="px-14">
                <h2 className="bg-gray-200 px-2 py-1 text-center text-lg font-bold">
                    Education
                </h2>
                {educationList.length > 0 &&
                    educationList.map((item) => (
                        <Education key={item.id} education={item} />
                    ))}
            </div>
            <div className="px-14 pb-10">
                <h2 className="bg-gray-200 px-2 py-1 text-center text-lg font-bold">
                    Experience
                </h2>
                {experienceList.length > 0 &&
                    experienceList.map((item) => (
                        <Experience key={item.id} experience={item} />
                    ))}
            </div>
        </div>
    );
}

export default Preview;
