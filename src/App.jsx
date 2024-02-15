import { useState } from "react";
import Preview from "./components/preview/Preview";
import Editable from "./components/sections/Editable";

import { personal, education, experience } from "./components/data/defaultData";

function App() {
    const [educationEntries, setEducationEntries] = useState([]);
    const [experienceEntries, setExperienceEntries] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleEducationEntries = (educationData) => {
        const existingEntry = educationEntries.find(
            (item) => item.id === educationData.id
        );

        if (existingEntry) {
            const updatedEntries = educationEntries.map((item) =>
                item.id === educationData.id
                    ? { ...item, ...educationData }
                    : item
            );
            setEducationEntries(updatedEntries);
        } else {
            setEducationEntries([...educationEntries, educationData]);
        }
    };

    const handleExperienceEntries = (data) => {
        const existingEntry = experienceEntries.find(
            (item) => item.id === data.id
        );

        if (existingEntry) {
            const updatedEntries = experienceEntries.map((item) =>
                item.id === data.id ? { ...item, ...data } : item
            );
            setExperienceEntries(updatedEntries);
        } else {
            setExperienceEntries([...experienceEntries, data]);
        }
    };

    const handleDeleteEducationEntry = (id) => {
        const educationFiltered = educationEntries.filter(
            (item) => item.id !== id
        );
        setEducationEntries(educationFiltered);
    };

    const handleDeleteExperienceEntry = (id) => {
        const experienceFiltered = experienceEntries.filter(
            (item) => item.id !== id
        );
        setExperienceEntries(experienceFiltered);
    };

    const handleDefaultData = () => {
        setPersonalInfo(personal);
        setEducationEntries(education);
        setExperienceEntries(experience);
    };

    const handleClear = () => {
        setPersonalInfo({
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
        });
        setEducationEntries([]);
        setExperienceEntries([]);
    };

    return (
        <>
            <div className="flex min-h-screen flex-col gap-10 p-7 sm:flex-row sm:justify-center ">
                <Editable
                    details={personalInfo}
                    onChangeDetails={setPersonalInfo}
                    educationList={educationEntries}
                    experienceList={experienceEntries}
                    onEditEducation={handleEducationEntries}
                    onDeleteEducation={handleDeleteEducationEntry}
                    onEditExperience={handleExperienceEntries}
                    onDeleteExperience={handleDeleteExperienceEntry}
                    onLoadDefault={handleDefaultData}
                    onClearDefault={handleClear}
                />
                <Preview
                    details={personalInfo}
                    educationList={educationEntries}
                    experienceList={experienceEntries}
                />
            </div>
        </>
    );
}

export default App;
