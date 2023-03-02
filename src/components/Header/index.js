import styles from  './Cabecalho.module.scss'

const Header = () => {
    return(
        <header className={styles.header}>
            <img src="/assets/logo.png" alt="Logo do Alura Space" />
            <div className={styles.header__container}>
                <input 
                    className={styles.header__input} 
                    type="text" 
                    placeholder="O que você procura?"
                />
                <img src="/assets/search.png" alt="Icone de lupa" />
            </div>
        </header>
    )
}

export default Header