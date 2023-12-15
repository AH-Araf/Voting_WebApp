//SelectPlace

import { useState, useEffect } from 'react';

const SelectPlace = () => {
  const [divisions, setDivisions] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState(null);

  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState(null);

  const [subDistricts, setSubDistricts] = useState([]);
  const [selectedSubDistrict, setSelectedSubDistrict] = useState(null);

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
    // Fetch sub-districts based on the selected district
    if (selectedDistrict) {
      fetch(`http://172.105.116.39:8000/api/election/public/areas/${selectedDistrict.id}`)
        .then(response => response.json())
        .then(data => {
          // Ensure that data is an array
          const subDistrictData = Array.isArray(data) ? data : data.sub_districts || [];
          setSubDistricts(subDistrictData);
        })
        .catch(error => console.error('Error fetching sub-districts:', error));
    }
  }, [selectedDistrict]);

  useEffect(() => {
    // Fetch constituencies based on the selected sub-district
    if (selectedSubDistrict) {
      fetch(`http://172.105.116.39:8000/api/election/public/areas/${selectedSubDistrict.id}`)
        .then(response => response.json())
        .then(data => setConstituencies(data.constituencies || []))
        .catch(error => console.error('Error fetching constituencies:', error));
    }
  }, [selectedSubDistrict]);
// console.log(districts);
// console.log(subDistricts);
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

      {/* Third dropdown for selecting sub-district */}
      <select onChange={(e) => setSelectedSubDistrict(JSON.parse(e.target.value))}>
        <option value="">Select Sub-District</option>
        {subDistricts.map(subDistrict => (
          <option key={subDistrict.id} value={JSON.stringify(subDistrict)}>{subDistrict.name}</option>
        ))}
      </select>

      {/* Fourth dropdown for selecting constituency */}
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





// import { useState, useEffect } from 'react';

// const SelectPlace = () => {
//   const [areas, setAreas] = useState([]);
//   const [selectedArea, setSelectedArea] = useState(null);

//   const [subDistricts, setSubDistricts] = useState([]);
//   const [selectedSubDistrict, setSelectedSubDistrict] = useState(null);

//   const [constituencies, setConstituencies] = useState([]);
//   const [selectedConstituency, setSelectedConstituency] = useState(null);

//   const [constituencyDetails, setConstituencyDetails] = useState(null);

//   useEffect(() => {
//     fetch('http://172.105.116.39:8000/api/election/public/areas/')
//       .then(response => response.json())
//       .then(data => setAreas(data))
//       .catch(error => console.error('Error fetching areas:', error));
      
//   }, []);

//   useEffect(() => {
//     if (selectedArea) {
//       fetch(`http://172.105.116.39:8000/api/election/public/areas/${selectedArea.id}`)
//         .then(response => response.json())
//         .then(data => {
//           if (Array.isArray(data)) {
//             setSubDistricts(data);
//           } else if (Array.isArray(data[0]?.sub_districts)) {
//             setSubDistricts(data[0].sub_districts);
//           } else {
//             console.error("Unexpected data structure for sub-districts:", data);
//           }
//         })
//         .catch(error => console.error('Error fetching sub-districts:', error));
//     }
//   }, [selectedArea]);

//   useEffect(() => {
//     if (selectedArea && selectedSubDistrict) {
//       fetch(`http://172.105.116.39:8000/api/election/public/constituencies/${selectedSubDistrict.id}`)
//         .then(response => response.json())
//         .then(data => setConstituencies(data))
//         .catch(error => console.error('Error fetching constituencies:', error));
//     }
//   }, [selectedArea, selectedSubDistrict]);

//   useEffect(() => {
//     if (selectedConstituency) {
//       fetch(`http://172.105.116.39:8000/api/election/public/constituencies/${selectedConstituency.id}`)
//         .then(response => response.json())
//         .then(data => setConstituencyDetails(data))
//         .catch(error => console.error('Error fetching constituency details:', error));
//     }
//   }, [selectedConstituency]);
// console.log(subDistricts);
//   return (
//     <div>
//       <select onChange={(e) => setSelectedArea(JSON.parse(e.target.value))}>
//         <option value="">Select Area</option>
//         {areas.map(area => (
//           <option key={area.id} value={JSON.stringify(area)}>{area.name}</option>
//         ))}
//       </select>

//       <select onChange={(e) => setSelectedSubDistrict(JSON.parse(e.target.value))}>
//         <option value="">Select Sub-District</option>
//         {subDistricts.map(subDistrict => (
//           <option key={subDistrict.id} value={JSON.stringify(subDistrict)}>{subDistrict.name}</option>
//         ))}
//       </select>

//       <select onChange={(e) => setSelectedConstituency(JSON.parse(e.target.value))}>
//         <option value="">Select Constituency</option>
//         {constituencies.map(constituency => (
//           <option key={constituency.id} value={JSON.stringify(constituency)}>{constituency.name}</option>
//         ))}
//       </select>

//       {constituencyDetails && (
//         <div>
//           <h2>{constituencyDetails.name}</h2>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SelectPlace;

