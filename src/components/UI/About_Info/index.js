/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './index.module.scss';
import Image from 'next/image';

import Title from '@/components/UI/Title';

import LinkedIn from '../../../../public/img/reseaux-icons/linkedin-logo-bold_svgrepo.com.svg';
import Github from '../../../../public/img/reseaux-icons/github.svg';
import Instagram from '../../../../public/img/reseaux-icons/instagram.svg';
import Twitter from '../../../../public/img/reseaux-icons/twitter.svg';


const Index = (props) => {
    return (
        <div className={style.container}>
            <div className={style.avatar}>
                <Image src={props.imagesrc} alt='' />
                
                <div className={style.title}>
                <Title
                    level="h1_light"
                    title={props.title}
                    className="h1"
                    size="title"
                />  
                </div>

            </div>
            <div className={style.content}>
                <div className={style.info}>
                    <div className={style.info__text}>
                    <p>
                    {props.description}
                    </p>
                    </div>
                    <div className={style.info__comment}>
                    <p>
                     &quot;{props.comment}&quot;
                    </p>
                    </div>

                </div>
                <div className={style.social}>
                   <Image src={LinkedIn.src} alt='linkedin' width={50} height={50} />
                    <Image src={Twitter.src} alt='twitter' width={50} height={50} />
                    <Image src={Instagram.src} alt='instagram' width={50} height={50} />
                    <Image src={Github.src} alt='github' width={50} height={50} />
                    
                    
                </div>
            </div>
            
        </div>
    );
}

export default Index;
