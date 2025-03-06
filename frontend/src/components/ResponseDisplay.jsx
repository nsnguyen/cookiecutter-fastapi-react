import React from 'react';

const ResponseDisplay = ({ response }) => {
  if (!response) return null;
  
  return (
    <div className="mt-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Response</h2>
      <div className="border rounded-lg p-4 bg-gray-50">
        {response.status && (
          <div className="mb-2">
            <span className="font-bold">Status:</span>{' '}
            <span className={response.status === 'success' ? 'text-green-600' : 'text-blue-600'}>
              {response.status}
            </span>
          </div>
        )}
        
        {response.message && (
          <div className="mb-2">
            <span className="font-bold">Message:</span>{' '}
            {response.message}
          </div>
        )}
        
        {response.timestamp && (
          <div className="mb-2">
            <span className="font-bold">Timestamp:</span>{' '}
            {new Date(response.timestamp).toLocaleString()}
          </div>
        )}
        
        {response.data && (
          <div>
            <span className="font-bold">Data:</span>
            <pre className="mt-2 bg-gray-100 p-2 rounded overflow-x-auto">
              {JSON.stringify(response.data, null, 2)}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResponseDisplay;
