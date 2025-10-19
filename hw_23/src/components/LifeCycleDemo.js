import React from 'react'


class LifeCycleDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
        console.log('Constructor');
    }

    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        return null;
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('shouldComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('getSnapshotBeforeUpdate');
        return "info";
    }

    componentDidMount() {
        console.log('componentDidMount');
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('componentDidUpdate', snapshot);
    }

    componentWillUnmount() {
        console.log('componentWillUnmount');
    }

    render() {
        console.log('render');
        return (
            <div>
                <div>Counter: {this.state.counter}</div>
                <button onClick={() => this.setState({counter: this.state.counter + 1})}>Increase</button>
            </div>
        )
    }
}
export default LifeCycleDemo;
