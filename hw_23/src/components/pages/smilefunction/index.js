import React, {useEffect, useMemo, useState} from "react";
import {SlimeList} from "./components/SlimeList";
import {Smile} from "./components/Smile";
import {defaultSmiles} from "./smiles-data";
import {loadFromStorage, saveToStorage} from "../../../utils/LocalStorage";
import ThemeContext from "./ThemeContext";

export function Smiles() {
    const smilesKey = 'smiles';
    const [smiles, setSmiles] = useState(defaultSmiles);
    const [winner, setWinner] = useState(null);
    const [showResults, setShowResults] = useState(false);
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        let storedSmiles = loadFromStorage(smilesKey, null);
        if (storedSmiles) {
            setSmiles(JSON.parse(storedSmiles));
        }
    }, []);

    useEffect(() => {
        console.log('Updating smiles or componentDidUpdate');
        saveToStorage(smilesKey, JSON.stringify(smiles));
    }, [smiles]);

    const showWinner = () => {
        if (!showResults) {
            setWinner(findWinner(smiles));
        }
        setShowResults(prevState => !prevState);
    }

    const findWinner = (smiles) => {
        console.log("Start findWinner:");
        if (!smiles.length) {
            return null;
        }
        return smiles.reduce((max, smile) =>
            smile.voteCounter > max.voteCounter ? smile : max, smiles[0]
        );
    }

    const addVote = (id) => {
        setSmiles(prevState => {
            return prevState.map(smile => {
                if (smile.id === id) {
                    return {...smile, voteCounter: smile.voteCounter + 1}
                }
                return smile;
            });
        });
    }
    return (
        <ThemeContext.Provider value={theme}>
            <div className="smile-page-wrapper">
                <h1 className="smile-main-header">Smile page</h1>

                <SlimeList
                    smiles={smiles}
                    addVote={addVote}
                /> 

                <div className="smile-winner-btn-wrapper">
                <button
                    className="smile-winner-btn"
                    onClick={() => showWinner()}
                >
                    {showResults ? "Hide" : "Show"}
                </button>

                <button
                    className="smile-winner-btn"
                    onClick={() => setTheme("" + theme === "light" ? "dark" : "light")}
                >
                    {theme}
                </button>
            </div>

            {showResults && winner && (
                <div className="smile-winner-wrapper">

                    <h2 className="winner-result-header">Voting results</h2>
                    <h3 className="winner-header">Winner:</h3>
                    <Smile
                        key={winner.id}
                        smile={winner}
                    />
                </div>
            )}
        </div>
</ThemeContext.Provider>
)
}