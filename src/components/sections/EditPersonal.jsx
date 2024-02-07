function EditPersonal() {
    return (
        <form className="flex flex-col gap-y-4 pb-4 text-gray-900 *:flex *:flex-col *:gap-y-2 ">
            <div>
                <label htmlFor="firstName" className="text-base font-bold ">
                    First Name
                </label>
                <input
                    type="text"
                    id="firstName"
                    placeholder="John"
                    required
                    className="rounded-md border bg-slate-100  p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div>
                <label htmlFor="lastName" className="text-base font-bold">
                    Last Name
                </label>
                <input
                    type="text"
                    id="lastName"
                    placeholder="Doe"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div>
                <label htmlFor="email" className="text-base font-bold">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    placeholder="test@gmail.com"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div>
                <label htmlFor="phone" className="text-base font-bold">
                    Phone
                </label>
                <input
                    type="tel"
                    placeholder="+380667276524"
                    id="phone"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
            <div className="">
                <label htmlFor="address" className="text-base font-bold">
                    Address
                </label>
                <input
                    placeholder="London, UK"
                    type="text"
                    id="address"
                    className="rounded-md border  bg-slate-100 p-2 outline-none placeholder:font-sans placeholder:text-gray-600 focus:ring-2  focus:ring-sky-300"
                />
            </div>
        </form>
    );
}

export default EditPersonal;
