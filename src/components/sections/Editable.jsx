import EditPersonal from "./EditPersonal";
import EditEducation from "./EditEducation";
import Section from "./Section";

function Editable() {
    return (
        <div className="flex flex-col gap-y-5 md:w-[450px]">
            <Section title={"Personal detail"}>
                <EditPersonal />
            </Section>
            <Section title={"Education"}>
                <EditEducation />
            </Section>
        </div>
    );
}

export default Editable;
