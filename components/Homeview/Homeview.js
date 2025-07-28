import "./Homeview.css";
import {Header} from "../Header/Header.js"
import {Navbar} from "../Navbar/Navbar.js"
import {Content} from "../Content/Content.js"
import {Footer} from "../Footer/Footer.js"



export const Homeview = () => `
    <header>${Header()}</header>
    <nav>${Navbar()}</nav>
    <main>${Content()}</main>
    <footer>${Footer()}</footer>
`;