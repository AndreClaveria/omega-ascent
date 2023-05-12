/* eslint-disable @next/next/no-img-element */
import React from 'react';
import style from './index.module.scss';
import Link from 'next/link';
import Image from 'next/image';

import Avatar from '../../../../public/img/about_page/user-1.png';
import Avatar2 from '../../../../public/img/about_page/cat-1.jpg';
import Avatar3 from '../../../../public/img/about_page/zwodash.png';
import Title from '@/components/UI/Title'
import Person from '@/components/UI/About_Person'


const Index = () => {
    return (
        <div className={style.container}>

        <Person title="The Leon" imagesrc={Avatar} />

        <Person title="D Nyd" imagesrc={Avatar2} />

        <Person title="Zwodash" imagesrc={Avatar3} />

        <Person title="Tsuya" imagesrc={Avatar} />

        </div>
    );
}

export default Index;