import { Address } from "../../components/Address";
import Layout from "../../components/Layout";
import {loadContent} from "../../utils/contentLoader.ts";
import { useEffect, useState } from "react";

type AddressProps= {
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
}

const defaultAddress: AddressProps = {
    venue: "",  
    mapLink: "",
    description: "",
    caption: ""
};

const defaultAddresses: Addresses = {
    Wedding: defaultAddress,
    Reception: defaultAddress,
    Sangeeth: defaultAddress,
    Haldi: defaultAddress
};


export const AddressPage = () => {

  const [addresses, setAddress] = useState<Addresses>();

  useEffect(() => {
    loadContent()
      .then((data) => setAddress(data.Addresses))
      .catch(() => setAddress(defaultAddresses)); // Fallback to default address on error
  }, []);

  return (
    <Layout>
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      {addresses && Object.keys(addresses).map((key) => {
        const address = addresses[key as keyof Addresses];
        return (
          <div key={key} className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{key}</h2>
            <Address venue={address.venue} mapLink={address.mapLink} description={address.description} caption={address.caption} />
          </div>
        );
      })}
    </div>
    </Layout>
  );
}