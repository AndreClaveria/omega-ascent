import React from 'react';
import style from './index.module.scss';

const Index = ({ children }) => {
  return <div className={style.global_cont}>{children}</div>;
};

export default Index;
