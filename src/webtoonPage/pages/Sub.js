import { useNavigate, useParams } from "react-router-dom";
import Webtoons from "../../data/Webtoons";
import PageNotFound from "./PageNotFound";

const Sub = () => {
  const { id } = useParams();
  const webtoon = Webtoons.find((wt) => wt.id === parseInt(id, 10));
  const nav = useNavigate();

  if (!webtoon) return <PageNotFound />;

  return (
    <>
      <button onClick={() => nav(-1)}>뒤로가기</button>
      <img src={webtoon.posterImg} alt={webtoon.title}></img>
      <h2>{webtoon.title}</h2>
      <p>{webtoon.author}</p>
      <p style={{ whiteSpace: "pre-line" }}>{webtoon.episode}</p>
      <div>
        {webtoon.tags.map((tag) => (
          <div key={tag}>{tag}</div>
        ))}
      </div>
    </>
  );
};

export default Sub;
