import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Welcome to the FastAPI-React App</h2>
      <p className="mb-6 text-gray-600">
        This is a template application built with FastAPI backend and React/TailwindCSS frontend.
      </p>
      <div className="bg-gray-50 p-4 rounded-md border border-gray-200 mb-6">
        <h3 className="font-medium mb-2">Features:</h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-600">
          <li>FastAPI backend with automatic OpenAPI documentation</li>
          <li>React frontend with TailwindCSS for styling</li>
          <li>Docker setup for easy development and deployment</li>
          <li>API integration between frontend and backend</li>
        </ul>
      </div>
      <Link 
        to="/test_endpoint" 
        className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Go to Test Form
      </Link>
    </div>
  );
};

export default LandingPage;