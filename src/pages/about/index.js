import React from 'react';
import style from './index.module.scss';

import Title from '@/components/UI/Title';
import Avatar from '@/components/UI/About_Static';
import AvatarInfo from '@/components/UI/About_Scroll';

const Index = () => {
  return (
    <div className={style.about_page}>
      <div className={style.head}>
        <div className={style.title}>
          <Title
            level="h1_light"
            title="LOREM IPSUM DOLOR SIT AMET CONSECTETUR"
            className="h1"
            size="title"
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur. At lacus fringilla imperdiet
          tristique dignissim maecenas mauris gravida. Adipiscing elit
          vestibulum ultricies ante lectus. Lorem ipsum dolor sit amet
          consectetur. At lacus fringilla imperdiet tristique dignissim maecenas
          mauris gravida. Adipiscing elit vestibulum ultricies ante lectus.
        </p>
      </div>
      <div className={style.person_info}>
        <Avatar />
      </div>
      <div className={style.infos}>
        <AvatarInfo />
      </div>
    </div>
  );
};

export default Index;
