import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const LINKEDIN = 'https://www.linkedin.com/in/zeyad-gomaa-719932265/';
const GITHUB = 'https://github.com/zeyadgomaaa';
const EMAIL = 'zeyadgomaa000@gmail.com';
const PHONE = '01024100325';

const projects = [
  { title:'Intelligent Cybersecurity Framework for Smart Grid Systems', category:'CYBERSECURITY • AI • IOT', image:'/images/project.jpg', text:'A multi-layered security framework designed to monitor smart-grid network traffic, detect malicious activity, and isolate affected components to support grid stability.', tags:['Raspberry Pi','Arduino','ESP32','Python','AI/ML','Network Security'] },
  { title:'AI-Powered Intrusion Detection System', category:'CYBERSECURITY • AI • EMBEDDED', image:'/images/ids.jpg', text:'An AI-based intrusion detection project focused on real-time threat detection with an Arduino-based alerting and response layer.', tags:['Python','AI/ML','Intrusion Detection','Arduino','Monitoring'] },
  { title:'Security Sandbox Environment', category:'CYBERSECURITY • LAB', image:'/images/sandbox.jpg', text:'A controlled environment for security testing, analysis, and hands-on experimentation with isolated systems.', tags:['Cybersecurity','Sandboxing','Linux','Security Testing'] },
  { title:'Online Examination System', category:'JAVA • BACKEND', text:'A Java and MySQL application for managing exams, questions, users, answers, and results.', tags:['Java','OOP','JDBC','MySQL'] },
  { title:'Portfolio Management Application', category:'JAVA • BACKEND', text:'A structured application for managing portfolio information, projects, and database-backed content.', tags:['Java','REST API','SQL','Backend'] },
  { title:'Firefighting Robot', category:'ROBOTICS • EMBEDDED', text:'A robotics project focused on detecting a fire source and supporting an automated firefighting response.', tags:['Robotics','Arduino','Sensors','Embedded'] },
  { title:'Smart Navigation Robot', category:'ROBOTICS • AUTOMATION', text:'An autonomous navigation project focused on movement control, obstacle detection, and programmed navigation.', tags:['Robotics','Sensors','Automation'] },
  { title:'Vacuum Cleaning Robot', category:'ROBOTICS • SMART SYSTEMS', text:'A smart cleaning robot concept combining sensors, motors, and automated movement for cleaning tasks.', tags:['Robotics','Sensors','Automation'] },
  { title:'Supermarket Robot', category:'ROBOTICS • SMART RETAIL', text:'A smart robotics project exploring navigation, control, and automation for supermarket tasks.', tags:['Robotics','Arduino','Automation'] }
];

const skills = [
 ['Penetration Testing','Burp Suite • Nmap • Metasploit • Vulnerability Assessment'],
 ['Network Security','Wireshark • TCP/IP • DNS • HTTP/HTTPS • Traffic Analysis'],
 ['Active Directory','Enumeration • Authentication Analysis • Access Control • Security Labs'],
 ['Java Backend','Java • OOP • JDBC • REST APIs • Spring Boot • MySQL'],
 ['Programming','Python • Java • C++'],
 ['Security Platforms','Kali Linux • HTB Academy • PortSwigger Web Security Academy']
];

function scrollTo(id){ document.getElementById(id)?.scrollIntoView({behavior:'smooth'}); }

