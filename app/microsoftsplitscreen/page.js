import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'


export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">

            <Header page={true} title={"Microsoft - A closer look to Edge's #1 impactful feature - split screen from 0 to 1"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Microsoft - A closer look to Edge's #1 impactful feature - split screen from 0 to 1</div>
                        <div className='p1 mt-10 max-w-3xl'>I am the design lead for split screen from 0 to 1, partnered with China and US product, engineer team to drive the development. Split screen allows people to view 2 tabs in one screen, It is key for our vision to make Edge browser like system platform. From launch, split screen is the most well rated feature in Edge ever, and drove incredible business impact for a gain of 0.4% market share and about 80 million dollars. In this case study, we’ll walk through it from ground up to several rounds of iterations.</div>
                        <Link href={'https://www.microsoft.com/en-us/edge'} target='_black' className='button mt-10'>Visit Edge Browser</Link>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v13.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Ground up the concept, be inclusive - develop for All users not just Microsoft users</div>
                        <div className='p1 mt-10 max-w-3xl'>The initial concept came from one of Edge leaders, who wants to help Microsoft Office users to view documents side by side, the idea was to provide value between Microsoft products for growth. However, when I joined the project, we pivoted the direction from just for Office users to all web users. I believe as a platform it’s our responsibility to build for all users not just Microsoft users. </div>
                        <div className='p1 mt-10 max-w-3xl'>For all Edge users we empower them for 2 scenarios:
                            <br />1. Open a link in split screen from the current page to stay in context.
                            <br />2. Merge two tabs to view side by side.
                            <br />And when we build the concept and flight in Edge beta, it proved great success.</div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v21.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <div className='p1 mt-10 max-w-3xl'>After launch in beta we quickly get lots of users loving this feature, they write to us, tell us it’s there favorite feature in browser, and they are switching from Chrome to Edge because of it. However very soon we discover out first problem - the conversion rate from click on split screen button to open a valid split screen is very low.</div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>The first iteration - generalize the use case</div>
                        <div className='p1 mt-10 max-w-3xl'>To solve the low conversion problem. The first lesson we learned is we design the user journey too specific. Imagine what’s the most common behavior for user when they open a new tab in browser, it’s interacting with the address bar! However in split screen we totally removed the address bar on starting page. So our first iteration generalizes the use cases by adding back the address bar, open new tab page and so on.</div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v22.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <div className='p1 mt-10 max-w-3xl'>The results are substantial, we are able to improve the conversion rate from click on split screen button to open a valid page from 12% to over 30% by this improvement.</div>
                    </div>

                    <div className='container-page-flex'>
                        <div className='flex mt-20 justify-between gap-6 flex-col md:flex-row'>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#007CF3', fontWeight: '500' }}>
                                <div>12% -&gt; 30%</div>
                                <div className='p1'>Conversion rate from open to success</div>
                            </div>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#FFBB25', fontWeight: '500' }}>
                                <div>&gt;25%</div>
                                <div className='p1'>Week over week retention</div>
                            </div>
                        </div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>The second iteration - what's the most intuitive way for users</div>
                        <div className='p1 mt-10 max-w-3xl'>After shipping for a while, we discovered that the daily active users for the feature are relatively low. The biggest reason is that people think it’s very hard for them to remember using this feature. And we start to think what’s the most intuitive way for users? What might a child interacts with this feature? They would just grab 2 things and put them together right? So we have drag and drop.</div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v23.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <div className='p1 mt-10 max-w-3xl'>The other improvement we made was to create 2 independent address bar for 2 screens, so it can be most simple and understandable for users.</div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v24.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <div className='p1 mt-10 max-w-3xl'>With these improvements, we made it really easy for user to use split screen and anytime without mental burden. And we are able to grow the feature to over 1 million daily active users.</div>
                    </div>

                    <div className='container-page-flex'>
                        <div className='flex mt-20 justify-between gap-6 flex-col md:flex-row'>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#007CF3', fontWeight: '500' }}>
                                <div>&gt; 1 million</div>
                                <div className='p1'>Daily active users</div>
                            </div>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#FFBB25',fontWeight: '500' }}>
                                <div>&gt;30%</div>
                                <div className='p1'>Week over week retention</div>
                            </div>
                        </div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Emotional connection - little surprises that made our users love this feature. </div>
                        <div className='p1 mt-10 max-w-3xl'>A good feature not only is useful but also connect with people emotionally. In Edge, people those details that improve people’s productivity delight and impress users. I gain the inspiration form those games that people accidentally trigger surprise. I build this the shortcut for people to scroll both screen at the same time, our users love it when compare lists, documents, translations.</div>
                    </div>

                    <div className='container-page-full mt-20'>
                        <video autoPlay loop muted preload="auto" className='w-full' width='1280'>
                            <source src="/v25.mp4" type="video/mp4" />
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