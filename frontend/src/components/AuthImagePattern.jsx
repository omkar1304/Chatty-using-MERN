import {
  BellPlus,
  CheckCheck,
  Clapperboard,
  Handshake,
  Image,
  MessageCircleMore,
  Paperclip,
  UserRound,
  Users,
} from "lucide-react";

const commonIconClass =
  "size-10 hover:size-12 transition ease-in-out duration-300 cursor-pointer";

const patternArray = [
  <CheckCheck className={`${commonIconClass}`} />,
  <MessageCircleMore className={`${commonIconClass}`} />,
  <BellPlus className={`${commonIconClass}`} />,
  <Paperclip className={`${commonIconClass}`} />,
  <UserRound className={`${commonIconClass}`} />,
  <Image className={`${commonIconClass}`} />,
  <Handshake className={`${commonIconClass}`} />,
  <Users className={`${commonIconClass}`} />,
  <Clapperboard className={`${commonIconClass}`} />,
];

const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`flex justify-center items-center aspect-square rounded-2xl bg-primary/10 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            >
              {patternArray[i]}
            </div>
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;
