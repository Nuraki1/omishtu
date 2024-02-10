import React, { useState } from 'react';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  // Error boundary callback
  const handleError = (error, errorInfo) => {
    // You can log the error or send it to an error reporting service
    console.error(error, errorInfo);
    // Update state to indicate an error occurred
    setHasError(true);
  };

  // Reset error state
  const handleResetError = () => {
    setHasError(false);
  };

  if (hasError) {
    // Render fallback UI when an error occurs
    return (
      <div>
        <h2>Something went wrong.</h2>
        <button onClick={handleResetError}>Try again</button>
      </div>
    );
  }

  // Render children normally if no error occurred
  return children;
}

export default ErrorBoundary;