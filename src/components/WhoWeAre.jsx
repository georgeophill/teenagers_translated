import Card from "../UI/Card";

const WhoWeAre = ({ image, name, biography }) => {
  return (
    <Card className="people-card">
      <div className="person_img">
        <img src={image} alt={name} />
      </div>
      <h4 className="btn-cool">{name}</h4>
      <p>{biography}</p>
    </Card>
  );
};

export default WhoWeAre;
