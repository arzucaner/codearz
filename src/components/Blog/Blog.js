import React from "react";
import styles from "./Blog.module.css";
import mobileAppsImage from "../../assets/images/blog/mobileAppsImage.png";
import startingJobImage from "../../assets/images/blog/startingJobImage.png";
import reactNativeImage from "../../assets/images/blog/reactNativeImage.png";

const blogs = [
  {
    title: "How to Create Engaging and Functional Mobile Apps?",
    image: mobileAppsImage,
    readMoreLink: "https://arzugny.medium.com/how-to-create-engaging-and-functional-mobile-apps-7f35b6145db0",
  },
  {
    title: "Starting a Job: The End or Just the Beginning?",  
    image: startingJobImage,
    readMoreLink: "https://arzugny.medium.com/starting-a-job-the-end-or-just-the-beginning-cdfe7ecb0edd",
  },
  {
    title: "A Beginner’s Guide to React Native",
    image: reactNativeImage,
    readMoreLink: "https://engineering.teknasyon.com/a-beginners-guide-to-react-native-769ef818e1b0",
  },
];

function Blog() {
  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Blog Posts</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <img src={blog.image} alt={blog.title} className={styles.blogImage} />
            <h2 className={styles.blogTitle}>{blog.title}</h2>
            <p className={styles.blogDescription}>{blog.description}</p>
            <a
              href={blog.readMoreLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.readMore}
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
