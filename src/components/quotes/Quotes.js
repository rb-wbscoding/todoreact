import React, { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';

import { DarkmodeContext } from 'context';

import styles from './Quotes.module.css';
import { fadeIn } from 'animations';

function Quote() {
  const { isDarkmode } = useContext(DarkmodeContext);
  const [singleQuote, setSingleQuote] = useState({ quote: '', author: '' });

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomNumber = Math.floor(Math.random() * data.length);
        const textQuote = data[randomNumber].text;
        const authorQuote = data[randomNumber].author;
        setSingleQuote({ quote: textQuote, author: authorQuote });
        setInterval(() => {
          const randomNumber = Math.floor(Math.random() * data.length);
          const textQuote2 = data[randomNumber].text;
          const authorQuote2 = data[randomNumber].author;
          setSingleQuote({ quote: textQuote2, author: authorQuote2 });
        }, 10000);
      })
      .catch((error) => {
        console.log('Error while fetching quote: ', error);
        setSingleQuote({ quote: "Couldn't load quotes", author: 'Error' });
      });
  }, []);

  return (
    <motion.div
      key={singleQuote.author}
      className={`${styles.container} ${isDarkmode && styles.dark}`}
      {...fadeIn}
      transition={{ duration: 0.4 }}
    >
      <h2 className={styles.quote}>{singleQuote.quote}</h2>
      <p className={styles.author}>{singleQuote.author} </p>
    </motion.div>
  );
}

export default Quote;
