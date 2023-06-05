import css from "./Card.module.css";
import { useState } from "react";
import { ReactComponent as Logo } from "../../img/Vector.svg";
import { ReactComponent as QAImage } from "../../img/pictureQA.svg";
// import Avatar from '../../img/avatar.svg';
import Button from "../Button/Button";

const Card = ({ tweets }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const clickOnFollow = () => {
    setIsFollowing(!isFollowing);
    // setNumberOfFollowers(
    //   isFollowing ? numberOfFollowers - 1 : numberOfFollowers + 1
    // );
  };
  const addComaToFollowers = (followers) => {
    return followers.toString().slice(0, 3) + "," + followers.toString().slice(3, 6);
  };

  return tweets.map(({ id, user, tweets: numberOfTweets, avatar, followers }) => {
    return (
      <li key={id} className={css.wrapper}>
        {/* <div className={css.wrapper}> */}
        <Logo className={css.logo}></Logo>
        <QAImage></QAImage>
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
          clickOnFollow={clickOnFollow}
          className={css.button}
        ></Button>
        {/* </div> */}
      </li>
    );
  });
};

export default Card;
