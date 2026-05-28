interface HeaderProps {
  name: string;
}

function Header({name}: HeaderProps) {
  return <h1>{name}</h1>;
}


export default function page() {
  return (
    <section>
      <Header name="Chance Loveday"/>
      <img src="static/Chance_Prof_Headshot.jpg" alt="Headshot" width="500" height="500"></img>

      <Header name="Mentorship"/>
      <img src="static/S3_Chat_Aquarium_Conserv_Pic.jpg" alt="Group picture with the 2024 Scots Science Scholars cohort at the Chattanooga Aquarium Conservation" width="500" height="500"></img>
      <img src="static/S3_Tree_Group_Pic.png" alt="2024 S3 cohort at the end of orientation" width="500" height="500"></img>

      <Header name="Teaching Assistance -- Move to CV Page"/>

      <Header name="Tutoring"/>
      <img src="static/New Spring STEM Success Flyer.png" alt="STEM Success Flyer" width="300" height="400"></img>
      <img src="static/TRIO Tutoring wt Chance Loveday (1).png" alt="TRIO Tutor Flyer" width="300" height="400"></img>
    </section>
  );
}


// TODOS
// CV Page
//  - Add Posters
//  - Add detailed overviews for each TA position
//  - Add brief overviews for SSC & TRIO
//  - Find pics & tie-in message for Mtn Challenge