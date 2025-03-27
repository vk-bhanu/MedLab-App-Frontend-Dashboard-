import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
  const categories = ["ABO Incompatibility", "Acid Base Imbalance", "Acute Phase Reactant", "Adrenal gland function", "AIDS", "Allergy"];
  
  return (
    <div className="sidebar">
      <h3>Show all categories</h3>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
