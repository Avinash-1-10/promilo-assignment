import React from "react";
import Navbar from "../components/Navbar";

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
  - App.jsx 
  - index.css
  - main.jsx
  `;

  return (
    <div>
      <Navbar />
      <h1 style={{textAlign:"center"}}>Folder structure</h1>
      <pre className="folder-conatiner" >
        <code style={{ lineHeight: "1.7" }}>{folderStructure}</code>
      </pre>
    </div>
  );
};

export default About;
