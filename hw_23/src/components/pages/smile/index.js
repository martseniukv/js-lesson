import React from "react";
import SmileList from "./components/List";
import Smile from "./components/Smile";

class Index extends React.Component {

    constructor(props) {
        super(props);
        this.smilesKey = 'smiles';

        let smiles = JSON.parse(localStorage.getItem(this.smilesKey));
        if (!smiles) {
            let smilesList = [
                {id: 1, text: "😀", voteCounter: 0},
                {id: 2, text: "😉", voteCounter: 0},
                {id: 3, text: "😂", voteCounter: 0},
                {id: 4, text: "😍", voteCounter: 0},
                {id: 5, text: "🤩", voteCounter: 0}
            ];
            localStorage.setItem(this.smilesKey, JSON.stringify(smilesList));
        }
        this.state = {
            smiles,
            winner: null,
            showResults: false,
        }
    }

    showWinner = () => {
        this.setState(prevState => (
            console.log(prevState),
            {
            showResults: !prevState.showResults,
            winner: this.findWinner(prevState.smiles)
        }));
        console.log("AFTER:", this.state);
    }

    findWinner = (smiles) => {
        let winner = smiles[0];
        smiles.forEach(smile => {
            if (smile.voteCounter > winner.voteCounter) {
                winner = smile;
            }
        });
        return winner;
    }

    addVote = (id) => {
        this.setState((prevState) => {
            const updateSmiles = prevState.smiles.map(smile => {
                if (smile.id === id) {
                    return {...smile, voteCounter: smile.voteCounter + 1}
                }
                return smile;
            });
            localStorage.setItem(this.smilesKey, JSON.stringify(updateSmiles));
            return {smiles: updateSmiles};
        });
    }


    render() {
        return (
            <div className="smile-page-wrapper">
                <h1 className="smile-main-header">Smile page</h1>

                <SmileList
                    smiles={JSON.parse(localStorage.getItem(this.smilesKey))}
                    addVote={this.addVote}
                />

                <button
                    className="smile-winner-btn"
                    onClick={this.showWinner}
                >
                    Show / Hide
                </button>

                {!this.state.showResults
                    ? ""
                    : <div className="smile-winner-wrapper">

                        <h2 className="winner-result-header">Voting results</h2>
                        <h3 className="winner-header">Winner:</h3>
                        <Smile
                            key={this.state.winner.id}
                            smile={this.state.winner}
                        />
                    </div>
                }
            </div>
        )
    }
}

export default Index;