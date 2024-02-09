import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "../Button";
import SectionList from "./SectionList";
import EducationForm from "./EducationForm";

function SectionContent({ list, btnTitle, onSubmit, onDelete }) {
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        school: "",
        degree: "",
        startDate: "",
        endDate: "",
        location: "",
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();

        if (!Object.prototype.hasOwnProperty.call(formData, "id")) {
            onSubmit({ ...formData, id: uuidv4() });
        } else {
            onSubmit(formData);
        }

        formReset();
        handleClick();
    };

    const handleClick = () => {
        setShowForm(!showForm);
        formReset();
    };

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
    };

    const handleListItemClick = (item) => {
        setFormData(item);
        setShowForm(true);
    };

    const handleDeleteItem = (id) => {
        onDelete(id);
        formReset();
        setShowForm(false);
    };

    const formReset = () => {
        setFormData({
            school: "",
            degree: "",
            startDate: "",
            endDate: "",
            location: "",
        });
    };

    return (
        <>
            {!showForm ? (
                <div className="flex flex-col gap-y-3">
                    {list.length > 0 && (
                        <SectionList
                            listData={list}
                            onItemClick={handleListItemClick}
                        />
                    )}
                    <Button title={btnTitle} onClick={handleClick} />
                </div>
            ) : (
                <EducationForm
                    formData={formData}
                    onChange={handleInputChange}
                    onSubmit={handleFormSubmit}
                    onClick={handleClick}
                    onDelete={handleDeleteItem}
                />
            )}
        </>
    );
}

export default SectionContent;
