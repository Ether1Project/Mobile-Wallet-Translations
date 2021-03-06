export default {
  lang: 'Spanish',
  failed: 'Acción fallida',
  success: 'Acción exitosa',
  RPCCheck: 'Todos los sistemas están en línea',
  RPCCheck_fail: 'Parece que nuestro RPC actualmente no está sincronizado, los saldos pueden ser incorrectos y los TX no funcionarán, la funcionalidad se restaurará lo antes posible.',
  // Routes
  routes: {
    config: 'Configuración',
    settings: 'Ajustes',
    send: 'Enviar',
    txs: 'Transacciones',
    receive: 'Recibir',
    home: 'Home',
    supcurr: 'Monedas',
    suplang: 'Idiomas',
    keystore: 'Exportar llave',
    supnet: 'Redes',
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
    author: 'Autores:',
    funded: 'Fundado por:',
    contact: 'Contáctanos:',
    translators: 'Traductores:',
  },
  // Cordova Component
  cordova: {
    signin: 'Registrarse',
    error_screenlock: 'Active el bloqueo de pantalla en su dispositivo. Esta aplicación no puede funcionar sin ella.',
    error_sec_storage: 'La aplicación no pudo configurar el almacenamiento seguro debido a un error desconocido. La aplicación no puede funcionar sin él.',
    title: 'Inicie sesión en su billetera con autenticación biométrica',
    error_screenlock_changed: 'Parece que cambió / eliminó el bloqueo de pantalla. Configure un bloqueo de pantalla y vuelva a instalar la aplicación.',
  },
  // Nav Drawer component
  nav: {
    about: 'Acerca de',
    signout: 'Desconectar',
  },
  // Manin layout
  main: {
    cache: 'Los datos aún no se han almacenado en caché. Vuelva a intentarlo cuando esté en línea',
  },
  // 404 Page
  error_404: {
    sorry: 'Lo siento, no hay nada aquí...',
  },
  // Keystore
  keystore: {
    fail: 'No se pudo generar un almacén de claves, por favor contáctenos.',
    success: 'El almacén de claves se creó correctamente.',
    message: 'Simplemente copie el almacén de claves generado y péguelo en un archivo llamado keystore.json; luego puede usar su billetera móvil en MyEtherWallet o MyCrypto. Cuando se le solicite su contraseña, utilice el pin de su aplicación.',
  },
  // Home Page
  home: {
    balance: 'Saldo',
    mcap: 'Capitalización:',
    volume: 'Volume (USD): $',
    mdata_error: 'No se pueden recuperar los datos solicitados',
    last_tx_in: 'Última transacción recibida:',
    last_tx_out: 'Última transacción enviada:',
    receive: 'Recibir',
    send: 'Enviar',
    website: 'Ether-1 Website',
    settings: 'Ajustes de la Aplicación',
    txs: 'Transacciones',
    error_getting_txs: 'Error al recuperar las transacciones',
    copied: 'Texto copiado',
    not_signed_in: 'Por favor, registrese',
    markets_not_supported: 'Estadísticas de mercado no admitidas en:',
    conv_not_supported: 'Conversión de precio no admitida en:',
    transactions_not_supported: 'La transacción no está disponible en:',
  },
  // User Index (Wallet Setup)
  index: {
    welcome: 'Bievenidos a',
    name: 'Billetera Móvil Ether-1 !',
    before: 'Antes de comenzar, tenemos algunos avisos importantes que debemos revisar primero.',
    attention: 'Por favor preste mucha atención a lo siguiente:',
    access: 'Nosotros no podemos acceder a su billetera.',
    reset: 'Nosotros no podemos restablecer su código PIN.',
    backup: 'Haga una copia de seguridad de su clave privada.',
    client: 'Usted es responsable de su billetera, la aplicación es completamente del lado del cliente y solo usa nuestro RPC para transmitir transacciones.',
    pin: "Si deshabilita el Pin, Face o Touch ID de su teléfono, perderá el acceso a su billetera y fondos, por eso debe hacer una copia de seguridad de su clave privada.",
    understand: 'Entiendo',
    setting: "Estamos ocupados configurando su",
    wallet: 'Billetera Ether-1',
    address: 'Esta es su dirección de billetera única:',
    pkey: 'A continuación se muestra su clave privada:',
    backup_pkey: 'Recuerde respaldar su clave privada!',
    got_it: "¡Entendido!!",
    set: "You're all set, your",
    ready: 'estas listo!',
    by: 'por:',
    funded: 'fundado',
    developed: 'desarrollado',
    the_wallet: 'La billetera Ether-1 fue',
    secure: 'Asegurar mi billetera',
    encrypt: 'Encriptar mi billetera:',
    wallet_name: 'Nombre de usuario',
    use_pin: 'Ingrese una clave PIN',
    confirm: 'Confirmar PIN',
    required_name: 'Se requiere un nombre de billetera',
    required_pin: 'Se requiere PIN',
    retype_pin: 'Vuelva a escribir su PIN para confirmar',
    no_match: 'Los PIN no coinciden',
    weak_pin: 'El PIN elegido es muy débil. Debe tener al menos 10 caracteres y tener un número.',
    copied: 'Texto Copiado',
    language: 'Seleccione su idioma preferido:',
    unreg: '¡Oye! Hemos notado que su cuenta no está registrada. Para acceder y utilizar los contactos en la nube, le solicitamos que confirme su nombre de usuario. Una vez que presione confirmar, su nombre de usuario NO PUEDE cambiarse. No se almacena información personal en la nube.! We have noticed that your account is unregistered. In order to access & use cloud contacts we require you to confirm your Username. Once you press confirm your username CANNOT be changed. No personal information is stored in the cloud.',
  },
  // Receive Page
  receive: {
    scan: 'Escanee el código QR para recibir',
    address: 'Dirección',
    warning: '¡Solo puedes recibir monedas EVM en esta dirección!',
    current_price: 'Precio en',
    wallet_addr: 'Dirección de Billetera',
    copied: 'Texto Copiado',
  },
  // Send Page
  send: {
    recent: 'Reciente:',
    no_recent: 'No hay transferencias recientes',
    no_contacts: 'No se agregaron contactos',
    send_to: 'A cuántos quieres enviar',
    add_contact: 'Agregar Contacto',
    name: 'Nombre:',
    address: 'Dirección:',
    save: 'Salvar',
    delete: 'Borrar Contacto',
    copy_address: 'Copiar Dirección',
    invalid_address: 'Dirección Invalida',
    not_pasted: 'No se puede pegar',
    cancelled_scan: 'Escaneo Cancelado',
    unable_scan: 'No se puede escanear',
    scan_prompt: 'Escanear código QR',
    contact_added: 'Contacto Agregado',
    enter_name: 'Ingresar Nombre:',
    enter_address: 'Ingresar Dirección:',
    exists: 'La Dirección ya existe',
    copied: 'Dirección Copiada',
    sending: 'Enviando Monedas',
    app_error: 'Error inesperado, reinstale la aplicación',
    tx_success: 'TRANSACCIÓN COMPLETADA',
    tx_failed: 'TRANSACCIÓN FALLIDA',
    online: 'Contacto en la Nube',
    no_online: 'Por favor busque un nombre de usuario, si ninguno aparece aquí, no existe en nuestra base de datos.',
    add: 'Descargar Contacto',
  },
  // Settings Page
  settings: {
    node_stats: 'Estadísticas de Nodo:',
    chain_id: 'ChainID:',
    Blockheight: 'Blockheight actual:',
    version: 'Versión de Nodo:',
    sync_status: 'Estado de Sincronización:',
    app: 'Configuración de la Aplicación',
    select_currency: 'Seleccione su moneda preferida:',
    select_language: 'Seleccione su lenguaje preferido:',
    about: 'Acerca de Black Wallet:',
    about_etho: 'About Ether-1',
    error_offline: 'Sin conexión',
    keystore: 'Generar almacén de claves',
    about_black: 'Acerca de etho.black',
    about_ncr: 'Acercar del Desarrolador Externo (newCodeRunner)',
    stats: 'Estadisticas de Red Ether-1',
    git: 'Ether-1 Github',
    select_network: 'Seleccionar Blockchain',
  },
  // SupportedCurrencies Page
  SupportedCurrencies: {
    changed: 'Cambiar Moneda: ',
  },
  // SupportedLanguages
  SupportedLanguages: {
    changed: 'Cambiar Lenguaje: ',
  },
  // Transactions
  txs: {
    recent_txs: 'Transferencias recientes',
    no_txs: 'No se realizaron transferencias en los últimos 1000 bloques.',
    retrieved: 'Transacciones recuperadas',
    error: 'Error al recuperar transacciones',
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
