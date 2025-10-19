import {useDispatch, useSelector} from "react-redux";
import {
    increment,
    decrement,
    incrementByAmount,
    reset
} from "../../store/slices/counterSlice";
import {useState} from "react";

export default function CounterRedux() {

    let [amount, setAmount] = useState(0);

    let dispatch = useDispatch();
    const counter = useSelector(state => state.counter);

    const handleAddCustomAmount = () => {
        if (!isNaN(+amount)) {
            dispatch(incrementByAmount(+amount));
        }
        setAmount("");
    }
    return (
        <div className="counter-redux">

            <h1>Counter Redux* {counter}</h1>
            <button className={"button"} onClick={() => dispatch(increment())}>Increment</button>
            <br/>
            <button className={"button"} onClick={() => dispatch(decrement())}>Decrement</button>
            <br/>
            <button className={"button"} onClick={() => dispatch(reset())}>Reset</button>

            <div>
                <input type="text"
                       value={amount}
                       onChange={(e) => {
                           console.log("handleAddCustomAmount23", amount);
                           setAmount(+e.target.value);
                       }}
                       placeholder="Amount"
                />
                <br/>
                <button onClick={handleAddCustomAmount}>Add</button>
            </div>
        </div>
    )
}