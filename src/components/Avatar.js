import profileImage from "../assets/userPicture.png";

export default function Avatar({ src, size, onClick }) {
  return (
    <img
      src={src || profileImage}
      className="rounded-full cursor-pointer border-[1px] border-black"
      alt="user"
      width={size}
      height={size}
      onClick={onClick}
    />
  );
}
