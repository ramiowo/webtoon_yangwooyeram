import { Link } from "react-router-dom";

const webtoons = [
  {
    id: 0,
    posterImg:
      "https://image-comic.pstatic.net/webtoon/808389/thumbnail/thumbnail_IMAG21_4a5ab33b-e6fe-4fbe-95b7-bd7fa6a9c156.jpg",
    title: "나 혼자 탑에서 농사",
    author: "켄타",
  },
  {
    id: 1,
    posterImg:
      "https://image-comic.pstatic.net/webtoon/818360/thumbnail/thumbnail_IMAG21_f3247f6d-17dc-4c05-9f5d-7ff50b8a4b4c.jpg",
    title: "우리는 후라이족",
    author: "임형 / 이하경  / sdcknight",
  },
  {
    id: 2,
    posterImg:
      "https://image-comic.pstatic.net/webtoon/828292/thumbnail/thumbnail_IMAG21_ae547aa9-f722-490b-a722-fc165fa11644.jpg",
    title: "개집사",
    author: "고추참치",
  },
  {
    id: 3,
    posterImg:
      "https://image-comic.pstatic.net/webtoon/822239/thumbnail/thumbnail_IMAG21_5a915557-91af-430f-92e1-5c863a6944db.jpg",
    title: "그렇게 물거품이 되어도",
    author: "다홍",
  },
  {
    id: 4,
    posterImg:
      "https://image-comic.pstatic.net/webtoon/807829/thumbnail/thumbnail_IMAG21_7a731990-1b33-4d79-8c00-e8fe03460618.jpg",
    title: "평화식당",
    author: "턍 / 서우서우",
  },
];

const Main = () => {
  return (
    <>
      {webtoons.map((webtoon) => (
        <div key={webtoon.id}>
          <Link to="/sub/0">
            <img src={webtoon.posterImg} alt={webtoon.title} />
            <h2>{webtoon.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Main;
