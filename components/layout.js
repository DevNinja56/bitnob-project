import React from 'react';
import { Header, Footer } from '.';
import { Circles } from '../public';


const Layout = ({ children }) => {
  
  return(
    <React.Fragment>
      <Circles className="absolute hidden lg:block z-0 max-w-5xl right-0 -top-32" />
      <Header />
      <main className="relative z-10" style={{minHeight:"500px"}}>
        {children}
      </main>
      <Footer />
    </React.Fragment>
  )
};

export const getLayout = page => <Layout>{page}</Layout>;
export default Layout;