function App(){
 const [menu,setMenu]=useState(false);
 const nav=['Home','About','Cybersecurity','Backend','Projects','Teaching','Contact'];
 return <div className="site">
   <div className="bg-grid" />
   <header className="header"><div className="container nav">
     <button className="logo" onClick={()=>scrollTo('home')}><span>Z</span><div><strong>Zeyad Gomaa</strong><small>Computer Engineer</small></div></button>
     <button className="menu" onClick={()=>setMenu(!menu)} aria-label="menu">☰</button>
     <nav className={menu?'open':''}>{nav.map(n=><button key={n} onClick={()=>{scrollTo(n.toLowerCase());setMenu(false)}}>{n}</button>)}</nav>
     <div className="nav-social"><a href={LINKEDIN} target="_blank" rel="noreferrer">in</a><a href={GITHUB} target="_blank" rel="noreferrer">GH</a><a className="cv" href="/Zeyad-Gomaa-CV.pdf" download>↓ CV</a></div>
   </div></header>

   <main>
    <section id="home" className="hero container">
      <div className="hero-text">
        <p className="kicker">CYBERSECURITY • BACKEND • TEACHING</p>
        <p className="hello">Hi, I'm</p>
        <h1>Zeyad <span>Gomaa</span></h1>
        <h2>Cybersecurity Enthusiast <b>|</b> Java Backend Developer</h2>
        <p className="hero-desc">Computer Engineering Teaching Assistant with a strong foundation in cybersecurity, penetration testing, network security, Active Directory, and backend development with Java.</p>
        <div className="actions"><button className="primary" onClick={()=>scrollTo('projects')}>Explore My Work →</button><a className="outline" href="/Zeyad-Gomaa-CV.pdf" download>Download CV</a></div>
        <div className="facts"><span>⌘ Computer Engineering</span><span>◈ Cybersecurity</span><span>&lt;/&gt; Java Backend</span><span>♙ Teaching Assistant</span></div>
      </div>
      <div className="hero-photo"><div className="photo-glow"/><img src="/images/profile.jpg" alt="Zeyad Gomaa"/><div className="terminal-card"><span>$ whoami</span><b>zeyad_gomaa</b><span>$ focus</span><b>security + backend</b></div></div>
    </section>

    <section id="about" className="section container"><SectionHead num="01" title="About Me" text="Security, software development, and teaching in one journey."/>
      <div className="about"><div className="panel about-main"><span className="big-number">01</span><h3>Building. Testing. Learning.</h3><p>I enjoy understanding how systems work, identifying weaknesses, and building practical solutions. My current path combines cybersecurity practice with Java backend development and technical teaching.</p><div className="quote">“Keep learning. Keep building.”</div></div><div className="panel"><span className="big-number">02</span><h3>Security mindset</h3><p>Analyze systems, test assumptions, document findings, and improve security.</p></div><div className="panel"><span className="big-number">03</span><h3>Developer mindset</h3><p>Turn requirements into structured, practical, and maintainable applications.</p></div></div>
    </section>

    <section id="cybersecurity" className="section container"><SectionHead num="02" title="Cybersecurity" text="A practical toolkit built through coursework, labs, and projects."/><div className="skill-grid">{skills.slice(0,3).map((s,i)=><Skill key={s[0]} n={i+1} title={s[0]} text={s[1]}/>)}</div></section>
    <section id="backend" className="section container"><SectionHead num="03" title="Backend Development" text="Java, databases, APIs, and application logic."/><div className="skill-grid">{skills.slice(3).map((s,i)=><Skill key={s[0]} n={i+4} title={s[0]} text={s[1]}/>)}</div></section>

    <section id="projects" className="section container"><SectionHead num="04" title="Projects" text="Cybersecurity, Java, robotics, and embedded-system projects."/><div className="projects">{projects.map((p,i)=><article className={'project '+(i===0?'featured':'')} key={p.title}>{p.image && <img src={p.image} alt={p.title}/>}<div className="project-body"><span className="category">{p.category}</span><h3>{p.title}</h3><p>{p.text}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></div></article>)}</div></section>

    <section id="teaching" className="section container teaching"><div><span className="label">05 / TEACHING</span><h2>Technical Teaching Assistant</h2><p>Supporting Computer Engineering students through clear explanations, problem solving, laboratory activities, and technical guidance.</p><button className="primary" onClick={()=>scrollTo('contact')}>Let's Connect →</button></div><div className="teaching-photo"><img src="/images/presentation.jpg" alt="Zeyad presenting at university"/></div></section>

    <section id="contact" className="section container contact"><div><span className="label">06 / CONTACT</span><h2>Let's build something useful.</h2><p>Open to opportunities and collaboration in cybersecurity, backend development, technical projects, and education.</p></div><div className="contact-list"><a href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn ↗</a><a href={GITHUB} target="_blank" rel="noreferrer">GitHub ↗</a><a href={'mailto:'+EMAIL}>✉ {EMAIL}</a><a href="tel:+201024100325">☎ {PHONE}</a></div></section>
   </main>
   <footer><div className="container"><span>© {new Date().getFullYear()} Zeyad Gomaa</span><span>Cybersecurity • Backend • Teaching</span></div></footer>
 </div>
}
function SectionHead({num,title,text}){return <div className="section-head"><span>{num} /</span><h2>{title}</h2><p>{text}</p></div>}
function Skill({n,title,text}){return <article className="skill"><div><span>0{n}</span><b>◈</b></div><h3>{title}</h3><p>{text}</p></article>}

createRoot(document.getElementById('root')).render(<App/>);
