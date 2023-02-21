export const GLOBAL = 'global';

export const ORDERED_MARKETS = [
    /*popular markets*/
    'us',
    'au',
    'gb',
    'ca',
    'in',
    'cn',
    /*remaining in alpabetical order*/
    'ar',
    'at',
    'bh',
    'bd',
    'be',
    'bm',
    'bw',
    'br',
    'bg',
    'cl',
    'co',
    'hr',
    'cy',
    'cz',
    'dk',
    'eg',
    'ee',
    'fi',
    'fr',
    'de',
    'gh',
    'gr',
    'hk',
    'hu',
    'is',
    'id',
    'ie',
    'il',
    'it',
    'ci',
    'jm',
    'jp',
    'jo',
    'ke',
    'kw',
    'lv',
    'lb',
    'lt',
    'lu',
    'mw',
    'my',
    'mt',
    'mu',
    'mx',
    'ma',
    'na',
    'nl',
    'nz',
    'ng',
    'no',
    'om',
    'pk',
    'ps',
    'pe',
    'ph',
    'pl',
    'pt',
    'qa',
    'ro',
    'ru',
    'sa',
    'rs',
    'sg',
    'sk',
    'si',
    'za',
    'kr',
    'es',
    'lk',
    'se',
    'ch',
    'tw',
    'tz',
    'th',
    'tt',
    'tn',
    'tr',
    'ug',
    'ua',
    'ae',
    've',
    'vn',
    'zm',
    'zw',
];

