import Layout from "../../components/Layout";
import Photos from "../../components/Photos";

export const PhotosPage = () =>{
    const photos = [
        // Add your photo URLs here
        "photos/IMG_9893.jpeg",
        "photos/IMG_9895.jpeg",
        "photos/IMG_9897.jpeg",
        "photos/IMG_9898.jpeg"
    ];
    return (
        <Layout>
        <div className="flex flex-col items-center justify-center min-h-screen bg-white">
            <Photos photos={photos} />
        </div>
        </Layout>
    );
}