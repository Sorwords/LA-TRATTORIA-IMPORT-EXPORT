import './Legal.css';

function Legal() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1 className="legal-title">Aviso Legal</h1>
        <p className="legal-updated">Última actualización: Marzo 2024</p>

        <section className="legal-section">
          <h2>1. Datos Identificativos</h2>
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la 
            Sociedad de la Información y Comercio Electrónico, se informa de los datos del titular 
            del sitio web:
          </p>
          <p><strong>Titular:</strong> LA TRATTORIA S.L.</p>
          <p><strong>CIF:</strong> B12345678</p>
          <p><strong>Domicilio Social:</strong> Calle Italia, 123, 35001, Las Palmas de Gran Canaria</p>
          <p><strong>Email:</strong> info@latrattoria.com</p>
          <p><strong>Teléfono:</strong> +34 928 123 456</p>
          <p><strong>Inscrita en:</strong> Registro Mercantil de Las Palmas, Tomo 123, Folio 456, Hoja GC-7890</p>
        </section>

        <section className="legal-section">
          <h2>2. Objeto</h2>
          <p>
            El presente Aviso Legal regula el uso y utilización del sitio web www.latrattoria.com, 
            del que es titular LA TRATTORIA S.L.
          </p>
          <p>
            La navegación por el sitio web atribuye la condición de usuario del mismo e implica la 
            aceptación de todas las condiciones incluidas en este Aviso Legal.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Condiciones de Acceso y Uso</h2>
          <p>El sitio web y sus servicios son de acceso libre y gratuito. No obstante:</p>
          <ul>
            <li>El Usuario se compromete a hacer un uso adecuado de los contenidos y servicios</li>
            <li>Queda prohibido el uso con fines ilícitos o lesivos</li>
            <li>No se permite la reproducción, distribución o modificación de los contenidos sin autorización</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Propiedad Intelectual e Industrial</h2>
          <p>
            Todos los contenidos del sitio web (textos, fotografías, gráficos, imágenes, iconos, 
            tecnología, software, diseño gráfico y códigos fuente) son propiedad intelectual de 
            LA TRATTORIA S.L., sin que puedan entenderse cedidos al usuario ninguno de los derechos 
            de explotación reconocidos por la normativa vigente.
          </p>
          <p>
            Queda expresamente prohibida la reproducción, distribución, comunicación pública y 
            transformación de los contenidos sin autorización escrita.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Exclusión de Garantías y Responsabilidad</h2>
          <p>
            LA TRATTORIA S.L. no se hace responsable de:
          </p>
          <ul>
            <li>La continuidad y disponibilidad de los contenidos</li>
            <li>La ausencia de errores en dichos contenidos</li>
            <li>La ausencia de virus y/o demás componentes dañinos</li>
            <li>Los daños que puedan derivarse del uso inadecuado del sitio web</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>6. Enlaces</h2>
          <p>
            El sitio web puede contener enlaces a otros sitios web. LA TRATTORIA S.L. no asume 
            responsabilidad alguna por el contenido de dichos sitios web.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Protección de Datos</h2>
          <p>
            Para más información sobre el tratamiento de datos personales, consulte nuestra 
            Política de Privacidad.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Modificaciones</h2>
          <p>
            LA TRATTORIA S.L. se reserva el derecho de efectuar sin previo aviso las modificaciones 
            que considere oportunas en su sitio web, pudiendo cambiar, suprimir o añadir tanto los 
            contenidos y servicios como la forma en que estos aparezcan presentados o localizados.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Legislación Aplicable y Jurisdicción</h2>
          <p>
            Las presentes condiciones se rigen por la legislación española. Para la resolución de 
            cualquier controversia, las partes se someten expresamente a los Juzgados y Tribunales 
            de Las Palmas de Gran Canaria.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Legal;