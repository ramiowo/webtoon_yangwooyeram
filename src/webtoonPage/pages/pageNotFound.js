import { useNavigate } from "react-router-dom";

const PageNotFound = () => {
  const nav = useNavigate();
  return (
    <>
      <h2>404ERROR</h2>
      <p>`죄송합니다.현재 찾을 수 없는 페이지를 요청 하셨습니다.`</p>
      <span>
        존재하지 않는 주소를 입력하셨거나, <br></br>요청하신 페이지의 주소가
        변경, 삭제되어 찾을 수 없습니다.
      </span>
      <button onClick={() => nav(-1)}>이전으로</button>
      <button onClick={() => nav("/")}>메인으로</button>
    </>
  );
};

export default PageNotFound;
