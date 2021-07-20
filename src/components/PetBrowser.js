import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  
  return ( 
  <div className="ui cards">
    {pets.map((pet) => (
      <Pet 
      key={pet.id}
      name={pet.name}
      type={pet.type}
      gender={pet.gender}
      age={pet.age}
      weight={pet.weight}
      pet={pet}
      onAdoptPet={onAdoptPet}
    />
    ))}
  </div>
  )
}

export default PetBrowser;
