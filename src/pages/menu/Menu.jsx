import { useState } from 'react'
import DishCard from '../../components/dish-card/DishCard'
import './Menu.css'

const menuItems = [
  { id: 1, name: 'Bruschetta al Pomodoro', description: 'Pan tostado con tomate cherry, ajo, albahaca y aceite de oliva.', price: '7,90€', category: 'Entrantes', isPopular: false },
  { id: 2, name: 'Carpaccio di Manzo', description: 'Laminas de ternera cruda con rucula, parmesano y vinagreta de limon.', price: '11,90€', category: 'Entrantes', isPopular: true },
  { id: 3, name: 'Carbonara Clasica', description: 'Pasta artesanal con huevo, guanciale, pecorino romano y pimienta negra.', price: '14,90€', category: 'Pasta', isPopular: true },
  { id: 4, name: 'Pappardelle al Ragu', description: 'Pasta ancha con ragu de ternera y cerdo cocinado 6 horas.', price: '15,90€', category: 'Pasta', isPopular: true },
  { id: 5, name: 'Pizza Margherita', description: 'Base de tomate San Marzano, mozzarella fior di latte y albahaca fresca.', price: '12,50€', category: 'Pizzas', isPopular: true },
  { id: 6, name: 'Pizza Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmesano y fontina sobre base blanca.', price: '14,90€', category: 'Pizzas', isPopular: false },
  { id: 7, name: 'Risotto ai Funghi', description: 'Arroz arborio con setas porcini, parmesano y trufa negra.', price: '16,50€', category: 'Arroces', isPopular: false },
  { id: 8, name: 'Ossobuco alla Milanese', description: 'Jarrete de ternera estofado con verduras, vino blanco y gremolata.', price: '22,90€', category: 'Carnes', isPopular: false },
  { id: 9, name: 'Tiramisu Casero', description: 'Bizcochos savoiardi, mascarpone, cafe espresso y cacao en polvo.', price: '6,90€', category: 'Postres', isPopular: true },
  { id: 10, name: 'Panna Cotta', description: 'Crema italiana con coulis de frutos rojos frescos.', price: '5,90€', category: 'Postres', isPopular: false },
]

const categories = ['Todos', ...new Set(menuItems.map((item) => item.category))]

function Menu() {
  const [activeCategory, setActiveCategory] = useState('Todos')
  const filteredItems = activeCategory === 'Todos' ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <main className="menu-page">
      <section className="menu-hero">
        <div className="container">
          <p className="section-subtitle">Nuestra propuesta</p>
          <h1 className="section-title menu-hero-title">La Carta</h1>
          <p className="menu-hero-text">Platos elaborados con ingredientes frescos y recetas tradicionales italianas.</p>
        </div>
      </section>
      <section className="menu-content">
        <div className="container">
          <div className="menu-filters">
            {categories.map((cat) => (
              <button key={cat} className={`menu-filter-btn ${activeCategory === cat ? 'menu-filter-btn--active' : ''}`} onClick={() => setActiveCategory(cat)}>
                {cat}
              </button>
            ))}
          </div>
          <div className="menu-grid">
            {filteredItems.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default Menu