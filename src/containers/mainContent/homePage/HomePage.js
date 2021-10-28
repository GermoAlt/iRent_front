import './homePage.css';
import React from "react";
import ExperiencePanel from "./experiencePanel/ExperiencePanel";
import SearchPanel from "./searchPanel/SearchPanel";

export default function HomePage() {
    return (
        <div className={"home-page"}>
            <SearchPanel/>
            <ExperiencePanel/>
        </div>
    );
}