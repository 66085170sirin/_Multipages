import { Outlet } from 'react-router';

import Header from '../Header/header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

import './Layout.css'


function Layout({tab, setTab, products, carts, setToken}) {
    return ( 
    <div>

        <Header />
        <Navbar tab={tab} setTab={setTab} products={products} carts={carts} setToken={setToken}/>
        <Outlet />
        <Footer />
    </div> );
}

export default Layout;