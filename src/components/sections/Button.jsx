import { PlusIcon } from "@heroicons/react/20/solid";

function Button({ title, onClick }) {
    return (
        <div className="flex justify-center">
            <button
                className="inline-flex items-center rounded-md border-2 px-3 py-2 shadow-sm transition hover:border-sky-400"
                onClick={onClick}
            >
                {" "}
                <PlusIcon className=" h-4 w-4" />
                {title}
            </button>
        </div>
    );
}

export default Button;
