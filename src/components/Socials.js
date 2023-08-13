// next link
import Link from 'next/link'

// icons
import {
    RiGithubLine,
    RiNotionLine,
    RiSlackLine,
    RiDiscordLine,
    RiTwitterLine,
} from 'react-icons/ri'

const Socials = () => {
    return (
        <div className='flex items-center gap-x-5 text-lg'>
            <Link href={`https://github.com/gk7734`} className='hover:text-accent transition-all duration-300'>
                <RiGithubLine />
            </Link>
            <Link href={`https://gk7734.notion.site/cba4c6bc1db24f2a8ea900cb40de0b9c?pvs=4`} className='hover:text-accent transition-all duration-300'>
                <RiNotionLine />
            </Link>
            <Link href={``} className='hover:text-accent transition-all duration-300'>
                <RiSlackLine />
            </Link>
            <Link href={`https://discord.gg/vceDC5RgTt`} className='hover:text-accent transition-all duration-300'>
                <RiDiscordLine />
            </Link>
            <Link href={`https://twitter.com/sgk7734`} className='hover:text-accent transition-all duration-300'>
                <RiTwitterLine />
            </Link>
        </div>
    );
};

export default Socials;
