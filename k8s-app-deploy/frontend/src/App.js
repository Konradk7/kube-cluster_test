import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    fetch("/api")
      .then(res => res.json())
      .then(json => setData(json.message || "No message"))
      .catch(err => setData("Error fetching from backend"));
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>React Frontend</h1>
      <p> API response: {data || "Loading..."}</p>
    </div>
  );
}

export default App;
