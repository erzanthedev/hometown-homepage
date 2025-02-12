import theatre from "../images/theatre.jpg";
import park from "../images/park.jpg";
import sports from "../images/sports.jpg";

const Activities = () => {
  return (
    <div id="activities">
      <h2 id="activities-title">Top three activities to do at Torshov</h2>
      <div className="activity-wrapper">
        <div className="activity">
          <img
            className="activity-img"
            src={theatre}
            alt="A red building with 4 white pillars "
          />
          <h3 className="activity-title">Attend a show or a concert</h3>
          <p className="activity-text">
            The Torshov Theatre is a great place to spend your night out.
          </p>
        </div>

        <div className="activity">
          <img className="activity-img" src={park} alt="a local park" />
          <h3 className="activity-title">Go for a piknic in the local park</h3>
          <p className="activity-text">
            The Torshov Park is perfect for piknic, getting some tan, or just
            chilling out.
          </p>
        </div>

        <div className="activity">
          <img
            className="activity-img"
            src={sports}
            alt="a round yellow and navy stripe ball on the sand"
          />
          <h3 className="activity-title">Play sports at the Lilleborg field</h3>
          <p className="activity-text">
            Play volleyball, football, basket ball or lift some weights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Activities;
