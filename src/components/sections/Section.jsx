import { Disclosure, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

function Section({ title, children }) {
    return (
        <div className="mx-auto w-full max-w-md rounded-lg bg-white  shadow-lg">
            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full items-center justify-between rounded-lg  px-4 py-4 text-left text-lg font-bold text-gray-900  duration-300 hover:bg-sky-200 focus:outline-none focus-visible:ring focus-visible:ring-sky-500/75">
                            <h2>{title}</h2>
                            <ChevronDownIcon
                                className={`h-6 w-6 transition ${open ? "rotate-180 transform" : ""}`}
                            />
                        </Disclosure.Button>
                        <Transition
                            enter="transition duration-300 ease-in-out"
                            enterFrom="transform scale-95 opacity-0"
                            enterTo="transform scale-100 opacity-100"
                            leave="transition duration-300 ease-in-out"
                            leaveFrom="transform scale-95 opacity-100"
                            leaveTo="transform scale-100 opacity-0"
                        >
                            <Disclosure.Panel className="p-4 text-sm text-gray-500">
                                {children}
                            </Disclosure.Panel>
                        </Transition>
                    </>
                )}
            </Disclosure>
        </div>
    );
}

export default Section;
