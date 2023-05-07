import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

const Index = (props) => {
  return (
    <div className={style.img_cont}>
      <Image
        src={props.src}
        className={`${style.img} ${props.className}`}
        width={props.width}
        alt={props.alt}
      />
    </div>
  );
};

export default Index;
