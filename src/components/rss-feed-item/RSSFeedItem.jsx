import './RSSFeedItem.css';

function RSSFeedItem({ title, description, link, pubDate, category }) {
    const formatDate = (dateString) => {
        try {
            const date = new Date(dateString);
            return date.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });
        } catch {
            return 'Fecha desconocida';
        }
    };

    const stripHTML = (html) => {
        const tmp = document.createElement('div');
        tmp.innerHTML = html;
        return tmp.textContent || tmp.innerText || '';
    };

    return (
        <article className="rss-feed-item">
            <div className="rss-feed-item-header">
                <span className="rss-feed-item-category">{category}</span>
                <time className="rss-feed-item-date">{formatDate(pubDate)}</time>
            </div>
            <h2 className="rss-feed-item-title">{title}</h2>
            <p className="rss-feed-item-description">
                {stripHTML(description).substring(0, 150)}...
            </p>
            <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="rss-feed-item-link"
            >
                Leer más →
            </a>
        </article>
    );
}

export default RSSFeedItem;