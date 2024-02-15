import { v4 as uuidv4 } from "uuid";

const personal = {
    id: uuidv4(),
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    phone: "444-555-2332",
    address: "London, UK",
};
const education = [
    {
        id: uuidv4(),
        school: "Kyiv State Trade and Economy University",
        degree: "Master's degree in CS",
        startDate: "September 2019",
        endDate: "February 2021",
        location: "Kyiv, Ukraine",
    },
];
const experience = [
    {
        id: uuidv4(),
        companyName: "Microsoft",
        position: "Senior React Developer",
        startDate: "February 2022",
        endDate: "October 2023",
        location: "USA",
        description:
            "Features Development, Code Implementation, Testing, Code Reviews and Collaboration, Communication with costumer",
    },
    {
        id: uuidv4(),
        companyName: "Google",
        position: "Middle React Developer",
        startDate: "November 2021",
        endDate: "February 2022",
        location: "London, UK",
        description:
            "Features Development, Code Implementation, Testing, Code Reviews and Collaboration, Communication with costumer",
    },
    {
        id: uuidv4(),
        companyName: "Silpo",
        position: "Junior React Developer",
        startDate: "September 2020",
        endDate: "November 2021",
        location: "Kyiv, Ukraine",
        description:
            "Bug fixing, Code Implementation, Testing, Code Reviews and Collaboration",
    },
];

export { personal, education, experience };
