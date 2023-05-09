import React from 'react';
import style from './index.module.scss';

import Header from '@/components/partials/Header';

const Index = ({ children }) => {
  return (
    <div className={style.global_cont}>
      <Header />
      {children}
    </div>
  );
};

export default Index;
