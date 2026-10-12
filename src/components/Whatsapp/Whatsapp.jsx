import style from "./Whatsapp.module.css";
import { Icon } from "@iconify/react";
const Whatsapp = () => {
  const link = import.meta.env.VITE_URL_WHATSAPP;
  return (
    <a id={style.wp} href={link} target="_blank" rel="noopener noreferrer">
      <Icon icon="fa6-brands:whatsapp" />
    </a>
  );
};
export default Whatsapp;
