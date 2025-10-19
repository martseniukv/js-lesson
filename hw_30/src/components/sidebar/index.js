import Header from "./components/header/Header";
import Menu from "./components/menu";
import {menuItemsData} from "./sidebar-data";
import Footer from "./components/footer/Footer";

import styles from './Sidebar.module.scss';

export default function Sidebar() {

    return (
        <aside className={styles.sidebar}>

            <Header key={"header"}/>
            <Menu key={"menu"} menuList={menuItemsData}/>
            <Footer key= {"footer"}/>
        </aside>
    )
}