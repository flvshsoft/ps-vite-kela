import { createRoot } from "react-dom/client";
import  Artikel from "./Artikel";
import './Artikel.css';

console.log("Main.jsx sedang dijalankan tes!"); 

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Artikel/>
        </div>
    )