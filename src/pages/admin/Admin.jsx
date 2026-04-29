import { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import './Admin.css';

function Admin() {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingEvent, setEditingEvent] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: 'Eventos',
        image: '',
        date: ''
    });

    const categories = ['Eventos', 'Noticias', 'Especiales', 'Chef'];

    useEffect(() => {
        fetchEvents();
    }, []);

    const fetchEvents = async () => {
        try {
            setLoading(true);
            const eventsRef = collection(db, 'events');
            const querySnapshot = await getDocs(eventsRef);

            const eventsData = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));

            setEvents(eventsData);
        } catch (err) {
            console.error('Error al cargar eventos:', err);
            alert('Error al cargar eventos');
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = async (e) => {
        e.preventDefault();

        if (!formData.title || !formData.description || !formData.date) {
            alert('Por favor completa todos los campos obligatorios');
            return;
        }

        try {
            await addDoc(collection(db, 'events'), {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                image: formData.image || 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
                date: formData.date
            });

            alert('Evento creado exitosamente');
            resetForm();
            fetchEvents();
        } catch (err) {
            console.error('Error al crear evento:', err);
            alert('Error al crear evento');
        }
    };

    const handleUpdate = async (e) => {
        e.preventDefault();

        if (!editingEvent) return;

        try {
            const eventRef = doc(db, 'events', editingEvent.id);
            await updateDoc(eventRef, {
                title: formData.title,
                description: formData.description,
                category: formData.category,
                image: formData.image,
                date: formData.date
            });

            alert('Evento actualizado exitosamente');
            resetForm();
            fetchEvents();
        } catch (err) {
            console.error('Error al actualizar evento:', err);
            alert('Error al actualizar evento');
        }
    };

    const handleDelete = async (eventId) => {
        if (!window.confirm('¿Estás seguro de que quieres eliminar este evento?')) {
            return;
        }

        try {
            await deleteDoc(doc(db, 'events', eventId));
            alert('Evento eliminado exitosamente');
            fetchEvents();
        } catch (err) {
            console.error('Error al eliminar evento:', err);
            alert('Error al eliminar evento');
        }
    };

    const startEdit = (event) => {
        setEditingEvent(event);
        setFormData({
            title: event.title,
            description: event.description,
            category: event.category,
            image: event.image,
            date: event.date
        });
        setShowForm(true);
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: 'Eventos',
            image: '',
            date: ''
        });
        setEditingEvent(null);
        setShowForm(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    if (loading) {
        return (
            <main className="admin-page">
                <div className="container">
                    <div className="admin-loading">Cargando...</div>
                </div>
            </main>
        );
    }

    return (
        <main className="admin-page">
            <div className="container">
                <h1 className="admin-title">Panel de Administración</h1>
                <p className="admin-subtitle">Gestiona los eventos y noticias del restaurante</p>

                <div className="admin-actions">
                    <button
                        className="btn-primary"
                        onClick={() => setShowForm(!showForm)}
                    >
                        {showForm ? 'Cancelar' : '+ Nuevo Evento'}
                    </button>
                </div>

                {showForm && (
                    <div className="admin-form-container">
                        <h2>{editingEvent ? 'Editar Evento' : 'Crear Nuevo Evento'}</h2>
                        <form onSubmit={editingEvent ? handleUpdate : handleCreate} className="admin-form">
                            <div className="form-group">
                                <label htmlFor="title">Título *</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleInputChange}
                                    required
                                    placeholder="Ej: Noche de Vinos Italianos"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="description">Descripción *</label>
                                <textarea
                                    id="description"
                                    name="description"
                                    value={formData.description}
                                    onChange={handleInputChange}
                                    required
                                    rows="4"
                                    placeholder="Describe el evento..."
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="category">Categoría *</label>
                                <select
                                    id="category"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleInputChange}
                                    required
                                >
                                    {categories.map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>

                            <div className="form-group">
                                <label htmlFor="image">URL de Imagen</label>
                                <input
                                    type="url"
                                    id="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleInputChange}
                                    placeholder="https://ejemplo.com/imagen.jpg"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="date">Fecha *</label>
                                <input
                                    type="date"
                                    id="date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>

                            <div className="form-actions">
                                <button type="submit" className="btn-primary">
                                    {editingEvent ? 'Actualizar' : 'Crear'}
                                </button>
                                <button type="button" className="btn-secondary" onClick={resetForm}>
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="admin-table-container">
                    <h2>Eventos Existentes ({events.length})</h2>
                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Categoría</th>
                                <th>Fecha</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {events.map(event => (
                                <tr key={event.id}>
                                    <td>{event.title}</td>
                                    <td>
                                        <span className={`category-badge category-${event.category.toLowerCase()}`}>
                                            {event.category}
                                        </span>
                                    </td>
                                    <td>{new Date(event.date).toLocaleDateString('es-ES')}</td>
                                    <td className="table-actions">
                                        <button
                                            className="btn-edit"
                                            onClick={() => startEdit(event)}
                                        >
                                            Editar
                                        </button>
                                        <button
                                            className="btn-delete"
                                            onClick={() => handleDelete(event.id)}
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    );
}

export default Admin;