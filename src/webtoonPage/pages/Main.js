import { Link } from "react-router-dom";
import Webtoons from "../../data/Webtoons";
import styled from "styled-components";

const MainWrap = styled.div`
  max-width: 640px;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
  .subtitle {
    padding: 30px 20px;
    font-size: 24px;
    font-weight: 400;
    color: #fff;
  }
`;

const WebtoonsWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Con = styled.div`
  width: 180px;
  margin-bottom: 20px;
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 14px;
  }
  h2 {
    font-size: 14px;
    font-weight: 600;
    padding-bottom: 6px;
    color: #ffffff;
    display: flex;

    div {
      width: 18px;
      height: 13px;
      border: 2px solid #ff4747;
      border-radius: 3px;
      color: #ff4747;
      font-size: 8px;
      text-align: center;
      line-height: 13px;
      margin-right: 6px;
    }
  }
  p {
    font-size: 12px;
    font-weight: 600;
    color: #fff;
  }
`;

const Main = () => {
  return (
    <MainWrap>
      <h2 className="subtitle">당신에게 심쿵을 선사할 힐링웹툰 Best</h2>
      <WebtoonsWrap>
        {Webtoons.map((webtoon) => (
          <Con key={webtoon.id}>
            <Link to={`/sub/${webtoon.id}`}>
              <img src={webtoon.posterImg} alt={webtoon.title} />
              <h2>
                <div>Best</div>
                {webtoon.title}
              </h2>
              <p>{webtoon.author}</p>
            </Link>
          </Con>
        ))}
      </WebtoonsWrap>
    </MainWrap>
  );
};

export default Main;
