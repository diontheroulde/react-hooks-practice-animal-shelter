import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });
  

 

  
  const handleChangeType = (type) => {
    setFilters({type : type  })
  }

  const handleFindPetsClick = () => {
    let url = "http://localhost:3001/pets"
    
    if (filters.type !== "all") {
      url += `?type=${filters.type}`
    }
      fetch(url)
      .then(res => res.json())
      .then(data => setPets(data))
    
  }
 
  const handleAdoptPet = (id) => {
    const newPetList = pets.map((pet) => {
     return pet.id === id ? {...pet, isAdopted: true } : pet
    })
    setPets(newPetList)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters 
            onChangeType={handleChangeType}
            onFindPetsClick={handleFindPetsClick}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoptPet} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
