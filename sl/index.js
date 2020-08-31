export default {
  lang: 'Slovensko',
  failed: 'Ukrep ni uspel',
  success: 'Ukrep je uspel',
  RPCCheck: 'Všetky systémy sú online',
  RPCCheck_fail: 'Zdi se, da naš RPC trenutno ni sinhroniziran, Stanja morda niso pravilna in TX - ji ne bodo delovali.Funkcionalnost bo obnovljena v najkrajšem možnem času.',
  // Routes
  routes: {
    config: 'Konfiguracija',
    settings: 'Nastavitve',
    send: 'Pošlji',
    txs: 'Transakcije',
    receive: 'Prejmi',
    home: 'Domov',
    supcurr: 'Podprte valute',
    suplang: 'Podprti jeziki',
    keystore: 'Izvozi Keystore',
    supnet: 'Supported Networks',
  },
  // About Component
  about: {
    version: 'Različica:',
    author: 'Avtorji:',
    funded: 'Financirano:',
    contact: 'Kontaktirajte nas:',
    translators: 'Prevajalec:',
  },
  // Cordova Component
  cordova: {
    signin: 'Vpis',
    error_screenlock: 'Prosimo omogočite zaklepanje zaslona. Ta aplikacija brez tega ne more delovati.',
    error_sec_storage: 'Aplikacija zaradi neznane napake ni mogla nastaviti varnega prostora za shranjevanje. Aplikacija ne more delovati brez tega.',
    title: 'Prijavite se v svojo denarnico z biometričnim preverjanjem pristnosti',
    error_screenlock_changed: 'Izgleda, da ste spremenili / izbrisali zaklepanje zaslona. Nastavite zaklepanje zaslona in znova namestite aplikacijo.',
  },
  // Nav Drawer component
  nav: {
    about: 'O tem',
    signout: 'Odjava',
  },
  // Manin layout
  main: {
    cache: 'Podatki še niso predpomnjeni. Poskusite znova, ko ste spet povezani',
  },
  // 404 Page
  error_404: {
    sorry: 'Žal tukaj ni ničesar ...',
  },
  // Keystore
  keystore: {
    fail: 'Ker ni bilo mogoče ustvariti Keystore, nas prosim kontaktirajte.',
    success: 'Keystore uspešno ustvarjen.',
    message: 'Preprosto kopirajte ustvarjen Keystore in jo prilepite v datoteko, imenovano keystore.json - Nato lahko svojo mobilno denarnico uporabite na MyEtherWallet ali MyCrypto. Ob pozivu za geslo uporabite pin za aplikacijo.',
  },
  // Home Page
  home: {
    balance: 'Stanje Denarnice',
    mcap: 'Tržna kapica',
    volume: 'Promet (USD): $',
    mdata_error: 'Zahtevanih tržnih podatkov ni mogoče pridobiti',
    last_tx_in: 'Zadnji TX v:',
    last_tx_out: 'Zadnji TX ven:',
    receive: 'Prejmi',
    send: 'Pošlji',
    website: 'Ether-1 Spletna stran',
    settings: 'Nastavitve Aplikacije',
    txs: 'Transakcije',
    error_getting_txs: 'Napaka pri prejemu transakcij',
    copied: 'Kopirano Besedilo',
    not_signed_in: 'Please Sign in',
    markets_not_supported: 'Market Stats Not Supported on:',
    conv_not_supported: 'Price Conversion Not Supported on:',
    transactions_not_supported: 'TX Tracking is not available on:',
  },
  // User Index (Wallet Setup)
  index: {
    welcome: 'Dobrodošli v',
    name: 'Ether-1 Mobilni Denarnici !',
    before: 'Preden začnete, imamo nekaj pomembnih obvestil, ki jih moramo najprej preučiti.',
    attention: 'Bodite pozorni na naslednje:',
    access: 'Do vaše denarnice ne moremo dostopati.',
    reset: 'PIN-a ne moremo ponastaviti.',
    backup: 'Varnostno kopirajte svoj zasebni ključ.',
    client: 'Odgovorni ste za svojo denarnico, aplikacija je v celoti na strani stranke in uporablja le naš RPC za oddajanje transakcij.',
    pin: 'Če onemogočite svoj telefon PIN, Face ali Touch ID, boste izgubili dostop do denarnice in sredstev, zato morate varnostno kopirati zasebni ključ.',
    understand: 'Razumem',
    setting: 'Zasedeni smo z nameščanjem vaše',
    wallet: 'Ether-1 Denarnice',
    address: 'Spodaj je vaš edinstven naslov denarnice:',
    pkey: 'Spodaj je vaš zasebni ključ:',
    backup_pkey: 'Ne pozabite, da varnostno kopirate zasebni ključ!',
    got_it: 'Imam ga!',
    set: 'Vse je pripravljeni, tvoj',
    ready: 'je pripravljen!',
    by: 'z:',
    funded: 'financirano',
    developed: 'razvito',
    the_wallet: 'Denarnica Ether-1 je bila',
    secure: 'Zavaruj mojo denarnico',
    encrypt: 'Šifrirajte denarnico:',
    wallet_name: 'Ime Denarnice',
    use_pin: 'Izberite pin',
    confirm: 'Potrdite vaš pin',
    required_name: 'Ime Denarnice je zahtevano',
    required_pin: 'Pin je zahtevan',
    retype_pin: 'Za potrditev vtipkajte svoj pin',
    no_match: 'Vnešeni pin-i se ne ujemajo',
    weak_pin: 'Izbrani pin je zelo šibak. Dolg mora biti vsaj 10 znakov in imeti številko.',
    copied: 'Kopirano besedilo',
    language: 'Izberite želeni jezik:',
  },
  // Receive Page
  receive: {
    scan: 'Za prejem, skeniraj QR kodo',
    address: 'Naslov',
    warning: 'Na ta naslov lahko prejmete samo EVM coins!',
    current_price: 'Trenutna cena v',
    wallet_addr: 'Naslov Denarnice',
    copied: 'Kopirano besedilo',
  },
  // Send Page
  send: {
    recent: 'Nedavno:',
    no_recent: 'Ni nedavnih prenosov',
    no_contacts: 'Stiki niso dodani',
    send_to: 'Koliko bi želeli poslati v',
    add_contact: 'Dodaj stik',
    name: 'Ime:',
    address: 'Naslov:',
    save: 'Shrani',
    delete: 'Briši stik',
    copy_address: 'Kopiraj Naslov',
    invalid_address: 'Neveljaven naslov',
    not_pasted: 'Ni mogoče prilepiti',
    cancelled_scan: 'Preklican Sken',
    unable_scan: 'Skeniranje ni mogoče',
    scan_prompt: 'Skeniraj QR kodo',
    contact_added: 'Stik Dodan',
    enter_name: 'Vpiši Ime:',
    enter_address: 'Vpiši Naslov:',
    exists: 'že ima ta naslov',
    copied: 'Kopiran Naslov',
    sending: 'Pošiljanje Kovancev',
    app_error: 'Nepričakovana napaka. Znova namestite aplikacijo',
    tx_success: 'TRANSAKCIJA ZAKLJUČENA',
    tx_failed: 'TRANSAKCIJA NI USPELA',
    online: 'Cloud Contact',
    no_online: 'Please search for a username, if none appear here, they do not exist in our database.',
    add: 'Download Contact',
  },
  // Settings Page
  settings: {
    node_stats: 'Statistika vozlišča:',
    chain_id: 'ID Verige:',
    Blockheight: 'Trenutna višina bloka:',
    version: 'Različica Vozlišča:',
    sync_status: 'Status Sinhronizacije:',
    app: 'Nastavitve Aplikacije',
    select_currency: 'Izberite želeno valuto:',
    select_language: 'Izberite želen jezik',
    about: 'O Black Wallet:',
    about_etho: 'O Ether-1',
    error_offline: 'Brez povezave',
    keystore: 'Ustvari Keystore',
    about_black: 'O etho.black',
    about_ncr: 'O razcijalcu tretje osebe (newCodeRunner)',
    stats: 'Ether-1 Statistika Omrežja',
    git: 'Ether-1 Github',
    select_network: 'Select Blockchain',
  },
  // SupportedCurrencies Page
  SupportedCurrencies: {
    changed: 'Valuta Spremenjena v: ',
  },
  // SupportedLanguages
  SupportedLanguages: {
    changed: 'Jezik spremenjen v: ',
  },
  // Transactions
  txs: {
    recent_txs: 'Nedavni Prenosi',
    no_txs: 'V zadnjih 1000 Blokih ni bilo nobenih prenosov.',
    retrieved: 'Prejete transakcije',
    error: 'Napaka pri prejemu transakcij',
  },
  // Currency Symbols - Do Not Change.
  etho: 'ETHO',
  zar: 'R',
  usd: '$',
  eur: '€',
  ltc: 'Ł',
  btc: '₿',
  eth: 'Ξ',
  bch: 'BCH',
  bnb: 'BNB',
  eos: 'EOS',
  xrp: 'XRP',
  xlm: 'XLM',
  aed: 'د.إ',
  ars: '$',
  aud: '$',
  bdt: '৳',
  bhd: '.د.ب',
  bmd: '$',
  brl: 'R$',
  cad: '$',
  chf: 'Fr',
  clp: '$',
  cny: '¥',
  czk: 'Kč',
  dkk: 'Kr.',
  gbp: '£',
  hkd: '$',
  huf: 'Ft',
  idr: 'Rp',
  ils: '₪',
  inr: '₹',
  jpy: '¥',
  krw: '₩',
  kwd: 'د.ك',
  lkr: 'Rs',
  mmk: 'K',
  mxn: '$',
  myr: 'RM',
  nok: 'kr',
  nzd: '$',
  php: '₱',
  pkr: '₱',
  pln: 'zł',
  rub: '₽',
  sar: '﷼‎,',
  sek: 'kr',
  sgd: '$',
  thb: '฿',
  try: '₺',
  twd: '$',
  uah: '₴',
  vef: 'Bs.',
  vnd: '₫',
  xdr: 'SDR.',
  xag: 'XAG',
  xau: 'XAU',
};
