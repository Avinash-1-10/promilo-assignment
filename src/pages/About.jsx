import React from "react";
import Navbar from "../components/Navbar";
import "../styles/about.css";

const About = () => {
  const folderStructure = `
- src
  - components
    - Navbar.jsx
    - Product.jsx
  - Pages
    - About.jsx
    - Login.jsx
    - Products.jsx 
  - styles
    - about.css
    - login.css
    - products.css
    - navbar.css
  - App.jsx 
  - index.css
  - main.jsx
- index.html
- package.json
  `;

  return (
    <>
      <Navbar />
      <div className="about-container">
        <div className="about-box">
          <h1>Folder structure</h1>
          <pre className="folder-conatiner">
            <code style={{ lineHeight: "1.7" }} className="code-folder">
              {folderStructure}
            </code>
          </pre>
          <p style={{ fontSize: "1.2rem", textAlign:"justify" }}>
            The project directory structure is organized into key folders. The
            'components' folder holds reusable parts like 'Navbar.jsx' and
            'Product.jsx.' The 'Pages' folder contains individual pages like
            'About.jsx,' 'Login.jsx,' and 'Products.jsx.' Styles for these
            components and pages are kept in the 'styles' folder with
            corresponding CSS files. The 'App.jsx' is parent of the all
            components. The main application logic is in 'main.jsx,' and styling
            is managed by 'index.css.' This structure enhances clarity, making
            it easy to manage and develop different aspects of the project.
          </p>
        </div>
        <div className="about-box">
          <h1>Project Challenges</h1>
          <p style={{ fontSize: "1.2rem", textAlign:"justify" }}>
            While initially faced with challenges working on the project,
            particularly in dealing with the login API, I undertook thorough
            research to understand the necessary components. Overcoming these
            obstacles, I ultimately achieved the desired output. This
            experience, though challenging initially, turned out to be valuable,
            providing an opportunity for learning and acquiring new skills.
          </p>
        </div>
        <div className="about-box">
          <h1>Installation</h1>
          <p>To run this project locally, follow these steps:</p>
          <ol className="installation-ol">
            <li>
              <strong>Clone the Repository:</strong>
              <p>
                git clone
                url from github
              </p>
            </li>
            <li>
              <strong>Install Dependencies:</strong>
              <p>npm install</p>
            </li>
            <li>
              <strong>Run the Project:</strong>
              <p>npm run dev</p>
            </li>
          </ol>
        </div>
      </div>
    </>
  );
};

export default About;
