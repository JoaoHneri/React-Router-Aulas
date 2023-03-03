import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
    return(
        <div className="container">
            <ul className={styles.list}>
            <li className={styles.item}>
            <Link to="/">Home</Link>
            </li>
            <li className={styles.item}>
            <Link to="/quemSomos">Quem Somos?</Link>
            </li>
            <li className={styles.item}>
            <Link to="/contato">contato</Link>
            </li>
            </ul>
          </div>
          
    )
}

export default Navbar;