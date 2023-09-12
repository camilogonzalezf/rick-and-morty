import { KeyboardEvent, useState } from 'react';
import styles from './InputSearch.module.css';

interface InputSearchProps {
    onSearch: (name: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {

    const [name, setName] = useState('')
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => { // Esta función permite buscar al presionar Enter
        setName(event.currentTarget.value)
        if (event.key === 'Enter') {
            onSearch(name);
        }
    };

    const handleOnClick = () => { // Se agregó un botón para la busqueda en Mobile, esta disponible en Desktop
        onSearch(name);
    };

    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.input}
                type="text"
                placeholder="Nombre del personaje"
                onKeyDown={handleKeyPress}
            />
            <div className={styles.button} onClick={() => handleOnClick()}>Buscar</div>
        </div>
    );
};

export default InputSearch;