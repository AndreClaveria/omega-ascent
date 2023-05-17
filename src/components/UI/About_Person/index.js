import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

const Index = (props) => {
  function handleSetPerso() {
    props.setIdPerso(props.idPerso);
  }

  return (
    <div className={style.container} onClick={handleSetPerso}>
      <div className={style.person}>
        <Image src={props.imagesrc} alt="" />
      </div>
      <div className={style.name}>
        <span className={`span span_light_big ${style.span_name}`}>
          {props.title}
        </span>
      </div>
    </div>
  );
};

export default Index;
