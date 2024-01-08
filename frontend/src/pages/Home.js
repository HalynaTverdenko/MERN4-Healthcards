import {useState, useEffect} from 'react'
import IndcardDetails from '../components/IndcardDetails'
import IndcardForm from '../components/IndcardForm'
import {useIndcardContext} from '../hooks/useIndcardContext'

const Home = () => {
    const {cards, dispatch} = useIndcardContext()

    useEffect(() => {
        const fetchAllCards = async () => {
            const response = await fetch('/api/cards')
            const json = await response.json()
            if(response.ok) {
                dispatch({type: 'SET_INDCARDS', payload: json})
            }
        }
        fetchAllCards()
    }, [dispatch])

    return (
        <div className="home">
            <div className='indcards'>
            {cards && cards.map((card) => (
                    <IndcardDetails key={card._id} card={card} />
                ))}
            </div>
            <IndcardForm />
        </div>
    )
}

export default Home;