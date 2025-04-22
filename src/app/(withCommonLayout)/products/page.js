import ProductCard from '@/compenents/products/ProductCard';

const AllProductsPage = async () => {
  const res = await fetch('http://localhost:5000/products', {
    cache: 'no-store', // create html file in request-time and fetch latest data
  });
  const products = await res.json;
  // console.log(products);

  return (
    <div>
      <h1 className="text-center text-3xl">All Products</h1>
      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
