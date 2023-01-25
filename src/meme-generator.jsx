import "./meme.css";

const MemeGenerator = (props) => {
  return (
    <div className="container">
       <h1 className="header">Meme Generator</h1>
      <form onSubmit={props.handleClick}>
        <input
          type="text"
          value={props.topText}
          onChange={props.changeTopText}
          placeholder="Top text"
          className="input-text"
        />
        <input
          type="text"
          value={props.bottomText}
          onChange={props.changeBottomText}
          placeholder="Bottom text"
          className="input-text"
        />
        <button type="submit" className="generate-button">Generate</button>
      </form>
      <div className="meme">
        <img src={props.randomImage} alt="" className="meme-image" />
        <h2 className="top">{props.topText}</h2>
        <h2 className="bottom">{props.bottomText}</h2>
      </div>
    </div>
  );
};
export default MemeGenerator
