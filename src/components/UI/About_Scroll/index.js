import React from 'react';
import style from './index.module.scss';

import Info from '@/components/UI/About_Info';

import Avatar1 from 'p/img/about_page/blue_lion.png';
import Avatar2 from 'p/img/about_page/cat-1.jpg';
import Avatar3 from 'p/img/about_page/zwodash.png';
import Avatar4 from 'p/img/about_page/tsuya.jpg';

const Index = () => {
  return (
    <div className={style.container}>
      <Info
        id="perso1"
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
        github="https://github.com/TheLeon9"
      />

      <Info
        id="perso2"
        imagesrc={Avatar2}
        title="Yvan Daryl Nemeck"
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
        github="https://github.com/DarylNyd"
      />

      <Info
        id="perso3"
        imagesrc={Avatar3}
        title="Ethan Canoine"
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
        twitch="https://www.twitch.tv/zwodash"
        twitter="https://twitter.com/Zwodash"
        github="https://github.com/Zwodash"
      />

      <Info
        id="perso4"
        imagesrc={Avatar4}
        title="André Claveria"
        description="Ladies and gentlemen, esteemed colleagues and technology enthusiasts, 
        allow me to introduce myself. I am André Claveria, the maestro of code, 
        the conductor of algorithms, and the developer extraordinaire behind some of 
        the most awe-inspiring digital creations you'll ever come across! 
        As a developer, I thrive in collaborative environments, where ideas flow freely, 
        and creativity knows no bounds. 
        I revel in the joy of teamwork, exchanging knowledge and insights with 
        fellow developers, designers, and stakeholders. Together, we embark on a journey to create
        something extraordinary, harnessing the power of technology to make a positive impact in the world.
        So, my friends, whether it's crafting elegant algorithms, architecting scalable systems, or dreaming up innovative solutions,
         I am here to leave my mark on the digital landscape. Together, 
         let us embark on this thrilling adventure, creating a future where technology *
         and human ingenuity intertwine to shape a world that surpasses our wildest imaginations."
        comment="Love Me Some Baddies, Can't Get Enough "
        linkedin="https://www.linkedin.com/in/andr%C3%A9-claveria-4abb7b200/"
        github="https://github.com/AndreClaveria"
      />
    </div>
  );
};

export default Index;
