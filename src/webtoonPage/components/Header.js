import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  border-bottom: 1px solid #ededec;
  display: flex;
  align-items: center;

  a {
    margin-left: 20px;
    img {
      width: 180px;
      height: 30px;
    }
  }
`;

const Header = () => {
  return (
    <SHeader>
      <Link to="/">
        <img src={logo} alt="logo"></img>
      </Link>
    </SHeader>
  );
};

export default Header;
