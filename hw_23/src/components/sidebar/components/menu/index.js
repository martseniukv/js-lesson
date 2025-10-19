import Item from "./Item";
import styles from './Menu.module.scss';
import {NavLink} from "react-router";

export default function Menu({
                                 menuList = [],
                             }
) {
    console.log("MenuList:", menuList);
    return (

        <ul className={styles.menu}>
            {
                menuList.map(item => (
                    <NavLink key={item.id} to={item.link}>
                        <Item key={item.id}
                              item={item}
                        />
                    </NavLink>
                ))
            }
        </ul>
    )
}