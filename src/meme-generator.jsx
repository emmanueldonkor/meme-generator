import "./meme.css";

const MemeGenerator = (props) => {
  return (
    <div className="container">
      <form onSubmit={props.handleClick}>
        <input
          type="text"
          value={props.topText}
          onChange={props.changeTopText}
          placeholder="Top text"
        />
        <input
          type="text"
          value={props.bottomText}
          onChange={props.changeBottomText}
          placeholder="Bottom text"
        />
        <button type="submit">Generate</button>
      </form>
      <div className="meme">
        <img src={props.randomImage} alt="" />
        <h2 className="top">{props.topText}</h2>
        <h2 className="bottom">{props.bottomText}</h2>
      </div>
    </div>
  );
};
export default MemeGenerator
