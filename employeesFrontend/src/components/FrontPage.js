import Carousel from "./Carousel"
import { Link } from "react-router-dom"
import FactsCards from "./RandomFacts"
import Navbar from "./Navbar"
const FrontPage = () => {
    return (
        <div>
            <Navbar />
            <Link to='/' style={{ textDecoration: "none" }}>
                <Carousel />
                <div style={{ justifyContent: "center", alignItems: "center", display: "flex", color: "maroon" }}><h1>Facts We Will Resonate With...</h1></div>
                <FactsCards />
            </Link>
        </div>
    )
}

export default FrontPage