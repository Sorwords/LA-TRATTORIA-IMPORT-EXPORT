import './Privacy.css';

function Privacy() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1 className="legal-title">Política de Privacidad y Cookies</h1>
        <p className="legal-updated">Última actualización: Marzo 2024</p>

        <section className="legal-section">
          <h2>1. Información al Usuario</h2>
          <p>
            LA TRATTORIA S.L., como Responsable del Tratamiento, le informa que, según lo dispuesto en el 
            Reglamento (UE) 2016/679, de 27 de abril, (RGPD) y en la L.O. 3/2018, de 5 de diciembre, de 
            Protección de Datos y Garantía de los Derechos Digitales (LOPDGDD), trataremos su datos tal y 
            como reflejamos en la presente Política de Privacidad.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Responsable del Tratamiento</h2>
          <p><strong>Identidad:</strong> LA TRATTORIA S.L.</p>
          <p><strong>CIF:</strong> B12345678</p>
          <p><strong>Dirección:</strong> Calle Italia, 123, 35001, Las Palmas de Gran Canaria</p>
          <p><strong>Email:</strong> privacidad@latrattoria.com</p>
          <p><strong>Teléfono:</strong> +34 928 123 456</p>
        </section>

        <section className="legal-section">
          <h2>3. Finalidad del Tratamiento de Datos</h2>
          <p>
            Los datos personales proporcionados a través de nuestros formularios serán tratados con las 
            siguientes finalidades:
          </p>
          <ul>
            <li>Gestión de reservas de mesa</li>
            <li>Atención de consultas y solicitudes de información</li>
            <li>Envío de comunicaciones comerciales (con su consentimiento previo)</li>
            <li>Gestión de pedidos a domicilio</li>
            <li>Mejora de nuestros servicios</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Base Jurídica</h2>
          <p>
            El tratamiento de sus datos se basa en el consentimiento que nos otorga al aceptar esta 
            Política de Privacidad, así como en la ejecución del contrato de servicios (reservas, pedidos).
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Conservación de Datos</h2>
          <p>
            Los datos personales proporcionados se conservarán mientras se mantenga la relación comercial 
            o durante los años necesarios para cumplir con las obligaciones legales. Una vez cesada la 
            relación, los datos serán eliminados aplicando medidas de seguridad adecuadas.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Derechos del Usuario</h2>
          <p>Como usuario, tiene derecho a:</p>
          <ul>
            <li><strong>Acceso:</strong> Conocer qué datos personales tenemos sobre usted</li>
            <li><strong>Rectificación:</strong> Solicitar la corrección de datos inexactos</li>
            <li><strong>Supresión:</strong> Solicitar la eliminación de sus datos</li>
            <li><strong>Oposición:</strong> Oponerse al tratamiento de sus datos</li>
            <li><strong>Limitación:</strong> Solicitar la limitación del tratamiento</li>
            <li><strong>Portabilidad:</strong> Recibir sus datos en formato estructurado</li>
          </ul>
          <p>
            Para ejercer estos derechos, puede contactar con nosotros a través de 
            privacidad@latrattoria.com o en nuestra dirección postal.
          </p>
        </section>

        <section className="legal-section">
          <h2>7. Política de Cookies</h2>
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación 
            y ofrecer contenidos de interés. Las cookies son pequeños archivos de texto que se almacenan 
            en su dispositivo.
          </p>
          <h3>Tipos de Cookies Utilizadas:</h3>
          <ul>
            <li><strong>Cookies técnicas:</strong> Necesarias para la navegación y funcionamiento del sitio</li>
            <li><strong>Cookies de personalización:</strong> Permiten recordar preferencias del usuario</li>
            <li><strong>Cookies de análisis:</strong> Permiten analizar el comportamiento de los usuarios</li>
          </ul>
          <p>
            Puede configurar su navegador para rechazar cookies, aunque esto puede afectar a la 
            funcionalidad del sitio web.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Seguridad de los Datos</h2>
          <p>
            LA TRATTORIA S.L. se compromete a adoptar las medidas técnicas y organizativas necesarias para 
            garantizar la seguridad de los datos de carácter personal y evitar su alteración, pérdida, 
            tratamiento o acceso no autorizado.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Modificaciones</h2>
          <p>
            Nos reservamos el derecho de modificar la presente Política de Privacidad para adaptarla a 
            novedades legislativas o jurisprudenciales. Le recomendamos revisar periódicamente esta página.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Privacy;