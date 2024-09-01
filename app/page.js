import Image from "next/image";
import Link from 'next/link';
import './style.css'
import Header from './components/Header.js'
import ProjectCard from "./components/ProjectCard.js";
import profileImage from './img/profileimage.svg'
import Footer from './components/Footer.js'
import a1 from './img/a1.svg'
import a2 from './img/a2.svg'
import a3 from './img/a3.svg'
import a4 from './img/a4.svg'
import a5 from './img/a5.svg'
import a6 from './img/a6.svg'
import dividerS from './img/divider-s.svg'
import project1 from './img/project-1.png'
import project2 from './img/project-2.png'
import project3 from './img/project-3.png'
import project4 from './img/project-4.png'
import project5 from './img/project-5.png'
import project6 from './img/project-6.png'
import project7 from './img/project-7.png'
import project8 from './img/project-8.png'
import project9 from './img/project-9.png'
import project10 from './img/project-10.png'
import project11 from './img/project-11.png'

import { Bricolage_Grotesque } from "next/font/google";
const bricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });



export default function Home() {
  return (
    <main className="background-1 w-full min-h-screen flex flex-col items-center">


      <Header></ Header>
      <div className="container mt-36 relative">
        <Image src={a2} alt="illustration" className="absolute animation-3" style={{ top: '40px', right: '40%' }} />
        <Image src={a3} alt="illustration" className="absolute animation-4" style={{ top: '-120px', left: '40px' }} />
        {/* <Image src={a4} alt="illustration" className="absolute animation-5" style={{ top: '320px', left: '400px' }} /> */}
        <Image src={a1} alt="illustration" className="absolute animation-6" style={{ top: '-120px', right: '180px' }} />
        <Image src={a6} alt="illustration" className="absolute animation-1" style={{ top: '376px', right: '-40px' }} />
        {/* <Image src={a1} alt="illustration" className="absolute animation-2" style={{ top: '500px', left: '-40px' }} /> */}

        <div className="w-full h-full z-10 relative">
          <Image
            src={profileImage}
            alt="Profile Image"
            width={80}
            height={120}
          />
          <div className={`${bricolageGrotesque.className} mt-6 h-xl`}>I am Menghui,<br />Senior design leader at Microsoft</div>
          <div className="mt-6 p1 max-w-3xl" style={{lineHeight:'28px'}}>Hey there, I'm Menghui. I lead product design and a team of talented designers at Microsoft Edge browser global experience for 240 million daily users. I have 8+ years of experience leading design, products and designers at San Francisco and Shanghai. I love building things that are useful, ethical, and beautiful.</div>
        </div>
      </ div>

      <div className={`container mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 z-10`}>
        <Link href={'/microsoftedge'}>
          <ProjectCard tag={[['Product design', 'blue'], ['Design leader', 'yellow']]} title1={'Microsoft'} title2={'Edge browser - Reimagine world\'s #2 used browser for 240 million daily users'} image={project1}></ProjectCard>
        </Link>
        <Link href={'/microsoftsplitscreen'}>
          <ProjectCard tag={[['Product design', 'blue'], ['Design leader', 'yellow']]} title1={'Microsoft'} title2={'A closer look to Edge browser’s #1 rated feature - split screen from 0 to 1'} image={project2}></ProjectCard>
        </Link>
        <Link href={'/microsoftai'}>
        <ProjectCard tag={[['Hack', 'red'], ['GPT', 'purple']]} title1={'Microsoft'} title2={'Get hands dirty with AI - Hack with Figma plugin and Microsoft teams apps for AI powered research'} image={project3}></ProjectCard>
        </Link>
        <Link href={'/bytedanceminutes'}>
          <ProjectCard tag={[['Product design', 'blue'], ['Design leader', 'yellow']]} title1={'Bytedance'} title2={'Lark Minutes - Smart meeting transcription companion'} image={project4}></ProjectCard>
        </Link>
        <Link href={'/bytedanceds'}>
          <ProjectCard tag={[['Design system', 'green'], ['Leader', 'yellow']]} title1={'Bytedance'} title2={'2.0 Lark design system, dark mode and color systems'} image={project5}></ProjectCard>
        </Link>
        <Link href={'/bytedanceplugin'}>
          <ProjectCard tag={[['Hack', 'red'], ['Figma', 'purple']]} title1={'Figma plugin'} title2={'Dark mode switcher, integrated with Bytedance\'s design system'} image={project6}></ProjectCard>
        </Link>
        <Link href={'/loader'}>
          <ProjectCard tag={[['Creative', 'red'], ['Javascript', 'purple']]} title1={'Prototype'} title2={'Upthere\'s loader with Javascript'} image={project7}></ProjectCard>
        </Link>
        <Link href={'/confetti'}>
          <ProjectCard tag={[['Creative', 'red'], ['Python', 'purple']]} title1={'Prototype'} title2={'Confetti for celebration moments'} image={project8}></ProjectCard>
        </Link>
        <Link href={'/surveymonkey'}>
          <ProjectCard tag={[['Product design', 'blue']]} title1={'Surveymonkey'} title2={'Core survey creation and onboarding experience'} image={project9}></ProjectCard>
        </Link>
        <Link href={'/autodesk'}>
          <ProjectCard tag={[['Product design', 'blue']]} title1={'Autodesk'} title2={'Autodesk drive for online 3D model collaboration'} image={project10}></ProjectCard>
        </Link>
        {/* <Link href={'/selector'}>
          <ProjectCard tag={[['Prototype', 'red'], ['Javascript', 'purple']]} title1={'Prototype'} title2={'Mosaic view and photo selector interaction'} image={project11}></ProjectCard>
        </Link> */}
      </div>

      <Image src={dividerS} alt="divider" className="my-32" />

      <div className="container">
        <div className="bio">
          <div className="p1 w-full">I’m currently a senior design leader at Microsoft Edge team. Since 2016 I designed products with companies such as Microsoft, Bytedance, SurveyMonkey and more. I love building products that solve people problem and tinkering with code.<br /><br />At early 2012, I discovered my passion for building internet products when I was at my undergrad studying industrial design. That led me to further pursue human computer interaction at Carnegie Mellon University in grad school.</div>
          <div className="p1 w-full">My first job as a designer started at SurveyMonkey in 2016, where I designed its onboarding with <a target="_blank" className={'link'} href="https://www.linkedin.com/in/luciaciccio/">Lucia Ciccio</a> and core survey experience with <a target="_blank" className={'link'} href="https://www.linkedin.com/in/supafrenz/">Jonathan Remulla</a>. After SurveyMonkey, I joined Laurent Baumann and the rest of the incredibly talented folks at Uphtere as a founding designer, later sold the company to Western Digital.<br /><br />In 2020 When padenmic came, I decided to relocate back to China for a while, then joined Bytedance as a product design lead/manager on its enterprise products. I led the design of innovation lab for video conference, and part of design archetecture projects across the orgnization. I incubated Lark Minutes from 0 to 1 and I lead several big version updates for Lark.</div>
          <div className="p1 w-full">In my current job at Microsoft, I lead design and a team of talented designers for Edge browser globally. I partner with <a target="_blank" className={'link'} href="https://www.linkedin.com/in/fryedesign/">Rob Frye</a>, the head of Design to drive the browser vision in the era of AI. Edge has now ranked #2 as of usage in the browser market with over 240 million daily active users.<br /><br /> I love building things that are useful, ethical, and beautiful.</div>
        </div>
      </div>

      <Footer></Footer>

    </main>
  );
}
