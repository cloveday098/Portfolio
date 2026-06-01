import '../globals.css'

/* Function Parameter Declarations */
interface HeaderProps {
  name: string;
}

/* Functions */
function SectHeader({name}: HeaderProps) {
  return <h1 className="header">{name}</h1>;
}

export default function cv() {
    return (
        <main>
        <section>
        <h1>Research</h1>
            <embed
                src="/static/abridged_CV_May2026.pdf"
                type="application/pdf"
                width="100%"
                height="1000"
                title="Embedded PDF Viewer"
            />

            <img src="static/prosthetic_hand_senior_study_poster_2026.jpg" alt="Senior Thesis Poster" width="750" height="600"></img>
            <img src="static/OMNI_2024 Poster_Final.jpg" alt="Senior Thesis Poster" width="750" height="600"></img>
      </section>

      
      <section>
        <SectHeader name="Teaching Assistance -- Move to CV Page"/>
      </section>

      <section>
        <SectHeader name="Tutoring -- Move to CV Page"/>
        <img src="static/New Spring STEM Success Flyer.png" alt="STEM Success Flyer" width="300" height="400"></img>
        <img src="static/TRIO Tutoring wt Chance Loveday (1).png" alt="TRIO Tutor Flyer" width="300" height="400"></img>
    </section>
    </main>
    )
}