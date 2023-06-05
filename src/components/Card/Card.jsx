import css from "./Card.module.css";
import { useState } from "react";
import { ReactComponent as Logo } from "../../img/Vector.svg";
import { ReactComponent as QAImage } from "../../img/pictureQA.svg";
import Button from "../Button/Button";
import { changeFollowers } from "../../api/api";

const Card = ({
  tweet: { id, followers, avatar, user, tweets },
  setFollowingStatus,
  followingStatus,
}) => {
  const [isFollowing, setIsFollowing] = useState(() => {
    const savedIsFollowing = followingStatus[id];
    return savedIsFollowing !== undefined ? savedIsFollowing : false;
  });
  const [numberOfFollowers, setNumberOfFollowers] = useState(followers);

  const clickOnFollow = async () => {
    setIsFollowing(!isFollowing);

    const updatedFollowers = isFollowing ? numberOfFollowers - 1 : numberOfFollowers + 1;
    setNumberOfFollowers(updatedFollowers);

    setFollowingStatus((prevStatus) => ({
      ...prevStatus,
      [id]: !isFollowing,
    }));

    try {
      await changeFollowers(id, updatedFollowers);
    } catch (error) {
      console.log("Error changing followers:", error);
    }
  };

  const addComaToFollowers = (followers) => {
    return followers.toString().slice(0, 3) + "," + followers.toString().slice(3, 6);
  };

  return (
    <li key={id} className={css.wrapper}>
      <Logo className={css.logo}></Logo>
      <QAImage></QAImage>
      <hr className={css.divider} />
      <div className={css.circle}>
        <img className={css.avatar} src={avatar} width={62} height={62} alt={`Avatar of ${user}`} />
      </div>
      <div className={css["info-wrapper"]}>
        <p className={css.text}>{tweets} tweets</p>
        <p className={css.text}>{addComaToFollowers(numberOfFollowers)} followers</p>
      </div>
      <Button isFollowing={isFollowing} clickOnFollow={clickOnFollow}></Button>
    </li>
  );
};

export default Card;
