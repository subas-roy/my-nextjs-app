import ProductCard from '@/compenents/products/ProductCard';

const HomePage = async () => {
  const res = await fetch('http://localhost:5000/products');
  const products = await res.json();
  console.log(products);

  return (
    <div className="text-center">
      <h1 className="text-2xl text-center">Welcome to Next.Js Home Page</h1>

      <div className="grid grid-cols-3 gap-8 w-[90%] mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
