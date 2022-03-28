import React from "react";
import {
    BrowserRouter,
    Route,
    Routes
} from "react-router-dom";
import Home from "./pages/home";
import News from "./pages/news";

export default function MyRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/news" element={<News />} exact />
            </Routes>
        </BrowserRouter>
    )
}