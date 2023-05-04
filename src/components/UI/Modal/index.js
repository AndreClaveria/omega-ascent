import React from 'react';
import styles from './index.module.scss';

const Index = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__content}>
        <div className={styles.modal__close}>
          <button className={styles.modal__closing} onClick={props.onClose}>
            X
          </button>
        </div>
        {props.children}
      </div>
    </div>
  );
};

export default Index;
