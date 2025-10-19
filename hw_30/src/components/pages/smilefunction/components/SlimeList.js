
import {Smile} from "./Smile";
import './smile.css';

export function SlimeList({
    smiles = [],
    addVote
}) {
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