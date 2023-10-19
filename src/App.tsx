import { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";

import "./App.css";

function App() {
    const [items, setItems] = useState([]);
    const [active, setActive] = useState(1);
    const [category, setCategory] = useState("general");

    useEffect(() => {
        fetch(
            `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=de6e0b3410d648d7994a5ba186fc7c02`
        )
            .then((response) => response.json())
            .then((data) => setItems(data.articles));
    }, [category]);

    return (
        <div className="app">
            <h1 className="title">Very Simple News API App</h1>
            <p className="description-website">
                Using Vite + Typescript + Fetch API to fetch the data from{" "}
                <a href="https://newsapi.org/" target="_blank">
                    News API
                </a>
            </p>
            <Menu
                active={active}
                setActive={setActive}
                setCategory={setCategory}
            />
            <NewsGrid items={items} />
        </div>
    );
}

export default App;
