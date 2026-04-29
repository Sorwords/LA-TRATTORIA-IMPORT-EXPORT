import './About.css'

const teamMembers = [
  { id: 1, name: 'Giulio Romano', role: 'Chef Ejecutivo', description: 'Nacido en Napoles, Giulio lleva mas de 20 anos perfeccionando el arte de la cocina italiana.' },
  { id: 2, name: 'Sofia Marchetti', role: 'Sommelier', description: 'Experta en vinos italianos con certificacion WSET nivel 3. Sofia selecciona cada botella de nuestra carta.' },
  { id: 3, name: 'Marco Ricci', role: 'Pastelero', description: 'Especializado en reposteria italiana clasica. Su tiramisu es ya una leyenda en la ciudad.' },
]

function About() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="container">
          <p className="section-subtitle">Nuestra historia</p>
          <h1 className="section-title about-title">Sobre La Trattoria</h1>
        </div>
      </section>
      <section className="about-story">
        <div className="container about-story-container">
          <div className="about-story-text">
            <p className="section-subtitle">Desde 2008</p>
            <h2 className="section-title">Una pasion hecha restaurante</h2>
            <p>La Trattoria nacio de un sueno: traer la autentica cocina italiana al corazon de Madrid. Fundada en 2008 por el chef Giulio Romano junto a su esposa Elena Garcia.</p>
            <p>Importamos directamente de Italia los ingredientes que no se pueden sustituir: la pasta de Gragnano, el parmesano de Reggio Emilia o el aceite de oliva de Sicilia.</p>
            <p>Hoy, mas de 15 anos despues, seguimos fieles a nuestros valores: calidad sin concesiones y el placer de compartir una buena mesa.</p>
          </div>
          <div className="about-story-image">
            <div className="about-story-card">
              <div className="about-story-stats">
                {[
                  { number: '15+', label: 'Anos de historia' },
                  { number: '12', label: 'Personas en el equipo' },
                  { number: '4.8', label: 'Valoracion media' },
                  { number: '80+', label: 'Vinos en carta' },
                ].map((stat) => (
                  <div key={stat.label} className="about-stat">
                    <span className="about-stat-number">{stat.number}</span>
                    <span className="about-stat-label">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-team">
        <div className="container">
          <div className="about-team-header">
            <p className="section-subtitle">Las personas detras</p>
            <h2 className="section-title">Nuestro equipo</h2>
          </div>
          <div className="about-team-grid">
            {teamMembers.map((member) => (
              <div key={member.id} className="team-card">
                <h3 className="team-card-name">{member.name}</h3>
                <span className="team-card-role">{member.role}</span>
                <p className="team-card-description">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="about-values">
        <div className="container">
          <p className="section-subtitle">Lo que nos guia</p>
          <h2 className="section-title">Nuestros valores</h2>
          <div className="values-grid">
            {[
              { title: 'Producto de calidad', text: 'Solo usamos ingredientes frescos y de temporada.' },
              { title: 'Cocina con alma', text: 'Cocinamos como en casa, con tiempo y carino.' },
              { title: 'Trato familiar', text: 'Cada cliente es recibido como un invitado en nuestra mesa.' },
              { title: 'Sostenibilidad', text: 'Reducimos el desperdicio y trabajamos con proveedores responsables.' },
            ].map((value) => (
              <div key={value.title} className="value-card">
                <h3 className="value-title">{value.title}</h3>
                <p className="value-text">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default About