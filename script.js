const COUNTRIES = [
  {name:"Afghanistan",code:"af",official:"Islamic Emirate of Afghanistan",capital:"Kabul",region:"Asia",population:42000000,currency:"Afghani (AFN)",flag:"🇦🇫"},
  {name:"Argentina",code:"ar",official:"Argentine Republic",capital:"Buenos Aires",region:"South America",population:45800000,currency:"Argentine Peso (ARS)",flag:"🇦🇷"},
  {name:"Australia",code:"au",official:"Commonwealth of Australia",capital:"Canberra",region:"Oceania",population:26600000,currency:"Australian Dollar (AUD)",flag:"🇦🇺"},
  {name:"Austria",code:"at",official:"Republic of Austria",capital:"Vienna",region:"Europe",population:9100000,currency:"Euro (EUR)",flag:"🇦🇹"},
  {name:"Bangladesh",code:"bd",official:"People's Republic of Bangladesh",capital:"Dhaka",region:"Asia",population:173000000,currency:"Taka (BDT)",flag:"🇧🇩"},
  {name:"Belgium",code:"be",official:"Kingdom of Belgium",capital:"Brussels",region:"Europe",population:11700000,currency:"Euro (EUR)",flag:"🇧🇪"},
  {name:"Brazil",code:"br",official:"Federative Republic of Brazil",capital:"Brasília",region:"South America",population:216400000,currency:"Brazilian Real (BRL)",flag:"🇧🇷"},
  {name:"Canada",code:"ca",official:"Canada",capital:"Ottawa",region:"North America",population:39100000,currency:"Canadian Dollar (CAD)",flag:"🇨🇦"},
  {name:"Chile",code:"cl",official:"Republic of Chile",capital:"Santiago",region:"South America",population:19600000,currency:"Chilean Peso (CLP)",flag:"🇨🇱"},
  {name:"China",code:"cn",official:"People's Republic of China",capital:"Beijing",region:"Asia",population:1410000000,currency:"Renminbi (CNY)",flag:"🇨🇳"},
  {name:"Colombia",code:"co",official:"Republic of Colombia",capital:"Bogotá",region:"South America",population:52200000,currency:"Colombian Peso (COP)",flag:"🇨🇴"},
  {name:"Egypt",code:"eg",official:"Arab Republic of Egypt",capital:"Cairo",region:"Africa",population:112700000,currency:"Egyptian Pound (EGP)",flag:"🇪🇬"},
  {name:"Ethiopia",code:"et",official:"Federal Democratic Republic of Ethiopia",capital:"Addis Ababa",region:"Africa",population:128700000,currency:"Ethiopian Birr (ETB)",flag:"🇪🇹"},
  {name:"Finland",code:"fi",official:"Republic of Finland",capital:"Helsinki",region:"Europe",population:5600000,currency:"Euro (EUR)",flag:"🇫🇮"},
  {name:"France",code:"fr",official:"French Republic",capital:"Paris",region:"Europe",population:68200000,currency:"Euro (EUR)",flag:"🇫🇷"},
  {name:"Germany",code:"de",official:"Federal Republic of Germany",capital:"Berlin",region:"Europe",population:83400000,currency:"Euro (EUR)",flag:"🇩🇪"},
  {name:"Greece",code:"gr",official:"Hellenic Republic",capital:"Athens",region:"Europe",population:10400000,currency:"Euro (EUR)",flag:"🇬🇷"},
  {name:"India",code:"in",official:"Republic of India",capital:"New Delhi",region:"Asia",population:1441700000,currency:"Indian Rupee (INR)",flag:"🇮🇳"},
  {name:"Indonesia",code:"id",official:"Republic of Indonesia",capital:"Jakarta",region:"Asia",population:283500000,currency:"Rupiah (IDR)",flag:"🇮🇩"},
  {name:"Ireland",code:"ie",official:"Republic of Ireland",capital:"Dublin",region:"Europe",population:5300000,currency:"Euro (EUR)",flag:"🇮🇪"},
  {name:"Italy",code:"it",official:"Italian Republic",capital:"Rome",region:"Europe",population:58900000,currency:"Euro (EUR)",flag:"🇮🇹"},
  {name:"Japan",code:"jp",official:"Japan",capital:"Tokyo",region:"Asia",population:123800000,currency:"Japanese Yen (JPY)",flag:"🇯🇵"},
  {name:"Kenya",code:"ke",official:"Republic of Kenya",capital:"Nairobi",region:"Africa",population:56400000,currency:"Kenyan Shilling (KES)",flag:"🇰🇪"},
  {name:"Malaysia",code:"my",official:"Malaysia",capital:"Kuala Lumpur",region:"Asia",population:35600000,currency:"Malaysian Ringgit (MYR)",flag:"🇲🇾"},
  {name:"Mexico",code:"mx",official:"United Mexican States",capital:"Mexico City",region:"North America",population:130900000,currency:"Mexican Peso (MXN)",flag:"🇲🇽"},
  {name:"Morocco",code:"ma",official:"Kingdom of Morocco",capital:"Rabat",region:"Africa",population:38100000,currency:"Moroccan Dirham (MAD)",flag:"🇲🇦"},
  {name:"Nepal",code:"np",official:"Federal Democratic Republic of Nepal",capital:"Kathmandu",region:"Asia",population:30900000,currency:"Nepalese Rupee (NPR)",flag:"🇳🇵"},
  {name:"Netherlands",code:"nl",official:"Kingdom of the Netherlands",capital:"Amsterdam",region:"Europe",population:18000000,currency:"Euro (EUR)",flag:"🇳🇱"},
  {name:"New Zealand",code:"nz",official:"New Zealand",capital:"Wellington",region:"Oceania",population:5200000,currency:"New Zealand Dollar (NZD)",flag:"🇳🇿"},
  {name:"Nigeria",code:"ng",official:"Federal Republic of Nigeria",capital:"Abuja",region:"Africa",population:232700000,currency:"Naira (NGN)",flag:"🇳🇬"},
  {name:"Norway",code:"no",official:"Kingdom of Norway",capital:"Oslo",region:"Europe",population:5500000,currency:"Norwegian Krone (NOK)",flag:"🇳🇴"},
  {name:"Pakistan",code:"pk",official:"Islamic Republic of Pakistan",capital:"Islamabad",region:"Asia",population:247500000,currency:"Pakistani Rupee (PKR)",flag:"🇵🇰"},
  {name:"Peru",code:"pe",official:"Republic of Peru",capital:"Lima",region:"South America",population:34300000,currency:"Sol (PEN)",flag:"🇵🇪"},
  {name:"Philippines",code:"ph",official:"Republic of the Philippines",capital:"Manila",region:"Asia",population:117300000,currency:"Philippine Peso (PHP)",flag:"🇵🇭"},
  {name:"Poland",code:"pl",official:"Republic of Poland",capital:"Warsaw",region:"Europe",population:36700000,currency:"Polish Złoty (PLN)",flag:"🇵🇱"},
  {name:"Portugal",code:"pt",official:"Portuguese Republic",capital:"Lisbon",region:"Europe",population:10400000,currency:"Euro (EUR)",flag:"🇵🇹"},
  {name:"Russia",code:"ru",official:"Russian Federation",capital:"Moscow",region:"Europe",population:144500000,currency:"Russian Ruble (RUB)",flag:"🇷🇺"},
  {name:"Saudi Arabia",code:"sa",official:"Kingdom of Saudi Arabia",capital:"Riyadh",region:"Asia",population:36900000,currency:"Saudi Riyal (SAR)",flag:"🇸🇦"},
  {name:"Singapore",code:"sg",official:"Republic of Singapore",capital:"Singapore",region:"Asia",population:6000000,currency:"Singapore Dollar (SGD)",flag:"🇸🇬"},
  {name:"South Africa",code:"za",official:"Republic of South Africa",capital:"Pretoria",region:"Africa",population:63200000,currency:"South African Rand (ZAR)",flag:"🇿🇦"},
  {name:"South Korea",code:"kr",official:"Republic of Korea",capital:"Seoul",region:"Asia",population:51700000,currency:"South Korean Won (KRW)",flag:"🇰🇷"},
  {name:"Spain",code:"es",official:"Kingdom of Spain",capital:"Madrid",region:"Europe",population:47900000,currency:"Euro (EUR)",flag:"🇪🇸"},
  {name:"Sweden",code:"se",official:"Kingdom of Sweden",capital:"Stockholm",region:"Europe",population:10600000,currency:"Swedish Krona (SEK)",flag:"🇸🇪"},
  {name:"Switzerland",code:"ch",official:"Swiss Confederation",capital:"Bern",region:"Europe",population:8900000,currency:"Swiss Franc (CHF)",flag:"🇨🇭"},
  {name:"Thailand",code:"th",official:"Kingdom of Thailand",capital:"Bangkok",region:"Asia",population:71800000,currency:"Thai Baht (THB)",flag:"🇹🇭"},
  {name:"Turkey",code:"tr",official:"Republic of Türkiye",capital:"Ankara",region:"Asia",population:85800000,currency:"Turkish Lira (TRY)",flag:"🇹🇷"},
  {name:"United Kingdom",code:"gb",official:"United Kingdom of Great Britain and Northern Ireland",capital:"London",region:"Europe",population:68700000,currency:"Pound Sterling (GBP)",flag:"🇬🇧"},
  {name:"United States",code:"us",official:"United States of America",capital:"Washington, D.C.",region:"North America",population:341800000,currency:"US Dollar (USD)",flag:"🇺🇸"},
  {name:"Vietnam",code:"vn",official:"Socialist Republic of Vietnam",capital:"Hanoi",region:"Asia",population:100300000,currency:"Vietnamese Đồng (VND)",flag:"🇻🇳"}
];

