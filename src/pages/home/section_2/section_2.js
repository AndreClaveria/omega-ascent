import React, { useState } from 'react';

import style from './section_2.module.scss';

const Section2 = () => {
  const [text, setText] = useState(
    'is derived from the Greek alphabet, along with many other letters'
  );
  const [letter, setLetter] = useState('Omega');
  const [vanish, setVanish] = useState(false);

  function handleEndHover() {
    setVanish(true);
    const timer = setTimeout(() => {
      setLetter('Omega');
      setText(
        'is derived from the Greek alphabet, along with many other letters'
      );
      setVanish(false);
    }, 400);
    return () => clearTimeout(timer);
  }
  function handleHover(letter, text) {
    setVanish(true);
    const timer = setTimeout(() => {
      setLetter(letter);
      setText(text);
      setVanish(false);
    }, 400);

    return function cleanup() {
      clearTimeout(timer);
    };
  }
  return (
    <div className={style.cont_section_2}>
      <div className={style.circle}>
        <p
          className={`p p_medium ${style.text_description} ${
            vanish ? style.vanish : style.appear
          }`}
        >
          {' '}
          <span className={`span span_light_medium ${style.letter_name}`}>
            {letter}
          </span>{' '}
          {text}
        </p>
        <div
          className={style.omega}
          onMouseEnter={() =>
            handleHover(
              'Omega',
              'is the last letter of the Greek alphabet and represents the end or finality'
            )
          }
          onMouseLeave={handleEndHover}
        >
          <span className="span span_light_big">Ω</span>
          <div className={style.span_cont}>
            <span className="span span_light_small">Omega</span>
            <span className="span span_light_small">Omega</span>
          </div>
        </div>
        <div
          className={style.alpha}
          onMouseEnter={() =>
            handleHover(
              'Alpha',
              'is the first letter of the Greek alphabet and symbolizes the beginning'
            )
          }
          onMouseLeave={handleEndHover}
        >
          <span className="span span_light_big">α</span>
          <div className={style.span_cont}>
            <span className="span span_light_small">Alpha</span>
            <span className="span span_light_small">Alpha</span>
          </div>
        </div>
        <div
          className={style.beta}
          onMouseEnter={() =>
            handleHover(
              'Beta',
              'is the second letter of the Greek alphabet and represents duality or two-sidedness'
            )
          }
          onMouseLeave={handleEndHover}
        >
          <span className="span span_light_big">β</span>
          <div className={style.span_cont}>
            <span className="span span_light_small">Beta</span>
            <span className="span span_light_small">Beta</span>
          </div>
        </div>
        <div
          className={style.delta}
          onMouseEnter={() =>
            handleHover(
              'Delta',
              'is the fourth letter of the Greek alphabet and symbolizes change or transition'
            )
          }
          onMouseLeave={handleEndHover}
        >
          <span className="span span_light_big">δ</span>
          <div className={style.span_cont}>
            <span className="span span_light_small">Delta</span>
            <span className="span span_light_small">Delta</span>
          </div>
        </div>
        <div
          className={style.epsilon}
          onMouseEnter={() =>
            handleHover(
              'Epsilon',
              'is the fifth letter of the Greek alphabet and signifies harmony and balance'
            )
          }
          onMouseLeave={handleEndHover}
        >
          <span className="span span_light_big">ε</span>
          <div className={style.span_cont}>
            <span className="span span_light_small">Epsilon</span>
            <span className="span span_light_small">Epsilon</span>
          </div>
        </div>
        <div
          className={style.zeta}
          onMouseEnter={() =>
            handleHover(
              'Zeta',
              'is the sixth letter of the Greek alphabet and signifies change and transformation'
            )
          }
          onMouseLeave={handleEndHover}
        >
          <span className="span span_light_big">ζ</span>
          <div className={style.span_cont}>
            <span className="span span_light_small">Zeta</span>
            <span className="span span_light_small">Zeta</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
