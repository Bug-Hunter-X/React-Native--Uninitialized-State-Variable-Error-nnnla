import React, { useState, useEffect } from 'react';

const MyComponent = () => {
  const [myVariable, setMyVariable] = useState(null);

  useEffect(() => {
    // Asynchronous operation to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('some-api-endpoint');
        const data = await response.json();
        setMyVariable(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* Use optional chaining to prevent errors if myVariable is undefined */}
      {myVariable?.value && <p>My Variable: {myVariable.value}</p>}
    </div>
  );
};

export default MyComponent;