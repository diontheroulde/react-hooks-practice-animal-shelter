import React from "react";

function Pet({pet, onAdoptPet}) {
  const { name, weight, gender, type, age } = pet

  const handleAdoptPetClick = () => {
    onAdoptPet(pet.id)
  }
  
  return (
    <div className="card">
      <div className="content">
        <span className="header">
          {gender === "female" ? "♀" : "♂"}
          <br/>
          {name}
        </span>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">
          <p>Age: {age}</p>
          <p>Weight: {weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? (
        <button className="ui disabled button">Already adopted</button>
        ) : (
        <button className="ui primary button" onClick={handleAdoptPetClick}>Adopt pet</button>
        )}
      </div>
    </div>
  );
}

export default Pet;
