import Button from '@/components/UI/Button';
import styles from './index.module.scss';
const Index = () => {
  return (
    <>
      <div className={styles.middle}>
        <Button
          title="LAUNCH"
          btn="btn"
          className="btn__primary"
          type="button"
        />
      </div>
      <div className={styles.middle}>
        <Button
          title="COURSE"
          btn="btn"
          className="btn__secondary"
          type="button"
        />
      </div>
    </>
  );
};

export default Index;
