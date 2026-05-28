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
      <p>This is my amazing site!</p>

      <img src="static/prosthetic_hand_senior_study_poster_2026.jpg" alt="Senior Thesis Poster" width="750" height="600"></img>
    </section>
  );
}


// TODOS
// CV Page
//  - Add Posters
//  - Add detailed overviews for each TA position
//  - Add brief overviews for SSC & TRIO
//  - Find pics & tie-in message for Mtn Challenge