import styles from './index.module.scss';

const Index = ({ type, title, handleClick, className }) => {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`${styles.btn} ${styles[className]}`}
    >
      {title}
    </button>
  );
};

export default Index;
