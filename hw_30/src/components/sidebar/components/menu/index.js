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
                    // item.children === null || item.children.length === 0 ?

                            <Item key={item.id}
                                  item={item}
                            />
                        // :
                ))
            }
        </ul>
    )
}