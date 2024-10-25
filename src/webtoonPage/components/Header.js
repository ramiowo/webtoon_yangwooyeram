import { Link } from "react-router-dom";
import styled from "styled-components";

const SHeader = styled.div`
  width: 100%;
  height: 80px;
  background-color: #dbdbdb;
  a {
    font-size: 20px;
    font-weight: 800;
    color: #333333;
    span {
      font-size: 24px;
      font-weight: 800;
    }
  }
`;

const Header = () => {
  return (
    <SHeader>
      <Link to="/">
        RAMI<span> 웹툰</span>
      </Link>
    </SHeader>
  );
};

export default Header;
