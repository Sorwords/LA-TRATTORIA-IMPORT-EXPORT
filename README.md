# La Trattoria

### Authentic Italian Cuisine — Restaurant Website

A fully responsive multi-page restaurant website built with React + Vite as part of a frontend development course (UT4 + UT5).

---

## Table of Contents

- [About The Project](#about-the-project)
- [Built With](#built-with)
- [Getting Started](#getting-started)
- [Pages Overview](#pages-overview)
- [Firebase & Services](#firebase--services)
- [Import / Export Data](#import--export-data)
- [Sample Import Files](#sample-import-files)
- [Third-Party Components](#third-party-components)
- [Tutorials & Resources](#tutorials--resources)
- [Design](#design)
- [Code Conventions](#code-conventions)
- [License](#license)

---

## About The Project

**La Trattoria** is a restaurant website built to showcase authentic Italian cuisine. The project was created as the deliveries of a frontend development course (UT4 and UT5), applying React concepts such as components, props, state, routing, Firebase Firestore integration, and import/export of data in JSON, CSV, and XML formats.

Key highlights:
- Multi-page React app with client-side routing
- Fully responsive using Flexbox and CSS media queries
- Reusable components with props
- Interactive menu with live category filtering
- Reservation form with controlled React state
- Embedded map showing the restaurant location in Las Palmas de Gran Canaria
- Firebase Firestore integration with centralized access via `services/`
- Import data from JSON, CSV, and XML files into Firestore
- Export data from Firestore to JSON, CSV, and XML files
- Modal feedback instead of native `alert()` dialogs

---

## Built With

- [React 19](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [React Router DOM v7](https://reactrouter.com/)
- [Firebase 12 (Firestore)](https://firebase.google.com/)
- [OpenStreetMap](https://www.openstreetmap.org/)
- [Google Fonts](https://fonts.google.com/)

---

## Getting Started

### Prerequisites

- Node.js v18+
- npm

### Installation

1. Clone the repo
```sh
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
```

2. Install dependencies
```sh
npm install
```

3. Start the development server
```sh
npm run dev
```

4. Open http://localhost:5173 in your browser

### Branch structure

```
main
└── develop
    ├── feature/first-delivery
    ├── feature/second-delivery
    └── feature/import-and-export   ← UT5: import/export JSON, CSV, XML
```

---

## Pages Overview

### Home (/ or /home)
The main landing page. Full-screen hero with call-to-action, features strip, responsive grid of featured dishes using the DishCard component, and a closing quote section.

### Menu (/menu)
Full restaurant menu page. Dishes can be filtered by category using interactive filter buttons powered by React state.

### Contact (/contact)
Contact and reservations page. Displays address, phone, email, embedded OpenStreetMap, and a reservation form with controlled state.

### About (/about)
Presents the restaurant history, key statistics, team member cards, and values section.

### Import / Export (/import-export)
Data management page. Allows importing dishes from JSON, CSV, or XML files directly into Firebase Firestore, and exporting all current dishes from Firestore to JSON, CSV, or XML files. Includes a live data table with delete functionality and modal feedback.

---

## Firebase & Services

Firebase configuration is located at:
```
src/firebase/config.js
```

All Firebase access is **centralized** in the services layer:
```
src/services/dishService.js
```

Pages and components **never** call Firebase directly. They always go through `dishService.js`, which exposes these functions:

| Function | Description |
|----------|-------------|
| `getDishes()` | Fetches all dishes from Firestore |
| `addDish(dish)` | Adds a single dish to Firestore |
| `deleteDish(firestoreId)` | Deletes a dish by Firestore document ID |
| `importDishes(dishes)` | Batch-imports an array of dishes to Firestore |

This approach ensures that if Firebase is replaced or updated, only `dishService.js` needs to change — not every page.

The project uses **Firestore** (not Realtime Database). This is confirmed by the imports in `config.js`:
```js
import { getFirestore } from 'firebase/firestore'
```

---

## Import / Export Data

The import/export feature is implemented across these files:

```
src/
├── services/
│   └── dishService.js       ← Firebase CRUD (centralized)
├── utils/
│   ├── exportUtils.js       ← export to JSON / CSV / XML
│   └── importUtils.js       ← parse JSON / CSV / XML files
└── pages/
    └── import-export/
        ├── ImportExport.jsx  ← page UI with table, buttons, modal
        └── ImportExport.css
```

### Export process
1. User clicks "Exportar JSON/CSV/XML"
2. `ImportExport.jsx` calls the appropriate function from `exportUtils.js`
3. The function builds a string (JSON via `JSON.stringify()`, CSV via string manipulation, XML via template building)
4. A `Blob` is created with the correct MIME type (`application/json`, `text/csv`, `application/xml`)
5. A temporary URL is generated with `URL.createObjectURL()`
6. A hidden `<a>` element is clicked programmatically to trigger the browser download

### Import process
1. User selects a file using the `<input type="file">` element
2. `ImportExport.jsx` calls the appropriate parser from `importUtils.js`
3. `FileReader` reads the file as text
4. The parser converts the text to a JavaScript array of objects:
   - JSON: using `JSON.parse()`
   - CSV: splitting by lines and commas
   - XML: using `DOMParser` + DOM traversal
5. The array is passed to `importDishes()` in `dishService.js`
6. Firestore `writeBatch` saves all documents in a single atomic operation
7. The page reloads the list from Firebase and shows a success modal

---

## Sample Import Files

You can use these example files to test the import feature:

| Format | Download |
|--------|----------|
| JSON | [datos.json](public/datos.json) |
| CSV | [datos.csv](public/datos.csv) |
| XML | [datos.xml](public/datos.xml) |

---

## Third-Party Components

| Component | Description | Link |
|-----------|-------------|------|
| Firebase Firestore | Cloud NoSQL database for storing dishes | [firebase.google.com](https://firebase.google.com/) |
| OpenStreetMap | Embedded interactive map via iframe | [openstreetmap.org](https://www.openstreetmap.org/) |
| Google Fonts | Playfair Display and Lato font families | [fonts.google.com](https://fonts.google.com/) |
| React Router DOM | Client-side routing between pages | [reactrouter.com](https://reactrouter.com/) |

---

## Tutorials & Resources

- [React Official Documentation](https://react.dev/)
- [React Router DOM Docs](https://reactrouter.com/en/main)
- [Vite Getting Started Guide](https://vitejs.dev/guide/)
- [Firebase Firestore Documentation](https://firebase.google.com/docs/firestore)
- [MDN — FileReader API](https://developer.mozilla.org/en-US/docs/Web/API/FileReader)
- [MDN — DOMParser](https://developer.mozilla.org/en-US/docs/Web/API/DOMParser)
- [MDN — Blob](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
- [CSS Flexbox Complete Guide — CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Media Queries Guide — MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Best README Template — othneildrew](https://github.com/othneildrew/Best-README-Template)
- [OpenStreetMap Embed Guide](https://wiki.openstreetmap.org/wiki/Embed_Map)
- [Professor reference project — react-import-export-json-xml-csv](https://github.com/tcrurav/react-import-export-json-xml-csv.git)

---

## Design

The design follows a refined, editorial aesthetic inspired by classic Italian restaurant branding.

- Primary color: `#1a1a1a` (deep black)
- Secondary color: `#c8a96e` (warm gold)
- Accent color: `#8b1a1a` (dark red)
- Background: `#faf8f4` (warm white)
- Display font: Playfair Display
- Body font: Lato

---

## Code Conventions

| Element | Convention | Example |
|---------|------------|---------|
| Folders | kebab-case | `dish-card/` |
| Component files | PascalCase | `DishCard.jsx` |
| CSS files | PascalCase | `DishCard.css` |
| CSS classes/ids | kebab-case | `.dish-card-name` |
| JS variables | camelCase | `filteredItems` |
| Boolean variables | is/has prefix | `isMenuOpen` |
| Routes | kebab-case | `/about`, `/import-export` |
| Services | camelCase | `dishService.js` |
| Utils | camelCase | `exportUtils.js` |

---

## License

Distributed under the MIT License. This project was created for educational purposes as part of a frontend development course.

---

Made with React + Firebase
