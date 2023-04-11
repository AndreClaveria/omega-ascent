import React from 'react';
import style from './index.module.scss';

const Index = (props) => {
  return (
    <props.level
      className={` ${style[props.level]}  ${style[props.size]} ${
        style[props.className]
      }`}
    >
      {props.title}
    </props.level>
  );
};

export default Index;
