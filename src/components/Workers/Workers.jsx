import style from "./Workers.module.css";
import Od from "./OD.svg";
import Procel from "./procel.jpg";
import Todocelu from "./Todocelu.jpeg";
import Wuzip from "./Wuzip.jpg";
import Tecnocel from "./Tecnocel.jpg";
const Workers = () => {
  const tools = [
    { image: Od, link: "https://www.ordendereparacion.com/es/" },
    {
      image: Procel,
      link: "https://www.instagram.com/procelmayorista?srtk=MWw3dnRsdTF5dXBxMA==",
    },
    {
      image: Tecnocel,
      link: "https://www.tiktok.com/@claudio.roberto.z?_r=1",
    },
    {
      image: Todocelu,
      link: "https://www.instagram.com/todocelurepuestos/?hl=es",
    },
    {
      image: Wuzip,
      link: "https://www.tiktok.com/@montegrandecelular?_r=1&_t=ZS-9ATrzu4hciU/",
    },
  ];
  return (
    <section id={style.workers}>
      <h3>Nuestros técnicos recomiendan:</h3>
      <ul id={style.tools}>
        {tools.map((tool, i) => (
          <li key={i}>
            <a href={`${tool.link}`} target="_blank" rel="noopener noreferrer">
              <img src={tool.image} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
export default Workers;
