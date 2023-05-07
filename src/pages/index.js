import React from 'react';
import style from '@/styles/index/index.module.scss';
import { useRouter } from 'next/router';

import Title from '@/components/UI/Title';
import ImageStyle from '@/components/UI/Logo';
import Button from '@/components/UI/Button';

import LogoFill from 'p/img/logo_omega_ascent.svg';

const Index = () => {
  const router = useRouter();

  // navigate to home page
  const navToHome = () => {
    router.push('/home');
  };

  return (
    <div className={style.prevention_cont}>
      <div className={style.prevention}>
        <ImageStyle
          src={LogoFill}
          className={style.prevention_img}
          width={200}
          alt="Logo Fill"
        />
        <Title level="h1" title="! WARNING !" className="h1" size="title" />
        <div className={style.text_cont}>
          <p className="p p_medium">
            This Website is only an{' '}
            <span className="span span_medium">”Experimental Website”</span>
            for a <span className="span span_medium">Visual Presentation</span>
          </p>
          <p className="p p_medium">
            The <span className="span span_medium">“Crypto Monnaie”</span>{' '}
            does&apos;t exist, otherwise it&apos;s not us
          </p>
          <p className="p p_medium">
            We hope you will appreciate this travel bye ^^
          </p>
          <span className="span span_medium"> &lt; Omega Ascent Team &gt;</span>
        </div>
        <Button
          type="button"
          className="btn_primary"
          title="START"
          handleClick={() => navToHome()}
        />
      </div>
    </div>
  );
};

export default Index;
