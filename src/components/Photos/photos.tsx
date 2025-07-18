type Photo = {
  src: string;
  alt: string;
};

type PhotosProps = {
  photos: string[];
};

export const Photos = ({ photos }: PhotosProps) => {
  return (
    <div className="photos text-black text-center px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Our Photos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {photos.map((photo, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={photo}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
