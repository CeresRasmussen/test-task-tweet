import Card from "../../components/Card/Card";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadNoreBtn";
import { Link } from "react-router-dom";
import { fetchTweets } from "../../api/api";
import { useEffect, useState } from "react";
import css from "./Cards.module.css";

const CardsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchTweetsFunc = async () => {
      const { data } = await fetchTweets(page);
      console.log("data:", data);

      setTweets([...tweets, ...data]);
    };
    fetchTweetsFunc();

    // eslint-disable-next-line
  }, [page]);

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className={css.app}>
      <Link to={"/"}>Back</Link>
      <ul className={css["cards-wrapper"]}>
        <Card tweets={tweets}></Card>
      </ul>
      {page !== 4 && <LoadMoreBtn onLoadMore={onLoadMore}></LoadMoreBtn>}
    </div>
  );
};
export default CardsPage;