const q = document.getElementById('q');
const sugg = document.getElementById('suggestions');
const card = document.getElementById('card');
const emptyState = document.getElementById('emptyState');
const noMatch = document.getElementById('noMatch');
const regionFilter = document.getElementById('regionFilter');
const surpriseBtn = document.getElementById('surpriseBtn');
const starBtn = document.getElementById('starBtn');
const favoritesPanel = document.getElementById('favoritesPanel');
const favList = document.getElementById('favList');

let activeIndex = -1;
let currentCountry = null;

function fmtPop(n){
  return n.toLocaleString('en-US');
}

// Builds a flag image (from flagcdn.com) that silently falls back to the
// emoji flag character if the image can't load (e.g. no network access).
function makeFlagNode(c, size){
  const isMini = size === 'mini';
  const img = document.createElement('img');
  img.src = `https://flagcdn.com/${isMini ? 'w40' : 'w160'}/${c.code}.png`;
  img.alt = c.name + ' flag';
  img.className = isMini ? 'mini-flag' : 'flag-img';
  img.loading = 'lazy';
  img.onerror = function(){
    const span = document.createElement('span');
    span.className = isMini ? 'mini-flag-emoji' : 'flag-emoji';
    span.textContent = c.flag;
    img.replaceWith(span);
  };
  return img;
}

