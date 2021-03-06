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
  lending_dapp: {
    accept: 'Accept',
    decline: 'Decline',
    beta: 'Mobile Beta',
    myContracts: 'My Contracts',
    toRemove: "If you'd like to remove a contract, simply press on the contract.",
    type: 'Type',
    available: 'Available',
    noContractsOrLoading: 'No Contracts found OR Data is Loading...',
    welcome: 'Welcome to the Ether-1 Lending Dapp',
    desc: `The Ether-1 node staking dashboard provides ETHO stake holders and node
    operators a chance to come together and profit from an Ether-1 node,
    providing a valuable service to the Ether-1 & ethoFS networks, all while
    remaining completely decentralized in nature.`,
    desc_expanded: `Our staking is unique because it doesn’t increase ETHO inflation and it
    not only locks up coins, it also provides more fully operational
    Ether-1/ethoFS nodes to make our community data swarm even greater.`,
    termsHeading: 'Terms of Agreement',
    term1: `Borrower and Lender both agree they understand and consent to the
    terms and conditions below upon entering their private keys on
    this website.`,
    term2: `After claiming an available staking contract, Borrower has 50,000
    blocks to setup an active and paying Ether-1 node using Lender's
    smart contract stake. Failure to do so gives Lender the option to
    collect Borrower's origination fee.`,
    term3: `When Borrower's Ether-1 node produces its first reward payment
    within 50,000 blocks, contract status is changed from inactive to
    active. The contract status is changed back to inactive if the
    Borrower's node loses its paying status for a single payment
    period. Lender has the option to reset/remove an inactive contract
    between 50,000 and 199,999 blocks and collect Borrower’s
    origination fee.`,
    term4: `Lender can reset/remove an active contract after 200,000 blocks
    with the origination fee returned to the Borrower. Borrower can
    abandon an active contract after 200,000 blocks with the
    origination fee returned to the Borrower.`,
    term5: `If Borrower abandons an active contract within the first 200,000
    blocks, security deposit is forfeited to the Lender.`,
    term6: `Lender can cancel an active contract only after 200,000 blocks,
    with 95% of the origination fee returned to the Borrower.`,
    notes: 'NOTES',
    note1: `Lender has the option to stipulate additional Terms and Conditions
    within each staking contract. By claiming the staking contract,
    Borrower agrees to Lender's additional Term and Conditions.`,
    note2: `Lender's additional stipulated Terms and Conditions do not
    supersede Smart Contract rules (1) through (6) listed above.`,
    nodeTypeAndSpilt: 'Select Node Type & Select Lender Split',
    create: 'Create A Lending Contract',
    get: 'Get Contracts',
    select: 'Select Node Type',
    split: 'Select Desired Lender Split %',
    fee: 'Select Desired Origination Fee',
    addTCs: 'Enter Addition Terms & Conditions',
    badNetwork: 'Incorrect Network',
    badDesc: 'Please Connect to the Ether-1 Network, if you wish to access the Staking dApp.',
    success: 'Success!',
    smsg: 'Your Lending Contract has been add to the staking platform.',
    error: 'ERROR',
    emsg1: 'You do NOT have enough balance to deploy this stake. You currently have',
    emsg2: 'ETHO, You need a total of',
    removedmsg: 'Your Lending Contract has been removed from the staking platform.',
  },
  nodes: {
    active: 'Active',
    stats: 'Node Stats',
    rewards: 'Last Reward for',
    owned: 'Owned Node Type',
    balance: 'Collateral Balance',
    status: 'Node Status',
    rec: 'ETHO Received in Collateral Address',
    sent: 'ETHO Sent from Collateral Address',
    noData: 'No Data.',
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
    wallet_name: 'Uporabniško ime',
    use_pin: 'Izberite pin',
    confirm: 'Potrdite vaš pin',
    required_name: 'Ime Denarnice je zahtevano',
    required_pin: 'Pin je zahtevan',
    retype_pin: 'Za potrditev vtipkajte svoj pin',
    no_match: 'Vnešeni pin-i se ne ujemajo',
    weak_pin: 'Izbrani pin je zelo šibak. Dolg mora biti vsaj 10 znakov in imeti številko.',
    copied: 'Kopirano besedilo',
    language: 'Izberite želeni jezik:',
    unreg: 'Zdravo! Opazili smo, da vaš račun ni registriran. Za dostop in uporabo stikov v oblaku zahtevamo, da potrdite svoje uporabniško ime. Ko pritisnete, potrdite, da uporabniškega imena NI MOGOČE več spreminjati. V oblaku niso shranjeni nobeni osebni podatki.',
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
