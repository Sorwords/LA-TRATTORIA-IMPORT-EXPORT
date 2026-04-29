import { useState, useEffect } from 'react'
import { getDishes, importDishes, deleteDish } from '../../services/dishService'
import { exportToJSON, exportToCSV, exportToXML } from '../../utils/exportUtils'
import { importFromJSON, importFromCSV, importFromXML } from '../../utils/importUtils'
import './ImportExport.css'

function ImportExport() {
  const [dishes, setDishes] = useState([])
  const [loading, setLoading] = useState(true)
  const [importing, setImporting] = useState(false)
  const [modal, setModal] = useState(null) // { type: 'success'|'error', message: string }

  // useEffect con array vacío [] → se ejecuta solo una vez al montar el componente
  // Se usa para cargar los platos de Firebase al entrar en la página
  useEffect(() => {
    loadDishes()
  }, [])

  async function loadDishes() {
    setLoading(true)
    try {
      const data = await getDishes()
      setDishes(data)
    } catch (err) {
      showModal('error', 'Error al cargar los platos de Firebase.')
    } finally {
      setLoading(false)
    }
  }

  function showModal(type, message) {
    setModal({ type, message })
  }

  function closeModal() {
    setModal(null)
  }

  // ─── EXPORTAR ────────────────────────────────────────────────────────────────

  function handleExportJSON() {
    if (dishes.length === 0) return showModal('error', 'No hay platos para exportar.')
    exportToJSON(dishes)
  }

  function handleExportCSV() {
    if (dishes.length === 0) return showModal('error', 'No hay platos para exportar.')
    exportToCSV(dishes)
  }

  function handleExportXML() {
    if (dishes.length === 0) return showModal('error', 'No hay platos para exportar.')
    exportToXML(dishes)
  }

  // ─── IMPORTAR ────────────────────────────────────────────────────────────────

  async function handleImport(e, format) {
    const file = e.target.files[0]
    // Resetear el input para permitir importar el mismo archivo dos veces
    e.target.value = ''
    if (!file) return

    setImporting(true)
    try {
      let imported = []
      if (format === 'json') imported = await importFromJSON(file)
      else if (format === 'csv') imported = await importFromCSV(file)
      else if (format === 'xml') imported = await importFromXML(file)

      // Subir los platos importados a Firebase a través del service
      await importDishes(imported)
      // Recargar la lista desde Firebase
      await loadDishes()
      showModal('success', `${imported.length} plato(s) importados correctamente desde ${format.toUpperCase()}.`)
    } catch (err) {
      showModal('error', `Error al importar: ${err.message}`)
    } finally {
      setImporting(false)
    }
  }

  async function handleDelete(firestoreId) {
    try {
      await deleteDish(firestoreId)
      // Actualizar el estado local sin recargar Firebase
      setDishes((prev) => prev.filter((d) => d.firestoreId !== firestoreId))
    } catch (err) {
      showModal('error', 'Error al eliminar el plato.')
    }
  }

  return (
    <main className="ie-page">
      <section className="ie-hero">
        <div className="container">
          <p className="section-subtitle">Gestión de datos</p>
          <h1 className="section-title">Importar / Exportar</h1>
          <p className="ie-hero-text">
            Gestiona los platos del menú importando o exportando datos en JSON, CSV y XML.
            Todos los datos se sincronizan con Firebase Firestore.
          </p>
        </div>
      </section>

      <section className="ie-actions">
        <div className="container ie-actions-grid">

          {/* ── EXPORTAR ── */}
          <div className="ie-card">
            <div className="ie-card-header">
              <span className="ie-card-icon">↓</span>
              <h2 className="ie-card-title">Exportar datos</h2>
            </div>
            <p className="ie-card-desc">
              Descarga todos los platos de Firebase en el formato que necesites.
            </p>
            <div className="ie-btn-group">
              <button className="ie-btn ie-btn--json" onClick={handleExportJSON}>
                Exportar JSON
              </button>
              <button className="ie-btn ie-btn--csv" onClick={handleExportCSV}>
                Exportar CSV
              </button>
              <button className="ie-btn ie-btn--xml" onClick={handleExportXML}>
                Exportar XML
              </button>
            </div>
          </div>

          {/* ── IMPORTAR ── */}
          <div className="ie-card">
            <div className="ie-card-header">
              <span className="ie-card-icon">↑</span>
              <h2 className="ie-card-title">Importar datos</h2>
            </div>
            <p className="ie-card-desc">
              Carga platos desde un archivo y añádelos a Firebase automáticamente.
            </p>
            <div className="ie-btn-group">
              <label className={`ie-btn ie-btn--json ${importing ? 'ie-btn--disabled' : ''}`}>
                Importar JSON
                <input
                  type="file"
                  accept=".json,application/json"
                  hidden
                  disabled={importing}
                  onChange={(e) => handleImport(e, 'json')}
                />
              </label>
              <label className={`ie-btn ie-btn--csv ${importing ? 'ie-btn--disabled' : ''}`}>
                Importar CSV
                <input
                  type="file"
                  accept=".csv,text/csv"
                  hidden
                  disabled={importing}
                  onChange={(e) => handleImport(e, 'csv')}
                />
              </label>
              <label className={`ie-btn ie-btn--xml ${importing ? 'ie-btn--disabled' : ''}`}>
                Importar XML
                <input
                  type="file"
                  accept=".xml,application/xml,text/xml"
                  hidden
                  disabled={importing}
                  onChange={(e) => handleImport(e, 'xml')}
                />
              </label>
            </div>
            {importing && <p className="ie-loading">Importando datos a Firebase…</p>}
          </div>
        </div>
      </section>

      {/* ── TABLA DE PLATOS ── */}
      <section className="ie-table-section">
        <div className="container">
          <div className="ie-table-header">
            <h2 className="ie-table-title">
              Platos en Firebase
              <span className="ie-count">{dishes.length}</span>
            </h2>
            <button className="ie-refresh-btn" onClick={loadDishes}>
              ↻ Recargar
            </button>
          </div>

          {loading ? (
            <p className="ie-loading">Cargando datos de Firebase…</p>
          ) : dishes.length === 0 ? (
            <p className="ie-empty">No hay platos en Firebase. Importa un archivo para comenzar.</p>
          ) : (
            <div className="ie-table-wrapper">
              <table className="ie-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Categoría</th>
                    <th>Precio</th>
                    <th>Popular</th>
                    <th>Acción</th>
                  </tr>
                </thead>
                <tbody>
                  {dishes.map((dish) => (
                    <tr key={dish.firestoreId}>
                      <td className="ie-td-id">{dish.id ?? '—'}</td>
                      <td>{dish.name}</td>
                      <td><span className="ie-category-badge">{dish.category}</span></td>
                      <td className="ie-td-price">{dish.price}</td>
                      <td>{dish.isPopular ? '⭐' : '—'}</td>
                      <td>
                        <button
                          className="ie-delete-btn"
                          onClick={() => handleDelete(dish.firestoreId)}
                          title="Eliminar plato"
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>

      {/* ── MODAL ── */}
      {modal && (
        <div className="ie-modal-overlay" onClick={closeModal}>
          <div
            className={`ie-modal ${modal.type === 'success' ? 'ie-modal--success' : 'ie-modal--error'}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className="ie-modal-icon">{modal.type === 'success' ? '✓' : '✕'}</span>
            <p className="ie-modal-message">{modal.message}</p>
            <button className="ie-modal-close" onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </main>
  )
}

export default ImportExport
