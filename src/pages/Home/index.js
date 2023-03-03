import Banner from "../../components/Banner"
import Footer from "../../components/Footer"
import Gallery from "../../components/Gallery"
import Header from "../../components/Header"
import Menu from "../../components/Menu"
import Popular from "../../components/Popular"
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
                <div className={styles.gallery}>
                    <Gallery />
                    <Popular />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Home