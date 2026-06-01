import './globals.css'

/* Function Parameter Declarations */
interface HeaderProps {
  name: string;
}

interface TitleProps {
  title: string;
}

/* Functions */
function SectHeader({name}: HeaderProps) {
  return <h1 className="header">{name}</h1>;
}

function Title({title}: TitleProps) {
  return(
  <div>
    <center>
      <h1 className="title">{title}</h1>
      <h2 className="subheader">Sevierville, TN</h2>
    </center>
    
    <div className="row-container">
      <div className="item-container">
        <img src="static/email.jpg" alt="Email Logo" width="50" height="50"></img> <a href="lovedaychance@gmail.com">lovedaychance@gmail.com</a>
      </div>

      <div className="item-container">
        <img src="static/linkedin_logo.png" alt="LinkedIn Logo" width="50" height="50"></img> <a href="https://www.linkedin.com/in/chance-loveday-a941b4222/">Chance Loveday</a>
      </div>
    </div>

    <center><img src="static/Chance_Prof_Headshot.jpg" alt="Headshot" width="300" height="300"></img></center>
  </div>
  );
}


export default function page() {
  return (
  <main className="body">
    <section id="Bio">
      <Title title="Chance Loveday"/>
      <p style={{color:'orange'}}>Description Placeholder</p>
    </section>

    <section id='education'>
      <SectHeader name="Education"/>
      <div className='item-container' style={{gap:'25px'}}>
        <img src="https://www.maryvillecollege.edu/wp-content/uploads/Images/Main/MC-footer-logo-v5.png" alt="MC Logo" width="85"/>
        <div> <h2 className="subheader"> Maryville College </h2> <p>B.S. Mathematics, B.A. Computer Science</p><br></br><br></br> </div>
      </div>

      <center><h2 className="subheader">Notable Courses:</h2></center>
      <div className="row-container-CS">
        <div>
          <li>Multivariable Calculus</li>
          <li>Differential Equations</li>
          <li>Calculus-based Physics I-II</li>
          <li>Linear Algebra</li>
          <li>Real Analysis</li>
          <li>Abstract Algebra</li>
          <li>Probability & Statistics I-II</li>
        </div>

        <div>
          <li>Data Structures</li>
          <li>Database Systems</li>
          <li>User Interface & Design</li>
          <li>Algorithms</li>
        </div>
      </div>
    </section>

    <section id='github-dashboard'>
      <SectHeader name="GitHub Activity"/>
    </section>

    <section id='top-projects'>
      <SectHeader name="Project Highlights"/>
      <p style={{color:'orange'}}>Description Placeholder</p>
    </section>

      <section id="mentorship">
        <SectHeader name="Mentorship"/>
        <div className='item-container-CS'>
          <img src="static/S3_Tree_Group_Pic.png" alt="2024 S3 cohort at the end of orientation" width="381"/>
          <div>
            <img src="static/CAD_lab_roger_demo.png" alt="R0G3R Demo during S3 summer CAD lab" width="300" height="300"/>
            <img src="static/S3_Chat_Aquarium_Conserv_Pic.jpg" alt="Group picture with the 2024 Scots Science Scholars cohort at the Chattanooga Aquarium Conservation" width="300" height="300"/>
          </div>
        </div>
        <img src="static/s3_tva_group_pic.JPG" alt="Group picture with the 2024 Scots Science Scholars cohort at TVA" width="680"/>

        <p style={{color:'orange'}}>Description Placeholder</p>
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
//  - Write a short reflection why this mentorship is important & was a driving part of your MC experience
//  - Add Leadership section
//  - Add Side Navbar