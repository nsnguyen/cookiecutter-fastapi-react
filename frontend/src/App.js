import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import TestEndpoint from './pages/TestEndpoint';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Python-React App</h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="border-4 border-dashed border-gray-200 rounded-lg p-4 bg-white">
                <Routes>
                  <Route path="/" element={<LandingPage />} />
                  <Route path="/test_endpoint" element={<TestEndpoint />} />
                </Routes>
              </div>
            </div>
          </div>
        </main>
        <footer className="bg-white shadow-inner mt-auto">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 text-center text-gray-500">
            <p>Python-React Template &copy; {new Date().getFullYear()}</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
