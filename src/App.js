import React, { useState } from "react";
import data from "./data";
function App() {
  const [paragraphs, setParagraphs] = useState([]);
  const [count, setCount] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    let newParagraph = [];
    const availableParagraphs = data.length;

    if (count <= 0) {
      newParagraph = [data[0]];
    } else {
      //create several copies of available paragraphs to meet count input
      if (count / availableParagraphs >= 1) {
        for (let i = 0; i < Math.floor(count / availableParagraphs); i++) {
          newParagraph = [...newParagraph, ...data];
        }
      }

      if (count % availableParagraphs > 0) {
        newParagraph = [
          ...newParagraph,
          ...data.slice(0, count % availableParagraphs),
        ];
      }
    }
    console.log(availableParagraphs);
    console.log(count);
    console.log(newParagraph);
    setParagraphs(newParagraph);
  };

  return (
    <>
      <section className="section-center">
        <header>
          <h3>tired of boring lorem ipsum?</h3>
        </header>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="number">Paragraphs: </label>
            <input
              type="number"
              id="number"
              value={count}
              onChange={(e) => setCount(Number(e.target.value))}
            />
          </div>
          <button type="submit" className="btn">
            generate
          </button>
        </form>
        <article>
          {paragraphs.map((paragraph, index) => {
            return (
              <p key={index} className="result">
                {paragraph}
              </p>
            );
          })}
        </article>
      </section>
    </>
  );
}

export default App;
