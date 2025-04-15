import React from 'react';

const DynamicProductPage = async ({ params }) => {
  const productId = await params.productId;
  return (
    <div>
      <h1>This is DynamicProductPage {productId}</h1>
    </div>
  );
};

export default DynamicProductPage;
