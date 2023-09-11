import InputSearch from '../InputSearch/InputSearch';
import styles from './Header.module.css'
const Header = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Buscador Rick y Morty</h1>
            <InputSearch />
        </div>
    )
}

export default Header;