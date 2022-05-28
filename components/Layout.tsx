import { DarkModeSwitch } from "./DarkModeSwitch";
import { Footer } from "./Footer";
import NavBar from "./Navbar";

const Layout = ({ children }: any) => (
  <>
    <NavBar />

    <main>{children}</main>
    <DarkModeSwitch />
    <Footer />
  </>
);

export default Layout;
