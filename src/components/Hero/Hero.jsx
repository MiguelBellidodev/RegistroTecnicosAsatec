import style from "./Hero.module.css";
import { Icon } from "@iconify/react";
import Image from "./Heroimage.webp";
import Colabs from "../Colaborators/Colaborators.module.css";
const Hero = () => {
  const link = import.meta.env.VITE_URL_FORMULARIO;
  return (
    <main id={style.hero}>
      <div id={style.container}>
        <article id={style.content}>
          <p className={style.budget}>
            <Icon icon="keyline-icons:shield-check" /> REGISTRO 100% GRATUITO
          </p>
          <h1 className={style.title}>
            Registro de técnicos en
            <span> telefonía móvil en Argentina</span>
          </h1>
          <p className={style.text}>
            ASATEC visibiliza y respalda el trabajo de técnicos en telefonía
            móvil a través de <b>RENATEC</b>, <b>REINTEC</b> y <b>FEINTEC</b>.
            <br />
            La inscripción es simple y totalmente gratuita.
          </p>
          <nav className={style.actions}>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Completar el formulario de inscripción
            </a>
            <a href={`#${Colabs.colaborators}`}>Conocer los registros</a>
          </nav>
        </article>
        <picture id={style.image}>
          <img src={Image} alt="Logo de Asatec" />
        </picture>
      </div>
    </main>
  );
};
export default Hero;
