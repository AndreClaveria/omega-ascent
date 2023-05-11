import React from 'react';
import style from './index.module.scss';

import Header from '@/components/partials/Header';

const Index = ({ children }) => {
  return (
    <div className={style.global_cont}>
      <div className={style.stars}></div>
      <div className={style.stars2}></div>
      <div className={style.stars3}></div>
      <Header />
      {children}
    </div>
  );
};

export default Index;
