"use client" // permite utilizar os hooks do next

import Link from "next/link";
import styles from "./page.module.css"
import { useParams } from "next/navigation";

export default function Home() {
  const params = useParams()

  return (
    <article className={styles.post}>
      <Link href="/blog/posts/saturno">Saturno</Link>
<br />
      <div className={styles.postContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis distinctio at, expedita commodi, modi nobis blanditiis sequi rem, quos nostrum nisi? Laudantium esse doloremque cupiditate mollitia incidunt aspernatur molestiae!
        </p>
      </div>
<br />
      <Link href="/blog/posts/descobertas-recentes">Descobertas</Link>
<br />
      <div className={styles.postContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis distinctio at, expedita commodi, modi nobis blanditiis sequi rem, quos nostrum nisi? Laudantium esse doloremque cupiditate mollitia incidunt aspernatur molestiae!
        </p>
      </div>
      <br />
      <Link href="/blog/posts/as-origens-do-universo">As Origens do Universo</Link>
<br />
      <div className={styles.postContent}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt facilis distinctio at, expedita commodi, modi nobis blanditiis sequi rem, quos nostrum nisi? Laudantium esse doloremque cupiditate mollitia incidunt aspernatur molestiae!
        </p>
      </div>

      <section>
        <p>Publicado em: Outubro de 2024</p>
      </section>
    </article>
  );
}

