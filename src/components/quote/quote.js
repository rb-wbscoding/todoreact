import React, { useState, useEffect, useRef } from 'react';
import styles from './Quote.module.css';

function Quote() {
  const [quotes, setQuotes] = useState([]);
  const [singleQuote, setSingleQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setQuotes(data);
        const randomNumber = Math.floor(Math.random() * data.length);
        const textQuote = data[randomNumber].text;
        const authorQuote = data[randomNumber].author;
        setSingleQuote({ quote: textQuote, author: authorQuote });
      })
      .catch((error) => {
        console.log('Error while fetching quote: ', error);
        setSingleQuote({ quote: "Couldn't load quotes", author: 'Error' });
      });
  }, []);

  const countRef = useRef(quotes);
  countRef.current = quotes;

  useEffect(() => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * countRef.current.length);
      const textQuote2 = countRef.current[randomNumber].text;
      const authorQuote2 = countRef.current[randomNumber].author;
      setSingleQuote({ quote: textQuote2, author: authorQuote2 });
    }, 10000);
  }, []);

  return (
    <div className={styles.container}>
      <h4 className={styles.quotestyle}>
        {singleQuote.quote}
        <br />
        <br />
        {singleQuote.author}{' '}
      </h4>
    </div>
  );
}

export default Quote;
