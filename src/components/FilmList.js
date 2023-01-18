import React from "react";
import Film from "./Film";

const FilmList = ({filmsAsAProp}) => {

    const arrayOfFilmElements = filmsAsAProp.map((film) => {
        return (
            <Film filmNameAsAProp={film.name} filmUrlAsAProp={film.url}/>
        )
    })

    return (
        <div>
        {arrayOfFilmElements}
        </div>
    )
}

export default FilmList