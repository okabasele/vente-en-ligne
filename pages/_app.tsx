// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// add bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import Layout from './components/Layout'
// add bootstrap js
import 'bootstrap';

function MyApp({ Component, pageProps }:AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
