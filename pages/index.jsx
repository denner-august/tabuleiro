import styles from "../styles/Home.module.css";
import Subdivisao from "../components/Subdivisao";
import Linha from "../components/Linha";
import Tabuleiro from "../components/tabuleiro";
export default function Home() {
  return (
    <div className={styles.container}>
      <Tabuleiro />
    </div>
  );
}
