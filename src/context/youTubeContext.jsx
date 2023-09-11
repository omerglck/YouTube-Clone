import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { getData } from "../helpers";

export const YouTubeContext = createContext();

// context'de ki verileri bütün uygulamaya sağlar
export const YouTubeProvider = ({ children }) => {
  const [toggleButton, setToggleButton] = useState(true);
  const [selected, setSelected] = useState({
    name: "Anasayfa",
    type: "home",
  });
  const [videos, setVideos] = useState(null);
  useEffect(() => {
    setVideos(null);

    if (selected.type === "home") {
      // anasayfa videoları
      getData("/home/").then((data) => setVideos(data.contents));
    } else {
      // kategori videoları
      getData(`/search/?q=${selected.name.toLowerCase()}`).then((data) =>
        setVideos(data.contents)
      );
    }
  }, [selected]);
  return (
    <YouTubeContext.Provider
      value={{ selected, setSelected, toggleButton, setToggleButton, videos }}
    >
      {children}
    </YouTubeContext.Provider>
  );
};
