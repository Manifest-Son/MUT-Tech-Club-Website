
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";


const Leadership = (name, position, picture, linkedIn, facebook, twitter,instagram, description) => {
  return (
    <>
      <div className="leaders-section">
      <div className="leaders-container">
        <img src={picture} alt={`An image of ${name}`} />
        <div className="socials">
          {twitter && (
            <Link to={twitter}><BsTwitterX /></Link>
          )}
          {facebook && (
            <Link to={facebook}><FaFacebook /></Link>
          )}
          {linkedIn && (
            <Link to={linkedIn}><FaLinkedin /></Link>
          )}
          {instagram && (
            <Link to={instagram}><FaInstagram /></Link>
          )}
        </div>
      </div>
      <div className="leader-details">
        <h3>{name}</h3>
        <p className="leader-position">{position}</p>
        <p className="leader-description">{description}</p>
      </div>
      </div>
    </>
  );
};

export default Leadership;
