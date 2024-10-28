import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const ErrorWrap = styled.div`
  width: 640px;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
  h2 {
    font-size: 100px;
    font-weight: 800;
  }
  p {
    margin-top: 20px;
    font-size: 30px;
    font-weight: 600;
    line-height: 40px;
  }
  span {
    margin-top: 20px;
    font-size: 20px;
    font-weight: 400;
    line-height: 26px;
  }
  button {
    all: unset;
    width: 100px;
    height: 40px;
    border: 1px solid #fff;
    background-color: #000;
    font-weight: 600;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const BtnWrap = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
`;

const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <ErrorWrap>
      <h2>404 ERROR</h2>
      <p>
        죄송합니다.현재 찾을 수 없는 페이지를<br></br> 요청 하셨습니다.
      </p>
      <span>
        존재하지 않는 주소를 입력하셨거나, <br></br>요청하신 페이지의 주소가
        변경, 삭제되어 찾을 수 없습니다.
      </span>
      <BtnWrap>
        <button onClick={() => nav(-1)}>이전으로</button>
        <button onClick={() => nav("/")}>메인으로</button>
      </BtnWrap>
    </ErrorWrap>
  );
};

export default PageNotFound;