function loadFavorites(){
  try{
    return JSON.parse(localStorage.getItem('atlas-favorites') || '[]');
  }catch(e){
    return [];
  }
}

function saveFavorites(list){
  try{
    localStorage.setItem('atlas-favorites', JSON.stringify(list));
  }catch(e){ /* storage unavailable, state stays in memory for this session */ }
}

function isFavorite(name){
  return loadFavorites().includes(name);
}

function toggleFavorite(name){
  let favs = loadFavorites();
  if(favs.includes(name)){
    favs = favs.filter(n => n !== name);
  } else {
    favs.push(name);
  }
  saveFavorites(favs);
  renderFavorites();
}

function renderFavorites(){
  const favs = loadFavorites();
  favList.innerHTML = '';
  if(favs.length === 0){
    favoritesPanel.style.display = 'none';
    return;
  }
  favoritesPanel.style.display = 'block';
  favs.forEach(name => {
    const c = COUNTRIES.find(c => c.name === name);
    if(!c) return;
    const chip = document.createElement('div');
    chip.className = 'fav-chip';
    chip.appendChild(makeFlagNode(c, 'mini'));
    chip.appendChild(document.createTextNode(c.name));
    chip.addEventListener('click', () => {
      q.value = c.name;
      sugg.style.display = 'none';
      showCountry(c);
    });
    favList.appendChild(chip);
  });
}

