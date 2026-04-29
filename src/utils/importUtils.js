/**
 * Utilidades para importar datos desde archivos JSON, CSV y XML.
 * Devuelven siempre un array de objetos plato (Promise).
 */

/**
 * Lee un archivo y devuelve su contenido como string.
 * @param {File} file
 * @returns {Promise<string>}
 */
function readFileAsText(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = (e) => resolve(e.target.result)
    reader.onerror = () => reject(new Error('Error al leer el archivo'))
    reader.readAsText(file)
  })
}

/**
 * Importa platos desde un archivo JSON.
 * Usa JSON.parse() para convertir el string a array de objetos.
 * @param {File} file
 * @returns {Promise<Array>}
 */
export async function importFromJSON(file) {
  const text = await readFileAsText(file)
  // JSON.parse() convierte el string JSON en un array de objetos JavaScript
  const data = JSON.parse(text)
  if (!Array.isArray(data)) throw new Error('El JSON debe ser un array de platos')
  return data
}

/**
 * Importa platos desde un archivo CSV.
 * La primera fila se usa como cabecera (nombres de campo).
 * El tipo MIME de los CSV que importamos es text/csv.
 * @param {File} file
 * @returns {Promise<Array>}
 */
export async function importFromCSV(file) {
  const text = await readFileAsText(file)
  const lines = text.trim().split('\n')
  if (lines.length < 2) throw new Error('El CSV no tiene datos')
  const headers = lines[0].split(',').map((h) => h.trim().replace(/^"|"$/g, ''))
  const dishes = lines.slice(1).map((line) => {
    // Parseo simple de CSV con comillas dobles
    const values = line.match(/(".*?"|[^,]+)(?=,|$)/g) || []
    const obj = {}
    headers.forEach((h, i) => {
      let val = (values[i] ?? '').trim().replace(/^"|"$/g, '').replace(/""/g, '"')
      // Convertir booleanos
      if (val === 'true') val = true
      else if (val === 'false') val = false
      // Convertir números enteros (ids)
      else if (!isNaN(val) && val !== '') val = isNaN(parseInt(val)) ? val : Number(val)
      obj[h] = val
    })
    return obj
  })
  return dishes
}

/**
 * Importa platos desde un archivo XML.
 * Usa DOMParser para convertir el XML a JSON.
 * @param {File} file
 * @returns {Promise<Array>}
 */
export async function importFromXML(file) {
  const text = await readFileAsText(file)
  // DOMParser convierte el string XML en un documento DOM
  const parser = new DOMParser()
  const xmlDoc = parser.parseFromString(text, 'application/xml')
  const errorNode = xmlDoc.querySelector('parsererror')
  if (errorNode) throw new Error('XML inválido')
  const dishNodes = xmlDoc.querySelectorAll('dish')
  const dishes = Array.from(dishNodes).map((node) => {
    const obj = {}
    Array.from(node.children).forEach((child) => {
      let val = child.textContent.trim()
      if (val === 'true') val = true
      else if (val === 'false') val = false
      else if (!isNaN(val) && val !== '') val = Number(val)
      obj[child.tagName] = val
    })
    return obj
  })
  return dishes
}
