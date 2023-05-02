import Button from '@/components/UI/Button';
import styles from './index.module.scss';
const Index = () => {
  return (
    <>
      <div className={styles.middle}>
        <Button title="LAUNCH" className="btn__primary" type="button" />
      </div>
      <div className={styles.middle}>
        <Button title="COURSE" className="btn__secondary" type="button" />
      </div>
    </>
  );
};

export default Index;
