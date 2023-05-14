/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import Avatar1 from '../../../../public/img/about_page/blue_lion.png';
import Avatar2 from '../../../../public/img/about_page/cat-1.jpg';
import Avatar3 from '../../../../public/img/about_page/zwodash.png';
import Avatar4 from '../../../../public/img/about_page/tsuya.jpg';

import Title from '@/components/UI/Title'
import Person from '@/components/UI/About_Person'


const Index = () => {
    return (
        <div className={style.container}>

        <Person title="Florian Moracchini" imagesrc={Avatar1} />

        <Person title="Yvan Daryl Nemeck" imagesrc={Avatar2} />

        <Person title="Etan Canoine" imagesrc={Avatar3} />

        <Person title="André Claveria" imagesrc={Avatar4} />

        </div>
    );
}

export default Index;