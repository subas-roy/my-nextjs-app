import Image from 'next/image';

import nextImg from '@/assets/nextjs-img.png'; // Use Import Aliases (import from absolute path)

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

      <h1>Local Image</h1>
      <Image
        src={nextImg}
        alt="Local Image"
        width={500}
        height={500}
        className="mx-auto"
      />

      <h1>Local Image in Regular img Tag</h1>
      <img
        src={nextImg}
        alt="Local Image"
        width={500}
        height={500}
        className="mx-auto"
      />
    </div>
  );
};

export default GalleryPage;
