import React from "react";
import Smile from "./Smile";
import './smile.css';

class SmileList extends React.Component {
    render() {
        let {smiles, addVote} = this.props;
        return (
            <div className="smile-list">
                {smiles.map((smile) => (
                    <Smile
                        key={smile.id}
                        smile={smile}
                        addVote={addVote}
                    />
                ))}
            </div>
        )
    }
}

export default SmileList;