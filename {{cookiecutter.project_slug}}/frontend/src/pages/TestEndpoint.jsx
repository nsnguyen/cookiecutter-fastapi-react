import React, { useState } from 'react';
import DataForm from '../components/DataForm';
import ResponseDisplay from '../components/ResponseDisplay';
import { Link } from 'react-router-dom';

const TestEndpoint = () => {
  const [response, setResponse] = useState(null);
  
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Test Data Endpoint</h2>
        <Link 
          to="/" 
          className="text-blue-500 hover:text-blue-700 font-medium"
        >
          Back to Home
        </Link>
      </div>
      <DataForm onDataSubmit={setResponse} />
      <ResponseDisplay response={response} />
    </div>
  );
};

export default TestEndpoint;