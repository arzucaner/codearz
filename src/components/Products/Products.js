import React from "react";
import styles from "./Products.module.css";
import knittMatesImage from "../../assets/images/products/knittmates.png";

function Products() {
  return (
    <div className={styles.products}>
      <h1 className={styles.title}>Crafting Innovations</h1>
      
      {/* Testing Message */}
      <p className={styles.testingMessage}>
        🚧 This application is currently in the testing phase. You can explore the test version below!
      </p>

      <div className={styles.productContainer}>
        <div className={styles.imageContainer}>
          <img
            src={knittMatesImage}
            alt="KnittMates App"
            className={styles.productImage}
          />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.subtitle}>KnittMates: Your Knitting Calculator</h2>
          <p className={styles.description}>
            KnittMates is not just a knitting app; it's a lifestyle. Knitting a cosy blanket or a soft scarf is not just a hobby but also a process of taking a breath and finding oneself. KnittMates allows users to plan and track knitting projects while offering the key to inner peace and happiness.
          </p>
          <p className={styles.description}>
            Behind every stitch, there is a story. KnittMates encourages users to weave their own stories and turn their dream projects into reality. This app creates a world filled with knitting yarns, hope, love, and creativity.
          </p>
          <p className={styles.description}>
            Welcome to the knitting world of KnittMates. We invite you to embark on a journey where every stitch tells a story. KnittMates is the perfect environment for you to document your own story and find inspiration to create your most beautiful projects.
          </p>
          <div className={styles.buttons}>
            <a
              href="https://testlink.knittmates.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Test Version
            </a>
            <a
              href="https://www.knittmates.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;