export const PRIMARY_MARKETS = {
    ae: {
        label: 'United Arab Emirates',
        demonym: 'Emirati',
        children: ['adx', 'dfm', 'difx'],
        mainIndex: 'ADX',
        mainExchange: 'DFM',
    },
    bh: {
        label: 'Bahrain',
        children: ['bax'],
        demonym: 'Bahraini',
        mainIndex: 'BAX',
        mainExchange: 'BSE',
    },
    bw: {
        label: 'Botswana',
        children: ['bsm'],
        demonym: 'Botswanan',
        mainIndex: 'BSE',
        mainExchange: 'BSE',
    },
    ci: {
        label: 'Ivory Coast',
        children: ['brvm'],
        demonym: 'Ivorian',
        mainIndex: 'BRVM',
        mainExchange: 'BRVM',
    },
    eg: {
        label: 'Egypt',
        children: ['case'],
        demonym: 'Egyptian',
        mainIndex: 'OMX',
        mainExchange: 'EGX',
    },
    gh: {
        label: 'Ghana',
        children: ['ghse'],
        demonym: 'Ghanaian',
        mainIndex: 'GSE',
        mainExchange: 'GSE',
    },
    il: {
        label: 'Israel',
        children: ['tase'],
        demonym: 'Israeli',
        mainIndex: 'TA',
        mainExchange: 'TASE',
    },
    jo: {
        label: 'Jordan',
        children: ['ase'],
        demonym: 'Jordanian',
        mainIndex: 'Amman SE',
        mainExchange: 'ASE',
    },
    ke: {
        label: 'Kenya',
        children: ['nase'],
        demonym: 'Kenyan',
        mainIndex: 'NSE',
        mainExchange: 'NSE',
    },
    kw: {
        label: 'Kuwait',
        children: ['kwse'],
        demonym: 'Kuwaiti',
        mainIndex: 'PR',
        mainExchange: 'KSE',
    },
    lb: { label: 'Lebanon', children: ['bdb'], demonym: 'Lebanese' },
    ma: {
        label: 'Morocco',
        children: ['cbse'],
        demonym: 'Moroccan',
        mainIndex: 'MASI',
        mainExchange: 'CSE',
    },
    mu: {
        label: 'Mauritius',
        children: ['muse'],
        demonym: 'Mauritian',
        mainIndex: 'SEMDEX',
        mainExchange: 'SEM',
    },
    mw: {
        label: 'Malawi',
        children: ['mal'],
        demonym: 'Malawian',
        mainIndex: 'MSE',
        mainExchange: 'MSE',
    },
    na: {
        label: 'Namibia',
        children: ['nmse'],
        demonym: 'Namibian',
        mainIndex: 'NSX',
        mainExchange: 'NSX',
    },
    ng: {
        label: 'Nigeria',
        children: ['ngse'],
        demonym: 'Nigerian',
        mainIndex: 'NSE',
        mainExchange: 'NSE',
    },
    om: {
        label: 'Oman',
        children: ['msm'],
        demonym: 'Omani',
        mainIndex: 'MSM',
        mainExchange: 'MSM',
    },
    ps: {
        label: 'Palestinian Authority',
        children: ['plse'],
        demonym: 'Palestinian',
        mainIndex: 'Al-Quds',
        mainExchange: 'PEX',
    },
    qa: {
        label: 'Qatar',
        children: ['dsm'],
        demonym: 'Qatari',
        mainIndex: 'QE',
        mainExchange: 'DSM',
    },
    sa: {
        label: 'Saudi Arabia',
        children: ['sase'],
        demonym: 'Saudi Arabian',
        mainIndex: 'Tadawul',
        mainExchange: 'Tadawul',
    },
    tn: {
        label: 'Tunisia',
        children: ['bvmt'],
        demonym: 'Tunisian',
        mainIndex: 'TUNINDEX',
        mainExchange: 'BVMT',
    },
    tr: {
        label: 'Turkey',
        children: ['ibse'],
        demonym: 'Turkish',
        mainIndex: 'BIST',
        mainExchange: 'BIST',
    },
    tz: {
        label: 'Tanzania',
        children: ['dar'],
        demonym: 'Tanzanian',
        mainIndex: 'DSEI',
        mainExchange: 'DSE',
    },
    ug: {
        label: 'Uganda',
        children: ['ugse'],
        demonym: 'Ugandan',
        mainIndex: 'ALSIUG',
        mainExchange: 'USE',
    },
    za: {
        label: 'South Africa',
        children: ['jse'],
        demonym: 'South African',
        mainIndex: 'JSE',
        mainExchange: 'JSE',
    },
    zm: {
        label: 'Zambia',
        children: ['luse'],
        demonym: 'Zambian',
        mainIndex: 'LSE',
        mainExchange: 'LuSE',
    },
    zw: {
        label: 'Zimbabwe',
        children: ['zmse'],
        demonym: 'Zimbabwean',
        mainIndex: 'ZSE',
        mainExchange: 'ZSE',
    },
    au: {
        label: 'Australia',
        children: ['asx', 'chia', 'nsx'],
        demonym: 'Australian',
        mainIndex: 'ASX',
        mainExchange: 'ASX',
    },
    bd: {
        label: 'Bangladesh',
        children: ['dse'],
        demonym: 'Bangladeshi',
        mainIndex: 'DSE',
        mainExchange: 'DSE',
    },
    cn: {
        label: 'China',
        children: ['shse', 'szse'],
        demonym: 'Chinese',
        mainIndex: 'SSE',
    },
    hk: {
        label: 'Hong Kong',
        children: ['sehk'],
        mainIndex: 'HSI',
        mainExchange: 'SEHK',
    },
    id: {
        label: 'Indonesia',
        children: ['idx'],
        demonym: 'Indonesian',
        mainIndex: 'IDX',
        mainExchange: 'IDX',
    },
    in: {
        label: 'India',
        children: ['bse', 'nsei'],
        demonym: 'Indian',
        mainIndex: 'NIFTY',
        mainExchange: 'NSE',
    },
    jp: {
        label: 'Japan',
        children: ['fkse', 'jasdaq', 'spse'],
        demonym: 'Japanese',
        mainIndex: 'NIKKEI',
        mainExchange: 'TSE',
    },
    kr: {
        label: 'South Korea',
        children: ['kosdaq', 'kose', 'xkon'],
        demonym: 'South Korean',
        mainIndex: 'KOSPI',
        mainExchange: 'KRX',
    },
    lk: {
        label: 'Sri Lanka',
        children: ['cose'],
        demonym: 'Sri Lankan',
        mainIndex: 'CSE',
        mainExchange: 'CSE',
    },
    my: {
        label: 'Malaysia',
        children: ['klse'],
        demonym: 'Malaysian',
        mainIndex: 'KLSE',
        mainExchange: 'KLSE',
    },
    nz: {
        label: 'New Zealand',
        children: ['nzse'],
        mainIndex: 'NZX',
        mainExchange: 'NZSX',
    },
    ph: {
        label: 'Philippines',
        children: ['pse'],
        demonym: 'Filipino',
        mainIndex: 'PSEi',
        mainExchange: 'PSE',
    },
    pk: {
        label: 'Pakistan',
        children: ['kase'],
        demonym: 'Pakistani',
        mainIndex: 'KSE',
        mainExchange: 'KSE',
    },
    sg: {
        label: 'Singapore',
        children: ['catalist', 'sgx'],
        demonym: 'Singaporean',
        mainIndex: 'SGX',
        mainExchange: 'SGX',
    },
    th: {
        label: 'Thailand',
        children: ['set'],
        demonym: 'Thai',
        mainIndex: 'SET',
        mainExchange: 'SET',
    },
    tw: {
        label: 'Taiwan',
        children: ['gtsm', 'tsec'],
        demonym: 'Taiwanese',
        mainIndex: 'TAIEX',
        mainExchange: 'TWSE',
    },
    vn: {
        label: 'Vietnam',
        children: ['hnx', 'hose'],
        demonym: 'Vietnamese',
        mainIndex: 'HOSE',
        mainExchange: 'VSE',
    },
    at: {
        label: 'Austria',
        children: ['wbag'],
        demonym: 'Austrian',
        mainIndex: 'ATX',
        mainExchange: 'ASX',
    },
    be: {
        label: 'Belgium',
        children: ['enxtbr'],
        demonym: 'Belgian',
        mainIndex: 'BEL20',
        mainExchange: 'BSE',
    },
    bg: {
        label: 'Bulgaria',
        children: ['bul'],
        demonym: 'Bulgarian',
        mainIndex: 'SOFIX',
        mainExchange: 'BSE',
    },
    cy: {
        label: 'Cyprus',
        children: ['cse'],
        demonym: 'Cypriot',
        mainIndex: 'CYSMMAPA',
        mainExchange: 'CSE',
    },
    cz: {
        label: 'Czech Republic',
        children: ['sep'],
        demonym: 'Czech',
        mainIndex: 'PX',
        mainExchange: 'PSE',
    },
    de: {
        label: 'Germany',
        children: ['bst', 'db', 'duse', 'hmse', 'mun', 'xtra'],
        demonym: 'German',
        mainIndex: 'DAX',
        mainExchange: 'Frankfurt Stock Exchange',
    },
    dk: {
        label: 'Denmark',
        children: ['cpse'],
        demonym: 'Danish',
        mainIndex: 'OMX',
        mainExchange: 'CSE',
    },
    ee: {
        label: 'Estonia',
        children: ['tlse'],
        demonym: 'Estonia',
        mainIndex: 'OMX',
        mainExchange: 'OMX',
    },
    es: {
        label: 'Spain',
        children: ['bdm', 'bme'],
        demonym: 'Spanish',
        mainIndex: 'IBEX',
        mainExchange: 'MAD',
    },
    fi: {
        label: 'Finland',
        children: ['hlse'],
        demonym: 'Finnish',
        mainIndex: 'OMX',
        mainExchange: 'Nasdaq Helsinki',
    },
    fr: {
        label: 'France',
        children: ['cobl', 'enxtpa'],
        demonym: 'French',
        mainIndex: 'CAC',
        mainExchange: 'Euronext',
    },
    gb: {
        label: 'United Kingdom',
        children: ['aim', 'bats-chixe', 'lse', 'ofex'],
        demonym: 'U.K.',
        mainIndex: 'FTSE',
        mainExchange: 'LSE',
    },
    gr: {
        label: 'Greece',
        children: ['atse'],
        demonym: 'Greek',
        mainIndex: 'ASE',
        mainExchange: 'ASE',
    },
    hr: {
        label: 'Croatia',
        children: ['zgse'],
        demonym: 'Croatian',
        mainIndex: 'CROBEX',
        mainExchange: 'ZSE',
    },
    hu: {
        label: 'Hungary',
        children: ['buse'],
        demonym: 'Hungarian',
        mainIndex: 'BUX',
        mainExchange: 'BSE',
    },
    ie: {
        label: 'Ireland',
        children: ['ise'],
        demonym: 'Irish',
        mainIndex: 'ISEQ',
        mainExchange: 'Euronext Dublin',
    },
    is: {
        label: 'Iceland',
        children: ['icse'],
        demonym: 'Icelandic',
        mainIndex: 'OMX',
        mainExchange: 'XICE',
    },
    it: {
        label: 'Italy',
        children: ['bit', 'bite', 'xmil'],
        demonym: 'Italian',
        mainIndex: 'Borsa Italiana',
        mainExchange: 'Borsa Italiana',
    },
    lt: {
        label: 'Lithuania',
        children: ['nsel'],
        demonym: 'Lithuanian',
        mainIndex: 'OMXV',
        mainExchange: 'Vilnius Stock Exchange',
    },
    lu: {
        label: 'Luxembourg',
        children: ['bdl'],
        mainIndex: 'LUXX',
        mainExchange: 'LuxSE',
    },
    lv: {
        label: 'Latvia',
        children: ['rise'],
        demonym: 'Latvian',
        mainIndex: 'OMX',
        mainExchange: 'OMX',
    },
    mt: {
        label: 'Malta',
        children: ['mtse'],
        demonym: 'Maltese',
        mainIndex: 'MSE',
        mainExchange: 'MSE',
    },
    nl: {
        label: 'Netherlands',
        children: ['enxtam'],
        demonym: 'Dutch',
        mainIndex: 'AEX',
        mainExchange: 'AEX',
    },
    no: {
        label: 'Norway',
        children: ['ob', 'otcno'],
        demonym: 'Norwegian',
        mainIndex: 'OSEAX',
        mainExchange: 'OBX',
    },
    pl: {
        label: 'Poland',
        children: ['wse'],
        demonym: 'Polish',
        mainIndex: 'WIG',
        mainExchange: 'WSE',
    },
    pt: {
        label: 'Portugal',
        children: ['enxtls'],
        demonym: 'Portuguese',
        mainIndex: 'PSI',
        mainExchange: 'Euronext Lisbon',
    },
    ro: {
        label: 'Romania',
        children: ['bvb'],
        demonym: 'Romanian',
        mainIndex: 'BET',
        mainExchange: 'BVB',
    },
    rs: {
        label: 'Serbia',
        children: ['belex'],
        demonym: 'Serbian',
        mainIndex: 'BELEX',
        mainExchange: 'BELEX',
    },
    ru: {
        label: 'Russia',
        children: ['misx'],
        demonym: 'Russian',
        mainIndex: 'MOEX',
        mainExchange: 'MICEX',
    },
    se: {
        label: 'Sweden',
        children: ['ngm', 'omx', 'xsat'],
        demonym: 'Swedish',
        mainIndex: 'OMX',
        mainExchange: 'OMX',
    },
    si: {
        label: 'Slovenia',
        children: ['ljse'],
        demonym: 'Slovenian',
        mainIndex: 'SBITOP',
        mainExchange: 'LJSE',
    },
    sk: {
        label: 'Slovakia',
        children: ['bsse'],
        demonym: 'Slovak',
        mainIndex: 'SAX',
        mainExchange: 'BSSE',
    },
    ua: {
        label: 'Ukraine',
        children: ['ukr'],
        demonym: 'Ukrainian',
        mainIndex: 'PFTS',
        mainExchange: 'PFTS',
    },
    ar: {
        label: 'Argentina',
        children: ['base'],
        demonym: 'Argentinian',
        mainIndex: 'MERVAL',
        mainExchange: 'BYMA',
    },
    bm: {
        label: 'Bermuda',
        children: ['ber'],
        demonym: 'Bermudian',
        mainIndex: 'BSX',
        mainExchange: 'BSX',
    },
    br: {
        label: 'Brazil',
        children: ['bovespa'],
        demonym: 'Brazilian',
        mainIndex: 'BOVESPA',
        mainExchange: 'B3',
    },
    cl: {
        label: 'Chile',
        children: ['snse'],
        demonym: 'Chilean',
        mainIndex: 'IPSA',
        mainExchange: 'SSE',
    },
    co: {
        label: 'Colombia',
        children: ['bvc'],
        demonym: 'Colombian',
        mainIndex: 'COLCAP',
        mainExchange: 'BVC',
    },
    jm: {
        label: 'Jamaica',
        children: ['jmse'],
        demonym: 'Jamaican',
        mainIndex: 'JSE',
        mainExchange: 'JSE',
    },
    mx: {
        label: 'Mexico',
        children: ['bmv'],
        demonym: 'Mexican',
        mainIndex: 'IPC',
        mainExchange: 'BMV',
    },
    pe: {
        label: 'Peru',
        children: ['bvl'],
        demonym: 'Peruvian',
        mainIndex: 'BVL',
        mainExchange: 'IGBVL',
    },
    tt: {
        label: 'Trinidad & Tobago',
        children: ['ttse'],
        mainIndex: 'TTSE',
        mainExchange: 'TTSE',
    },
    ve: {
        label: 'Venezuela',
        children: ['ccse'],
        demonym: 'Venezuelan',
        mainIndex: 'IBC',
        mainExchange: 'IBVC',
    },
    ca: {
        label: 'Canada',
        children: ['cnsx', 'tsx', 'tsxv'],
        demonym: 'Canadian',
        mainIndex: 'TSX',
        mainExchange: 'TSX',
    },
    us: {
        label: 'United States',
        children: [
            'amex',
            'arca',
            'bats',
            'nasdaqcm',
            'nasdaqgm',
            'nasdaqgs',
            'nyse',
            'otcpk',
        ],
        demonym: 'U.S.',
        mainIndex: 'Dow Jones',
        mainExchange: 'NYSE',
    },
    ch: {
        label: 'Switzerland',
        children: ['swx', 'brse'],
        demonym: 'Swiss',
        mainIndex: 'SMI',
        mainExchange: 'SMI',
    },
};