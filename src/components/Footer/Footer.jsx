import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
        Build and Design with{" "}
        <FontAwesomeIcon icon={faHeart} style={{ color: "#ff5252" }} /> by Manh
      </p>
      <p>&copy; 2023 Manh Nguyen, All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
