/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

//import Title from '@/components/UI/Title';

import LinkedIn from 'p/img/reseaux-icons/linkedin.svg';
import Github from 'p/img/reseaux-icons/github.svg';
import Instagram from 'p/img/reseaux-icons/instagram.svg';
import Twitter from 'p/img/reseaux-icons/twitter.svg';
import Twitch from 'p/img/reseaux-icons/twitch.svg';

const Index = (props) => {
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <Image src={props.imagesrc} alt="" />

        <div className={style.title}>
          <span className={`span span_light_big ${style.span_name}`}>
            {props.title}
          </span>
        </div>
      </div>
      <div className={style.content}>
        <div className={style.info}>
          <div className={style.info__text}>
            <p className="p">{props.description}</p>
          </div>
          <div className={style.info__comment}>
            <span className="span span_light">&quot;{props.comment}&quot;</span>
          </div>
        </div>
        <div className={style.social}>
          <Image src={LinkedIn.src} alt="linkedin" width={30} height={30} />
          <Image src={Twitter.src} alt="twitter" width={30} height={30} />
          <Image src={Instagram.src} alt="instagram" width={30} height={30} />
          <Image src={Github.src} alt="github" width={30} height={30} />
          <Image src={Twitch.src} alt="github" width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default Index;
