/**
 * Utilidades para exportar datos en formato JSON, CSV y XML.
 * Estas funciones generan y descargan el archivo en el sistema de ficheros del usuario.
 */

/**
 * Dispara la descarga de un archivo en el navegador.
 * @param {string} content - Contenido del archivo
 * @param {string} filename - Nombre del archivo a descargar
 * @param {string} mimeType - Tipo MIME del archivo
 */
function downloadFile(content, filename, mimeType) {
  const blob = new Blob([content], { type: mimeType })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = filename
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

/**
 * Exporta un array de platos a un archivo JSON.
 * @param {Array} dishes
 */
export function exportToJSON(dishes) {
  // Eliminamos el campo firestoreId para el archivo exportado
  const clean = dishes.map(({ firestoreId, ...rest }) => rest)
  const content = JSON.stringify(clean, null, 2)
  downloadFile(content, 'datos.json', 'application/json')
}

/**
 * Exporta un array de platos a un archivo CSV.
 * El tipo MIME para CSV es text/csv.
 * @param {Array} dishes
 */
export function exportToCSV(dishes) {
  if (dishes.length === 0) return
  const clean = dishes.map(({ firestoreId, ...rest }) => rest)
  const headers = Object.keys(clean[0])
  const rows = clean.map((dish) =>
    headers.map((h) => `"${String(dish[h] ?? '').replace(/"/g, '""')}"`).join(',')
  )
  const content = [headers.join(','), ...rows].join('\n')
  // Tipo MIME para CSV: text/csv
  downloadFile(content, 'datos.csv', 'text/csv;charset=utf-8;')
}

/**
 * Exporta un array de platos a un archivo XML.
 * @param {Array} dishes
 */
export function exportToXML(dishes) {
  const clean = dishes.map(({ firestoreId, ...rest }) => rest)
  const items = clean
    .map((dish) => {
      const fields = Object.entries(dish)
        .map(([key, val]) => `    <${key}>${escapeXML(String(val ?? ''))}</${key}>`)
        .join('\n')
      return `  <dish>\n${fields}\n  </dish>`
    })
    .join('\n')
  const content = `<?xml version="1.0" encoding="UTF-8"?>\n<dishes>\n${items}\n</dishes>`
  downloadFile(content, 'datos.xml', 'application/xml')
}

/**
 * Escapa caracteres especiales para XML.
 */
function escapeXML(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}
