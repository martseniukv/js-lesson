import {ChevronDown, ChevronRight} from "lucide-react"
import styles from './Item.module.scss';
import {useCallback, useState} from "react";

export default function Item({
                                 item = {},
                                 isOpenSideBar = false,
                                 level = 0,
                             }
) {
    const [isOpen, setIsOpen] = useState(isOpenSideBar);
    const paddingLeft = `${1.5 + level * 1.5}px`;

    const handleOnClick = useCallback(
        () => {
          if (item.children) {
              setIsOpen(!isOpen);
          } else if (item.link) {
              console.log("Link:", item.link);
          }
    })
    return (
        <li className={styles.menuItem}
            id={item.id}
            onClick={handleOnClick}
        >

            <div className={styles.menuItemHeader}>
                <div className={"menu-menu-icon-wrapper"}>
                    {item.icon && (
                        <item.icon/>
                    )}
                </div>
                <div className={"menu-menu-text"}>
                    {item.label}
                </div>
                {item.children && <ChevronDown/>}
            </div>
            {item.children && (
                <ul className={"menu-item-children"}>
                    {item.children.map(child => <Item key={child.id} item={child}/>)}
                </ul>
            )}
        </li>
    )
}