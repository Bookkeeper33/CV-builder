import Education from "./Education";
import Experience from "./Experience";
import PersonalInfo from "./PersonalInfo";
import SectionHeader from "./SectionHeader";

function Preview({ details, educationList }) {
    const experience = {
        period: "02/24 - present",
        location: "Kyiv, Ukraine",
        company: "Umbrella Inc.",
        position: "Front-end developer",
        responsibilities: [
            "Designed and prototyped user interface patterns for various clients in various industries",
            "ranging from self-service apps within the telecommunications-sector to mobile games for IOS and Android",
        ],
    };

    return (
        <div className=" space-y-7 rounded-sm bg-white shadow-md sm:max-w-3xl">
            <PersonalInfo details={details} />
            <div className="px-14">
                <SectionHeader title={"Education"} />
                {educationList.length > 0 &&
                    educationList.map((item) => (
                        <Education key={item.id} education={item} />
                    ))}
            </div>
            <div className="px-14 pb-10">
                <SectionHeader title={"Professional Experience"} />
                <Experience experience={experience} />
            </div>
        </div>
    );
}

export default Preview;
