import styles from './Spinner.module.css'

export default function Spinner() {
    return (
        <div className={styles.wrapper}>
        <div className={styles.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}