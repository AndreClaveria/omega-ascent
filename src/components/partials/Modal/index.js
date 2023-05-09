import React, { useEffect, useState } from 'react';
import style from './index.module.scss';

const Index = (props) => {
  const [hasDelayPassed, setDelayPassed] = useState(false);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDelayPassed(true);
    }, 500);
    return () => clearTimeout(timerId);
  }, []);

  function handleCloseModal() {
    setDelayPassed(false);
    const timerId = setTimeout(() => {
      props.setModalOpen(false);
    }, 500);
    return () => clearTimeout(timerId);
  }

  return (
    <div className={`${style.modal_page} ${hasDelayPassed ? style.open : ''}`}>
      <div
        className={`${style.modal_cont} ${hasDelayPassed ? style.open : ''}`}
      >
        <div className={style.left_modal}>
          <div className={style.close_modal} onClick={handleCloseModal}>
            <p className="p p_medium">X</p>
          </div>
          {/* le reste en bas */}
          <div className={style.social_network}></div>
        </div>
        <div className={style.right_modal}></div>
      </div>
    </div>
  );
};

export default Index;
