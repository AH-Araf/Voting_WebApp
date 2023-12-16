import { useState, useEffect } from 'react';

const SelectPlace = () => {
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(null);

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [constituencies, setConstituencies] = useState([]);
  const [selectedConstituency, setSelectedConstituency] = useState(null);

  useEffect(() => {
    // Fetch divisions from the first API
    fetch('http://172.105.116.39:8000/api/election/public/areas/')
      .then(response => response.json())
      .then(data => setDivisions(data))
      .catch(error => console.error('Error fetching divisions:', error));
  }, []);

  useEffect(() => {
    // Fetch districts based on the selected division
    if (selectedDivision) {
      fetch(`http://172.105.116.39:8000/api/election/public/areas/${selectedDivision.id}`)
        .then(response => response.json())
        .then(data => setDistricts(data.districts || []))
        .catch(error => console.error('Error fetching districts:', error));
    }
  }, [selectedDivision]);

  useEffect(() => {
    // Fetch constituencies based on the selected district
    if (selectedDistrict) {
      fetch(`http://172.105.116.39:8000/api/election/public/areas/${selectedDistrict.id}`)
        .then(response => response.json())
        .then(data => setConstituencies(data.constituencies || []))
        .catch(error => console.error('Error fetching constituencies:', error));
    }
  }, [selectedDistrict]);
console.log(selectedDistrict);
  return (
    <div>
      {/* First dropdown for selecting division */}
      <select onChange={(e) => setSelectedDivision(JSON.parse(e.target.value))}>
        <option value="">Select Division</option>
        {divisions.map(division => (
          <option key={division.id} value={JSON.stringify(division)}>{division.name}</option>
        ))}
      </select>

      {/* Second dropdown for selecting district */}
      <select onChange={(e) => setSelectedDistrict(JSON.parse(e.target.value))}>
        <option value="">Select District</option>
        {districts.map(district => (
          <option key={district.id} value={JSON.stringify(district)}>{district.name}</option>
        ))}
      </select>

      {/* Third dropdown for selecting constituency */}
      <select onChange={(e) => setSelectedConstituency(JSON.parse(e.target.value))}>
        <option value="">Select Constituency</option>
        {constituencies.map(constituency => (
          <option key={constituency.id} value={JSON.stringify(constituency)}>{constituency.name}</option>
        ))}
      </select>

      {/* Display details of the selected constituency */}
      {selectedConstituency && (
        <div>
          <h2>{selectedConstituency.name}</h2>
          {/* Display other details as needed */}
        </div>
      )}
    </div>
  );
};

export default SelectPlace;
