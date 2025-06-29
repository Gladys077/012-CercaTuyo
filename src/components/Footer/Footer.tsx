import { Home, Historial, PendientesMenuVendedor, Monedas, Ajustes } from "@/assets/icons";
import { useState, ComponentType, SVGProps } from "react";
import styles from "./Footer.module.css";
import IconLabel from "../IconLabel/IconLabel";


interface FooterItem {
    icon: ComponentType<SVGProps<SVGSVGElement>>; // esto le dice a TS, el icon será un componente React que renderiza un SVG
    label: string;
    page: string;
}

interface FooterProps {
    role: "comprador" | "vendedor";
}

const itemsComprador: FooterItem[] = [
  { icon: Home, label: "Home", page: "/home" },
  { icon: Historial, label: "Historial", page: "/historial" },
  { icon: PendientesMenuVendedor, label: "Pendientes", page: "/pendientes" },
  { icon: Ajustes, label: "Ajustes", page: "/ajustes" },
];
const itemsVendedor: FooterItem[] = [
  { icon: Home, label: "Home", page: "/home" },
  { icon: Historial, label: "Historial", page: "/historial" },
  { icon: Monedas, label: "Créditos", page: "/creditos" },
  { icon: Ajustes, label: "Ajustes", page: "/ajustes" },
];


const Footer = ({role}: FooterProps) => {
    const [activeLabel, setActiveLabel] = useState("")

    const items = role === "comprador" ? itemsComprador : itemsVendedor;

    return (
        <footer className = {styles.footer}>
            {items.map((item) => (
                <IconLabel
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    active={item.label === activeLabel}
                    onClick={() => setActiveLabel(item.label)}
                />
            ))}



        </footer>
    )
    
}

export default Footer;