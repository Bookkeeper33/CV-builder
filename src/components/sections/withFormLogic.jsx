import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import Button from "./Button";
import List from "./List";

function withFormLogic(FormComponent, initialValues) {
    return function SectionContent({
        list,
        btnTitle,
        onSubmit,
        onDelete,
        propName,
    }) {
        const [formData, setFormData] = useState(initialValues);
        const [showForm, setShowForm] = useState(false);

        const handleFormSubmit = (e) => {
            e.preventDefault();

            onSubmit({
                ...formData,
                id: formData.id || uuidv4(),
            });
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
            setFormData(initialValues);
        };

        return (
            <>
                {!showForm ? (
                    <div className="flex flex-col gap-y-3">
                        {list.length > 0 && (
                            <List
                                listData={list}
                                onItemClick={handleListItemClick}
                                propName={propName}
                            />
                        )}
                        <Button title={btnTitle} onClick={handleClick} />
                    </div>
                ) : (
                    <FormComponent
                        formData={formData}
                        onChange={handleInputChange}
                        onSubmit={handleFormSubmit}
                        onClick={handleClick}
                        onDelete={handleDeleteItem}
                    />
                )}
            </>
        );
    };
}

export default withFormLogic;
