import React from 'react';
import style from './index.module.scss';

const Index = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.handleClick}
      className={`${style.btn} ${style[props.className]}`}
    >
      {props.title}
    </button>
  );
};

export default Index;
