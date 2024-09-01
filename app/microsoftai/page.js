import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import p1 from '../img/p31.png'
import p2 from '../img/p32.png'
import dividerS from '../img/divider-s.svg'


export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">

            <Header page={true} title={"Microsoft AI - Hack with Figma plugin and Microsoft teams apps for AI powered research"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Microsoft AI - Hack with Figma plugin and Microsoft teams apps for AI powered research</div>
                        <div className='p1 mt-10 max-w-3xl'>I developed a Figma plugin to help 500+ Microsoft designers, engineers, product managers in China and US to better conduct user research by creating discussion guide and research templates. In 2023 the wave of GPT stormed tech industry. AI is important not only for Microsoft products but also the way we work. When it first came out I took the chance to practice prompt engineering. The project own <a className={'link'}>Microsoft hackathon #1 place</a> and impacted lots of people's work flow.</div>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <div style={{ position: 'relative', height: '0', paddingBottom: '64.63195691202873%' }}>
                            <iframe src={"https://www.loom.com/embed/c040c51988e843629c1d260b6b755912?sid=a0474905-026c-4d46-a367-b66b4a728c16"} frameBorder={"0"} allowFullScreen style={{ width: '100%', height: '100%', position: 'absolute', top: '0', left: '0' }}></iframe>
                        </div>
                    </div>

                    <div className='container-page-flex'>
                        <div className='p1 mt-20 max-w-3xl'>
                            Here is a snippet of code using Prompt engineering and function calling in the back end for the plugin.
                        </div>
                        <Image src={p1} alt='components image' className='w-full rounded-3xl mt-20'></Image>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Empower search across previous research with AI</div>
                        <div className='p1 mt-10 max-w-3xl'>I soon realized that prior data is a unique value for AI to search and retrieve. At Microsoft we have thousands of data and research that has been conducted. I talked to lots of fellows inside the company, they complain that at many times their assumptions or hypothesis are already resolved in previous findings did by someone else, they just did not know it exists. This time I build a teams application that gathers all research data in Microsoft, so people can talk to it to quickly learn about everything that has been done before.</div>
                    </div>

                    <div className='container-page-full'>
                        <Image src={p2} alt='components image' className='w-full mt-20'></Image>
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