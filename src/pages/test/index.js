import Button from '@/components/UI/Button';
import styles from './index.module.scss';
import Modal from '@/components/UI/Modal';
import { useState } from 'react';
const Index = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <>
      <div className={styles.middle}>
        <Button
          title="LAUNCH"
          className="btn__primary"
          handleClick={handleButtonClick}
          type="button"
        />
      </div>
      <div className={styles.middle}>
        <Button title="COURSE" className="btn__secondary" type="button" />
      </div>
      {showModal && (
        <Modal onClose={handleCloseModal}>
          <div>ok</div>
        </Modal>
      )}
    </>
  );
};

export default Index;
