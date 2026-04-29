import { useState, useEffect } from 'react';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './Gallery.css';

function Gallery() {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Todos');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const categories = ['Todos', 'Eventos', 'Noticias', 'Especiales', 'Chef'];

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        setLoading(true);
        const eventsRef = collection(db, 'events');
        const q = query(eventsRef, orderBy('date', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const eventsData = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        
        setEvents(eventsData);
        setFilteredEvents(eventsData);
        setError(null);
      } catch (err) {
        console.error('Error al cargar eventos:', err);
        setError('No se pudieron cargar los eventos. Usando datos de ejemplo.');
        
        const mockData = [
          {
            id: 1,
            title: 'Noche de Vinos Italianos',
            description: 'Degustación de vinos exclusivos de la Toscana con maridaje especial.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600',
            date: '2026-03-15'
          },
          {
            id: 2,
            title: 'Nuevo Chef Ejecutivo',
            description: 'Damos la bienvenida a Marco Rossi, con 15 años de experiencia en Roma.',
            category: 'Noticias',
            image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600',
            date: '2026-03-10'
          },
          {
            id: 3,
            title: 'Menú de Primavera',
            description: 'Descubre nuestros platos de temporada con ingredientes frescos.',
            category: 'Especiales',
            image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600',
            date: '2026-03-20'
          },
          {
            id: 4,
            title: 'Clase de Pasta Fresca',
            description: 'Aprende a hacer pasta artesanal con nuestro chef. Plazas limitadas.',
            category: 'Eventos',
            image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600',
            date: '2026-03-25'
          },
          {
            id: 5,
            title: 'Especial Trufas',
            description: 'Durante todo marzo, prueba nuestros platos con trufa blanca de Alba.',
            category: 'Especiales',
            image: 'https://images.unsplash.com/photo-1611171711912-e0763e0e1b2c?w=600',
            date: '2026-03-05'
          },
          {
            id: 6,
            title: 'Receta del Mes',
            description: 'El Chef comparte su secreto para el risotto perfecto.',
            category: 'Chef',
            image: 'https://www.tutkit.com/storage/media/packages/1133/1133-speisekarten-vorlagen-italienische-restaurants-02.avif',
            date: '2026-03-01'
          }
        ];
        
        setEvents(mockData);
        setFilteredEvents(mockData);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    if (selectedCategory === 'Todos') {
      setFilteredEvents(events);
    } else {
      const filtered = events.filter(event => event.category === selectedCategory);
      setFilteredEvents(filtered);
    }
  }, [selectedCategory, events]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  if (loading) {
    return (
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-loading">Cargando eventos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="gallery-section">
      <div className="container">
        <p className="section-subtitle">Lo último</p>
        <h2 className="section-title">Eventos y Noticias</h2>
        <p className="gallery-intro">
          Descubre las últimas novedades, eventos especiales y noticias de nuestro restaurante.
        </p>

        {error && (
          <div className="gallery-notice">
            ℹ️ {error}
          </div>
        )}

        <div className="gallery-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`gallery-filter-btn ${selectedCategory === category ? 'gallery-filter-btn--active' : ''}`}
              onClick={() => handleCategoryChange(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <article key={event.id} className="gallery-card">
                <div className="gallery-card-image">
                  <img src={event.image} alt={event.title} />
                  <span className="gallery-card-category">{event.category}</span>
                </div>
                <div className="gallery-card-content">
                  <h3 className="gallery-card-title">{event.title}</h3>
                  <p className="gallery-card-description">{event.description}</p>
                  <time className="gallery-card-date">
                    {new Date(event.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </time>
                </div>
              </article>
            ))
          ) : (
            <p className="gallery-empty">No hay eventos en esta categoría.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Gallery;