import "./App.css";
import * as ReactBS from "bootstrap";

import Hero from "./components/Hero/Hero";
import More from "./components/More/More";

function App() {
    return (
        <div className="App">
            <div className="paralax">
                <Hero />
                <More />
            </div>
        </div>
    );
}

export default App;
