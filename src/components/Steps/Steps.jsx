import style from "./Steps.module.css";
import { Icon } from "@iconify/react";
const Steps = () => {
  const link = import.meta.env.VITE_URL_FORMULARIO;
  return (
    <section id={style.steps}>
      <header>
        <p>SIMPLE Y SIN COSTO</p>
        <h3>Cómo inscribirse</h3>
      </header>
      <section>
        <article>
          <Icon icon="boxicons:list-ul-square" />
          <h3>1. Completa el formulario</h3>
          <p>
            Hacé click en el boton de inscripción y completa tus datos en el
            formulario de Google Forms.No toma mas de cinco minutos.
          </p>
        </article>
        <article>
          <Icon icon="keyline-icons:shield-check" />
          <h3>2. Validación de datos</h3>
          <p>
            El equipo de ASATEC revisa tu información y confirma tu registro en
            el padrón correspondiente.
          </p>
        </article>
        <article>
          <Icon icon="humbleicons:verified" />
          <h3>3. ¡Ya estás registrado!</h3>
          <p>
            Recibis la confirmación de tu inscripción y pasas a formar parte del
            registro, sin costo alguno.
          </p>
        </article>
      </section>
      <article>
        <h3>¿Listo para registrarte?</h3>
        <p>
          La inscripción es gratuita para todos los técnicos en telefonia móvil.
        </p>
        <a href={link} target="_blank" rel="noopener noreferrer">
          Completar el formulario de inscripción
        </a>
        <p>Formulario alojado en Google Forms - Inscripción 100% gratuita</p>
      </article>
    </section>
  );
};
export default Steps;
