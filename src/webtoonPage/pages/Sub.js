import { useNavigate, useParams } from "react-router-dom";
import Webtoons from "../../data/Webtoons";
import PageNotFound from "./PageNotFound";
import styled from "styled-components";

const SubWrap = styled.div``;

const Button = styled.button`
  all: unset;
  width: 80px;
  height: 40px;
  background-color: #dbdbdb;
`;

const Sub = () => {
  const { id } = useParams();
  const webtoon = Webtoons.find((wt) => wt.id === parseInt(id, 10));
  const nav = useNavigate();

  const Img = styled.img``;

  const TextWrap = styled.div``;

  if (!webtoon) return <PageNotFound />;

  return (
    <SubWrap>
      <Button onClick={() => nav(-1)}>뒤로가기</Button>
      <Img src={webtoon.subImg} alt={webtoon.title}></Img>
      <TextWrap>
        <h2>{webtoon.title}</h2>
        <p>{webtoon.author}</p>
        <p style={{ whiteSpace: "pre-line" }}>{webtoon.episode}</p>
        <div>
          {webtoon.tags.map((tag) => (
            <div key={tag}>{tag}</div>
          ))}
        </div>
      </TextWrap>
    </SubWrap>
  );
};

export default Sub;
