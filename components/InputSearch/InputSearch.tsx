import { useState, KeyboardEvent } from 'react';
import styles from './InputSearch.module.css'
const InputSearch = () => {
    const [name, setName] = useState('');

    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter')
            console.log(name)
    }
    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Nombre personaje"
            onChange={(e) => setName(e.target.value)}
            onKeyDown={handleKeyPress}
        />
    )
}

export default InputSearch;