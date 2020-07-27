import React, {useState, useEffect} from "react"
import styles from "./quote.module.css";



function Quote() {

const [singlequote, setSinglequote]=useState({quotes: "", authors: ""})

useEffect(()=>{    fetch("https://type.fit/api/quotes")
    .then(function(response) {   
        return response.json();
    }).then(function(data) {
        const randomnumber = Math.floor(Math.random()*1642)
        const textquote=data[randomnumber].text;
        const authorquote=data[randomnumber].author;
        setSinglequote({quotes: textquote, authors: authorquote});
        setInterval(
        function getonequote(){
        const randomnumber = Math.floor(Math.random()*1642);
        const textquote2=data[randomnumber].text;
        const authorquote2=data[randomnumber].author;
        setSinglequote({quotes: textquote2, authors: authorquote2});
    }, 10000);
    })
    .catch(error => {
        console.log("something bad happened somewhere, rollback!");
    })}, [])
    
    
    return ( 
            <div className={styles.container}>
                <h4 className={styles.quotestyle}>{singlequote.quotes}<br/><br/>{singlequote.authors} </h4>
            </div>)
}



export default Quote;