import React from "react";
import styles from "./Blog.module.css";
import mobileAppsImage from "../../assets/images/blog/mobileAppsImage.png";
import startingJobImage from "../../assets/images/blog/startingJobImage.png";
import reactNativeImage from "../../assets/images/blog/reactNativeImage.png";
import developerSuitcaseImage from "../../assets/images/blog/developerSuitcaseImage.png";
import debuggingGuideImage from "../../assets/images/blog/debuggingGuideImage.png";
import softwareAdventureImage from "../../assets/images/blog/2023SoftwareAdventureImage.png";
import motivationHurdleImage from "../../assets/images/blog/motivationHurdleImage.png";
import aiDevCampNotesImage from "../../assets/images/blog/aiDevCampNotesImage.png";

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
  {
    title: "A Developer’s Suitcase",
    image: developerSuitcaseImage,
    readMoreLink: "https://arzugny.medium.com/a-developers-suitcase-eeda8530863c",
  },
  {
    title: "Cracking Software Puzzles: Debugging Guide",
    image: debuggingGuideImage,
    readMoreLink: "https://arzugny.medium.com/cracking-software-puzzles-debugging-guide-87da909b1283",
  },
  {
    title: "My Software Development Adventure: Behind the Scenes of 2023!",
    image: softwareAdventureImage,
    readMoreLink: "https://arzugny.medium.com/my-software-development-adventure-behind-the-scenes-of-2023-15e835fe92f1",
  },
  {
    title: "First Hurdle When Learning to Code: Loss of Motivation",
    image: motivationHurdleImage,
    readMoreLink: "https://arzugny.medium.com/first-hurdle-when-learning-to-code-loss-of-motivation-a300d7a3adb3",
  },
  {
    title: "AI DevCamp Notes: Journey into the World of Artificial Intelligence",
    image: aiDevCampNotesImage,
    readMoreLink: "https://arzugny.medium.com/i-devcamp-notes-journey-into-the-world-of-artificial-intelligence-f171f6b38159",
  },
];

function Blog() {
  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Developer’s Journal</h1>
      <div className={styles.blogContainer}>
        {blogs.map((blog, index) => (
          <div key={index} className={styles.blogCard}>
            <img src={blog.image} alt={blog.title} className={styles.blogImage} />
            <h2 className={styles.blogTitle}>{blog.title}</h2>
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

