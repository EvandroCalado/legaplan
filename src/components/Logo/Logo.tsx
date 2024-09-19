import Image from 'next/image';
import logo from '../../../public/logo.svg';

export const Logo = () => {
  return (
    <Image
      src={logo}
      alt='logo'
      width={150}
      height={36}
      className='logo'
      priority
    />
  );
};
