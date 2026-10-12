import style from "./Faqs.module.css";

const Faqs = () => (
  <section id={style.faqs} aria-labelledby={style.title}>
    <header>
      <p>INFORMACIÓN PARA TÉCNICOS</p>
      <h3 id={style.title}>Preguntas frecuentes sobre el registro</h3>
      <p>
        Conocé cómo funciona la inscripción de técnicos en telefonía móvil con
        ASATEC.
      </p>
    </header>
    <div className={style.questions}>
      <details>
        <summary>¿Cómo me registro como técnico en telefonía móvil?</summary>
        <p>
          Completá el formulario de inscripción en línea. El equipo de ASATEC
          revisa tus datos y, una vez confirmada la información, recibirás la
          confirmación del registro correspondiente.
        </p>
      </details>
      <details>
        <summary>¿Cuánto cuesta inscribirse en los registros de ASATEC?</summary>
        <p>
          La inscripción es gratuita. Se utiliza un único formulario para
          solicitar la inscripción en RENATEC, REINTEC y FEINTEC.
        </p>
      </details>
      <details>
        <summary>¿Qué registros existen para técnicos en telefonía móvil?</summary>
        <p>
          ASATEC promueve RENATEC, el Registro Nacional de Técnicos; REINTEC,
          el Registro Internacional de Técnicos; y FEINTEC, la Federación
          Internacional de Técnicos.
        </p>
      </details>
      <details>
        <summary>¿Quiénes pueden solicitar la inscripción?</summary>
        <p>
          La inscripción está dirigida a técnicos en telefonía móvil. Completá
          el formulario para que ASATEC pueda revisar tus datos y orientarte
          sobre el registro correspondiente.
        </p>
      </details>
    </div>
  </section>
);

export default Faqs;
