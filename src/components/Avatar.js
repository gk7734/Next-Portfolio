// Next Img
import Image from "next/image";
import ExImg from "../../public/avatar.png"

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    <Image src={ExImg} width={737} height={678} alt=''
    className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;
