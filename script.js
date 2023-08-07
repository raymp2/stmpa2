const btnHome = document.getElementById("btnHome");
const btnAbout = document.getElementById("btnAbout");
const btnContact = document.getElementById("btnContact");
const content = document.querySelector(".content");

btnHome.addEventListener("click", () => {
    content.innerHTML = `
      <h1>Bienvenido a <span class="highlight">Stmpa2</span></h1>
      <p>¡Estampa tu estilo con nosotros!</p>
      <p>En <strong>Stmpa2</strong>, nos dedicamos a crear estampados únicos y personalizados para gorras, playeras, sudaderas y más. Somos una marca nueva, pero apasionada por ofrecerte productos de alta calidad que reflejen tu personalidad y originalidad.</p>
      <p>Nuestro equipo está conformado por entusiastas de la moda y el diseño, encabezado por nuestros fundadores, <strong><span class="highlight">Raymundo Moreno</span></strong> y <strong><span class="highlight">Evelyn Pérez</span></strong>. <strong><span class="highlight">Derek Moreno</span></strong>, nuestro talentoso programador y ayudante, asegura que tengamos una plataforma en línea fácil de usar y navegar para ofrecerte la mejor experiencia de compra.</p>
      <p>Explora nuestra amplia selección de diseños, o crea tu propio diseño personalizado. Queremos que te sientas único y especial con cada producto que adquieras en <span class="highlight">Stmpa2</span>.</p>
      <p>¡Gracias por elegir <span class="highlight">Stmpa2</span>! ¡Esperamos que disfrutes de tus estampados y que nos acompañes en este emocionante viaje!</p>
    `;
});

btnAbout.addEventListener("click", () => {
    content.innerHTML = `
       <h1>Acerca de Stmpa2</h1>
       <p><strong>Stmpa2</strong> es una nueva y emocionante empresa local dedicada a los estampados personalizados en gorras, playeras y otras prendas de vestir. Nuestro objetivo es brindar a nuestra comunidad productos únicos y personalizados que reflejen su estilo y personalidad.</p>
       <p>En <strong>Stmpa2</strong>, valoramos la individualidad y trabajamos en estrecha colaboración con nuestros clientes para plasmar sus ideas en diseños personalizados y exclusivos. Cada estampado se realiza con pasión y dedicación, asegurando resultados impresionantes y duraderos.</p>
       <p>Detrás de <strong>Stmpa2</strong> se encuentran <strong>Evelyn Perez</strong> y <strong>Raymundo Moreno</strong>, fundadores con una visión compartida de crear una marca única que se conecte con nuestra comunidad. Nuestro talentoso programador y ayudante, <strong>Derek Moreno</strong>, ha trabajado arduamente para brindar una experiencia de usuario excepcional en nuestra plataforma en línea.</p>
       <p>Estamos orgullosos de ser una empresa local y apoyar nuestra comunidad. Nuestra pasión por la moda y la expresión personal nos impulsa a crear estampados que hagan que cada prenda sea especial y significativa para nuestros clientes.</p>
       <p>Únete a la comunidad de <strong>Stmpa2</strong> y descubre el poder de la personalización. Estamos emocionados de ser parte de tu historia y ayudarte a expresar tu creatividad a través de nuestras prendas estampadas.</p>
    `;
});

btnContact.addEventListener("click", () => {
    content.innerHTML = `
      <h1>Contacto</h1>
      <p>Puedes contactarnos a través de nuestras redes sociales:</p>
      <div class="social-links">
        <a href="https://www.instagram.com/stmpa2" target="_blank">
          <img src="images/instagram.png" alt="Instagram">
        </a>
        <a href="https://www.facebook.com/stmpa2" target="_blank">
          <img src="images/facebook.png" alt="Facebook">
        </a>
        <a href="https://twitter.com/stmpa2" target="_blank">
          <img src="images/twitter.png" alt="Twitter">
        </a>
        <a href="https://wa.me/XXXXXXXXXX" target="_blank">
          <img src="images/whatsapp.png" alt="WhatsApp">
        </a>
      </div>
      <p>¡Te esperamos en nuestras redes sociales! Síguenos para estar al tanto de nuestras últimas novedades, promociones especiales y concursos emocionantes. Además, comparte tus experiencias con nuestros productos personalizados usando el hashtag <strong>#Stmpa2Style</strong>.</p>
      <p>En Stmpa2, creemos en la importancia de la comunidad. Nos encanta ver cómo nuestros clientes se expresan a través de nuestros estampados y cómo cada prenda se convierte en una obra de arte única. Si tienes alguna pregunta, sugerencia o simplemente deseas compartir tu experiencia con nosotros, no dudes en ponerte en contacto a través de nuestras redes sociales o por correo electrónico.</p>
      <p>Además de nuestras redes sociales, también puedes comunicarte con nosotros por correo electrónico en <strong>info@stmpa2.com</strong>. Estamos disponibles para responder a tus consultas y atender tus necesidades.</p>
      <p>¡Gracias por elegir Stmpa2! ¡Esperamos verte pronto en nuestras redes sociales y que formes parte de nuestra creciente comunidad de Stmpa2 Style!</p>
    `;
});