import { useState } from "react";

import data from "./data/data.json";


import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

import Notes from "./components/pages/Notes";
import Students from "./components/pages/Students";
import Courses from "./components/pages/Courses";
import About from "./components/pages/About";

function App() {
  const [selectedMenu, setSelectedMenu] = useState("notes");

  const menuItems = [
    { 
      key: "notes",
      name: "Notes", 
      component: Notes 
    },
    { 
      key: "students",
      name: "Etudiants", 
      component: Students 
    },
    { 
      key: "courses",
      name: "Matières", 
      component: Courses 
    },
    { 
      key: "about",
      name: "A propos", 
      component: About 
    },
  ];

  return (
    <>
      <Header
        items={menuItems.map((item) => { return { name: item.name, key: item.key}})}
        selectedMenu={selectedMenu}
        setSelectedMenu={setSelectedMenu}
      />
      <MainContent>
        {menuItems.find((item) => item.key === selectedMenu)?.component({data})}
      </MainContent>
      <Footer />
    </>
  );
}

export default App;
