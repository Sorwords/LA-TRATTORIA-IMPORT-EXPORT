import { useState, useEffect } from 'react';
import './News.css';

const RSS_FEED_URL = '/rss.xml';

const mockNews = [
  { id: 1, title: 'Nuevas tendencias en cocina italiana contemporánea', description: 'La cocina italiana evoluciona con técnicas modernas que respetan la tradición. Descubre las últimas innovaciones gastronómicas.', link: '#', pubDate: new Date().toISOString(), category: 'Gastronomía' },
  { id: 2, title: 'Los mejores vinos italianos de 2024', description: 'Una selección de los vinos más destacados de las regiones vinícolas de Italia este año.', link: '#', pubDate: new Date().toISOString(), category: 'Vinos' },
  { id: 3, title: 'Receta tradicional: Risotto alla Milanese perfecto', description: 'Aprende a preparar el clásico risotto milanés con azafrán siguiendo la receta auténtica.', link: '#', pubDate: new Date().toISOString(), category: 'Recetas' },
  { id: 4, title: 'El arte de hacer pasta fresca en casa', description: 'Guía completa para dominar la técnica de la pasta casera como las nonnas italianas.', link: '#', pubDate: new Date().toISOString(), category: 'Técnicas' },
];

const formatDate = (dateString) => {
  try {
    return new Date(dateString).toLocaleDateString('es-ES', {
      day: 'numeric', month: 'long', year: 'numeric',
    });
  } catch {
    return 'Fecha desconocida';
  }
};

function NewsCard({ title, description, link, pubDate, category }) {
  return (
    <article className="news-card">
      <div className="news-card-top">
        <span className="news-card-category">{category}</span>
        <time className="news-card-date">{formatDate(pubDate)}</time>
      </div>
      <h2 className="news-card-title">{title}</h2>
      <p className="news-card-description">{description.substring(0, 150)}…</p>
      <a href={link} target="_blank" rel="noopener noreferrer" className="news-card-link">
        Leer más →
      </a>
    </article>
  );
}

function News() {
  const [news, setNews]       = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => { fetchRSSFeed(); }, []);

  const fetchRSSFeed = async () => {
    try {
      setLoading(true);
      const response = await fetch(RSS_FEED_URL);
      const text     = await response.text();
      const parser   = new DOMParser();
      const xmlDoc   = parser.parseFromString(text, 'text/xml');
      const items    = xmlDoc.querySelectorAll('item');

      const newsData = Array.from(items).slice(0, 12).map((item, index) => ({
        id:          index + 1,
        title:       item.querySelector('title')?.textContent       || 'Sin título',
        description: item.querySelector('description')?.textContent || 'Sin descripción',
        link:        item.querySelector('link')?.textContent        || '#',
        pubDate:     item.querySelector('pubDate')?.textContent     || '',
        category:    item.querySelector('category')?.textContent    || 'Gastronomía',
      }));

      setNews(newsData);
      setError(null);
    } catch (err) {
      console.error('Error al cargar RSS:', err);
      setError('No se pudo cargar el feed RSS. Mostrando noticias de ejemplo.');
      setNews(mockNews);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="news-page">

      {/* ── Hero ── */}
      <section className="news-hero">
        <div className="container">
          <p className="section-subtitle news-hero-subtitle">Actualidad gastronómica</p>
          <h1 className="news-hero-title">Noticias & Novedades</h1>
          <p className="news-hero-text">
            Lo último sobre cocina italiana, eventos especiales y la vida en La Trattoria
          </p>
        </div>
      </section>

      {/* ── Contenido ── */}
      <section className="news-content">
        <div className="container">

          {/* Barra RSS */}
          <div className="news-rss-bar">
            <p className="news-rss-label">
              <strong>Feed RSS:</strong> La Trattoria — Noticias
            </p>
            <a href={RSS_FEED_URL} target="_blank" rel="noopener noreferrer" className="btn-primary news-rss-btn">
              Ver feed completo
            </a>
          </div>

          {/* Aviso de error */}
          {error && <div className="news-notice">{error}</div>}

          {/* Estado de carga */}
          {loading ? (
            <div className="news-loading">Cargando noticias…</div>
          ) : (
            <div className="news-grid">
              {news.map((item) => (
                <NewsCard
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  link={item.link}
                  pubDate={item.pubDate}
                  category={item.category}
                />
              ))}
            </div>
          )}

        </div>
      </section>

    </main>
  );
}

export default News;
