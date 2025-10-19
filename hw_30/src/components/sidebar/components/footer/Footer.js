import {useSelector} from "react-redux";

export default function Footer() {
    let {counter} = useSelector((state) => state.counter);
    return (
        <div>Footer: {counter}</div>
    )
}