import React from "react";
import { Helmet } from "react-helmet";
import styles from "./Blog.module.css";
import mobileAppsImage from "../../assets/images/blog/mobileAppsImage.png";
import startingJobImage from "../../assets/images/blog/startingJobImage.png";
import reactNativeImage from "../../assets/images/blog/reactNativeImage.png";
import developerSuitcaseImage from "../../assets/images/blog/developerSuitcaseImage.png";
import debuggingGuideImage from "../../assets/images/blog/debuggingGuideImage.png";
import softwareAdventureImage from "../../assets/images/blog/2023SoftwareAdventureImage.png";
import motivationHurdleImage from "../../assets/images/blog/motivationHurdleImage.png";
import aiDevCampNotesImage from "../../assets/images/blog/aiDevCampNotesImage.png";
import recap2024Image from "../../assets/images/blog/recap2024Image.png";


const blogs = [
  {
    title: "Behind the Scenes of 2024!",
    image: recap2024Image,
    readMoreLink:
      "https://arzugny.medium.com/behind-the-scenes-of-2024-ffbdee9dcc45",
  },
  {
    title: "How to Create Engaging and Functional Mobile Apps?",
    image: mobileAppsImage,
    readMoreLink:
      "https://arzugny.medium.com/how-to-create-engaging-and-functional-mobile-apps-7f35b6145db0",
  },
  {
    title: "Starting a Job: The End or Just the Beginning?",
    image: startingJobImage,
    readMoreLink:
      "https://arzugny.medium.com/starting-a-job-the-end-or-just-the-beginning-cdfe7ecb0edd",
  },
  {
    title: "A Beginner’s Guide to React Native",
    image: reactNativeImage,
    readMoreLink:
      "https://engineering.teknasyon.com/a-beginners-guide-to-react-native-769ef818e1b0",
  },
  {
    title: "A Developer’s Suitcase",
    image: developerSuitcaseImage,
    readMoreLink:
      "https://arzugny.medium.com/a-developers-suitcase-eeda8530863c",
  },
  {
    title: "Cracking Software Puzzles: Debugging Guide",
    image: debuggingGuideImage,
    readMoreLink:
      "https://arzugny.medium.com/cracking-software-puzzles-debugging-guide-87da909b1283",
  },
  {
    title: "My Software Development Adventure: Behind the Scenes of 2023!",
    image: softwareAdventureImage,
    readMoreLink:
      "https://arzugny.medium.com/my-software-development-adventure-behind-the-scenes-of-2023-15e835fe92f1",
  },
  {
    title: "First Hurdle When Learning to Code: Loss of Motivation",
    image: motivationHurdleImage,
    readMoreLink:
      "https://arzugny.medium.com/first-hurdle-when-learning-to-code-loss-of-motivation-a300d7a3adb3",
  },
  {
    title:
      "AI DevCamp Notes: Journey into the World of Artificial Intelligence",
    image: aiDevCampNotesImage,
    readMoreLink:
      "https://arzugny.medium.com/i-devcamp-notes-journey-into-the-world-of-artificial-intelligence-f171f6b38159",
  },
];

function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog - Developer's Journal</title>
        <meta
          name="description"
          content="Dive into the Developer’s Journal and explore articles about web development, mobile app creation, and personal journeys in coding."
        />
        <meta
          name="keywords"
          content="Developer Blog, Web Development, Mobile Apps, Coding, React Native, Debugging, Developer Journey"
        />
        <meta name="author" content="Arzu Guney Caner" />
        <link
          rel="canonical"
          href="https://arzucaner.github.io/codearz.github.io/blog"
        />
      </Helmet>

      <div className={styles.blog}>
        <h1 className={styles.title}>Developer’s Journal</h1>
        <div className={styles.blogContainer}>
          {blogs.map((blog, index) => (
            <div key={index} className={styles.blogCard}>
              <img
                src={blog.image}
                alt={blog.title}
                className={styles.blogImage}
              />
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
    </>
  );
}

export default Blog;