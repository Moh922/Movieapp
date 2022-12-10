import { useRef } from 'react';

import Card from "../ui/Card";
import classes from "./MoviesForm.module.css";

function MoviesFormSection(props) {
    const imageInputRef = useRef();

    function submitHandler(event) {
        event.preventDefault();

        const enteredImage = imageInputRef.current.value;

        const movieData = {
            image:enteredImage
        };

       props.onSearchMovie(movieData);
    }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <input type="text" required id="image" ref={imageInputRef} />
        </div>
      </form>
    </Card>
  );
}

export default MoviesFormSection;
