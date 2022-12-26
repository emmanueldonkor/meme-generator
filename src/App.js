import { useState, useEffect } from "react";
import MemeGenerator from "./meme-generator";
const App = () => {
  const [topText, setTopText] = useState("");
  const [bottomText, setBottomText] = useState("");
  const [randomImage, setRandomImage] = useState("");
  const [allMemeImgs, setAllMemeImgs] = useState([]);

  useEffect(() => {
    async function fetchMemes() {
      const response = await fetch("https://api.imgflip.com/get_memes");
      const { data } = await response.json();
      setAllMemeImgs(data.memes);
    }
    fetchMemes();
  }, []);

  const generateMeme = (event) => {
    event.preventDefault();
    const rndIndex = Math.floor(Math.random() * allMemeImgs.length);
    const url = allMemeImgs[rndIndex].url;
    setRandomImage(url);
  };

  const changeTopText = (event) => {
    setTopText(event.target.value);
  };
  const changeBottomText = (event) => {
    setBottomText(event.target.value);
  };

  return (
    <div className="container">
      <MemeGenerator
        topText={topText}
        bottomText={bottomText}
        handleClick={generateMeme}
        randomImage={randomImage}
        changeTopText={changeTopText}
        changeBottomText={changeBottomText}
      />
    </div>
  );
};

export default App;
