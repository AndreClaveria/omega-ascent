import React from 'react';
import style from './index.module.scss';
import Title from '@/components/UI/Title';

const Index = (props) => {
  return (
    <div className={style.img_cont}>
      <img
        src={props.src}
        className={style.img}
        width={props.width}
        alt={props.alt}
      />
    </div>
  );
};

export default Index;
