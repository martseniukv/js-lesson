import React from 'react';

class TestComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {

        }

        console.log(this.props);
    }

    render() {
        return (
            <div>
                <h1>Test Component</h1>
            </div>
        )
    }
}

export default TestComponent;