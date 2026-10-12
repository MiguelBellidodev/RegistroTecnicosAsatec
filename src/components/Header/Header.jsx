import style from "./Header.module.css";
import { Icon } from "@iconify/react";
import { useState, useEffect } from "react";
import Colabs from "../Colaborators/Colaborators.module.css";
import Reasons from "../Reasons/Reasons.module.css";
import Step from "../Steps/Steps.module.css";
import Fq from "../Faqs/Faqs.module.css";
import Wk from "../Workers/Workers.module.css";
import Logo from "./asatec.svg";
const Header = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const link = import.meta.env.VITE_URL_FORMULARIO;
  return (
    <header id={style.header}>
      <div id={style.container}>
        <a href="#" id={style.logo}>
          <img src={Logo} alt="Logo" />
          <div>
            <span className={style.brandName}>ASATEC</span>
            <p>Técnicos en Telefonía Móvil</p>
          </div>
        </a>
        <nav className={`${style.nav} ${toggle ? style.active : ""}`}>
          <a href={`#${Colabs.colaborators}`} onClick={() => setToggle(false)}>
            Registros
          </a>
          <a href={`#${Wk.workers}`} onClick={() => setToggle(false)}>
            Recomendaciones
          </a>
          <a href={`#${Reasons.section}`} onClick={() => setToggle(false)}>
            Beneficios
          </a>
          <a href={`#${Step.steps}`} onClick={() => setToggle(false)}>
            Cómo inscribirse
          </a>
          <a href={`#${Fq.faqs}`} onClick={() => setToggle(false)}>
            Preguntas
          </a>
        </nav>
        {isMobile && (
          <button
            type="button"
            onClick={() => setToggle(!toggle)}
            id={style.btnMenu}
          >
            <Icon icon="ic:baseline-menu" />
          </button>
        )}
        <nav id={style.inscribite}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Inscribite Gratis
          </a>
        </nav>
      </div>
    </header>
  );
};
export default Header;
