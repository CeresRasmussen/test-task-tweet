import css from "./Card.module.css";
import { useState, useEffect } from "react";
import { ReactComponent as Logo } from "../../img/Vector.svg";
import { ReactComponent as QAImage } from "../../img/pictureQA.svg";
import Button from "../Button/Button";
import { changeFollowers } from "../../api/api";

const Card = ({ tweets }) => {
  const [followingMap, setFollowingMap] = useState({});
  const [tweetsList, setTweetsList] = useState(tweets);

  useEffect(() => {
    const storedFollowingMap = localStorage.getItem("followingMap");
    if (storedFollowingMap) {
      setFollowingMap(JSON.parse(storedFollowingMap));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("followingMap", JSON.stringify(followingMap));
  }, [followingMap]);

  const clickOnFollow = (id) => {
    setFollowingMap((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
    const numberOfFollowers =
      tweetsList[tweetsList.findIndex((tweet) => tweet.id === id)].followers;

    changeFollowers(id, followingMap[id] ? numberOfFollowers - 1 : numberOfFollowers + 1);
  };

  const addComaToFollowers = (followers) => {
    return followers.toString().slice(0, 3) + "," + followers.toString().slice(3, 6);
  };

  return tweetsList.map(({ id, user, tweets: numberOfTweets, avatar, followers }) => {
    const isFollowing = followingMap[id] || false;

    return (
      <li key={id} className={css.wrapper}>
        <Logo className={css.logo} />
        <QAImage />
        <hr className={css.divider} />
        <div className={css.circle}>
          <img
            className={css.avatar}
            src={avatar}
            width={62}
            height={62}
            alt={`Avatar of ${user}`}
          />
        </div>
        <div className={css["info-wrapper"]}>
          <p className={css.text}>{numberOfTweets} tweets</p>
          <p className={css.text}>{addComaToFollowers(followers)} followers</p>
        </div>
        <Button
          isFollowing={isFollowing}
          clickOnFollow={() => clickOnFollow(id)}
          className={css.button}
        />
      </li>
    );
  });
};

export default Card;
