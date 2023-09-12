import styles from './Alert.module.css'
const Alert = ({ text, showAlert }: { text: string, showAlert: boolean }) => {
    return (
        <div className={`${styles.container} ${showAlert ? 'opacity-100' : 'opacity-0'}`}>
            <p className={styles.text}>{text}</p>
        </div >
    )
}

export default Alert;