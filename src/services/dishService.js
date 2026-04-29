import { db } from '../firebase/config'
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  writeBatch,
} from 'firebase/firestore'

const COLLECTION = 'dishes'

/**
 * Obtiene todos los platos de Firestore.
 * @returns {Promise<Array>} Array de platos con su id de Firestore
 */
export async function getDishes() {
  const snapshot = await getDocs(collection(db, COLLECTION))
  return snapshot.docs.map((d) => ({ firestoreId: d.id, ...d.data() }))
}

/**
 * Añade un único plato a Firestore.
 * @param {Object} dish - El objeto del plato (sin firestoreId)
 * @returns {Promise<string>} El id generado por Firestore
 */
export async function addDish(dish) {
  const ref = await addDoc(collection(db, COLLECTION), dish)
  return ref.id
}

/**
 * Elimina un plato de Firestore por su id.
 * @param {string} firestoreId
 */
export async function deleteDish(firestoreId) {
  await deleteDoc(doc(db, COLLECTION, firestoreId))
}

/**
 * Importa un array de platos a Firestore en batch.
 * Cada plato se guarda como un documento nuevo.
 * @param {Array} dishes - Array de objetos plato
 */
export async function importDishes(dishes) {
  const batch = writeBatch(db)
  dishes.forEach((dish) => {
    const ref = doc(collection(db, COLLECTION))
    // Eliminamos firestoreId si viniera del archivo importado
    const { firestoreId, ...data } = dish
    batch.set(ref, data)
  })
  await batch.commit()
}
