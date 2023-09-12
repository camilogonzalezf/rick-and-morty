import { KeyboardEvent } from 'react';
import styles from './InputSearch.module.css';

interface InputSearchProps {
    onSearch: (name: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onSearch }) => {
    const handleKeyPress = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            const name = event.currentTarget.value;
            onSearch(name);
        }
    };

    return (
        <input
            className={styles.input}
            type="text"
            placeholder="Chracter name"
            onKeyDown={handleKeyPress}
        />
    );
};

export default InputSearch;