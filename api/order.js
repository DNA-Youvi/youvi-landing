<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>DNA YOUVI PRO</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
  <style>
    body {
      margin: 0;
      font-family: 'Inter', sans-serif;
      background: linear-gradient(to right, #000428, #004e92);
      color: #fff;
    }
    header {
      padding: 2rem;
      text-align: center;
    }
    h1 {
      font-size: 3rem;
      margin-bottom: 0.5rem;
    }
    p.lead {
      font-size: 1.25rem;
      color: #ccc;
    }
    .features, .pricing, .testimonials {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
      padding: 3rem;
    }
    .feature-box, .pricing-box, .testimonial-box {
      background: rgba(255, 255, 255, 0.05);
      padding: 1.5rem;
      border-radius: 1rem;
      border: 1px solid #ffffff20;
    }
    .feature-box h3, .pricing-box h3, .testimonial-box h3 {
      margin-top: 0;
      color: #00d4ff;
    }
    .cta {
      text-align: center;
      margin-top: 3rem;
    }
    .cta a {
      background: #00d4ff;
      color: #000;
      text-decoration: none;
      padding: 1rem 2rem;
      font-weight: bold;
      border-radius: 0.5rem;
    }
    footer {
      padding: 2rem;
      text-align: center;
      background: #000316;
      font-size: 0.9rem;
      color: #aaa;
    }
    .section-title {
      text-align: center;
      font-size: 2rem;
      margin-top: 3rem;
      margin-bottom: 1rem;
      color: #00d4ff;
    }
    .testimonial-box p {
      font-style: italic;
    }
    .testimonial-box span {
      display: block;
      margin-top: 1rem;
      font-weight: bold;
      color: #ffd700;
    }
    .video-frame {
      text-align: center;
      margin: 3rem auto;
    }
    .video-frame iframe {
      width: 90%;
      max-width: 720px;
      height: 405px;
      border: 5px solid #00d4ff;
      border-radius: 1rem;
      box-shadow: 0 0 20px #00d4ff50;
    }
    .order-summary {
      text-align: center;
      margin-top: 2rem;
      font-size: 1.1rem;
      color: #fff;
    }
  </style>
</head>
<body>
  <header>
    <h1>DNA YOUVI PRO</h1>
    <p class="lead">Tingkatkan views YouTube Anda secara otomatis, aman, dan efisien</p>
  </header>

  <div class="video-frame">
    <iframe src="https://www.youtube.com/embed/GgVWVvjYCUM" title="Video Promosi DNA YOUVI PRO" frameborder="0" allowfullscreen></iframe>
  </div>

  <section class="features"> <!-- ... section content tetap ... --> </section>

  <h2 class="section-title">💬 Testimoni Pengguna</h2>
  <section class="testimonials"> <!-- ... section content tetap ... --> </section>

  <h2 class="section-title">💸 Paket Harga</h2>
  <section class="pricing"> <!-- ... section content tetap ... --> </section>

  <h2 class="section-title">📝 Form Pemesanan</h2>
  <section style="text-align: center; padding: 2rem;">
    <form id="orderForm">
      <input type="text" name="nama" placeholder="Nama Anda" required style="padding: 1rem; width: 90%; max-width: 400px; margin-bottom: 1rem; border-radius: 8px; border: none;">
      <br>
      <input type="email" name="email" placeholder="Email Aktif Anda" required style="padding: 1rem; width: 90%; max-width: 400px; margin-bottom: 1rem; border-radius: 8px; border: none;">
      <br>
      <input type="text" name="kontak" placeholder="No WhatsApp Aktif" required style="padding: 1rem; width: 90%; max-width: 400px; margin-bottom: 1rem; border-radius: 8px; border: none;">
      <br>
      <select name="paket" required style="padding: 1rem; width: 90%; max-width: 400px; margin-bottom: 1rem; border-radius: 8px; border: none;">
        <option value="">Pilih Paket</option>
        <option value="Starter">Starter - Rp299.000</option>
        <option value="Pro">Pro - Rp750.000</option>
        <option value="Enterprise">Enterprise - Rp1.500.000</option>
      </select>
      <br>
      <input type="text" name="diskon" placeholder="Kode Diskon (opsional)" style="padding: 1rem; width: 90%; max-width: 400px; margin-bottom: 1rem; border-radius: 8px; border: none;">
      <br>
      <button type="submit" style="background: #00d4ff; color: #000; font-weight: bold; padding: 1rem 2rem; border: none; border-radius: 0.5rem; cursor: pointer;">
        Lanjut ke Pembayaran
      </button>
    </form>
    <div class="order-summary" id="orderSummary"></div>
  </section>

  <footer>
    <p>Hubungi Kami: @agieldoanks (Telegram) | Instagram & TikTok: @dna.dsign</p>
    <p>&copy; 2025 DNA YOUVI PRO. All Rights Reserved.</p>
  </footer>

  <script>
    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('orderForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const form = e.target;
        const nama = form.nama.value;
        const email = form.email.value;
        const kontak = form.kontak.value;
        const paket = form.paket.value;
        const kodeDiskon = form.diskon.value.trim().toUpperCase();

        const hargaMap = {
          'Starter': 299000,
          'Pro': 750000,
          'Enterprise': 1500000
        };
        let harga = hargaMap[paket];

        const kodeUnik = Math.floor(100 + Math.random() * 900);

        if (kodeDiskon === 'YOUVIHEMAT') {
          harga = harga - (harga * 0.15);
        }

        const totalBayar = Math.round(harga + kodeUnik);

        document.getElementById('orderSummary').innerText = `Total Tagihan Anda: Rp ${totalBayar.toLocaleString('id-ID')} (termasuk kode unik)`;

        fetch('/api/order', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            nama,
            email,
            kontak,
            paket,
            total: totalBayar,
            kodeUnik,
            diskon: kodeDiskon,
            status: 'Belum Bayar'
          })
        })
        .then(response => {
          if (!response.ok) throw new Error('Respon tidak berhasil');
          return response.json();
        })
        .then(() => {
          window.location.href = `/pembayaran.html?nama=${encodeURIComponent(nama)}&email=${encodeURIComponent(email)}&paket=${paket}&total=${totalBayar}&diskon=${kodeDiskon}&rekening=BCA%205150298042%20a/n%20Septian%20Gilang%20Permana`;
        })
        .catch(err => {
          alert("Terjadi kesalahan saat mengirim data: " + err.message);
          console.error(err);
        });
      });
    });
  </script>
</body>
</html>
