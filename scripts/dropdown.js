function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".temp")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
const cities = [
  "Adana",
  "Adiyaman",
  "Afyon",
  "Agri",
  "Aksaray",
  "Amasya",
  "Ankara",
  "Antalya",
  "Ardahan",
  "Artvin",
  "Aydin",
  "Balikesir",
  "Bartin",
  "Batman",
  "Bayburt",
  "Bilecik",
  "Bingol",
  "Bitlis",
  "Bolu",
  "Burdur",
  "Bursa",
  "Canakkale",
  "Cankiri",
  "Corum",
  "Denizli",
  "Diyarbakir",
  "Duzce",
  "Edirne",
  "Elazig",
  "Erzincan",
  "Erzurum",
  "Eskisehir",
  "Gaziantep",
  "Giresun",
  "Gumushane",
  "Hakkari",
  "Hatay",
  "Igdir",
  "Isparta",
  "Istanbul",
  "Izmir",
  "Kahramanmaras",
  "Karabuk",
  "Karaman",
  "Kars",
  "Kastamonu",
  "Kayseri",
  "Kilis",
  "Kirikkale",
  "Kirklareli",
  "Kirsehir",
  "Kocaeli",
  "Konya",
  "Kutahya",
  "Malatya",
  "Manisa",
  "Mardin",
  "Mersin",
  "Mugla",
  "Mus",
  "Nevsehir",
  "Nigde",
  "Ordu",
  "Osmaniye",
  "Rize",
  "Sakarya",
  "Samsun",
  "Sanliurfa",
  "Siirt",
  "Sinop",
  "Sirnak",
  "Sivas",
  "Tekirdag",
  "Tokat",
  "Trabzon",
  "Tunceli",
  "Usak",
  "Van",
  "Yalova",
  "Yozgat",
  "Zonguldak",
];

// Access the cities-list element
const citiesList = document.getElementById("myDropdown");

const cityAnchors = cities.map((city) => {
  const anchor = document.createElement("a");
  anchor.href = "#";
  anchor.textContent = city;
  return anchor;
});

// Add event listener to the dropdown container
citiesList.addEventListener("click", (event) => {
  // Check if the clicked element is an anchor tag
  if (event.target.tagName === "A") {
    const selectedCity = event.target.textContent;
    fetchWeatherData(selectedCity);
  }
});

// Append the city anchors to the citiesList container
cityAnchors.forEach((anchor) => {
  citiesList.appendChild(anchor);
});
