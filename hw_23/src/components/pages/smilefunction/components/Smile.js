import {NavLink, useNavigate} from "react-router";

export function Smile({smile, addVote = () => {}}) {
    return (
        <div className="smile-wrapper no-select"
             onClick={() => addVote(smile.id)}>
            <div className="smile-text">
                {smile.text}
            </div>
            <div className="smile-voute-counter">
                {smile.voteCounter}
            </div>
            <NavLink to={`/smiles/${smile.id}`} className="smile-link">
                <button>Details</button>
            </NavLink>
        </div>
    )
}