import { useEffect, useState } from "react";
import { useIndcardContext } from "../hooks/useIndcardContext";


const IndcardDetails = ({card}) => {
    const {dispatch} = useIndcardContext()
    
    const handleClick = async () => {
        const response = await fetch('/api/cards/' + card._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_INDCARD', payload:json})
        }
    }

    const updateCard = async () => {
        const response = await fetch('/api/cards/' + card._id, {
            method: 'PUT'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'EDIT_INDCARD', payload:json})
        }
    }

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
        <span onClick={handleClick}>delete</span>
    </div>
    )
}

export default IndcardDetails;