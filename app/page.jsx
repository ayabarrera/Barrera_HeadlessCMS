"use client";

import styles from "./homepage.module.css";
import { useState, useEffect } from "react";
import HeaderFooter from "./headerfooter";

export default function Home() {
  const [trinkets, setTrinkets] = useState([]);
  const directusUrl = "http://localhost:8055/assets/";

  useEffect(() => {
    async function fetchTrinkets() {
      try {
        const res = await fetch("/api/trinkets");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setTrinkets(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTrinkets();
  }, []);

  return (
    <HeaderFooter>
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
            <p>{trinket.brand}</p>
            <p>Model: {trinket.model}</p>
            <p>Kind: {trinket.kind}</p>
          </div>
        ))}
      </div>
    </div>
    </HeaderFooter>
  );
}
