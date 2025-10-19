import React from "react";

class Smile extends React.Component {

    addVote = () => {
        let {addVote = () => {}, smile} = this.props;
        addVote(smile.id);
    }

    render() {
        return (
            <div className="smile-wrapper no-select" onClick={this.addVote}>
                <div className="smile-text">
                    {this.props.smile.text}
                </div>
                <div className="smile-voute-counter">
                    {this.props.smile.voteCounter}
                </div>
            </div>
        )
    }
}

export default Smile;