import {useState} from 'react'
import { useIndcardContext } from '../hooks/useIndcardContext'

const Edit = () => {
    const [name, setName] = useState('')
    const [breed, setBreed] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [pass, setPass] = useState('')
    const [vaccination, setVaccination] = useState('')
    const [antigelm, setAntigelm] = useState('')
    const [food, setFood] = useState('')
    const [photo, setPhoto] = useState('')
    const [error, setError] = useState(null)
    const {dispatch} = useIndcardContext()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const card = {name, breed, birthdate, pass, vaccination, antigelm, food, photo}
        const response = await fetch('/api/cards', {
            method: 'PUT',
            body: JSON.stringify(card),
            headers: {'Content-Type': 'application/json'}
        })
        const json = await response.json()
        if(!response.ok) {
            setError(json.error)
            console.log(error)
        }
        if(response.ok) {
            setName('')
            setBreed('')
            setBirthdate('')
            setPass('')
            setVaccination('')
            setAntigelm('')
            setFood('')
            setPhoto('')
            setError(null)
            console.log('The card edited')
            dispatch({type:'EDIT_INDCARD', payload: json})
        }
    }


    return (
        <form className='create' onSubmit={handleSubmit}>
            <h3>Add new card</h3>
            <label>Pet's name:</label>
            <input 
            type='text'
            onChange={(e) => setName(e.target.value)}
            value={name}
            
            />
            <label>Breed:</label>
            <input 
            type='text'
            onChange={(e) => setBreed(e.target.value)}
            value={breed}
            
            />
            <label>Date of Birth:</label>
            <input 
            type='text'
            onChange={(e) => setBirthdate(e.target.value)}
            value={birthdate}
            
            />
            <label>Pass:</label>
            <input 
            type='text'
            onChange={(e) => setPass(e.target.value)}
            value={pass}
            
            />
            <label>Vaccination:</label>
            <input 
            type='text'
            onChange={(e) => setVaccination(e.target.value)}
            value={vaccination}
            
            />
            <label>Antigelm:</label>
            <input 
            type='text'
            onChange={(e) => setAntigelm(e.target.value)}
            value={antigelm}
            
            />
            <label>Food:</label>
            <input 
            type='text'
            onChange={(e) => setFood(e.target.value)}
            value={food}
            
            />
            <label>Photo:</label>
            <input 
            type='text'
            onChange={(e) => setPhoto(e.target.value)}
            value={photo}
            
            />
            <button>Add card</button>
            {error && <div className='error'>{error}</div>}

        </form>
    );

}
 
export default Edit;