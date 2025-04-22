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
    </div>
  );
};

export default ErrorPage;
