import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button
      className={css.Button}
      onClick={() => {
        onLoadMore();
      }}
    >
      Load More
    </button>
  );
};
export default LoadMoreBtn;
