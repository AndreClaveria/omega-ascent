import React from 'react';
import style from './index.module.scss';

import Info from '@/components/UI/About_Info';

import Avatar1 from '../../../../public/img/about_page/blue_lion.png';
import Avatar2 from '../../../../public/img/about_page/cat-1.jpg';
import Avatar3 from '../../../../public/img/about_page/zwodash.png';
import Avatar4 from '../../../../public/img/about_page/tsuya.jpg';

const Index = () => {
  return (
    <div className={style.container}>
      <div className={style.list}>
        <Info
          imagesrc={Avatar1}
          title="Florian Moracchini"
          description="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
       imperdiet tristique dignissim maecenas mauris gravida.
        Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
       imperdiet tristique dignissim maecenas mauris gravida.
        Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
        imperdiet tristique dignissim maecenas mauris gravida.
         Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
        imperdiet tristique dignissim maecenas mauris gravida.
         Adipiscing elit vestibulum ultricies ante lectus. "
          comment="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
         imperdiet tristique dignissim maecenas mauris gravida.
          Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
         imperdiet tristique dignissim maecenas mauris gravida.
          Adipiscing elit vestibulum ultricies ante lectus. "
        />

        {/* <Info imagesrc={Avatar2} title="Yvan Daryl Nemeck" description="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
         imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. " comment="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
             Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. "/>

            <Info imagesrc={Avatar3} title="Etan Canoine" description="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. " comment="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. "/>

            <Info imagesrc={Avatar4} title="André Claveria" description="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. " comment="Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet consectetur. At lacus fringilla
            imperdiet tristique dignissim maecenas mauris gravida.
            Adipiscing elit vestibulum ultricies ante lectus. "/>
    */}
      </div>
    </div>
  );
};

export default Index;
