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
        imagesrc={Avatar1}
        title="Florian Moracchini"
        description="
        Hi there, I'm The_Leon, the leader of the Omega Ascent project. I'm excited to introduce you 
        to our world of animation and 3D.  Our main goal with this project was to have 
        fun and create something that we truly enjoy, and I'm proud to say that it has been a successful 
        journey so far. We've poured countless hours of hard work and dedication into this project, and 
        I hope you'll enjoy it as much as we do.
        As for me, I'm a passionate web developer and designer, with a strong interest in 3D and animation. 
        I'm always eager to learn and improve my skills in these areas, and the Omega Ascent project has provided me
        with the perfect opportunity to do so. I believe that the combination of web development, design, 
        and 3D/animation is a powerful one, and I'm excited to see where this journey takes us. 
        Thanks for stopping by, and I hope you'll enjoy exploring our world of animation and 3D with us.
        "
        comment="Like a lion, fearless and proud, we venture into the realm of creativity, conquering new horizons with every stride"
        github="https://github.com/TheLeon9"
      />

      <Info
        imagesrc={Avatar2}
        title="Yvan Daryl Nemeck"
        description="I'm Yvan Daryl Ndenga Nemeck, a front-end web developer 
        and portrait artist. I specialize in creating visually appealing and 
        user-friendly websites using HTML, CSS, JavaScript, and front-end 
        frameworks. Beyond coding, I have a passion for capturing the essence
         of individuals through portrait drawings. With attention to detail 
         and a creative eye, I aim to create lifelike and emotive portrayals.
          I'm dedicated to continuous learning and staying updated with industry
           trends. Collaborative and professional, I work closely with clients 
           to transform their goals into captivating digital experiences. Let's 
        discuss how we can bring your ideas to life."
        comment="It's all about the mood, Let's create our own world in our mood"
        linkedin="https://www.linkedin.com/in/yvan-daryl-ndenga-nemeck/"
        github="https://github.com/DarylNyd"
        instagram="https://www.instagram.com/master_nyd/"
      />

      <Info
        imagesrc={Avatar3}
        title="Ethan Canoine"
        description="Heya, I'm Ethan CANOINE, also known by the pseudonym Zwodash. I'm a Front-end developer who excels in 
        HTML, CSS, and JavaScript, I really love being a Dev-Front because that 
        let me express my creativity like I want to and it make me feel like kinda free 
        and it challenge me to give the best of myself to make my website better 
        than my most recent . Besides web development, I have a passion of many things 
        coming from Japan like Traditional Temple, Mangas, etc... I like to practice basketball, 
        and I love video games (Mainly Pokémon). Additionally, I share my passion by streaming sessions 
        every Sunday on my Twitch channel. "
        comment="Feur"
        twitch="https://www.twitch.tv/zwodash"
        twitter="https://twitter.com/Zwodash"
        github="https://github.com/Zwodash"
      />

      <Info
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
