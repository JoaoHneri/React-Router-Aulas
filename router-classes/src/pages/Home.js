import styles from './Pages.module.css'
function Home(){
    return(
        <div>
            <h1 className={styles.container}>Home</h1>
            <p className={styles.container}>Conteúdo da página Home</p>
        </div>
    )
}

export default Home;