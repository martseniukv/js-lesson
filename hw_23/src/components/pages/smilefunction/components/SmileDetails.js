import {useParams} from "react-router";

export default function SmileDetails() {

    let {id} = useParams();
    id = Number(id);
    let smiles = JSON.parse(localStorage.getItem('smiles') || "[]");
    let currentSmile = smiles.find(smile => smile.id === id);
    console.log(`ID: ${id}; smiles: ${smiles} currentSmile: ${currentSmile}`);
    return (
            <div className="smile-wrapper no-select">
                <div className="smile-text">
                    {currentSmile.text}
                </div>
                <div className="smile-voute-counter">
                    {currentSmile.voteCounter}
                </div>
            </div>
    );
}