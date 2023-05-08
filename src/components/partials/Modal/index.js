import React from 'react';
import style from './index.module.scss';

const Index = (props) => {
  console.log(props.modalOpen);
  function handleCloseModal() {
    props.setModalOpen(false);
  }
  return (
    <div className={`${style.modal_page} ${props.modalOpen ? style.open : ''}`}>
      <div
        className={`${style.modal_cont} ${props.modalOpen ? style.open : ''}`}
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
