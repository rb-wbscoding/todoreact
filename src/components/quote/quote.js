import React, {useState, useEffect, useRef} from "react"
import styles from "./quote.module.css";



function Quote() {

const [quote, setQuotes] = useState([]);
const [singlequote, setSinglequote]=useState({quotes: "", authors: ""})

useEffect(()=>{    fetch("https://type.fit/api/quotes")
    .then(function(response) {   
        return response.json();
    }).then(function(data) {
        const randomnumber = Math.floor(Math.random()*1642)
        const textquote=data[randomnumber].text;
        const authorquote=data[randomnumber].author;
        setQuotes(data);
        setSinglequote({quotes: textquote, authors: authorquote});
        //console.log(textquote)
    })
    .catch(error => {
        console.log("something bad happened somewhere, rollback!");
    })}, [])
    
    const countRef=useRef(quote)
    countRef.current=quote;
    //console.log(quote)
useEffect(() =>{
    setInterval(
        function getonequote(){
        const randomnumber = Math.floor(Math.random()*1642);
        const textquote2=countRef.current[randomnumber].text;
        const authorquote2=countRef.current[randomnumber].author;
        setSinglequote({quotes: textquote2, authors: authorquote2});
    }, 10000);
}, [])
    
    return ( 
            <div className={styles.container}>
                <h4 className={styles.quotestyle}>{singlequote.quotes}<br/><br/>{singlequote.authors} </h4>
            </div>)
}



export default Quote;