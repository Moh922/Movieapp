import classes from "./HeroPage.module.css";
import { useRef } from "react";
import { useHistory } from "react-router-dom";


function HeroPageSection(props) {
        const imageInputRef = useRef();
    
        function submitHandler(event) {
            event.preventDefault();
    
            const enteredImage = imageInputRef.current.value;
    
            const movieData = {
                image:enteredImage
            };
    
           props.submitHandler(movieData);
        }

    /*************Adding API********** */
    const history = useHistory();
    function onSearchMovie(movieData) {
        let headers = new Headers();
        headers.append("Content-Type", "application/json");
        headers.append("Accept", "application/json");
        headers.append("Origin", "htttp://localhost:3000");
        fetch(
            'http://img.omdbapi.com/?apikey=[yourkey]&',
          {
            method: 'POST',
            body: JSON.stringify(movieData),
            headers: Headers
          }
        ).then(() => {
            history.replace()
        })

    };

    
    return (
      <section>
        <div className={classes.top}>
            <div className={classes.border}>
            <button className={classes.texts}>MyTestApp</button>
            </div>
        </div>   
        <div className={classes.background}>
            <div className={classes.title}>
             <h1 className={classes.text}>Watch Something Incredible</h1>
            </div>
         </div>
         <div className={classes.form}>
         <form className={classes.form} onSubmit={submitHandler}>
         <h3>Search</h3>
         <input type="text" required id="image" ref={imageInputRef} onClick={onSearchMovie} />
         </form>
         </div>

         <div className={classes.movies}>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
            <card className={classes.cards}>
                <img src={props.imgae} alt={props.title}></img>
            </card>
         </div>


     </section>
    )
    
}

export default HeroPageSection;