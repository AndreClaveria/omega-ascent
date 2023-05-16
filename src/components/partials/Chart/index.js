import style from './index.module.scss';

import ImageStyle from '@/components/UI/Logo';

import Logo from 'p/img/logo_omega_ascent.svg';

const Index = () => {
  return (
    <div className={style.table_cont}>
      <ImageStyle src={Logo} width={100} alt="ok" />
    </div>
  );
};

export default Index;
