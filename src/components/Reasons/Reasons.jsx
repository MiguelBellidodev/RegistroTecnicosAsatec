import style from "./Reasons.module.css";
import { Icon } from "@iconify/react";
const Reasons = () => {
  return (
    <section id={style.section}>
      <header>
        <p>¿POR QUÉ INSCRIBIRTE?</p>
        <h3>Beneficios de estar registrado</h3>
      </header>
      <ul>
        <li>
          <picture>
            <Icon icon="keyline-icons:shield-check" />
          </picture>
          <h5>Respaldo profesional</h5>
          <p>
            Tu trabajo queda acreditado ante clientes y empresas por la
            asociación.
          </p>
        </li>
        <li>
          <picture>
            <Icon icon="icon-park-outline:world" />
          </picture>
          <h5>Alcance internacional </h5>
          <p>REINTEC y FEINTEC abren puertas más allá del mercado local.</p>
        </li>
        <li>
          <picture>
            <Icon icon="cil:lan" />
          </picture>
          <h5>Red de contactos</h5>
          <p>
            Formá parte de una comunidad activa de técnicos en telefonia móvil.
          </p>
        </li>
        <li>
          <picture>
            <Icon icon="fluent:hat-graduation-12-regular" />
          </picture>
          <h5>Capacitación continua</h5>
          <p>Accedé a formación y actualización en nuevas tecnologias</p>
        </li>
        <li>
          <picture>
            <Icon icon="ant-design:team-outlined" />
          </picture>
          <h5>Visibilidad</h5>
          <p>
            Figurás en los padrones públicos que consultan empresas y usuarios
          </p>
        </li>
        <li>
          <picture>
            <Icon icon="humbleicons:verified" />
          </picture>
          <h5>Credencial verificable</h5>
          <p>
            Tu condición de técnico registrado queda documentada y respaldada
          </p>
        </li>
      </ul>
    </section>
  );
};
export default Reasons;
