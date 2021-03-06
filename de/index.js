export default {
  lang: 'Deutsch',
  failed: 'Aktion gescheitert',
  success: 'Aktion war erfolgreich',
  RPCCheck: 'Alle Systeme online',
  RPCCheck_fail: 'Unser RPC scheint momentan nicht synchron zu sein, Kontostände könnten fehlerhaft sein und Transaktionen werden nicht funktionieren. Die Funktionalität wird so schnell, wie möglich, wieder hergestellt.',
  // Routes
  routes: {
    config: 'Konfiguration',
    settings: 'Einstellungen',
    send: 'Senden',
    txs: 'Transaktionen',
    receive: 'Empfangen',
    home: 'Home',
    supcurr: 'Unterstützte Währungen',
    suplang: 'Unterstützte Sprachen',
    keystore: 'Keystore exportieren',
    supnet: 'Unterstützte Netzwerke',
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
    version: 'Version:',
    author: 'Authoren:',
    funded: 'Finanziert durch:',
    contact: 'Kontaktiere uns:',
    translators: 'Übersetzer:',
  },
  // Cordova Component
  cordova: {
    signin: 'Anmelden',
    error_screenlock: 'Bitte aktiviere die Displaysperre auf deinem Gerät. Diese App kann ohne sie nicht funktionieren.',
    error_sec_storage: 'Die App konnte aufgrund eines unbekannten Fehlers keinen sicheren Datenspeicher einstellen. Die App kann ohne ihn nicht funktionieren.',
    title: 'Melde dich an deinem Wallet mit biometrischer Authentifizierung an',
    error_screenlock_changed: 'Es scheint, als hättest du die Displaysperre geändert/entfernt. Bitte stelle eine Displaysperre ein und installiere die App erneut.',
  },
  // Nav Drawer component
  nav: {
    about: 'Über',
    signout: 'Abmelden',
  },
  // Manin layout
  main: {
    cache: 'Daten sind noch nicht im Cache. Bitte versuche es erneut, wenn du online bist',
  },
  // 404 Page
  error_404: {
    sorry: 'Entschuldigung, hier ist nichts...',
  },
  // Keystore
  keystore: {
    fail: 'Die Erstellung eines Keystores ist gescheitert. Bitte kontaktiere uns.',
    success: 'Keystore erfolgreich erstellt.',
    message: 'Kopiere einfach den erstellten Keystore und füge ihn in eine Datei mit dem Namen keystore.json ein - Du kannst dein mobiles Wallet dann auf MyEtherWallet oder MyCrypto nutzen. Wenn du nach einem Passwort gefragt wirst, nutze deine App Pin.',
  },
  // Home Page
  home: {
    balance: 'Wallet Saldo',
    mcap: 'Marktkapitalisierung:',
    volume: 'Volumen (USD): $',
    mdata_error: 'Die gewünschten Markt Daten konnten nicht abgefragt werden',
    last_tx_in: 'Letzte TX in:',
    last_tx_out: 'Letzte TX out:',
    receive: 'Empfangen',
    send: 'Senden',
    website: 'Ether-1 Website',
    settings: 'App Einstellungen',
    txs: 'Transaktionen',
    error_getting_txs: 'Fehler beim Abrufen der Transaktionen',
    copied: 'Kopierter Text',
    not_signed_in: 'Bitte melde dich an',
    markets_not_supported: 'Markt Statistiken nicht unterstützt auf:',
    conv_not_supported: 'Preis Umrechnung nicht unterstützt auf:',
    transactions_not_supported: 'TX Verfolgung ist nicht verfügbar auf:',
  },
  // User Index (Wallet Setup)
  index: {
    welcome: 'Willkommen im',
    name: 'Ether-1 Mobile Wallet !',
    before: 'Bevor du startest, haben wir zuerst einige wichtige Notizen durch zu gehen.',
    attention: 'Bitte beachte das Folgende besonders aufmerksam:',
    access: 'Wir können nicht auf dein Wallet zugreifen.',
    reset: 'Wir können deine Pin nicht zurücksetzen.',
    backup: 'Speichere ein Backup deines Private Keys.',
    client: 'Du bist verantwortlich für dein Wallet, die App funktioniert komplett clientseitig und nutzt lediglich unseren RPC Server um Transaktionen zu versenden.',
    pin: "Wenn du die Pin, die Face ID oder Touch ID deines Smartphones abschaltest, wirst du den Zugriff auf dein Wallet und die Mittel darauf verlieren. Daher solltest du ein Backup deines Private Keys anfertigen.",
    understand: 'Ich verstehe',
    setting: "Wir sind beschäftigt mit dem Setup deines",
    wallet: 'Ether-1 Wallet',
    address: 'Im Folgenden findest du deine einzigartige Wallet Adresse:',
    pkey: 'Im Folgenden findest du deinen Private Key:',
    backup_pkey: 'Bitte denke daran, ein Backup von deinem Private Key zu machen!',
    got_it: "Das habe ich gemacht!",
    set: "Du bist jetzt startklar, dein",
    ready: 'ist fertig!',
    by: 'von:',
    funded: 'finanziert',
    developed: 'entwickelt',
    the_wallet: 'Das Ether-1 Wallet war',
    secure: 'Absichern meines Wallets',
    encrypt: 'Verschlüssele dein Wallet:',
    wallet_name: 'Benutzername',
    use_pin: 'Gib eine einzigartige Pin ein',
    confirm: 'Bestätige deine Pin',
    required_name: 'Ein Name für das Wallet ist erforderlich',
    required_pin: 'Eine Pin ist erforderlich',
    retype_pin: 'Bitte gib zum Bestätigen deine Pin erneut ein',
    no_match: 'Die eingegebenen Pins sind nicht identisch',
    weak_pin: 'Die gewählte Pin ist sehr schwach. Sie muss mindestens 10 Zeichen lang sein und eine Ziffer enthalten.',
    copied: 'Kopierter Text',
    language: 'Bitte wähle deine bevorzugte Sprache:',
    unreg: 'Hey! Uns ist aufgefallen, daß dein Account nicht registriert ist. Für Zugriff und Nutzung von Cloud Kontakten benötigen wir von dir die Bestätigung deines Benutzernamens. Sobald du Bestätigen drückst, kann dein Benutzername NICHT MEHR geändert werden. In der Cloud werden keine persönlichen Informationen gespeichert.',
  },
  // Receive Page
  receive: {
    scan: 'Scanne den QR Code zum empfangen',
    address: 'Adresse',
    warning: 'Du kannst auf dieser Adresse nur EVM Coins empfangen!',
    current_price: 'Preis in',
    wallet_addr: 'Wallet Adresse',
    copied: 'Kopierter Text',
  },
  // Send Page
  send: {
    recent: 'neueste:',
    no_recent: 'Keine kürzlichen Transfers',
    no_contacts: 'Keine Kontakte Hinzugefügt',
    send_to: 'Wie viel möchtest du senden an',
    add_contact: 'Kontakt Hinzufügen',
    name: 'Name:',
    address: 'Adresse:',
    save: 'Speichern',
    delete: 'Lösche Kontakt',
    copy_address: 'Kopiere Adresse',
    invalid_address: 'Ungültige Adresse',
    not_pasted: 'Kann nicht einfügen',
    cancelled_scan: 'Abgebrochener Scan',
    unable_scan: 'Scan nicht möglich',
    scan_prompt: 'Scanne den QR Code der Adresse',
    contact_added: 'Kontakt hinzugefügt',
    enter_name: 'Gib den Namen ein:',
    enter_address: 'Gib die Adresse ein:',
    exists: 'hat schon diese Adresse',
    copied: 'Kopierte Adresse',
    sending: 'Sende Coins',
    app_error: 'Unerwarteter Fehler, Bitte installiere die App neu',
    tx_success: 'TRANSAKTION ABGESCHLOSSEN',
    tx_failed: 'TRANSACTION GESCHEITERT',
    online: 'Cloud Kontakt',
    no_online: 'Bitte suche nach einem Benutzernamen. Falls keiner auftaucht, existieren diese nicht in unserer Datenbank.',
    add: 'Download Kontakt',
  },
  // Settings Page
  settings: {
    node_stats: 'Node Stats:',
    chain_id: 'ChainID:',
    Blockheight: 'Momentane Blockhöhe:',
    version: 'Node Version:',
    sync_status: 'Sync Status:',
    app: 'App Einstellungen',
    select_currency: 'Wähle deine bevorzugte Währung:',
    select_language: 'Wähle deine bevorzugte Sprache:',
    about: 'Über Black Wallet:',
    about_etho: 'Über Ether-1',
    error_offline: 'Offline',
    keystore: 'Generiere Keystore',
    about_black: 'Über etho.black',
    about_ncr: 'Über Fremdentwickler (newCodeRunner)',
    stats: 'Ether-1 Network Stats',
    git: 'Ether-1 Github',
    select_network: 'Wähle Blockchain',
  },
  // SupportedCurrencies Page
  SupportedCurrencies: {
    changed: 'Währung geändert zu: ',
  },
  // SupportedLanguages
  SupportedLanguages: {
    changed: 'Sprache geändert zu: ',
  },
  // Transactions
  txs: {
    recent_txs: 'jüngste Transfers',
    no_txs: 'Keine Transfers in den letzten 1000 Blöcken.',
    retrieved: 'abgefragte Transaktionen',
    error: 'Fehler beim Abfragen der Transaktionen',
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
