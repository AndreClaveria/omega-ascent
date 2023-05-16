import { useEffect } from 'react';
import style from './index.module.scss';

import useAxios from '@/hooks/useAxios';
import ImageStyle from '@/components/UI/Logo';

import Logo from 'p/img/logo_omega_ascent.svg';
import Up from 'p/img/arrow/arrow_up_green.svg';
import Down from 'p/img/arrow/arrow_down_red.svg';

const Index = () => {
  const { response } = useAxios(
    'coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false&locale=en'
  );

  useEffect(() => {
    console.log(response);
  }, [response]);
  return (
    <div className={style.table_cont}>
      <table className={style.tab}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Current Price ($)</th>
            <th>Price Change (%)</th>
            <th>Market Cap ($)</th>
          </tr>
        </thead>

        <tbody>
          <tr key={crypto.id}>
            <td>
              <ImageStyle src={Logo} alt="omegaascent" width="32" height="32" />
            </td>
            <td>Omega Ascent</td>
            <td> 478015 </td>
            <td>
              <div className={style.crypto_price}>
                <ImageStyle src={Up} alt="up" />
                3.141592
              </div>
            </td>
            <td>600000000000 </td>
          </tr>
          {response &&
            response.map((crypto) => (
              <tr key={crypto.id}>
                <td>
                  <img
                    src={crypto.image}
                    alt={crypto.name}
                    width="32"
                    height="32"
                  />
                </td>
                <td>{crypto.name}</td>
                <td>{crypto.current_price} </td>
                <td>
                  <div className={style.crypto_price}>
                    {crypto.price_change_percentage_24h < 0 ? (
                      <ImageStyle src={Down} alt="down" />
                    ) : (
                      <ImageStyle src={Up} alt="up" />
                    )}
                    {crypto.price_change_percentage_24h}
                  </div>
                </td>
                <td>{crypto.market_cap}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Index;
