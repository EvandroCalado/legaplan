import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      src="/Logo.svg"
      alt="logo"
      width={150}
      height={36}
      className="logo"
      priority
    />
  );
};
