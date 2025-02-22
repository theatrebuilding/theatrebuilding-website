---
title: Græder ved havet ~~~~~~البكاء على حافة البحر
artistName: anyone
location: Teaterøen & Theatre du Poche
date: 2024-03-19T14:00:00.000Z
altDate: 10/4-13/4 2025
css: |2-
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;

    }
    .header .title-left,
    .header .title-right {
      font-size: 1.5em;
    }

    .image-container img {
      width: 100%;
      height: auto;
      display: block;
    }

    #countdown {
      font-family: "courier new", sans-serif;
      font-size: 5em;
      padding-top: 0.5em;
      padding-bottom: 0.5em;
    }

    main {
      max-width: 800px;
      margin: 20px auto;
      padding: 20px;

    }

    .countdown-container {
      text-align: center;
      margin: 40px 0;
    }
    .countdown-container h2 {
      margin-bottom: 20px;
      font-size: 1.75em;
    }

    .ticket-section ul {
      list-style: none;
      padding: 0;
    }
    .ticket-section li {
      margin: 10px 0;
    }
    .ticket-section a {
      color: #0066cc;
      text-decoration: none;
    }
    .ticket-section a:hover {
      text-decoration: underline;
    }
_template: advanced
---

<body>
  <header class="header">
    <div class="title-left">Crying by the Sea</div>
    <div class="title-right">البكاء على حافة البحر</div>
  </header>
  <main>
    <div class="image-container">
      <img src="https://billetto.imgix.net/u53kwpztacowffpzx4qdnqjv3bjf?w=1440&h=810&fit=crop&auto=compress%2Cformat&rect=0%2C460%2C1920%2C1080&s=6acf7e5adc93bf1925c61ba7a8f7cf47" alt="Premiere Image">
    </div>
    <div class="countdown-container">
      <div id="countdown"></div>
    </div>
    <section class="ticket-section">
      <h2>Performances &amp; Ticket Links</h2>
      <p>Tickets are bought online for the Danish premiere and on the door in at Teatre du Poche, in El Kef, Tunisia.</p>
      <ul>
        <li>
          <strong>10/4/2025, at 19:00:</strong>
          <a href="https://billetto.dk/e/graeder-ved-havet-billetter-1179452?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1179452" target="_blank">Buy Tickets (Denmark)</a>
        </li>
        <li>
          <strong>11/4/2025, at 19:00:</strong>
          <a href="https://billetto.dk/e/graeder-ved-havet-billetter-1179613?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1179613" target="_blank">Buy Tickets (Denmark)</a>
        </li>
        <li>
          <strong>12/4/2025, at 15:00:</strong>
          <a href="https://billetto.dk/e/graeder-ved-havet-billetter-1179621?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1179621" target="_blank">Buy Tickets (Denmark)</a>
        </li>
        <li>
          <strong>12/4/2025, at 19:00:</strong>
          <a href="https://billetto.dk/e/graeder-ved-havet-billetter-1179622?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1179622" target="_blank">Buy Tickets (Denmark)</a>
        </li>
        <li>
          <strong>13/4/2025, at 15:00:</strong>
          <a href="https://billetto.dk/e/graeder-ved-havet-billetter-1179622?utm_source=organiser&utm_medium=share&utm_campaign=copy_link&utm_content=1179622" target="_blank">Buy Tickets (Denmark)</a>
        </li>
      </ul>
    </section>
  </main>
<script>
    document.addEventListener('DOMContentLoaded', function() {
      const premiereDate = new Date("April 10, 2025 19:00:00").getTime();
      const countdownEl = document.getElementById("countdown");
      const timer = setInterval(() => {
        const now = new Date().getTime();
        const distance = premiereDate - now;
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (distance < 0) {
          clearInterval(timer);
          countdownEl.innerHTML = "Premiere Started";
        } else {
          countdownEl.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
        }
      }, 1000);
    });
</script>

</body>
