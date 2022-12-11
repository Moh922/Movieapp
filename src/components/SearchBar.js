import { useHistory } from "react";

import MoviesForm from "../movies/MoviesForm";

function SearchBarSection() {
    const history = useHistory();
    function addMovieHandleer(movieData) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("Origin", "htttp://localhost:3000");
        fetch(
            '',
          {
            method: 'POST',
            body: JSON.stringify(movieData),
            headers: Headers
          }
        ).then(() => {
            history.replace('')
        })

    };

    return <section>
        <h2>Search</h2>
        <MoviesForm onSearchMovie={addMovieHandleer} />
    </section>;
}

export default SearchBarSection;