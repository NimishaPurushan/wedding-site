import invitationImg from "../../assets/invitation.png";

export default function Invitation() {
  return (
    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 text-center p-6 sm:p-8 space-y-4">
      {/* <h1 className="text-3xl sm:text-4xl font-serif font-bold text-pink-800">You're Invited!</h1>
        <p className="text-base sm:text-lg text-gray-700 font-light">Join us for a special celebration.</p>

        <div className="text-gray-800 space-y-1 sm:space-y-2 font-medium text-sm sm:text-base">
          <p><span className="font-semibold">Date:</span> June 15, 2024</p>
          <p><span className="font-semibold">Location:</span> The Grand Hall, 123 Celebration St.</p>
          <p><span className="font-semibold">Time:</span> 5:00 PM</p>
          <p className="text-xs sm:text-sm text-pink-700 italic">Please RSVP by May 1, 2024.</p>
        </div> */}

      <img
        src={invitationImg}
        alt="Wedding Invitation"
        className="w-full h-auto rounded-lg shadow-md border border-pink-300 object-contain"
      />
    </div>
  );
}
