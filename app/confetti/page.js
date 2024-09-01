import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'


export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">
            
            <Header page={true} title={"Confetti for celebration moments"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Confetti for celebration moments</div>
                        <div className='p1 mt-10 max-w-3xl'>The confetti animation is designed for celebratory moments, when the user completes a milestone. The random elements in SVG are generated by Python. The code was shipped on ibi app.</div>
                        <Link href={'https://codepen.io/menghuihu/pen/abbGZJo/32e3855bc186902eddc9dc1d3e6441a0'} target='_black' className='button mt-10'>View on Codepen</Link>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v81.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>


                    <div className='w-full flex justify-center'>
                        <Image src={dividerS} alt="divider" className="my-20" />
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </main>
    );
}