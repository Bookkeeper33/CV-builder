import FormPersonal from "./FormPersonal";
import Section from "./Section";
import SectionContent from "./SectionContent";

function Editable({
    details,
    educationList,
    onEditEducation,
    onChangeDetails,
    onDeleteEducation,
}) {
    return (
        <div className="flex flex-col gap-y-5 md:w-[450px]">
            <Section title={"Personal detail"}>
                <FormPersonal
                    details={details}
                    onChangeDetails={onChangeDetails}
                />
            </Section>
            <Section title={"Education"}>
                <SectionContent
                    list={educationList}
                    btnTitle={"Education"}
                    onSubmit={onEditEducation}
                    onDelete={onDeleteEducation}
                />
            </Section>
        </div>
    );
}

export default Editable;
