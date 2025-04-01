

export default function Home() {
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
            <div>
              <h1>AI Horizons Convention</h1>
              <h2>April 30th 2025, 11 AM to 6 PM</h2>
              <h2>Creveling Lounge (CC 201), Pasadena City College</h2>
            </div>
          </section>

          <section id='about'>
            <div className='header'>
              <h1>About the Event</h1>
            </div>
            <div id='paragraph'>
              <p>
                AI Horizons Convention is a groundbreaking convention designed for students of all majors and backgrounds to explore the 
                transformative power of artificial intelligence and technology. Whether you're a tech enthusiast, a creative thinker, or simply curious about 
                how AI and technology will shape the world, this event is for you. Join us for an inclusive, eye-opening experience 
                that will prepare you for the future of work and inspire you to see AI and technology as a tool for innovation in every field. <br />
                {/*<br/>At this convention, you’ll:*/} 
              </p>
              {/*
              <ul>
                <li>Hear from experts in dynamic presentations and panels discussing how AI is revolutionizing jobs across industries—and what it means for your future.</li>  
                <li>Explore interactive exhibits showcasing cutting-edge projects from campus clubs, highlighting the creativity and innovation of students and organizations in our communities.</li>
                <li>Network with recruitors and industry experts to learn how to stay competitive in today's job market.</li>  
              </ul>*/}
              <p>
                <br/>This is your chance to see how AI and technology isn’t just for engineers and scientists—it’s for everyone. Whether you’re an artist, 
                a business major, a future educator, or still figuring it out, "AI Horizons" will show you how to harness the power of AI and technology to 
                shape your career and the world around you. Don’t miss this opportunity to step into the future—where innovation meets inclusivity!
              </p>
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
                    This will be followed by a showcase of interactive exhibits from campus clubs and networking opportunities with recruiters from
                    many tech and defense companies (see Sponsors and Collaborations!).
                    Lunch will be provided for all attendees, so come hungry and ready to explore!
                  </p>
                </div>
                <div className='panelists'>
                  <div className="panelist">
                    <div>
                      <h1>Evan Chou</h1>
                      <h2>President of AI Club</h2>
                    </div>
                    <div>
                      <p>
                        Evan is an Electrical Engineering Major at Pasadena City College passionate about the intersection of AI in hardware and software.
                        As one of the lead organizers for the AI Horizons Convention, Evan is excited to share his passion for innovation and technology with the community.
                        Evan enjoys sharing his experiences in career development to inspire others to pursue their passions.
                      </p>
                    </div>
                  </div>
                  <div className="panelist">
                    <div>
                      <h1>Shin Aung</h1>
                      <h2>Vice President of AI Club</h2>
                    </div>
                    <div>
                      <p>
                        Shin is a Computer Science Major at Pasadena City College with a passion for AI and its applications in various fields.
                        As the Vice President of AI Club, Shin is dedicated to fostering a community of innovators and thinkers who are eager to explore the potential of AI.
                        He is excited to share his knowledge and experiences with others and inspire them to pursue their interests in technology.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className="title">
                  <h1>1 - 2 PM: The Future of AI in Enterprises and Society</h1>
                  <p>
                    In our first presentation, David Chou will be discussing the real-world applications of AI in business operations
                    and how it is transforming the way we work. He will also explore the ethical implications of AI in society and how we can ensure that AI is used responsibly and ethically.
                    This presentation will provide valuable insights into the future of AI and its impact on our lives.
                  </p>
                </div>
                <div className="panelists">
                  <div className='panelist'>
                    <div>
                      <h1>David Chou</h1>
                      <h2>Director of Cloud Developer and Platform Strategy at Microsoft</h2>
                    </div>
                    <div>
                      <p>
                        As a seasoned Software and Cloud Architect, David Chou worked on the development of many Microsoft applications
                        and services, including Microsoft Copilot and Azure Power Platforms. David was part of the development team
                        for Microsoft Azure and has been a key player in the development of Microsoft’s cloud strategy. Today, he works
                        with many Microsoft teams and leads the development of cloud-based applications and AI services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className="title">
                  <h1>2:00 - 3:00 PM: Creating Disney Magic with AI</h1>
                </div>
                <div className="panelists">
                  <div className="panelist">
                    <h1>Ella Lucas</h1>
                      <h2>R&D Imagineer (AI Engineering) at Walt Disney Imagineering</h2>
                      <p></p>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className='title'>
                  <h1>3:15 - 4:15 PM: Artificial Intelligence Around the World</h1>
                  <p>
                    In this panel discussion, you’ll hear from experts in the field of AI and technology about how AI is being used in different parts of the world.
                    This is a unique opportunity to learn about the global impact of AI and how it is shaping our world, so
                    whether you’re interested in the ethical implications of AI, the role of AI in economic development, or the future of work in a globalized world,
                    this panel discussion is sure to provide valuable insights and perspectives!
                  </p>
                </div>
                <div className="panelists">
                  <div className="panelist">
                    <h1>Kirby Repko</h1>
                      <h2>Cloud Solution Architect at Microsoft</h2>
                      <p></p>
                  </div>
                  <div className="panelist">
                    <h1>Rob Royce</h1>
                      <h2>Data Scientist and AI Advisor at NASA Jet Propulsion Laboratory</h2>
                      <p></p>
                  </div>
                  <div className="panelist">
                    <h1>Shreyansh Daftry</h1>
                      <h2>Data Scientist at NASA Jet Propulsion Laboratory</h2>
                      <p></p>
                  </div>
                  <div className="panelist">
                    <h1>Yisong Yue</h1>
                      <h2>Professor of Computing and Mathematical Sciences at Caltech</h2>
                      <p></p>
                  </div>
                </div>
              </div>

              <div className='event'>
                <div className="title">
                  <h1>4:30 - 5:30 PM: Accelerate your Career, Research, and Internships</h1>
                  <p>
                    In this panel discussion, you’ll learn how to leverage your skills and experiences to stand out in a competitive job market,
                    and gain insights into the skills and qualities that employers are looking for in candidates.
                    Whether you’re a first-year student or a graduating senior, this panel discussion is designed to help you take your career to the next level!
                  </p>
                </div>
                <div className="panelists">
                  <div className="panelist">
                    <h1>Xianmei Li</h1>
                      <h2>Robotics Systems Engineer at NASA Jet Propulsion Laboratory</h2>
                      <p></p>
                  </div>
                  <div className="panelist">
                    <h1>Tammy Sujaritchai</h1>
                      <h2>Computer Science + Linguistics Student at UCLA</h2>
                  </div>
                  <div className="panelist">
                    <h1>Shiori Nakaya</h1>
                      <h2>Geophysics Student at UC Riverside</h2>
                  </div>
                  <div className="panelist">
                    <h1>Chandler Desforges</h1>
                      <h2>Computer Science Student at Pasadena City College</h2>
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
                </div>
                <div className="panelists">
                  <div className="panelist">
                    <div>
                      <h1>Akki Akshit</h1>
                      <h2>Secretary of AI Club</h2>
                    </div>
                    <div>
                      <p>
                        Akki is a Computer Science Major at Pasadena City College with a passion for AI and its applications in various fields.
                        As the Secretary of AI Club, Akki is dedicated to fostering a community of innovators and thinkers who are eager to explore the potential of AI.
                        He is excited to share his knowledge and experiences with others and inspire them to pursue their interests in technology.
                      </p>
                    </div>
                  </div>
                  <div className="panelist">
                    <div>
                      <h1>Jordan Marcelo</h1>
                      <h2>Treasurer of AI Club</h2>
                    </div>
                    <div>
                      <p>
                        Jordan is a Computer Science Major at Pasadena City College with a passion for AI and its applications in various fields.
                        As the Treasurer of AI Club, Jordan is dedicated to fostering a community of innovators and thinkers who are eager to explore the potential of AI.
                        He is excited to share his knowledge and experiences with others and inspire them to pursue their interests in technology.
                      </p>
                    </div>
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
                  <img src="/images/jplletters.png"/>
                  <h1>NASA Jet Propulsion Laboratory</h1>
                  <h2>JPL STEM Engagement Office</h2>
                </div>
                <div className='company'>
                  <img src="/images/snap.png"/>
                  <h1>Snap Inc.</h1>
                  <h2>Snap Academies Program</h2>
                </div>
                <div className='company'>
                  <img src="/images/caltech_letters.png"/>
                  <h1>California Institute of Technology</h1>
                  <h2>Caltech Connections Program</h2>
                </div>
                <div className='company'>
                  <img src="./images/ucla.png"/>
                  <h1>University of California: Los Angeles</h1>
                  <h2>Organization for Cultural Diversity in Science</h2>
                </div>
                <div className='company'>
                  <img src="./images/aila.png"/>
                  <h1>AI LA Community</h1>
                  <h2>IDEAS Program</h2>
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
                  <h2>EEG/Neuroscience Research Projects</h2>
                </div>
                <div className='company'>
                  <img src="./images/she.codes.png"/>
                  <h1>She.Codes</h1>
                  <h2>insert project name here</h2>
                </div>
                <div className="company">
                  <img src="./images/SCS_Logo.png"/>
                  <h1>STEM Competition Society</h1>
                  <h2>insert project name here</h2>
                </div>
                <div className="company">
                  <h1>Pi Club</h1>
                  <h2>insert stuff here</h2>
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
                <h1>Akki Akshit</h1>
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
            </div>
            <div className='header'>
              <h1>Faculty Advisors</h1>
            </div>
            <div id='faculty'>
              <div>
                <h1>Dr. Jamal Ashraf</h1>
                  <h2>AI Club Advisor</h2>
              </div>
              {/*
              <div>
                <h1>Dr. Yu-Chang Chang-Hou</h1>
                  <h2>AI Horizons Convention Advisor</h2>
              </div>*/}
            </div>
          </section>

          <section id='insta'>
                <div className="instagram-feed">
                  <div className='header'>
                    <h1>Follow Us on Instagram</h1>
                  </div>
                  <div id='insta-text'>
                    <p>
                      Stay updated on the latest news and events from the AI Club and the AI Horizons Convention by following us on Instagram! 
                      We post regular updates, photos, and highlights from our events, so be sure to check it out and join the conversation!
                    </p>
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
