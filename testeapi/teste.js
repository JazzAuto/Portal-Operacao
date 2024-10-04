import styles from '../styles/Home.module.css';
export default function Home() {
    const callAPI = async () => {};
    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <button onClick={callAPI}>Make API call</button>
            </main>
        </div>
    );
}
