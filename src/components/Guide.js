import guideImg from "../images/per.jpg";

const Guide = () => {
  return (
    <div className="guide">
      <div className="guide-card">
        <div>
          <h3 className="guide-card-title">Your guide</h3>
          <em className="guide-card-quote">
            “I have lived at Torshov for over 30 years, so I can show you all of
            its best parts and hidden secrets.”
          </em>
          <h4 className="guide-card-name">Per Harald Borgen</h4>
        </div>
        <img
          className="guide-card-img"
          src={guideImg}
          alt="A man wearing a hat and smiling at the camera"
        />
      </div>
    </div>
  );
};

export default Guide;
