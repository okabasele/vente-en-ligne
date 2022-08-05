// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
// add bootstrap icons
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from './components/Layout'
function MyApp({ Component, pageProps }) {
  //boostrap js
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
