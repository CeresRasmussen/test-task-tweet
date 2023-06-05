import css from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={css.wrapper}>
      <button
        className={css.Button}
        onClick={() => {
          onLoadMore();
        }}
      >
        Load More
      </button>
    </div>
  );
};
export default LoadMoreBtn;
