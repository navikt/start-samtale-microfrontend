import { Panel } from "@navikt/ds-react";
import styles from "./Komponent.module.css";
import { LanguageContext } from "../provider/LanguageProvider";
import { useContext } from "react";
import { text } from "../translations/text";

const Komponent = () => {
  const language = useContext(LanguageContext);

  return (
    <div className={styles.komponent}>
      <Panel border>
        <p>{text.card.description[language]}</p>
      </Panel>
    </div>
  );
};

export default Komponent;
