import { Link } from "react-router-dom";
import { ReactComponent as QAImage } from "../../img/pictureQA.svg";
import css from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>
        Welcome to <span className={css.accent}>MyTweets</span>
      </h1>

      <QAImage></QAImage>
      <h2 className={css.description}>
        On <span className={css.accent}>MyTweets</span> you will be able to view the tweets of your
        friends and celebrities!
      </h2>
      <Link to={"/tweets"} className={css.link}>
        Go to Tweets
      </Link>
    </div>
  );
};
export default HomePage;
