import style from './index.module.scss';

import ImageStyle from '@/components/UI/Logo';

import Graphic from 'p/img/chart/graphic.png';

const Index = () => {
  return (
    <div className={style.table_cont}>
      <ImageStyle src={Graphic} width={750} alt="ok" />
    </div>
  );
};

export default Index;
