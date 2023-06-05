import css from './Button.module.css';

const Button = ({ isFollowing, clickOnFollow }) => {
  return (
    <button
      name="follow"
      type="button"
      className={`${css.button} ${isFollowing ? css.active : ''} `}
      onClick={() => {
        clickOnFollow();
      }}
    >
      <span className={css.text}>{isFollowing ? 'Following' : 'Follow'}</span>
    </button>
  );
};
export default Button;
