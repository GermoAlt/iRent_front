import {useParams} from "react-router";
import ItemPanel from "./ItemPanel";
import React from "react";

const SearchResultsPanel = () => {
    const searchTerms =  useParams().category;
    return (
        <ItemPanel products={art} title={"Resultados"}/>
    )
}

export default SearchResultsPanel;