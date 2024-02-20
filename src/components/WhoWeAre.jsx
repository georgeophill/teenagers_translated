import Card from "../UI/Card";

const WhoWeAre = ({ image, name, biography }) => {
  const biographyParagraphs = biography
    .split("\n")
    .map((paragraph, index) => <p key={index}>{paragraph}</p>);
  return (
    <Card className="people-card">
      <div className="person_img">
        <img src={image} alt={name} />
      </div>
      <h4 className="btn-small">{name}</h4>
      <h3>{biographyParagraphs}</h3>
    </Card>
  );
};

export default WhoWeAre;
