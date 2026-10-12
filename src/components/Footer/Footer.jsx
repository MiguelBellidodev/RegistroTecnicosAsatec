import style from "./Footer.module.css";
import Logo from "../Header/asatec.svg";
import Aliado from "./aes-logo.jpg";
const Footer = () => {
  const link = import.meta.env.VITE_URL_FORMULARIO;
  return (
    <footer id={style.footer}>
      <div id={style.container}>
        <section id={style.brand}>
          <header>
            <img src={Logo} alt="LogoAsatec" />
            <span>Asociación Argentina de Técnicos en Telefonia Móvil</span>
          </header>
          <p>
            Visibilizamos y respaldamos el trabajo de los técnicos en telefonia
            móvil a traves de RENATEC, REINTEC y FEINTEC.
          </p>
        </section>
        <section id={style.colabs}>
          <h5>REGISTROS</h5>
          <p>
            <span>RENATEC</span>Registro Nacional de Técnicos
          </p>
          <p>
            <span>REINTEC</span>Registro Internacional de Técnicos
          </p>
          <p>
            <span>FEINTEC</span>Federación Internacional de Técnicos
          </p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Formulario de inscripción{" "}
          </a>
        </section>
        <section id={style.data}>
          <article>
            <h5>CONTACTO</h5>
            <ul>
              <li>Email: contacto@asatec.org.ar</li>
              <li>Whatsapp: +54 9 3513 25-2555</li>
              <li>Cordoba, Argentina</li>
              <li>DIVISIÓN EDUCACIONAL</li>
            </ul>
          </article>
          <picture>
            <img src={Aliado} alt="Logo AES +" />
          </picture>
        </section>
      </div>
    </footer>
  );
};
export default Footer;
