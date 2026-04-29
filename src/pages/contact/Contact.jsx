import { useState } from 'react'
import './Contact.css'

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', date: '', guests: '2', message: '' })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="container">
          <p className="section-subtitle">Estamos aqui</p>
          <h1 className="section-title contact-title">Contacto y Reservas</h1>
        </div>
      </section>
      <section className="contact-info">
        <div className="container contact-info-grid">
          {[
            { title: 'Direccion', lines: ['Calle Rossini 14', 'Las Palmas de Gran Canaria'] },
            { title: 'Telefono', lines: ['+34 910 123 456', 'Lun-Dom: 12:00-23:30'] },
            { title: 'Email', lines: ['info@latrattoria.es', 'reservas@latrattoria.es'] },
          ].map((info) => (
            <div key={info.title} className="contact-info-card">
              <h3 className="contact-info-title">{info.title}</h3>
              {info.lines.map((line) => <p key={line}>{line}</p>)}
            </div>
          ))}
        </div>
      </section>
      <section className="contact-map-section">
        <iframe
          className="contact-map"
          src="https://www.openstreetmap.org/export/embed.html?bbox=-15.7238%2C27.9067%2C-15.3838%2C28.1267&layer=mapnik&marker=28.1248%2C-15.4300"
          title="Mapa La Trattoria"
        ></iframe>
      </section>
      <section className="contact-form-section">
        <div className="container contact-form-container">
          <div className="contact-form-header">
            <p className="section-subtitle">Haz tu reserva</p>
            <h2 className="section-title">Reservar mesa</h2>
          </div>
          {isSubmitted ? (
            <div className="contact-success">
              <h3>Reserva recibida</h3>
              <p>Nos pondremos en contacto contigo para confirmar tu reserva.</p>
              <button className="btn-primary" onClick={() => setIsSubmitted(false)}>Hacer otra reserva</button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="name">Nombre completo *</label>
                  <input className="form-input" type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Tu nombre" required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="email">Email *</label>
                  <input className="form-input" type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="tu@email.com" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label" htmlFor="date">Fecha *</label>
                  <input className="form-input" type="date" id="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label" htmlFor="guests">Personas *</label>
                  <select className="form-input" id="guests" name="guests" value={formData.guests} onChange={handleChange}>
                    {[1,2,3,4,5,6,7,8].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label className="form-label" htmlFor="message">Comentarios</label>
                <textarea className="form-input form-textarea" id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Alergias, celebraciones..." rows={4} />
              </div>
              <button type="submit" className="btn-primary form-submit">Confirmar reserva</button>
            </form>
          )}
        </div>
      </section>
    </main>
  )
}

export default Contact