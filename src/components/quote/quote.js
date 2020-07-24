import React, {useState, useEffect} from "react"
import styles from "./quote.module.css";



function Quote() {

const [quote, setQuote] = useState({ quotes: "", author:"" });

useEffect(()=>{    fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json();
    }).then(function(data) {
        const randomnumber = Math.floor(Math.random()*1642)
        const textquote=data[randomnumber].text
        const authorquote=data[randomnumber].author;
        setQuote({quotes: textquote, author: authorquote})
    })
    .catch(error => {
        console.log("something bad happened somewhere, rollback!");
    })}, [])

    
    return ( 
        <div className={styles.container}>
            <h4 className={styles.quotestyle}>{quote.quotes}<br/><br/>{quote.author} </h4>
        </div>)
}

export default Quote;