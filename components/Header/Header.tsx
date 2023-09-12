import React from 'react'; // Importa React
import InputSearch from '../InputSearch/InputSearch';
import styles from './Header.module.css';

interface HeaderProps {
    handleSearchName: (name: string) => void;
}

const Header: React.FC<HeaderProps> = ({ handleSearchName }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>RICK AND MORTY SEARCH</h1>
            <InputSearch onSearch={handleSearchName} />
        </div>
    );
};

export default Header;