import { BodyShort, Heading } from "@navikt/ds-react";
import styles from "./Komponent.module.css";
import { LanguageContext } from "../provider/LanguageProvider";
import { useContext } from "react";
import { text } from "../translations/text";
import { ChevronRightIcon } from "@navikt/aksel-icons";

const Komponent = () => {
  const language = useContext(LanguageContext);
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Heading size="small" className={styles.heading}>
          {text.card.heading[language]}
        </Heading>
        <ChevronRightIcon className={styles.chevron} aria-hidden fontSize="24px" />
      </div>
      <div className={styles.body}>
        <BodyShort className={styles.detail}>{text.card.description[language]}</BodyShort>
      </div>
    </div>
  );
};

export default Komponent;