function showCountry(c){
  currentCountry = c;
  const flagHolder = document.getElementById('flagEmoji');
  flagHolder.innerHTML = '';
  flagHolder.appendChild(makeFlagNode(c, 'big'));
  document.getElementById('cName').textContent = c.name;
  document.getElementById('cOfficial').textContent = c.official;
  document.getElementById('cCapital').textContent = c.capital;
  document.getElementById('cRegion').textContent = c.region;
  document.getElementById('cPopulation').textContent = fmtPop(c.population);
  document.getElementById('cCurrency').textContent = c.currency;
  card.classList.add('show');
  emptyState.classList.remove('show');
  noMatch.classList.remove('show');
  starBtn.textContent = isFavorite(c.name) ? '★' : '☆';
  starBtn.classList.toggle('active', isFavorite(c.name));
}

function hideCard(){
  card.classList.remove('show');
  currentCountry = null;
}

function matches(term){
  const t = term.trim().toLowerCase();
  const region = regionFilter.value;
  let pool = COUNTRIES;
  if(region) pool = pool.filter(c => c.region === region);
  if(!t) return [];
  return pool.filter(c => c.name.toLowerCase().includes(t)).slice(0,8);
}

function renderSuggestions(list){
  sugg.innerHTML = '';
  activeIndex = -1;
  if(list.length === 0){
    sugg.style.display = 'none';
    return;
  }
  list.forEach(c => {
    const li = document.createElement('li');
    li.appendChild(makeFlagNode(c, 'mini'));
    li.appendChild(document.createTextNode(c.name));
    li.addEventListener('mousedown', (e) => {
      e.preventDefault();
      q.value = c.name;
      sugg.style.display = 'none';
      showCountry(c);
    });
    sugg.appendChild(li);
  });
  sugg.style.display = 'block';
}

function setActive(idx){
  const items = sugg.querySelectorAll('li');
  items.forEach(li => li.classList.remove('active'));
  if(idx >= 0 && idx < items.length){
    items[idx].classList.add('active');
    items[idx].scrollIntoView({block:'nearest'});
  }
  activeIndex = idx;
}

q.addEventListener('input', () => {
  const term = q.value;
  if(!term.trim()){
    sugg.style.display = 'none';
    hideCard();
    noMatch.classList.remove('show');
    emptyState.classList.add('show');
    return;
  }
  const list = matches(term);
  renderSuggestions(list);

  const exact = COUNTRIES.find(c => c.name.toLowerCase() === term.trim().toLowerCase());
  if(exact){
    showCountry(exact);
  } else if(list.length === 0){
    hideCard();
    emptyState.classList.remove('show');
    noMatch.classList.add('show');
  } else {
    hideCard();
    emptyState.classList.remove('show');
    noMatch.classList.remove('show');
  }
});

q.addEventListener('keydown', (e) => {
  const items = sugg.querySelectorAll('li');
  if(e.key === 'ArrowDown'){
    e.preventDefault();
    if(items.length === 0) return;
    setActive((activeIndex + 1) % items.length);
  } else if(e.key === 'ArrowUp'){
    e.preventDefault();
    if(items.length === 0) return;
    setActive((activeIndex - 1 + items.length) % items.length);
  } else if(e.key === 'Enter'){
    const list = matches(q.value);
    if(list.length === 0) return;
    const pick = activeIndex >= 0 && activeIndex < list.length ? list[activeIndex] : list[0];
    q.value = pick.name;
    sugg.style.display = 'none';
    showCountry(pick);
  } else if(e.key === 'Escape'){
    sugg.style.display = 'none';
  }
});

document.addEventListener('click', (e) => {
  if(!sugg.contains(e.target) && e.target !== q){
    sugg.style.display = 'none';
  }
});

regionFilter.addEventListener('change', () => {
  if(q.value.trim()){
    const list = matches(q.value);
    renderSuggestions(list);
  }
});

surpriseBtn.addEventListener('click', () => {
  const region = regionFilter.value;
  const pool = region ? COUNTRIES.filter(c => c.region === region) : COUNTRIES;
  const pick = pool[Math.floor(Math.random() * pool.length)];
  q.value = pick.name;
  sugg.style.display = 'none';
  showCountry(pick);
});

starBtn.addEventListener('click', () => {
  if(!currentCountry) return;
  toggleFavorite(currentCountry.name);
  starBtn.textContent = isFavorite(currentCountry.name) ? '★' : '☆';
  starBtn.classList.toggle('active', isFavorite(currentCountry.name));
});

renderFavorites();
