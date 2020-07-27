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
        const randomnumber = Math.floor(Math.random() * data.length);
        const textquote = data[randomnumber].text || "Couldn't fetch quote";
        const authorquote = data[randomnumber].author || 'Unknown';
        setSingleQuote({ quote: textquote, author: authorquote });

        setInterval(function getonequote() {
          const randomnumber = Math.floor(Math.random() * data.length);
          const textquote2 = data[randomnumber].text || "Couldn't fetch quote";
          const authorquote2 = data[randomnumber].author || 'Unknown';
          setSingleQuote({ quote: textquote2, author: authorquote2 });
        }, 10000);
      })
      .catch((error) => {
        console.log('Error: ', error);
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
      <p className={styles.author}>{singleQuote.author}</p>
    </motion.div>
  );
}

export default Quote;
