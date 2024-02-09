import { useState } from "react";
import Preview from "./components/preview/Preview";
import Editable from "./components/sections/Editable";

function App() {
    const [educationEntries, setEducationEntries] = useState([]);
    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleEducationEntries = (educationData) => {
        setEducationEntries([...educationEntries, educationData]);
    };

    const handleDeleteEducationEntry = (id) => {
        const educationFiltered = educationEntries.filter(
            (item) => item.id !== id
        );
        setEducationEntries(educationFiltered);
    };

    return (
        <div className="flex min-h-screen flex-col gap-10 p-7 sm:flex-row sm:justify-center ">
            <Editable
                details={personalInfo}
                onChangeDetails={setPersonalInfo}
                educationList={educationEntries}
                onEditEducation={handleEducationEntries}
                onDeleteEducation={handleDeleteEducationEntry}
            />
            <Preview details={personalInfo} educationList={educationEntries} />
        </div>
    );
}

export default App;
