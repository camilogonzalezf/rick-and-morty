import styles from './Pagination.module.css'

interface PaginationProps {
    numberPages: number,
    onSelectedPage: (numberPage: number) => void,
    selectedPage: number,
}

const Pagination: React.FC<PaginationProps> = ({ numberPages, onSelectedPage, selectedPage }) => {
    const pages = Array.from({ length: numberPages }, (_, index) => index + 1)
    return (
        <div className={styles.container}>
            {
                pages.map(numberPage => (
                    <div
                        key={numberPage}
                        className={`${numberPage === selectedPage ? styles.buttonActive : styles.buttonInactive}`}
                        onClick={() => onSelectedPage(numberPage)}
                    >
                        {numberPage}
                    </div>
                ))
            }
        </div>
    )
}

export default Pagination