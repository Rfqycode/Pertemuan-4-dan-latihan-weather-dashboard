const weatherData = {
  "Jakarta": {
    temperature: 30,
    condition: "Cerah"
  },
  "Bandung": {
    temperature: 25,
    condition: "Hujan Ringan"
  },
  "Surabaya": {
    temperature: 32,
    condition: "Panas Terik"
  },
  "Samarinda": {
    temperature: 28,
    condition: "Mendung"
  },
  "Sangatta": {
    temperature: 30,
    condition: "Cerah"
  },
  "Bontang": {
    temperature: 28,
    condition: "Mendung"
  },
  "Balikpapan": {
    temperature: 28,
    condition: "Mendung"
  }
};

// Ambil elemen input dan tombol
const input = document.getElementById('cityInput');
const button = document.getElementById('ShowWeatherBtn');

// Fungsi utama untuk menampilkan hasil
function tampilkanCuaca() {
  const city = input.value.trim();

  if (weatherData[city]) {
    console.clear();
    console.log(`Cuaca di ${city}:`);
    console.log(`Suhu: ${weatherData[city].temperature}°C`);
    console.log(`Kondisi: ${weatherData[city].condition}`);
  } else {
    console.log(`Data cuaca untuk "${city}" tidak ditemukan.`);
  }
}

// Klik tombol = tampilkan cuaca
button.addEventListener('click', tampilkanCuaca);

// Tekan Enter juga = tampilkan cuaca
input.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    tampilkanCuaca();
  }
});
