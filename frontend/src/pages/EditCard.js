import { useState, useEffect } from "react";
import Edit from "./Edit";

const EditCard = () => {
     
    const [card, setCard] = useState(null);
const updateCard = useState('');
    useEffect(() => {
        async function updateCard() {
            const req = {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(card)
            };
            const res = await fetch('/api/cards',
            req);
            const data = await res.json();
            setCard(data.id);
        }
        updateCard();
    }, [])

    return (
        <div className="indcard-details">
        <h4>{card.name}</h4>
        <p><strong>Breed: </strong>{card.breed}</p>
        <p><strong>Birthdate: </strong>{card.birthdate}</p>
        <p><strong>pass: </strong>{card.pass}</p>
        <p><strong>vaccination: </strong>{card.vaccination}</p>
        <p><strong>antigelm: </strong>{card.antigelm}</p>
        <p><strong>food: </strong>{card.food}</p>
        <p><strong>photo: </strong>{card.photo}</p>
        <p>{card.createdAt}</p>
        <span onClick={updateCard}>edit</span>
    </div>
    );
}
 
export default EditCard;