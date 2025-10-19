import React from 'react';
import './counter.css';

class FirstComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            multiplier: 1,
        }}

    incrementCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter + prevState.multiplier
        }));
    }

    decrementCounter = () => {
        this.setState(prevState => ({
            counter: prevState.counter - prevState.multiplier
        }));
    }

    changeMultiplier = (value) => {
        this.setState({
            multiplier: value
        })
    }

    render() {
        return (
            <div>
                <div className="Counter">{this.state.counter}</div>
                <div>
                    <div className="button-wrapper">
                        <button onClick={this.incrementCounter}>
                            Increase
                        </button>
                        <button onClick={this.decrementCounter}>
                            Decrease
                        </button>
                    </div>
                    <div className="dropdown">
                        <select onChange={e => {
                            console.log(e.target.value);
                            this.changeMultiplier(Number(e.target.value))
                        }}>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </div>
            </div>
        );
    }
}

export default FirstComponent;