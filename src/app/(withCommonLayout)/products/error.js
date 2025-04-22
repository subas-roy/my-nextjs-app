'use client';
import React from 'react';

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <div>
      <h1 className="text-xl text-center text-red-500 my-5">
        Something went wrong!!!
      </h1>
      <p className="text-center text-red-500 my-5">{error.message}</p>
      <div className="text-center">
        <button
          onClick={() => reset()}
          className="bg-red-500 p-2 rounded-md hover:bg-green-700"
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
