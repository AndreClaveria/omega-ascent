import React, {useState} from 'react'
import Title from '@/components/UI/Title';
import style from '@/styles/index/index.module.scss';

import Logo from 'p/img/logo_omega_ascent.svg';

export default function Home() {

  const [isLoading, setLoader] = useState(true);
  return (
    <div>
    { isLoading ? (
      <div className={style.section_loader_container}>
        <div className={style.section_loader}>
          <div className={style.loader}>
            <img src={Logo.src} className={style.loader_img} alt="Logo" />
          </div>
          <span className="span span_light_big"> 0%</span>
        </div>
      </div>
    ) : (
      <div>
        <span className="span span_light_big"> 0%</span>
      </div>
    )}
    </div>
  );
}
