import DishCard from '../../components/dish-card/DishCard'
import Gallery from '../../components/gallery/Gallery'
import './Home.css'

const featuredDishes = [
  { id: 1, name: 'Carbonara Clasica', description: 'Pasta artesanal con huevo, guanciale crujiente, pecorino romano y pimienta negra.', price: '14,90€', category: 'Pasta', isPopular: true },
  { id: 2, name: 'Pizza Margherita', description: 'Base de tomate San Marzano, mozzarella fior di latte y albahaca fresca.', price: '12,50€', category: 'Pizza', isPopular: true },
  { id: 3, name: 'Ossobuco alla Milanese', description: 'Jarrete de ternera estofado con verduras, vino blanco y gremolata.', price: '22,90€', category: 'Carnes', isPopular: false },
  { id: 4, name: 'Tiramisu Casero', description: 'Bizcochos savoiardi, mascarpone, cafe espresso y cacao en polvo.', price: '6,90€', category: 'Postres', isPopular: true },
  { id: 5, name: 'Risotto ai Funghi', description: 'Arroz arborio cremoso con setas porcini, parmesano y trufa negra.', price: '16,50€', category: 'Arroces', isPopular: false },
  { id: 6, name: 'Bruschetta al Pomodoro', description: 'Pan tostado con tomate cherry, ajo, albahaca y aceite de oliva.', price: '7,90€', category: 'Entrantes', isPopular: false },
]

function Home() {
  return (
    <main className="home">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <p className="section-subtitle hero-subtitle">Bienvenido a La Trattoria</p>
          <h1 className="hero-title">Sabores de Italia en cada bocado</h1>
          <p className="hero-description">Recetas tradicionales elaboradas con ingredientes frescos importados directamente de Italia.</p>
          <div className="hero-actions">
            <a href="/menu" className="btn-primary">Ver la carta</a>
            <a href="/contact" className="btn-outline">Reservar mesa</a>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container features-grid">
          {[
            { title: 'Ingredientes frescos', text: 'Seleccionamos a diario los mejores productos locales e importados.' },
            { title: 'Chef italiano', text: 'Nuestro chef Giulio Romano lleva 20 años cocinando autentica cocina italiana.' },
            { title: 'Bodega seleccionada', text: 'Mas de 80 referencias de vinos italianos y espanoles.' },
          ].map((feature) => (
            <div key={feature.title} className="feature-card">
              <span className="feature-icon">{feature.icon}</span>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="dishes-section">
        <div className="container">
          <div className="dishes-header">
            <p className="section-subtitle">Lo mas pedido</p>
            <h2 className="section-title">Nuestros platos destacados</h2>
          </div>
          <div className="dishes-grid">
            {featuredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
          <div className="dishes-cta">
            <a href="/menu" className="btn-outline">Ver menu completo</a>
          </div>
        </div>
      </section>

      <Gallery />

      <section className="quote-section">
        <div className="container">
          <blockquote className="quote">
            <span className="quote-mark">"</span>
            La buena cocina es honesta, simple y sabrosa.
            <span className="quote-mark">"</span>
            <cite>Auguste Escoffier</cite>
          </blockquote>
        </div>
      </section>
    </main>
  )
}

export default Home