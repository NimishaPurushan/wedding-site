import { Address } from "../../components/Address";
import useContentLoader from "../../utils/contentLoader";

type AddressProps = {
  venue: string;
  mapLink: string;
  description?: string;
  caption?: string;
};

type Addresses = {
  Wedding: AddressProps;
  Reception: AddressProps;
  Sangeeth: AddressProps;
  Haldi: AddressProps;
};

const defaultAddress: AddressProps = {
  venue: "",
  mapLink: "",
  description: "",
  caption: "",
};

export const AddressPage = () => {
  const { content, error, loading } = useContentLoader();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  const addresses = content?.Addresses || defaultAddress;
  console.log("Addresses:", addresses);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {addresses &&
        Object.keys(addresses).map((key) => {
          const address = addresses[key as keyof Addresses];
          return (
            <div key={key} className="mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">{key}</h2>
              <Address
                venue={address.venue}
                mapLink={address.mapLink}
                description={address.description}
                caption={address.caption}
                date={address.date}
              />
            </div>
          );
        })}
    </div>
  );
};
