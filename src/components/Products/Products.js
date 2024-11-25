import React from "react";
import styles from "./Products.module.css";

function Products() {
  const products = [
    {
      title: "Mobile App X",
      description: "A revolutionary app that simplifies your daily tasks.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/mobile-app-x",
    },
    {
      title: "Web App Y",
      description: "A web application designed to boost productivity.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/web-app-y",
    },
    {
      title: "Tool Z",
      description: "An open-source tool to optimize your workflow.",
      image: "https://via.placeholder.com/300",
      link: "https://github.com/yourusername/tool-z",
    },
  ];

  return (
    <div className={styles.products}>
      <h1 className={styles.title}>Products</h1>
      <div className={styles.productGrid}>
        {products.map((product, index) => (
          <div key={index} className={styles.productCard}>
            <img
              src={product.image}
              alt={product.title}
              className={styles.productImage}
            />
            <h2 className={styles.productTitle}>{product.title}</h2>
            <p className={styles.productDescription}>{product.description}</p>
            <a
              href={product.link}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.productLink}
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;

