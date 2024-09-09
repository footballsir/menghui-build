import '../style.css'
import Image from "next/image";
import profileimage from '../img/profileimage.svg'
import linkedin from '../img/linkedin.png'
import codepen from '../img/codepen.png'
import replit from '../img/replit.png'
import notion from '../img/notion.png'
import github from '../img/github.png'
import Link from 'next/link';
import email from '../img/email.png'


export default function Header() {
    return (
        <div className="container my-32 flex items-center z-50">
            <div className='w-full flex justify-between items-start md:items-center gap-4 flex-col xl:flex-row'>
                <div className='flex items-center gap-4'>
                    <Image src={profileimage} className='h-10 w-7'></Image>
                    <div className='p1'>Designed and developed by Menghui Hu @ 2024</div>
                </div>
                <div className='flex justify-betwee gap-3 flex-col md:flex-row' style={{ color: '#2d2d2d' }}>
                    <Link target='_blank' className='footer-link' href={'https://www.linkedin.com/in/menghui-hu-773566130/'}>
                        <Image src={linkedin} className='w-5 h-5'></Image>
                        <div>LinkedIn</div>
                    </Link>
                    <Link target='_blank' className='footer-link' href={'https://codepen.io/menghuihu'}>
                        <Image src={codepen} className='w-5 h-5'></Image>
                        <div>Codepen</div>
                    </Link>
                    {/* <Link target='_blank' className='footer-link' href={'https://menghuih.notion.site/Autodesk-project-3456a49aded04106ab7360c0523a08bd'}>
                        <Image src={notion} className='w-5 h-5'></Image>
                        <div>Notion</div>
                    </Link> */}
                    <Link target='_blank' className='footer-link' href={'mailto: menghuihu0405@gmail.com'}>
                        <Image src={email} className='w-5 h-5'></Image>
                        <div>Email</div>
                    </Link>
                    <Link target='_blank' className='footer-link' href={'https://github.com/footballsir'}>
                        <Image src={github} className='w-5 h-5'></Image>
                        <div>Github</div>
                    </Link>
                    <Link target='_blank' className='footer-link' href={'https://replit.com/@MenghuiHu'}>
                        <Image src={replit} className='w-5 h-5'></Image>
                        <div>Replit</div>
                    </Link>
                </div>

            </div>
        </div>
    );
}