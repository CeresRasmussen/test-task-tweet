import Card from "../../components/Card/Card";
import LoadMoreBtn from "../../components/LoadMoreBtn/LoadNoreBtn";
import { Link } from "react-router-dom";
import { fetchTweets } from "../../api/api";
import { useEffect, useState } from "react";
import css from "./Cards.module.css";
import { Loader } from "../../components/Loader/Loader";

const CardsPage = () => {
  const [tweets, setTweets] = useState([]);
  const [page, setPage] = useState(1);
  const [followingStatus, setFollowingStatus] = useState({});
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    const savedFollowingStatus = localStorage.getItem("followingStatus");
    if (savedFollowingStatus) {
      setFollowingStatus(JSON.parse(savedFollowingStatus));
    }
  }, []);

  useEffect(() => {
    setIsloading(true);
    const fetchTweetsFunc = async () => {
      const { data } = await fetchTweets(page);
      console.log("data:", data);

      setTweets([...tweets, ...data]);
      setIsloading(false);
    };
    fetchTweetsFunc();

    // eslint-disable-next-line
  }, [page]);

  useEffect(() => {
    localStorage.setItem("followingStatus", JSON.stringify(followingStatus));
  }, [followingStatus]);

  const onLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const showBtn = !isLoading && page !== 4;
  return (
    <div className={css.app}>
      <Link className={css.back} to={"/"}>
        Back to Home
      </Link>
      {isLoading && <Loader />}
      <ul className={css["cards-wrapper"]}>
        {tweets.map((tweet) => (
          <Card
            key={tweet.id}
            tweet={tweet}
            setFollowingStatus={setFollowingStatus}
            followingStatus={followingStatus}
          />
        ))}
      </ul>
      {showBtn && <LoadMoreBtn onLoadMore={onLoadMore}></LoadMoreBtn>}
    </div>
  );
};
export default CardsPage;
