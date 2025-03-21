import Image from "next/image";
import styles from "./page.module.css";
// import ProductCard from "./components/ProductCard";

const products = [
  {
    id: 1,
    image: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
    alt: "MacBook Air",
    title: "MacBook Air",
    subtitle: "Mais poder, menos peso",
    description: "O MacBook Air é a versão mais leve do MacBook.",
    price: 1299,
  },
  {
    id: 2,
    image: "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
    alt: "MacBook Pro",
    title: "MacBook Air",
    subtitle: "Mais poder, menos peso",
    description: "O MacBook Air é a versão mais leve do MacBook.",
    price: 1299,
  },
]
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.page}>
        <div className={styles.title}>
          <h1>Conheça a família Macbook.</h1>
          <p>Agora com novos modelos M3</p>
        </div>

        <section className={styles.section}>
          {products.map((product) => (
            <div className={styles.card} key={product.id}>
              <Image
                width={300}
                height={150}
                alt={product.alt}
                src={product.image}
              />
              <h3>{product.title}</h3>

              <h5>{product.subtitle}</h5>

              <p>{product.description}</p>
              <h5>A partir de {product.price / 10}/mês ou R$ {product.price}*</h5>

              <div className={styles.buttons}>
                <button className={styles.btnSaibaMais}>Saiba Mais</button>
                <button className={styles.btnComprar}>Comprar</button>
              </div>
            </div>
          ))}

        </section>

      </div>
    </main>
  );
}
