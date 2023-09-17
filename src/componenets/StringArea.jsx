import { useState } from "react";

const StringArea = ({ text, maxChar }) => {
  const [showFull, setShowFull] = useState(false);

  //   metnin bölünüp bölünmeyeceğine karar verme
  let shortText = text;
  if (text?.length > maxChar && !showFull) {
    shortText = text.slice(0, maxChar) + "   " + "...daha fazla";
  }
  return (
    <p onClick={() => setShowFull(!showFull)}>
      {shortText?.split("\n").map((descLine, index) => (
        <span key={index}>
          {descLine} <br />
        </span>
      ))}
    </p>
  );
};

export default StringArea;
