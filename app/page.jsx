"use client";

import styles from "./homepage.module.css";
import { useState, useEffect } from "react";
import HeaderFooter from "./HeaderFooter";

export default function Home() {
  const [trinkets, setTrinkets] = useState([]);
  const directusUrl = 'http://localhost:8055/assets';

  useEffect(() => {
    async function fetchTrinkets() {
      try {
        const res = await fetch("/api/trinkets");
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await res.json();
        setTrinkets(data.data);
        console.log("Fetched Trinkets:", data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchTrinkets();
  }, []);

  return (
    <HeaderFooter>
      <div>
        <h1 className={styles.h1Header}>Aya's Collection </h1>
        <div className={styles.gridContainer}>
          {trinkets.map((trinket) => (
            <div key={trinket.id} className={styles.itemContainer}>
              <h2>"{trinket.name}"</h2>
              {trinket.image && (
                <>
                  <img
                    src = {`${directusUrl}/${trinket.image}`}
                    alt={trinket.name}
                    width={200}
                    height={200}
                  />
                  {console.log("Image URL:", `${directusUrl}/${trinket.image}`)}
                </>
              )}
              {!trinket.image && <p>No Image Available</p>}
              <p>{trinket.brand}</p>
              <p>{trinket.model}</p>
              <p>{trinket.kind}</p>
            </div>
          ))}
        </div>
      </div>
    </HeaderFooter>
  );
}