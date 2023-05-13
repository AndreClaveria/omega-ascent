import React from 'react';
import '@/styles/globals.scss';
import '@/styles/variable.scss';

import Head from 'next/head';
import { useRouter } from 'next/router';

import MainLayout from '@/components/layouts/MainLayout';
import HomeLayout from '@/components/layouts/HomeLayout';
import BasicLayout from '@/components/layouts/BasicLayout';
import AboutLayout from '@/components/layouts/AboutLayout';

import Logo from 'p/img/white/logo_omega_ascent_white.svg';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  let Layout = MainLayout;
  if (router.asPath.startsWith('/home')) {
    Layout = HomeLayout;
  } else if (router.asPath.startsWith('/about')) {
    Layout = AboutLayout;
  } else if (router.asPath.startsWith('/buy')) {
    Layout = MainLayout;
  } else {
    Layout = BasicLayout;
  }
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={Logo.src} />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
