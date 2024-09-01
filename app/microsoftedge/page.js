import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'
import p1 from '../img/p11.png'
import p2 from '../img/p12.png'
import p3 from '../img/p13.png'



export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">

            <Header page={true} title={"Mircosoft Edge - Lead to reimagine world's #2 used browser for 240 million daily users"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Mircosoft Edge - Lead to reimagine world's #2 used browser for 240 million daily users</div>
                        <div className='p1 mt-10 max-w-3xl'>As a senior design leader for Edge design team, I work closely with <a target="_blank" className={'link'} href="https://www.linkedin.com/in/fryedesign/">Rob Frye</a> - head of design, <a target="_blank" className={'link'} href="https://www.linkedin.com/in/xiaodong-fan-59a7b82a/">Xiaodong Fan</a> - VP of Microsoft, and lead China’s Edge design team on various initiatives. My notable work includes leading redesign of the fundamental of Edge, building key feature package to re-imagine browser, visioning strategy to integrate AI with Edge and more. Over the past 2 years I helped Edge grew its DAU to over 240 million, with over 26% market share globally, and become #2 browser in the world.</div>
                        <Link href={'https://www.microsoft.com/en-us/edge'} target='_black' className='button mt-10'>Visit Edge Browser</Link>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v11.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Redesign the fundamental of Edge, it’s a design initiative but a product direction</div>
                        <div className='p1 mt-10 max-w-3xl'>Although Edge made its remarkable growth in the past 4 years since adopting Chromium and become world’s #2 used browser, it’s problems also start to reveal. Our users rate Edge as professional, but also tedious and cluttered, it’s less appealing compare to other browsers, especially Chrome. The massive amount of features that have been added to Edge made it’s framework shaky and hard to understand for users. So we realized it is the time to re-think our framework and tip the image around in our users heart, wo we can keep up in the industry.</div>

                        <div className='flex mt-20 justify-between gap-6 flex-col md:flex-row'>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#007CF3', fontWeight: '500' }}>
                                <div>85%</div>
                                <div className='p1'>Edge users have 2 browsers and usually use Edge only for work</div>
                            </div>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#FFBB25', fontWeight: '500' }}>
                                <div>25%</div>
                                <div className='p1'>Edge users find Edge unappealing</div>
                            </div>
                        </div>

                        <div className='p1 mt-20 max-w-3xl'>The re-think of Edge browser is a product direction. Our product principles are build around 3 key values: simple, quality and beautiful. And here is how we do it: <div className='mt-6'>1. Build separation between web content and browser content. <br />2. Build modular design system to reallocate the moving piece. <br />3. Build on top of Fluent design system but with Edge’s identity.</div>
                        </div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v12.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='w-full flex justify-center'>
                        <Image src={dividerS} alt="divider" className="my-20" />
                    </div>

                    <div className='container-page-flex'>
                        <Image src={p1} alt='components image' className='w-full rounded-3xl'></Image>
                        <div className='p1 mt-20 max-w-3xl'>The before and after results are stunning to us. One of the findings was, we tested new Edge with other browsers (covered up their brands) with over 40 candidates. The image of Edge browser was tipped just by its look and feel.
                        </div>
                        <Image src={p2} alt='components image' className='w-full rounded-3xl mt-20'></Image>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Re-imagine Edge, the new internet computer</div>
                        <div className='p1 mt-10 max-w-3xl'>The browser, in the past 10 years hasn’t changed a lot, however the internet has. People used to store things on their computer and hard drives, but now it’s on their cloud. People used install apps on their computer and now most apps are web apps. If I lose my computer today, none of my memories will be lost, I can get them any time from the web. And browser is the window through websites. So we feel this might be the time browser makes some changes.</div>
                        <div className='p1 mt-6 max-w-3xl'>One of our endeavors was to help people multitask on browser. As we believe multitasking is a big part, when browser starts to be more llike OS. I build the feature split screen from 0 to 1 to help people better multitask in the browser. It is by far the most successful feature that has been built into the Edge browser.</div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v13.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex'>
                        <div className='p1 mt-20 max-w-3xl'>The results of Split screen stunned us. It is the first time a single feature moves market share in Edge browser. It lifts the market share over 0.4%, that is over 80 million dollars when we convert it into ads revenue. It is the highest rated feature in almost all user studies. We see our fans writing on forums saying its the reason they are moving from Chrome to Edge.
                        </div>
                    </div>

                    <div className='container-page-flex'>
                        <div className='flex mt-20 justify-between gap-6 flex-col md:flex-row'>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#007CF3', fontWeight: '500' }}>
                                <div>0.4%</div>
                                <div className='p1'>Market share is gained through split screen</div>
                            </div>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#FFBB25', fontWeight: '500' }}>
                                <div>80 million</div>
                                <div className='p1'>Revenue is gained from the possible Ads income through split screen</div>
                            </div>
                        </div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Why is browser the best platform for AI</div>
                        <div className='p1 mt-10 max-w-3xl'>In the end of 2022, the wave of LLM storms across the world. Everyone wants their business to have something to do with AI. We at Edge also believe AI is the future, but more than that, we believe browser is the best platform for AI.</div>
                        <div className='p1 mt-10 max-w-3xl'>I believe in the future a general platform with these 3 qualities really matters to operate AI.
                            <br />1. It is accessible for user at anytime
                            <br />2. It has access to data
                            <br />3. It has access to apps
                            <br />So we shipped our first try with Edge + Copilot:
                        </div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v14.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex'>
                        <div className='p1 mt-20 max-w-3xl'>People are very excited about Copilot when it is first shipped. And we do too, and we believe it could change the browser industry. So our daily user of Copilot in Edge climbed to 2 million daily users very soon. However not everything is perfect, despite the rising DAU, we have some alarming patterns - the engagement seems low. So we discovered that the AI should be more integrated with the browser.
                        </div>
                        <div className='flex mt-20 justify-between gap-6 flex-col md:flex-row'>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#007CF3', fontWeight: '500' }}>
                                <div>80%</div>
                                <div className='p1'>Users only interact once in a session</div>
                            </div>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#FFBB25', fontWeight: '500' }}>
                                <div>15%</div>
                                <div className='p1'>Week over week user retention</div>
                            </div>
                        </div>
                        <div className='p1 mt-20 max-w-3xl'>We started to think, what if we can build Copilot really within the main flow of Edge Browser. What if our browser can organize for us, what if the browser can browse for us, what if the browser can do tasks for us? Here are some really exciting concepts we are exploring, check the example here.
                        </div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v15.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Team & people</div>
                        <div className='p1 mt-10 max-w-3xl'>I lead a team full of talented designers and vendors for Edge. Our team is located across Suzhou and Beijing. The photo was shot at Suzhou Shiquan Road 😊.</div>
                        <Image src={p3} alt='components image' className='w-full rounded-3xl mt-20'></Image>
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