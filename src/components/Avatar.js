// Next Img
import Image from "next/image";
import ExImg from "../../public/avatar.png"

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={ExImg} width={637} height={578} alt=''
    className='translate-z-0 w-full h-full opacity-90'/>
  </div>;
};

export default Avatar;
