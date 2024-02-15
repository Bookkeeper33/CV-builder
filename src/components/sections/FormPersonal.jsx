function FormPersonal({ details, onChangeDetails }) {
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        onChangeDetails({ ...details, [name]: value });
    };

    return (
        <form className="flex flex-col gap-y-4 pb-4 text-gray-900 *:flex *:flex-col *:gap-y-2 ">
            <div>
                <label htmlFor="firstName" className="text-base font-bold ">
                    First Name
                </label>
                <input
                    autoComplete="given-name"
                    type="text"
                    id="firstName"
                    placeholder="First Name"
                    value={details.firstName}
                    onChange={handleInputChange}
                    name="firstName"
                    required
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-500 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="text-base font-bold">
                    Last Name
                </label>
                <input
                    autoComplete="family-name"
                    type="text"
                    id="lastName"
                    value={details.lastName}
                    name="lastName"
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div>
                <label htmlFor="email" className="text-base font-bold">
                    Email
                </label>
                <input
                    autoComplete="email"
                    type="email"
                    id="email"
                    value={details.email}
                    name="email"
                    onChange={handleInputChange}
                    placeholder="your-email@mail.com"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div>
                <label htmlFor="phone" className="text-base font-bold">
                    Phone
                </label>
                <input
                    autoComplete="tel"
                    type="tel"
                    placeholder="Phone number"
                    value={details.phone}
                    name="phone"
                    onChange={handleInputChange}
                    id="phone"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div className="">
                <label htmlFor="address" className="text-base font-bold">
                    Address
                </label>
                <input
                    autoComplete="country-name"
                    placeholder="City, country"
                    value={details.address}
                    name="address"
                    onChange={handleInputChange}
                    type="text"
                    id="address"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
        </form>
    );
}

export default FormPersonal;
