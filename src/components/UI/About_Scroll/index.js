import React from 'react';
import style from './index.module.scss';

import Info from '@/components/UI/About_Info';

import Avatar1 from '../../../../public/img/about_page/blue_lion.png';
import Avatar2 from '../../../../public/img/about_page/cat-1.jpg';
import Avatar3 from '../../../../public/img/about_page/zwodash.png';
import Avatar4 from '../../../../public/img/about_page/tsuya.jpg';

const Index = () => {
    return (
        <div>
            <h1>Hello World</h1>
            <Info imagesrc={Avatar1} title="Florian Moracchini" description="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
       imperdiet tristique dignissim maecenas mauris gravida.
        Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
       imperdiet tristique dignissim maecenas mauris gravida.
        Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
        imperdiet tristique dignissim maecenas mauris gravida.
         Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
        imperdiet tristique dignissim maecenas mauris gravida.
         Adipiscing elit vestibulum ultricies ante lectus. "  comment="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
         imperdiet tristique dignissim maecenas mauris gravida.
          Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
         imperdiet tristique dignissim maecenas mauris gravida.
          Adipiscing elit vestibulum ultricies ante lectus. "/>
        </div>
    );
}

export default Index;
