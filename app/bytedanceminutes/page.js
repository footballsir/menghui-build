import '../style.css'
import Header from '../components/Header';
import Footer from '../components/Footer'
import Image from 'next/image';
import Link from 'next/link';
import dividerS from '../img/divider-s.svg'
import p1 from '../img/p41.png'

export default function Microedge() {
    return (
        <main className="background-1 w-full min-h-screen flex flex-col items-center">

            <Header page={true} title={"Lark Minutes - Smart meeting transcription companion"}></Header>

            <div className='container-project'>
                <div className='container-page'>
                    <div className='container-page-flex'>
                        <div className='h1 max-w-3xl'>Lark Minutes - Smart meeting transcription companion</div>
                        <div className='p1 mt-10 max-w-3xl'>Lark Minutes is a smart video transcription tool for meetings, interviews, conferences. As the product design lead, I incubated the product from 0 to 1 and continued leading design crafts in interations. I was responsible for design management for 3 designers driving design strategy, roadmap and design review. As one of featured products, Bytedance Minutes was luanched in Nov 2020 on Bytedance conferenceand grew from thousands of beta users to 0.5 million monthly users in 2021.</div>
                        <Link href={'https://www.feishu.cn/product/minutes'} target='_black' className='button mt-10'>Visit Lark Minutes</Link>
                    </div>

                    <div className='container-page-full mt-20' style={{ background: 'linear-gradient(108deg, #DFEAFF 0%, #91BDFF 100%)' }}>
                        <div className='w-full px-20 py-12 overflow-hidden'>
                            <video autoPlay loop muted preload="auto" className='w-full rounded-lg shadow-lg'>
                                <source src="/v41.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Why minutes - product incubation from 0 to 1</div>
                        <div className='p1 mt-10 max-w-3xl'>Have you encountered situations that you just want to find something that was talked from a previous meeting? A lot of people do, they are project managers, marketing specialists, assitants... They want to keep a record, summarize take aways and keep a transcription. So the MVP of Minutes starts with in Lark suite experience. When the user finished recording a meeting, Lark will send an in app message with the meeting Minutes. It gives user a seamless experience when they needs to record & transcribe an important meeting. </div>

                        <div className='w-full mt-20 overflow-hidden rounded-3xl ' style={{ backgroundColor: '#f4f4f4' }}>
                            <video autoPlay loop muted preload="auto" className='w-full rounded-3xl shadow-lg mt-10'>
                                <source src="/v42.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className='p1 mt-20 max-w-3xl'>
                            Lark Minutes was launched at Bytedance Conference in 2020 as one of the featured products for Lark suite. Brand value - Lark branded itself as a next-gen team collaboration suite. Minutes served as a cutting edge product for integrating video and text information that greatly increases company's efficiency. User acquisition - For Minutes, this is a great opportunity for the product to go get users and go viral.
                            <Image src={p1} alt='components image' className='w-full rounded-3xl mt-20'></Image>
                        </div>


                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Iteration that drove growth</div>
                        <div className='p1 mt-10 max-w-3xl'>After launching the product I drove multiple rounds of iterations that really boosted the growth of product. The transcription accuracy and efficiency to share with others are top 2 problems we encountered. </div>

                        <div className='p1 mt-10 max-w-3xl'>To improve the share efficiency and make the product go virus we build the feature clip. Minutes are usually generated from meetings, interviews that easily go beyond an hour. With video clip, the user can highlight the most important information and share that with others.</div>
                    </div>

                    <div className='container-page-full mt-20' style={{ background: 'linear-gradient(108deg, #E5C4FF 0%, #F6CBD0 100%)' }}>
                        <div className='w-full px-20 py-12 overflow-hidden'>
                            <video autoPlay loop muted preload="auto" className='w-full rounded-lg shadow-lg'>
                                <source src="/v43.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='container-page-flex mt-20'>
                        <div className='p1 max-w-3xl'>We also leverage AI to help improve accuracy, for example recognize terms. Minutes integrates with company vocabulary to recognize words that are hard to transcribe such as professional terminologies and people’s name etc. Here is an example when the user is editing with transcription.
                        </div>
                    </div>

                    <div className='container-page-full mt-20' style={{ background: 'linear-gradient(108deg, #E5C4FF 0%, #F6CBD0 100%)' }}>
                        <div className='w-full px-20 py-12 overflow-hidden'>
                            <video autoPlay loop muted preload="auto" className='w-full rounded-lg shadow-lg'>
                                <source src="/v44.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Minutes on mobile - cross device experience</div>
                        <div className='p1 mt-10 max-w-3xl'>Consume & record from anywhere - users take most of complex actions on desktop, while the mobile app provides user with the quick access to consume and record at anytime. The design optimizes for mobile scenario and interaction, it reserves as much space as possible for content, also allows Minutes running in the background.</div>
                    </div>

                    <div className='container-page-full mt-20' style={{ background: 'linear-gradient(108deg, #DFEAFF 0%, #91BDFF 100%)' }}>
                        <div className='w-full px-20 py-12 overflow-hidden flex items-center justify-around'>
                            <video autoPlay loop muted preload="auto" className='shadow-lg' style={{ width: '375px' }}>
                                <source src="/v45.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>

                            <video autoPlay loop muted preload="auto" className='shadow-lg' style={{ width: '375px' }}>
                                <source src="/v46.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>

                    <div className='container-page-flex mt-48'>
                        <div className='w-6 h-6 rounded-full background-a mb-4'></div>
                        <div className='h1 max-w-3xl'>Drive product and business</div>
                        <div className='p1 mt-10 max-w-3xl'>Mintues offers admin feature gives our client access control on the company level. It is a premium feature for Minutes. On top of admin accessibility, Minutes also charge based on storage usage. It gives client different levels of solutions for different tiers.</div>
                    </div>

                    <div className='container-page-flex'>
                        <div className='flex mt-20 justify-between gap-6 flex-col md:flex-row'>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#007CF3', fontWeight: '500' }}>
                                <div>&gt; 0.5 million</div>
                                <div className='p1'>Monthly active users</div>
                            </div>
                            <div className='h-xl flex flex-col justify-between p-12 w-full h-96 rounded-3xl' style={{ backgroundColor: '#F8F9FA', color: '#FFBB25', fontWeight: '500' }}>
                                <div>&gt;600</div>
                                <div className='p1'>Sales made to key accounts</div>
                            </div>
                        </div>
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