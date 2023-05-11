import React from 'react';
import style from './index.module.scss';

import Title from '@/components/UI/Title';


const Index = () => {

  return (
    <div className={style.about_page}>
      <div className={style.head}>

      <Title
              level="h1"
              title="LOREM IPSUM DOLOR SIT AMET CONSECTETUR"
              className="h1"
              size="title"
            />
      <p>
      Lorem ipsum dolor sit amet consectetur. At lacus fringilla
       imperdiet tristique dignissim maecenas mauris gravida.
        Adipiscing elit vestibulum ultricies ante lectus. 
      </p>
      </div>
      
      
    </div>
  );
};

export default Index;
