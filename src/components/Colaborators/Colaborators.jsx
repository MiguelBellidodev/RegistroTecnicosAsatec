import style from "./Colaborators.module.css";
import { Icon } from "@iconify/react";
import Rena from "./renatec-logo.jpg";
import Rein from "./reintec-logo.jpg";
import Fein from "./Feintec.png";
import Asatec from "./AsatecColab.png";
import Asotec from "./asotec.webp";

const Colaborators = () => {
  const link = import.meta.env.VITE_URL_FORMULARIO;
  return (
    <section id={style.colaborators}>
      <article id={style.join}>
        <p>
          <b>Asatec Argentina </b> y <b>Asotec Venezuela</b> en colaboración,
          respaldando a la comunidad de técnicos.
        </p>
        <figure>
          <img src={Asatec} alt="" />
          <Icon icon="mdi:plus-thick" />
          <img src={Asotec} alt="" />
        </figure>
      </article>
      <header>
        <span>TRES REGISTROS, UN SOLO PROPOSITO</span>
        <h3>
          RENATEC <span> REINTEC </span> FEINTEC
        </h3>
        <p>
          Cada registro reconoce una etapa del camino profesional del técnico:
          nacional,Internacional y federado.
        </p>
      </header>
      <ul>
        <li className={`${style.colaborator} ${style.renatec}`}>
          <picture>
            <img src={Rena} alt="Logo colaborador" />
          </picture>
          <article>
            <h5>RENATEC</h5>
            <span>Regístro Nacional de técnicos</span>
            <p>
              El padrón nacional que acredita a los técnicos de telefonía móvil
              de la Argentina, con respaldo de ASATEC.
            </p>
            <ul>
              <li>
                <Icon icon="humbleicons:verified" />
                Acreditación profesionial a nivel nacional
              </li>
              <li>
                <Icon icon="humbleicons:verified" />
                Visibilidad ante empresas y clientes
              </li>
              <li>
                <Icon icon="humbleicons:verified" />
                Respaldo de la asociación
              </li>
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Inscribirme en RENATEC
            </a>
          </article>
        </li>
        <li className={`${style.colaborator} ${style.reintec}`}>
          <picture>
            <img src={Rein} alt="Logo colaborador" />
          </picture>
          <article>
            <h5>REINTEC</h5>
            <span>Registro Internacional de técnicos</span>
            <p>
              Extiende el reconocimiento del técnico más allá de las fronteras,
              avalando su experiencia a nivel internacional.
            </p>
            <ul>
              <li>
                <Icon icon="humbleicons:verified" />
                Reconocimiento internacional
              </li>
              <li>
                <Icon icon="humbleicons:verified" />
                Válida tu experiencia en el exterior
              </li>
              <li>
                <Icon icon="humbleicons:verified" />
                Red de técnicos en toda la región
              </li>
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Inscribirme en REINTEC
            </a>
          </article>
        </li>
        <li className={`${style.colaborator} ${style.feintec}`}>
          <picture>
            <img src={Fein} alt="Logo colaborador" />
          </picture>
          <article>
            <h5>FEINTEC</h5>
            <span>Federación Internacional de Técnicos</span>
            <p>
              La federación que nuclea a los técnicos registrados, articulando
              alianzas, capacitación y crecimiento profesional.
            </p>
            <ul>
              <li>
                <Icon icon="humbleicons:verified" />
                Capacitación y actualización continua
              </li>
              <li>
                <Icon icon="humbleicons:verified" />
                Comunidad y redes profesionales
              </li>
              <li>
                <Icon icon="humbleicons:verified" />
                Respaldo de la asociación
              </li>
            </ul>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Inscribirme en FEINTEC
            </a>
          </article>
        </li>
      </ul>
      <p>
        La inscripción a los tres registros es
        <a href={link} target="_blank" rel="noopener noreferrer">
          totalmente gratuita
        </a>{" "}
        y se realiza a través de un único formulario.
      </p>
    </section>
  );
};
export default Colaborators;
