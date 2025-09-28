type AddressProps = {
  venue: string;
  mapLink: string;
  description?: string;
  caption?: string;
  date?: string;
};

export const Address = (address: AddressProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-orange-100 bg-cover bg-center px-4 sm:px-6 py-10">
      <section className="flex flex-col items-center justify-center p-6 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800">{address.caption}</h2>
        <p className="text-gray-600">{address.description}</p>

        {/* Date with subtle, elegant style */}
        <p className="text-lg font-medium text-pink-700 tracking-wide">
          {address.date}
        </p>

        {/* Venue with bold, standout style */}
        <p className="text-xl font-semibold text-gray-600">{address.venue}</p>
      </section>
      <section className="flex-1 min-w-[350px] max-w-[500px]">
        <iframe
          src={address.mapLink}
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps"
          className="rounded-md shadow-md"
        ></iframe>
      </section>
    </div>
  );
};
