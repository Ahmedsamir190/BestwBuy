import Footer from "./footer";
import Navbarcomponent from "./navbarcomponent";

function Layout(props) {
  return (
    <>
      <Navbarcomponent />
      {props.children}
      <Footer />
    </>
  );
}
export default Layout;
