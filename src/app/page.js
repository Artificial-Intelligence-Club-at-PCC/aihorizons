"use client";
import Dropdown from './components/dropdown';
import FlyerCarousel from './components/carousel';

import {useEffect, useState} from "react";

function startCountdown() {
  const targetDate = new Date();
  targetDate.setMonth(3); // April (0-based index)
  targetDate.setDate(30);
  targetDate.setHours(11, 0, 0, 0); // 11 AM

  return function calculateTimeLeft() {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
          return "WELCOME TO AI HORIZONS!";
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };
}

export default function Home() {
  const [timeLeft, setTimeLeft] = useState(startCountdown()());

  useEffect(() => {
      const interval = setInterval(() => {
          setTimeLeft(startCountdown()());
      }, 1000);

      return () => clearInterval(interval);
  }
  , []);

  return (
    <html>

      <body>
        <header>
          <div>
            <h1>Presented by Artificial Intelligence Club at PCC</h1>
          </div>
        </header>

        <main>
          <section id='main'>
              <img src="./images/aiclub.png" id='logo'/>
              <img src="./images/title.png" alt="AI Horizons Convention" id='title'/>
              <div id='nottitle'>
                <div id='date'>
                  <div>
                    <img src="./images/calendar.png"/>
                    <h2>April 30th , 2025</h2>
                  </div>
                  <div>
                    <img src="./images/time.png"/>
                    <h2>11 AM - 6 PM</h2>
                  </div>
                </div>
                <div id='location'>
                  <img src="./images/map.png"/>
                  <h2>Creveling Lounge (CC 201), Pasadena City College</h2>
                </div>
              </div>
              <div id='countdown'>
                <p>COUNTDOWN: <br/>{timeLeft}</p>
              </div>
              <div id='mobsuggest'>
                <h3>For a better viewer experience, we suggest viewing this webpage on a large screen.</h3>
              </div>
          </section>

          <section id='about'>
            <div className='header'>
              <h1>About the Event</h1>
            </div>
            <div id='aboutcontent'>
              <div id='abouttext'>
                <div>
                  <img src="./images/grouppic.jpg"/>
                  <h3>AI Horizons Convention</h3>
                </div>
                <div id='paragraph'>
                  <p>
                    AI Horizons Convention is a groundbreaking convention designed for students of all majors and backgrounds to explore the 
                    transformative power of artificial intelligence and technology. Whether you’re an artist, 
                    a business major, a future educator, or still figuring it out, "AI Horizons" will show you how to harness the power of AI and technology to 
                    shape your career and the world around you. This is your chance to see how AI and technology isn’t just for engineers and scientists—it’s for everyone. 
                    Join us for an inclusive, eye-opening experience that will prepare you for the future of work and inspire you to see AI and technology as a tool for innovation in every field. <br />
                    {/*<br/>At this convention, you’ll:*/} 
                  </p>
                  {/*
                  <ul>
                    <li>Hear from experts in dynamic presentations and panels discussing how AI is revolutionizing jobs across industries—and what it means for your future.</li>  
                    <li>Explore interactive exhibits showcasing cutting-edge projects from campus clubs, highlighting the creativity and innovation of students and organizations in our communities.</li>
                    <li>Network with recruitors and industry experts to learn how to stay competitive in today's job market.</li>  
                  </ul>*/}
                  {/*
                  <p>
                    <br/>Don’t miss this opportunity to step into the future — where innovation meets inclusivity!
                  </p>*/}
                  <a href="https://forms.gle/vL9u38x95DxSqrGo8" target="_blank" rel="noopener noreferrer">
                    <button>Press Here to Register Now!</button>
                  </a>
                </div>
              </div>
              <div>
                <FlyerCarousel />
              </div>
              <img src="./images/parking.png" id='parking2'/>
            </div>
          </section>

          <section id='itinerary'>
            <div className='header'>
              <h1>Event Schedule</h1>
            </div>

            <div id='schedule'>
              <div className='event' id='first'>
                  <div className='title'>
                    <h1>11 AM - 1 PM: Career, Research, and Internships Fair</h1>
                    <p>
                      Join us for some celebratory opening remarks from the organizers to kick-start all event festivities!
                      This will be followed by a showcase of interactive exhibits and short presentations from campus clubs, and networking opportunities with recruiters and experts from
                      many organizations in industry or universities. Come ready to explore!
                    </p>
                    <ul>
                      <li>AI Club: Intro to Prompt Engineering</li>
                      <li>Data Science Club: Simulating the Human Brain - A Data Driven Approach</li>
                    </ul>
                    <img src='./images/flyers/landscape.png'/>
                  </div>
                <div className='panelists'>
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/evan.jpg" alt="Evan Chou" />
                      <div>
                        <h1>Evan Chou</h1>
                        <h2>President of AI Club</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                        Evan is an Electrical Engineering Major at Pasadena City College passionate about the applications of AI in hardware and software.
                        As the lead organizer for the AI Horizons Convention, Evan is excited to share his passion for innovation and technology with the community.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                            Evan is an Electrical Engineering Major at Pasadena City College passionate about the applications of AI in hardware and software.
                            As the lead organizer for the AI Horizons Convention, Evan is excited to share his passion for innovation and technology with the community.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/pcc_1.png" id='org'/>
                  </div>
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/shin.jpg" alt="Shin Aung" />
                      <div>
                        <h1>Shin Aung</h1>
                        <h2>Vice President of AI Club</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                        Shin is a Computer Science Major at Pasadena City College with a passion for AI and its applications in various fields.
                        As the Vice President of AI Club, Shin is dedicated to fostering a community of innovators and thinkers who are eager to explore the potential of AI.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                            Shin is a Computer Science Major at Pasadena City College with a passion for AI and its applications in various fields.
                            As the Vice President of AI Club, Shin is dedicated to fostering a community of innovators and thinkers who are eager to explore the potential of AI.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/pcc_1.png" id='org'/>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className="title">
                  <h1>1 - 1:45 PM: Autonomous Agents</h1>
                  <p>
                    In our first presentation, David Chou will be explaining what AI agents are. This presentation will help you gain
                    insights into how AI agents are used, and discover how to build AI agents. Finally, David will share his thoughts
                    on the future of AI and what we can look forward to in the coming years!
                  </p>
                  <img src="./images/flyers/agents_land.png"/>
                </div>
                <div className="panelists">
                  <div className='panelist'>
                    <div className='paneltitle'>
                        <img src="./images/panelists/david.jpeg" alt="David Chou" />
                        <div>
                          <h1>David Chou</h1>
                          <h2>Director of Cloud Developer and Platform Strategy at Microsoft</h2>
                        </div>
                    </div>
                    <div>
                      <p className='web'>
                        David Chou is currently a cloud architect and strategy lead at Microsoft, where he is focused on enterprise developer strategy
                        building on AI app platform and toolchain. He is experienced in software engineering and application development delivering distributed systems.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                            David Chou is currently a cloud architect and strategy lead at Microsoft, where he is focused on enterprise developer strategy
                            building on AI app platform and toolchain. He is experienced in software engineering and application development delivering distributed systems.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/microsoft.png" id='org'/>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className="title">
                  <h1>2 - 2:45 PM: AI - Inspiring the Next Generation of Innovators</h1>
                  <img src='./images/flyers/inspiring_landscape.png'/>
                </div>
                <div className="panelists">
                <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/Kirby.jpg"/>
                      <div>
                        <h1>Kirby Repko</h1>
                        <h2>Cloud Solution Architect at Microsoft</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                        As a Cloud Solution Architect at Microsoft for over nine years and 34 years in the IT industry, Kirby specializes in 
                        designing and implementing scalable cloud data platforms. His role focuses on empowering organizations to adopt 
                        innovative SaaS solutions using Azure technologies. Kirby is a certified expert in cloud platforms and data solutions, 
                        with a strong foundation in Generative AI, SQL Server, PostgreSQL, analytics and data warehousing. 
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                            As a Cloud Solution Architect at Microsoft for over nine years and 34 years in the IT industry, Kirby specializes in 
                            designing and implementing scalable cloud data platforms. His role focuses on empowering organizations to adopt 
                            innovative SaaS solutions using Azure technologies. Kirby is a certified expert in cloud platforms and data solutions, 
                            with a strong foundation in Generative AI, SQL Server, PostgreSQL, analytics and data warehousing.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/microsoft.png" id='org'/>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className='title'>
                  <h1>3:00 - 4:15 PM: Artificial Intelligence Around the World</h1>
                  <p>
                    In this panel discussion, you’ll hear from experts in the field of AI and technology about how AI is being used in different parts of the world.
                    This is a unique opportunity to learn about the global impact of AI and how it is shaping our world, so
                    whether you’re interested in the ethical implications of AI or the future of work in a globalized world,
                    this panel discussion is sure to provide valuable insights and perspectives!
                  </p>
                  <img src='./images/flyers/ai_landscape.png'/>
                  <p>Moderator: Shin Aung - Vice President of AI Club at PCC</p>
                </div>
                <div className="panelists">
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/nicholas.jpg"/>
                      <div>
                        <h1>Nicholas Beaudoin</h1>
                        <h2>Director of AI Programs at Caltech CTME</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                        Nicholas Beaudoin is the Affiliate Director of AI Programs for Caltech’s Center for Technology and Management Education (CTME) and has a decade of 
                        experience leading teams in the AI/ML industry. His day job is as an AI expert for Wavicle Data Solutions where he leads teams to design and implement AI/ML projects. 
                        He has worked on innovative solutions for companies such as Disney, Mercedez-Benz, Honda, and various agencies in the federal government.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                            Nicholas Beaudoin is the Affiliate Director of AI Programs for Caltech’s Center for Technology and Management Education (CTME) and has a decade of 
                            experience leading teams in the AI/ML industry. His day job is as an AI expert for Wavicle Data Solutions where he leads teams to design and implement AI/ML projects. 
                            He has worked on innovative solutions for companies such as Disney, Mercedez-Benz, Honda, and various agencies in the federal government.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/caltech_letters.png" id='org'/>
                  </div>
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/Kirby.jpg"/>
                      <div>
                        <h1>Kirby Repko</h1>
                        <h2>Cloud Solution Architect at Microsoft</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                        As a Cloud Solution Architect at Microsoft for over nine years and 34 years in the IT industry, Kirby specializes in 
                        designing and implementing scalable cloud data platforms. His role focuses on empowering organizations to adopt 
                        innovative SaaS solutions using Azure technologies. Kirby is a certified expert in cloud platforms and data solutions, 
                        with a strong foundation in Generative AI, SQL Server, PostgreSQL, analytics and data warehousing. 
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                            As a Cloud Solution Architect at Microsoft for over nine years and 34 years in the IT industry, Kirby specializes in 
                            designing and implementing scalable cloud data platforms. His role focuses on empowering organizations to adopt 
                            innovative SaaS solutions using Azure technologies. Kirby is a certified expert in cloud platforms and data solutions, 
                            with a strong foundation in Generative AI, SQL Server, PostgreSQL, analytics and data warehousing.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/microsoft.png" id='org'/>
                  </div>
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src='./images/panelists/ashraf.png'/>
                      <div>
                        <h1>Jamal Ashraf</h1>
                        <h2>Computer Science Professor at PCC</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                        Jamal Ashraf is a senior faculty member at Pasadena City College, bringing over 30 years of experience in computer science education, with expertise in 
                        Python, Java, and data structures. Passionate about integrating artificial intelligence and data science into education, he developed PCC’s Data Science Certificate 
                        program, which has enabled over 150 students to gain advanced skills and secure opportunities at leading tech companies and universities. Beyond teaching, Jamal 
                        mentors student-led clubs such as AIML and She.Codes. His dedication to equity in STEM and real-world applications has earned him recognition for fostering academic-industry connections and inspiring the 
                        next generation of technologists.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                          Jamal Ashraf is a senior faculty member at Pasadena City College, bringing over 30 years of experience in computer science education, with expertise in 
                          Python, Java, and data structures. Passionate about integrating artificial intelligence and data science into education, he developed PCC’s Data Science Certificate 
                          program, which has enabled over 150 students to gain advanced skills and secure opportunities at leading tech companies and universities. Beyond teaching, Jamal 
                          mentors student-led clubs such as AIML and She.Codes. His dedication to equity in STEM and real-world applications has earned him recognition for fostering academic-industry connections and inspiring the 
                          next generation of technologists.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src='./images/pcc_1.png' id='org'/>
                  </div>
                  <div className='panelist'>
                    <div className='paneltitle'>
                      <img src='./images/panelists/chenghao.png'/>
                      <div>
                        <h1>Chenghao Liu</h1>
                        <h2>Postdoctoral Fellow at Caltech</h2>
                      </div>
                    </div>
                    <img src='./images/caltech_letters.png' id='org'/>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className="title">
                  <h1>4:30 - 5:30 PM: Accelerate your Career Development</h1>
                  <p>
                    In this panel discussion, you’ll learn how to leverage your skills and experiences to stand out in a competitive job market,
                    and gain insights into the skills and qualities that employers are looking for in candidates.
                    Whether you’re a first-year student or a graduating senior, this panel discussion is designed to help you take your career to the next level!
                  </p>
                  <img src='./images/flyers/career_landscape.png'/>
                  <p>Moderator: Vivian Nguyen - Treasurer of AI Club at PCC</p>
                </div>
                
                <div className="panelists">
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/rita.JPG"/>
                      <div>
                        <h1>Rita Sargsyan</h1>
                        <h2>AI LA IDEAS Program Director</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                      Rita serves as Program Director and Founders/Investors Ambassador at AI LA, where she builds community-driven programs at the intersection of AI, 
                      education, and entrepreneurship—like the IDEAS Program, which equips college students with the tools, mentorship, and hands-on experience to explore and succeed 
                      in the world of AI and emerging tech. She previously supported early-stage founders as a Platform Coordinator at the UCLA Venture Accelerator and has worked across 
                      venture capital, product, and strategy roles with a focus on AI for social good. With a background in Applied Math from UCLA, Rita is passionate about making tech and 
                      entrepreneurship more inclusive—mentoring the next generation of changemakers from all majors and communities.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                          Rita serves as Program Director and Founders/Investors Ambassador at AI LA, where she builds community-driven programs at the intersection of AI, 
                          education, and entrepreneurship—like the IDEAS Program, which equips college students with the tools, mentorship, and hands-on experience to explore and succeed 
                          in the world of AI and emerging tech. She previously supported early-stage founders as a Platform Coordinator at the UCLA Venture Accelerator and has worked across 
                          venture capital, product, and strategy roles with a focus on AI for social good. With a background in Applied Math from UCLA, Rita is passionate about making tech and 
                          entrepreneurship more inclusive—mentoring the next generation of changemakers from all majors and communities.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/aila.png" id='org'/>
                  </div>
                  <div className='panelist'>
                    <div className='paneltitle'>
                      <img src="./images/panelists/ivy.jpg"/>
                      <div>
                        <h1>Ivy Chen</h1>
                        <h2>Graduate Student Researcher at Caltech</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                      Ivy is a third-year graduate student at Caltech studying applied physics. She completed her undergraduate degree at Harvey Mudd College before working at Google as a 
                      software engineer prior to graduate school. Ivy's current research interests are in the field of nanofabrication, specifically in atomic layer etching for nanophotonic materials.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                          Ivy is a third-year graduate student at Caltech studying applied physics. She completed her undergraduate degree at Harvey Mudd College before working at Google as a 
                          software engineer prior to graduate school. Ivy's current research interests are in the field of nanofabrication, specifically in atomic layer etching for nanophotonic materials.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src='./images/caltech_letters.png' id='org'/>
                  </div>
                  <div className="panelist">
                    <div className="paneltitle">
                      <img src="./images/panelists/daphne.jpg"/>
                      <div>
                        <h1>Daphne Nea</h1>
                        <h2>Lunar Trailblazer Intern at JPL/Caltech</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                      Daphne Nea is a Mission Operations intern for NASA's Lunar Trailblazer, which launched on February 26th, and an Honors Computer Science student at Pasadena City College 
                      preparing to transfer this upcoming fall. She contributes to mission operations by scripting automation tools in Python, running simulations on virtual machines and 
                      testbeds, operating a live in-flight spacecraft, communicating with the Deep Space Network, and analyzing real-time telemetry data. This summer, she will join Caltech’s 
                      SURF program under Dr. Bethany Ehlmann to develop software tools for spacecraft data collection.
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                          Daphne Nea is a Mission Operations intern for NASA's Lunar Trailblazer, which launched on February 26th, and an Honors Computer Science student at Pasadena City College 
                          preparing to transfer this upcoming fall. She contributes to mission operations by scripting automation tools in Python, running simulations on virtual machines and 
                          testbeds, operating a live in-flight spacecraft, communicating with the Deep Space Network, and analyzing real-time telemetry data. This summer, she will join Caltech’s 
                          SURF program under Dr. Bethany Ehlmann to develop software tools for spacecraft data collection.
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/jplletters.png" id='org'/>
                  </div>
                  <div className="panelist">
                    <div className="paneltitle">
                      <img src="./images/panelists/emily.jpg"/>
                      <div>
                        <h1>Emily Muditar</h1>
                        <h2>Research Fellow at Caltech LIGO</h2>
                      </div>
                    </div>
                    <div>
                      <p className='web'>
                      Like a gas particle, Emily is in constant random motion with her busy eventful life. She has developed organizational, time management, research, and communication 
                      skills from previous work-life experiences. She is an undergraduate student currently studying Biological Sciences full time, and working as a Behavior Interventionist, 
                      AmeriCorps Literacy Intern, and Teacher Aide. 

                      She is part of Caltech LIGO Research Study Group, partaking in weekly Astrophysics discussions with a focus on gravitational wave detection. 
                      She adores physics and hopes to minor in it when she transfers. Emily is working on multiple independent research projects. Career development and the educational 
                      journey toward a career are two topics Emily is looking forward to discussing on this panel!
                      </p>
                      <div className='dropdown'>
                        <Dropdown>
                          <p>
                          Like a gas particle, Emily is in constant random motion with her busy eventful life. She has developed organizational, time management, research, and communication 
                          skills from previous work-life experiences. She is an undergraduate student currently studying Biological Sciences full time, and working as a Behavior Interventionist, 
                          AmeriCorps Literacy Intern, and Teacher Aide. 

                          She is part of Caltech LIGO Research Study Group, partaking in weekly Astrophysics discussions with a focus on gravitational wave detection. 
                          She adores physics and hopes to minor in it when she transfers. Emily is working on multiple independent research projects. Career development and the educational 
                          journey toward a career are two topics Emily is looking forward to discussing on this panel!
                          </p>
                        </Dropdown>
                      </div>
                    </div>
                    <img src="./images/caltech_letters.png" id='org'/>
                  </div>
                  <div className='panelist'>
                    <div className='paneltitle'>
                      <img src='./images/panelists/sammi.png'/>
                      <div>
                        <h1>Xianmei Lei</h1>
                        <h2>Robotics Systems Engineer at NASA JPL</h2>
                      </div>
                    </div>
                    <img src='./images/jplletters.png' id='org'/>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className='title'>
                  <h1>5:30 - 6:00 PM: Closing Remarks and Networking</h1>
                  <p>
                    Join us for closing remarks from the organizers to wrap up the event and thank our panelists and attendees for their participation!
                    This will be followed by an opportunity to network with guest speakers, industry experts, and students, so come ready to make connections!
                  </p>
                  <img src="./images/flyers/aibanner.png"/>
                </div>
                <div className="panelists">
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/evan.jpg" alt="Evan Chou" />
                      <div>
                        <h1>Evan Chou</h1>
                        <h2>President of AI Club</h2>
                      </div>
                    </div>
                    <img src="./images/pcc_1.png" id='org'/>
                  </div>
                  <div className="panelist">
                    <div className='paneltitle'>
                      <img src="./images/panelists/shin.jpg" alt="Shin Aung" />
                      <div>
                        <h1>Shin Aung</h1>
                        <h2>Vice President of AI Club</h2>
                      </div>
                    </div>
                    <img src="./images/pcc_1.png" id='org'/>
                  </div>
                </div>
              </div>
            </div>

          </section>

          <section id='collabs'>
            <div className="indiv" id='industry'>
              <div className='header'>
                <h1>Industry Partners and Collaborations</h1>
              </div>
              <div className='companies'>
                <div className='company'>
                  <img src="./images/jplletters.png"/>
                  <h1>NASA Jet Propulsion Laboratory</h1>
                  <h2>JPL STEM Engagement Office</h2>
                </div>
                <div className='company'>
                  <img src="./images/caltech_letters.png"/>
                  <h1>California Institute of Technology</h1>
                  <h2>Caltech Connections Program</h2>
                </div>
                <div className='company'>
                  <img src="./images/aila.png"/>
                  <h1>Artificial Intelligence Los Angeles</h1>
                  <h2>IDEAS Program</h2>
                </div>
                <div className='company'>
                  <img src="./images/csula.png"/>
                  <h1>Cal State University Los Angeles</h1>
                  <h2>Department of Information Systems</h2>
                </div>
                <div className='company'>
                  <img src="./images/freeman.png"/>
                  <h1>PCC Freeman Career Center</h1>
                  <h2>STEM Career Development</h2>
                </div>
                <div className='company'>
                  <img src="./images/mesa.png"/>
                  <h1>PCC MESA Program</h1>
                  <h2>STEM Academic Development</h2>
                </div>
              </div>
            </div>
            <div className="indiv" id='students'>
              <div className="header">
                <h1>PCC Student-Led Organizations</h1>
              </div>
              <div className='companies'>
                <div className='company'>
                  <img src="./images/dsc.png"/>
                  <h1>Data Science Club</h1>
                  <h2>Data Science Projects: Financial and Brain Data</h2>
                </div>
                <div className='company'>
                  <img src="./images/she.codes.png"/>
                  <h1>She.Codes</h1>
                  <h2>Night Shift</h2>
                </div>
                <div className="company">
                  <img src="./images/SCS_Logo.png"/>
                  <h1>STEM Competition Society</h1>
                  <h2>Speaking the Language of the Stars</h2>
                </div>
                <div className="company">
                  <img src="./images/piclub.jpg"/>
                  <h1>Pi Club</h1>
                  <h2>Interactive Project Showcase</h2>
                </div>
                <div className="company">
                  <img src="./images/film.png"/>
                  <h1>Film Club</h1>
                  <h2>Entertainment Games</h2>
                </div>
              </div>
            </div>
          </section>

          <section id='organizers'>
            <div className="header">
              <h1>AI Club Organizers</h1>
            </div>
            <div id='aiclub'>
              <div>
                <h1>Evan Chou</h1>
                  <h2>President</h2>
              </div>
              <div>
                <h1>Shin Aung</h1>
                  <h2>Vice President</h2>
              </div>
              <div>
                <h1>Akki Singh</h1>
                  <h2>Secretary</h2>
              </div>
              <div>
                <h1>Jordan Marcelo</h1>
                  <h2>Treasurer</h2>
              </div>
              <div>
                <h1>Vivian Nguyen</h1>
                  <h2>Treasurer</h2>
              </div>
              <div>
                <h1>Nyan Lynn Phyoe Zaw</h1>
                  <h2>Events Coordinator</h2>
              </div>
              <div>
                <h1>Jian Wang</h1>
                  <h2>Social Media Manager</h2>
              </div>
              <div>
                <h1>Tuan Dien Tran</h1>
                  <h2>ICC Representative</h2>
              </div>
              <div>
                <h1>David Alcala</h1>
                  <h2>Public Relations</h2>
              </div>
              <div>
                <h1>Timothy De Lange</h1>
                  <h2>Project Manager</h2>
              </div>
              <div>
                <h1>Jamal Ashraf</h1>
                  <h2>Faculty Advisor</h2>
              </div>
              <div>
                <h1>Yu-Chung Chang-Hou</h1>
                  <h2>AI Horizons Advisor</h2>
              </div>
              <div>
                <h1>Isaac Cheng</h1>
                  <h2>AI Horizons Intern</h2>
              </div>
              <div>
                <h1>Yu-Wen Wang</h1>
                  <h2>AI Horizons Intern</h2>
              </div>
              <div>
                <h1>Rehaan Shaw</h1>
                  <h2>AI Horizons Intern</h2>
              </div>
            </div>
          </section>

          <section id='insta'>
                <div className="instagram-feed">
                  <div className='header'>
                    <h1>Social Media</h1>
                  </div>
                  <div id='insta-text'>
                    <p>
                      Stay updated on the latest news and events from the AI Club and the AI Horizons Convention by following us on social media! 
                      We post regular updates, photos, and highlights from our events, so be sure to check it out and join the conversation!
                    </p>
                  </div>
                  <div id='othersm'>
                    <div id='discord'>
                      <a href="https://discord.gg/WDnDmpaAfV" target="_blank" rel="noopener noreferrer">
                        <img src="./images/discord.jpg" alt="Discord" />
                        <h2>AI & ML Club Discord Server</h2>
                      </a>
                    </div>
                    <div id='linkedin'>
                      <a href="https://www.linkedin.com/company/pccaimlclub/" target="_blank" rel="noopener noreferrer">
                        <img src="./images/linkedin.jpg" alt="LinkedIn" />
                        <h2>Artificial Intelligence Club at Pasadena City College</h2>
                      </a>
                    </div>
                    <div id='lancer'>
                      <a href="https://lancerlife.pasadena.edu/organization/aimlclub" target="_blank" rel="noopener noreferrer">
                        <img src="./images/lancer.png" alt="Lancer Life" />
                        <h2>Artificial Intelligence Club LancerLife</h2>
                      </a>
                    </div>
                  </div>
                  <div id="insta-posts" >
                    {/* Instagram embed script */}
                    <script async src="https://www.instagram.com/embed.js"></script>
                    <div className="insta-post" >
                      <blockquote 
                        className="instagram-media" 
                        data-instgrm-permalink="https://www.instagram.com/pccaimlclub/" 
                        data-instgrm-version="14" 
                        style={{ maxWidth: "1000px", margin: "0 auto" }}>
                      </blockquote>
                    </div>
                  </div>
                </div>
          </section>

        </main>

        <footer>
          <p>&copy; 2025 AI Horizons Convention. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
