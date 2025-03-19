import { createRoot } from "react-dom/client";
import TailwindCSS from "./TailwindCSS";
import './tailwind.css';
import './UserForm';
import UserForm from "./UserForm";
import './HitungGajiForm';
import HitungGajiForm from "./HitungGajiForm";

createRoot(document.getElementById('root'))
    .render(
        <div>
            <TailwindCSS/>
            <UserForm/>
            <HitungGajiForm/>
        </div>
    )