// please get React from my installed modules and give me access in this file
// this library knows how to recognize react components
import React from "react";
// reactDoM renders the components to the DOM
import  ReactDOM from "react-dom";

import SearchBar from "./components/search_bar";

const API_KEY = "AIzaSyCkqutUf41s1uWzfv9IsGM72dZh62JV64Y";

const App = () => {
    return (
    <div>
        <SearchBar />
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector(".container"));