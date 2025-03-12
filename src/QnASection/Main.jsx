import { createRoot } from "react-dom/client";
import  QnASection from "./QnASection";
import './QnASection.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <QnASection/>
        </div>
    )