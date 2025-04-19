import Image from 'next/image';

const GalleryPage = () => {
  return (
    <div className="text-center">
      <h1>Regular Image Tag</h1>
      <img
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images"
        alt="Normal image"
        className="mx-auto"
      />

      <h1>Next.Js Image Component</h1>
      <Image
        src="https://nextjs.org/api/docs-og?title=Optimizing:%20Images"
        alt="Next image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
