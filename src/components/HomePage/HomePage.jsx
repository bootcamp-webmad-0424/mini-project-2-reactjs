import Footer from "../Footer/Footer"
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"

import './HomePage.css'

const HomePage = () => {
    return (
        <div className="HomePage">
            <Navbar />
            <main className="main-content">
                <Sidebar />
                <Footer />
            </main>
        </div>
    )
}

export default HomePage