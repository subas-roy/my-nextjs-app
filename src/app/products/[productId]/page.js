import React from 'react';

const DynamicProductPage = async ({ params, searchParams }) => {
  const productId = await params.productId;
  console.log(await searchParams);
  return (
    <div>
      <h1>This is DynamicProductPage {productId}</h1>
    </div>
  );
};

export default DynamicProductPage;
