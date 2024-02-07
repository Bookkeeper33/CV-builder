import Preview from "./components/preview/Preview";
import Editable from "./components/sections/Editable";

function App() {
    return (
        <div className="flex min-h-screen flex-col gap-10 p-7 sm:flex-row sm:justify-center ">
            <Editable />
            <Preview />
        </div>
    );
}

export default App;
