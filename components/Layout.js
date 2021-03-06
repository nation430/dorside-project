import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div>
        <main className="">{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
