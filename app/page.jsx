import styles from "./homepage.module.css";

async function getData() {
  const res = await fetch("http://localhost:8055/items/AnekAnek");

  if (!res.ok) {
    throw new Error("Failed to fetch the data");
  }
  return res.json();
}

export default async function Home() {
  const data = await getData();
  const trinkets = data.data;
  const directusUrl = "http://localhost:8055/assets/";

  return (
    <div>
      <h1 className={styles.h1Header}>Aya's Trinket Collection</h1>

      <div className={styles.gridContainer}>
        {trinkets.map((trinket) => (
          <div key={trinket.id} className={styles.itemContainer}>
            <h2>"{trinket.name}"</h2>
            {trinket.image && (
              <img
                src={`${directusUrl}${trinket.image}`}
                alt={trinket.name}
                width={200}
                height={200}
              />
            )}
            {!trinket.image && <p>No Image Available</p>}
            <p>Brand: {trinket.brand}</p>
            <p>Model: {trinket.model}</p>
            <p>Kind: {trinket.kind}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
