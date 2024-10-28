import { useNavigate, useParams } from "react-router-dom";
import Webtoons from "../../data/Webtoons";
import PageNotFound from "./PageNotFound";
import styled from "styled-components";

const SubWrap = styled.div`
  max-width: 640px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  position: relative;
`;

const ConWrap = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Button = styled.button`
  all: unset;
  width: 80px;
  height: 40px;
  margin-left: 10px;
  border: 1px solid #fff;
  color: #fff;
  text-align: center;
  border-radius: 10px;
  position: absolute;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
`;

const Img = styled.img`
  width: 330px;
  height: 400px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const TextWrap = styled.div`
  margin-top: 30px;
  h2 {
    font-size: 20px;
    font-weight: 800;
    color: #fff;
  }
  p {
    margin-top: 8px;
    font-size: 16px;
    font-weight: 400;
    color: #dbdbdb;
  }
  .episode {
    margin-top: 30px;
    font-size: 16px;
    line-height: 24px;
    color: #fff;
    font-weight: 600;
  }
  .tagWrap {
    width: 500px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-top: 20px;
  }
  .tag {
    margin-right: 3px;
    width: 70px;
    height: 40px;
    font-size: 12px;
    font-weight: 600;
    color: #424242;
    display: flex;
    gap: 4px;
    justify-content: center;
    align-items: center;
    background-color: #bdbdbd;
    border-radius: 10px;
    cursor: pointer;
  }
`;

const Sub = () => {
  const { id } = useParams();
  const webtoon = Webtoons.find((wt) => wt.id === parseInt(id, 10));
  const nav = useNavigate();

  if (!webtoon) return <PageNotFound />;

  return (
    <SubWrap>
      <Button onClick={() => nav(-1)}>뒤로가기</Button>
      <ConWrap>
        <Img src={webtoon.posterImg} alt={webtoon.title}></Img>
        <TextWrap>
          <h2>{webtoon.title}</h2>
          <p>{webtoon.author}</p>
          <p className="episode" style={{ whiteSpace: "pre-line" }}>
            {webtoon.episode}
          </p>
          <div className="tagWrap">
            {webtoon.tags.map((tag) => (
              <div className="tag" key={tag}>
                {tag}
              </div>
            ))}
          </div>
        </TextWrap>
      </ConWrap>
    </SubWrap>
  );
};

export default Sub;
