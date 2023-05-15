/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

//import Avatar from '../../../../public/img/about_page/user-1.png';
import Title from '@/components/UI/Title';

const Index = (props) => {
  return (
    <div className={style.container}>
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
