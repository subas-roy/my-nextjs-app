import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 ">
      <div className="relative w-full h-52 object-contain">
        <Image
          src={product.image}
          alt={product.productName}
          width={500}
          height={500}
          className="rounded-t-lg t-56"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">
            {product.productName}
          </h2>

          <span className="ml-4 bg-blue-100 text-blue-800 text-xs">
            {product.category}
          </span>
        </div>
        <p className="text-gray-800">
          Brand: <span>{product.brand}</span>
        </p>
        <p className="text-gray-800">{product.price}</p>
        <div>
          <Link className="text-gray-800" href={`/product/${product.id}`}>
            See Details
          </Link>
          <button className="text-gray-800">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
