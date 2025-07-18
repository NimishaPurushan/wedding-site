import floralBg from '../../assets/background.jpg';
import { NavBar } from '../NavBar';

export default function Layout({ children }: { children: React.ReactNode }) {
  const layoutStyle = {
    backgroundImage: `url(${floralBg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  };
  return (
    <div
      className="w-screen min-h-screen bg-pink-100 bg-cover bg-center flex flex-col"
      style={layoutStyle}
    >
      <NavBar />
      <div className="flex flex-1 justify-center items-center px-4 sm:px-6 py-10">
        <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 text-center p-6 sm:p-8 space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
}
