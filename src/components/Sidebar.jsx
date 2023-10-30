import styles from "./Sidebar.module.css";
import { PencilLine } from 'phosphor-react'

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
      className={styles.cover}
        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=40&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29kaW5nfGVufDB8fDB8fHww"
      />
      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/gustavotonolli.png"/>

        <strong>Gustavo Tonolli</strong>
        <span>Software Engineer</span>
      </div>
      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil 
        </a>
      </footer>
    </aside>
  );
}
