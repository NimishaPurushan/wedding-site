import invitationImg from "../../assets/invitation.png";

export default function Invitation() {
  return (
    <div className="w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-pink-200 text-center p-6 sm:p-8 space-y-4">
      <img
        src={invitationImg}
        alt="Wedding Invitation"
        className="w-full h-auto rounded-lg shadow-md border border-pink-300 object-contain"
      />
    </div>
  );
}
