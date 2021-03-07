import React from "react";
const BlockQuote = ({quoteText, quoter}) => {
  return (
    <blockquote>
      {quoteText}
      <footer>
        <cite>{quoter}</cite>
      </footer>
    </blockquote>
  )
}

export default BlockQuote