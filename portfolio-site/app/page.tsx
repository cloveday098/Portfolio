import './globals.css'
import './homePage.css'

interface HeaderProps {
  name: string;
}

interface TitleProps {
  title: string;
}

function Header({name}: HeaderProps) {
  return <h1 className="header">{name}</h1>;
}

function Title({title}: TitleProps) {
  return(
  <header>
    <h1 className="title">{title}</h1>
    <h2>Sevierville, TN</h2>
    <img src="static/email.jpg" alt="Email Logo" width="50" height="50"></img> <a href="lovedaychance@gmail.com">lovedaychance@gmail.com</a>
    <img src="static/linkedin_logo.png" alt="LinkedIn Logo" width="50" height="50"></img> <a href="https://www.linkedin.com/in/chance-loveday-a941b4222/">https://www.linkedin.com/in/chance-loveday-a941b4222/</a>
  </header>
  );
}


export default function page() {
  return (
  <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <section>
      <Title title="Chance Loveday"/>
      <img src="static/Chance_Prof_Headshot.jpg" alt="Headshot" width="500" height="500"></img>

      <Header name="Mentorship"/>
      <img src="static/S3_Chat_Aquarium_Conserv_Pic.jpg" alt="Group picture with the 2024 Scots Science Scholars cohort at the Chattanooga Aquarium Conservation" width="500" height="500"></img>
      <img src="static/S3_Tree_Group_Pic.png" alt="2024 S3 cohort at the end of orientation" width="500" height="500"></img>

      <Header name="Teaching Assistance -- Move to CV Page"/>

      <Header name="Tutoring"/>
      <img src="static/New Spring STEM Success Flyer.png" alt="STEM Success Flyer" width="300" height="400"></img>
      <img src="static/TRIO Tutoring wt Chance Loveday (1).png" alt="TRIO Tutor Flyer" width="300" height="400"></img>
    </section>
  </main>
  );
}


// TODOS
// CV Page
//  - Add detailed overviews for each TA position
//  - Add brief overviews for SSC & TRIO
//  - Find pics & tie-in message for Mtn Challenge

// Home Page
//  - Find pics of Micro Bit, CAD, & other participatory S3 summer labs
//  - Write a short reflection why this mentorship is important & was a driving part of your MC experience
//  - Placeholder Porjects section
//  - Explore CSS formatting
//  - Placeholder for GitHub integration
//  - Add Leadership section