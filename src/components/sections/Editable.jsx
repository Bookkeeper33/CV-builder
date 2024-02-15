import FormPersonal from "./FormPersonal";
import Section from "./Section";
import { TrashIcon } from "@heroicons/react/20/solid";

import withFormLogic from "./withFormLogic";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";

const EducationContent = withFormLogic(EducationForm, {
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
});

const ExperienceContent = withFormLogic(ExperienceForm, {
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    responsibilities: "",
});

function Editable({
    details,
    educationList,
    experienceList,
    onEditEducation,
    onEditExperience,
    onDeleteEducation,
    onDeleteExperience,
    onChangeDetails,
    onLoadDefault,
    onClearDefault,
}) {
    return (
        <div className="flex flex-col  gap-y-5 md:w-[450px] md:self-start">
            <div className="sticky top-3 mx-auto  flex w-full max-w-md flex-col gap-y-3 rounded-lg bg-white p-4 shadow-md md:flex-row md:gap-x-3">
                <button
                    className="flex flex-auto items-center justify-center gap-x-3 font-semibold text-red-500
                    duration-300 ease-in-out active:scale-95"
                    onClick={onClearDefault}
                >
                    <TrashIcon className="h-4 w-4" />
                    Clear resume
                </button>
                <button
                    className="flex-auto rounded-md bg-gray-200 py-1 font-semibold duration-300 ease-in-out hover:bg-slate-300 active:scale-95"
                    onClick={onLoadDefault}
                >
                    Load default data
                </button>
            </div>
            <Section title={"Personal detail"}>
                <FormPersonal
                    details={details}
                    onChangeDetails={onChangeDetails}
                />
            </Section>
            <Section title={"Education"}>
                <EducationContent
                    list={educationList}
                    btnTitle={"Education"}
                    propName={"school"}
                    onSubmit={onEditEducation}
                    onDelete={onDeleteEducation}
                />
            </Section>
            <Section title={"Experience"}>
                <ExperienceContent
                    list={experienceList}
                    btnTitle={"Experience"}
                    propName={"companyName"}
                    onSubmit={onEditExperience}
                    onDelete={onDeleteExperience}
                />
            </Section>
        </div>
    );
}

export default Editable;
