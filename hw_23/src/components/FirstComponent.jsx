import React from 'react';
import './counter/counter.css';

class FirstComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            multiplier: 1,
        }
    }

    incrementCounter = () => {
        this.setState({
            counter: this.state.counter + this.state.multiplier
        })
    }

    decrementCounter = () => {
        this.setState({
            counter: this.state.counter - this.state.multiplier
        })
    }

    changeMultiplier = (value) => {
        this.setState({
            multiplier: value
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className=" w-full">
                    <div className="Counter">{this.state.counter}</div>
                    <div>
                        <div className="button-wrapper">
                            <button
                                className=""
                                onClick={this.incrementCounter}
                            >Increase</button>
                            <button onClick={this.decrementCounter}>Decrease</button>
                        </div>
                        <div className="dropdown">
                            <select onChange={e => this.changeMultiplier(Number(e.target.value))}>
                                <option value={1}>1</option>
                                <option value={2}>2</option>
                                <option value={3}>3</option>
                                <option value={4}>4</option>
                                <option value={5}>5</option>
                            </select>

                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FirstComponent;