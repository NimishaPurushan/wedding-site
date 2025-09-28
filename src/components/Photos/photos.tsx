type PhotoProps = { url: string; title?: string | null };

export const Photos = (photo: PhotoProps) => {
  return (
    <div className="overflow-hidden rounded-lg shadow-md">
      <img
        src={photo.url}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};
