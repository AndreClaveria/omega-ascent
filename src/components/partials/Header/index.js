import React from 'react';
import style from './index.module.scss';
// import Link from 'next/link';
import { useRouter } from 'next/router';

import Letters from 'p/img/letters.png'
import Logo_O from 'p/img/omega_logo.svg'
import Logo_A from 'p/img/ascent_logo.svg'
import Image from '@/components/UI/Logo';
import Button from '@/components/UI/Button';

const Index = () => {
  const router = useRouter();
  return (
    <div id={style.navbar} className={style.navbar}>
      <div className={style.nav_cont}>
        <div className={style.nav_bar_logo}>
          <Image
            src={Letters}
            className={style.letters}
            width={240}
            alt="Letters"
            />
          <Image
            src={Logo_A}
            className={style.logo_a}
            width={60}
            alt="Logo_Ascent"
          />
          <Image
            src={Logo_O}
            className={style.logo_o}
            width={40}
            alt="Logo_Omega"
          />
        </div>
        <div className={style.nav_bar_link_cont}>
          <ul className={style.nav_bar_link}>
            <li id="intro_link" className={style.link_item}></li>
          </ul>
        </div>
        <div className={style.nav_bar_button}>
          <Button
            type="button"
            className="btn_primary"
            title="LAUNCH"
            handleClick=""
          />
          <Button
            type="button"
            className="btn_secondary"
            title="COURSE"
            handleClick=""
          />
        </div>
      </div>
      {/* <p>OUI</p> */}
    </div>
  );
};

export default Index;

// import React from "react";
// import { useRouter } from "next/router";
// import style from "./index.module.scss";
// import Link from "next/link";
// import LogoDemonLion from "/public/img/Demon-Lion.svg";
// import Logo from "@/components/UI/Logo";
// import Title from "@/components/UI/Title";
// const Index = ({ children }) => {
//   const router = useRouter();

//   return (
//     <div className={style.container}>
//       <div className={style.square}>
//         <div className={style.header}>
//           <div className={style.header_left}>
//             <div className={style.logo_cont}>
//               <Logo src={LogoDemonLion.src} alt="Logo-Middle" width={60} />
//               <div>
//               <Title
//                 level="h2"
//                 title="Furīransu World"
//                 className="h2_pink"
//                 size="big"
//               />
//               <span className="span span_light">F.Moracchini</span>
//               </div>
//             </div>
//             <div className="nav_cont">
//               <Link
//                 href="/freelance"
//                 className={`basic_link ${
//                   router.pathname === "/freelance" ? style.active : ""
//                 }`}
//               >
//                 Profile
//               </Link>
//             </div>
//             <div className="nav_cont">
//               <Link
//                 href="/freelance/mission"
//                 className={`basic_link ${
//                   router.pathname === "/freelance/mission" ? style.active : ""
//                 }`}
//               >
//                 Missions
//               </Link>
//             </div>
//             <div className="nav_cont">
//               <Link
//                 href="/freelance/update"
//                 className={`basic_link ${
//                   router.pathname === "/freelance/update" ? style.active : ""
//                 }`}
//               >
//                 Update Profile
//               </Link>
//             </div>
//           </div>
//           <Link href="/" className="btn btn_primary">
//             LOGOUT
//           </Link>
//         </div>
//         {children}
//       </div>
//     </div>
//   );
// };

// export default Index;
