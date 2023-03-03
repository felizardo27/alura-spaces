import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import styles from './Home.module.scss'

const Home = () => {
    return(
        <>
            <Header />
            <main>
                <section className={styles.principal}>
                    <Menu />
                    <Banner />
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Home