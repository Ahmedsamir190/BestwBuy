import "@/styles/globals.css";
import "normalize.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.min.js";
import Layout from "@/components/Layout";
import "react-multi-carousel/lib/styles.css";
import { Provider } from "react-redux";
import { store } from "@/RTK/store";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import ProtectRoute from "@/components/protectroute/ProtectRoute";

const noAuthRequired = ["/", "signin", "signup"];

export default function App({ Component, pageProps }) {
  return (
    // <SessionProvider session={session}>
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
    // </SessionProvider>
  );
}
