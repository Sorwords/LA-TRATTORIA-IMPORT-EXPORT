import './Terms.css';

function Terms() {
  return (
    <main className="legal-page">
      <div className="container">
        <h1 className="legal-title">Condiciones de Venta</h1>
        <p className="legal-updated">Última actualización: Marzo 2024</p>

        <section className="legal-section">
          <h2>1. Objeto</h2>
          <p>
            Las presentes Condiciones Generales de Venta regulan la prestación de servicios de restauración 
            ofrecidos por LA TRATTORIA S.L. a través de su establecimiento y plataforma web.
          </p>
        </section>

        <section className="legal-section">
          <h2>2. Identificación del Prestador</h2>
          <p><strong>Denominación Social:</strong> LA TRATTORIA S.L.</p>
          <p><strong>CIF:</strong> B12345678</p>
          <p><strong>Domicilio Social:</strong> Calle Italia, 123, 35001, Las Palmas de Gran Canaria</p>
          <p><strong>Email:</strong> info@latrattoria.com</p>
          <p><strong>Teléfono:</strong> +34 928 123 456</p>
        </section>

        <section className="legal-section">
          <h2>3. Servicios Ofrecidos</h2>
          <p>LA TRATTORIA ofrece los siguientes servicios:</p>
          <ul>
            <li>Servicio de restaurante en el local</li>
            <li>Servicio de reservas</li>
            <li>Eventos y celebraciones privadas</li>
            <li>Clases de cocina italiana</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>4. Reservas</h2>
          <p>
            Las reservas pueden realizarse a través de nuestra web, por teléfono o presencialmente. 
            Se requiere confirmación de la reserva.
          </p>
          <p>
            En caso de no poder asistir, le rogamos nos avise con al menos 24 horas de antelación. 
            Las cancelaciones tardías o no presentarse pueden implicar un cargo del 50% del importe 
            estimado de la reserva.
          </p>
        </section>

        <section className="legal-section">
          <h2>5. Precios</h2>
          <p>
            Todos los precios mostrados en nuestra carta y web incluyen IVA. Los precios pueden estar 
            sujetos a cambios sin previo aviso, aunque se respetarán los precios vigentes en el momento 
            de realizar la reserva o pedido.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Forma de Pago</h2>
          <p>Aceptamos las siguientes formas de pago:</p>
          <ul>
            <li>Efectivo</li>
            <li>Tarjetas de crédito y débito (Visa, Mastercard, American Express)</li>
            <li>Bizum</li>
          </ul>
        </section>

        <section className="legal-section">
          <h2>7. Alérgenos</h2>
          <p>
            Todos nuestros platos están etiquetados con información sobre alérgenos según la normativa 
            vigente. Si tiene alguna alergia o intolerancia alimentaria, por favor, infórmenos antes 
            de realizar su pedido.
          </p>
        </section>

        <section className="legal-section">
          <h2>8. Reclamaciones</h2>
          <p>
            Si desea presentar una reclamación, puede hacerlo a través de nuestro email 
            reclamaciones@latrattoria.com o mediante hojas de reclamación disponibles en nuestro 
            establecimiento.
          </p>
        </section>

        <section className="legal-section">
          <h2>9. Protección de Datos</h2>
          <p>
            Los datos personales recabados serán tratados conforme a lo establecido en nuestra 
            Política de Privacidad.
          </p>
        </section>

        <section className="legal-section">
          <h2>10. Legislación Aplicable</h2>
          <p>
            Las presentes Condiciones se rigen por la legislación española. Para cualquier controversia, 
            las partes se someten a los Juzgados y Tribunales de Las Palmas de Gran Canaria.
          </p>
        </section>
      </div>
    </main>
  );
}

export default Terms;