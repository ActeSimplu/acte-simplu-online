export interface Document {
  id: string;
  name: string;
  shortName: string;
  institution: string;
  whereToGo: string;
  requiredDocs: string[];
  costs: string;
  duration: string;
  commonMistakes: string[];
  officialWebsite: string;
  canDoOnline: boolean;
  onlineDetails?: string;
  lastUpdated: string;
  isPopular: boolean;
  frequentlyChanges: boolean;
}

export const documents: Document[] = [
  {
    id: "buletin",
    name: "Carte de identitate (Buletin)",
    shortName: "Buletin",
    institution: "Direcția de Evidență a Persoanelor",
    whereToGo: "Serviciul Public Comunitar de Evidență a Persoanelor din localitatea de domiciliu",
    requiredDocs: [
      "Cerere tip (se obține de la ghișeu)",
      "Certificat de naștere - original și copie",
      "Certificat de căsătorie (dacă este cazul) - original și copie",
      "Actul de identitate anterior (dacă există)",
      "Document care atestă adresa de domiciliu (extras CF, contract de închiriere, declarație de primire în spațiu)",
      "Chitanță taxă carte de identitate",
      "Timbru fiscal (7 lei)"
    ],
    costs: "7 lei (timbru fiscal)",
    duration: "Până la 30 de zile (de obicei 7-14 zile)",
    commonMistakes: [
      "Lipsa documentului care atestă adresa",
      "Certificate expirate sau deteriorate",
      "Neprezentarea proprietarului pentru declarația de primire în spațiu",
      "Fotografii necorespunzătoare"
    ],
    officialWebsite: "https://www.politiaromana.ro",
    canDoOnline: false,
    lastUpdated: "15 decembrie 2024",
    isPopular: true,
    frequentlyChanges: false
  },
  {
    id: "card-sanatate",
    name: "Card european de sănătate",
    shortName: "Card de sănătate",
    institution: "Casa Națională de Asigurări de Sănătate",
    whereToGo: "Casa de Asigurări de Sănătate din județul de domiciliu sau online",
    requiredDocs: [
      "Cerere tip",
      "Copie act de identitate",
      "Adeverință de salariat sau cupon de pensie (dovada calității de asigurat)"
    ],
    costs: "Gratuit",
    duration: "7-14 zile lucrătoare",
    commonMistakes: [
      "Lipsa dovezii calității de asigurat",
      "Adresa de email greșită pentru notificări",
      "Neactualizarea datelor de contact"
    ],
    officialWebsite: "https://www.cnas.ro",
    canDoOnline: true,
    onlineDetails: "Se poate solicita online prin platforma CNAS",
    lastUpdated: "10 decembrie 2024",
    isPopular: true,
    frequentlyChanges: false
  },
  {
    id: "certificat-deces",
    name: "Certificat de deces",
    shortName: "Certificat de deces",
    institution: "Primărie - Serviciul de Stare Civilă",
    whereToGo: "Primăria localității unde a survenit decesul",
    requiredDocs: [
      "Certificat medical constatator al decesului",
      "Actul de identitate al persoanei decedate",
      "Actul de identitate al declarantului",
      "Certificat de naștere al decedatului",
      "Certificat de căsătorie al decedatului (dacă este cazul)",
      "Livret militar (pentru bărbați)"
    ],
    costs: "Gratuit (primul exemplar)",
    duration: "1-3 zile lucrătoare",
    commonMistakes: [
      "Nedeclararea în termen de 3 zile de la deces",
      "Lipsa certificatului medical constatator",
      "Documente incomplete ale decedatului"
    ],
    officialWebsite: "https://depabd.mai.gov.ro/stare_civila.html",
    canDoOnline: false,
    lastUpdated: "12 decembrie 2024",
    isPopular: false,
    frequentlyChanges: false
  },
  {
    id: "inmatriculare-auto",
    name: "Înmatriculare auto",
    shortName: "Înmatriculare auto",
    institution: "Registrul Auto Român (RAR) și DRPCIV",
    whereToGo: "RAR pentru inspecția tehnică, apoi Serviciul de Înmatriculări din cadrul DRPCIV",
    requiredDocs: [
      "Cerere tip",
      "Act de identitate proprietar - original și copie",
      "Document de proveniență a vehiculului (factură, contract vânzare-cumpărare)",
      "Cartea de identitate a vehiculului (CIV)",
      "Certificat de înmatriculare anterior (pentru vehicule din România)",
      "Fișa de înmatriculare de la RAR",
      "Asigurare RCA valabilă",
      "Dovada plății taxelor"
    ],
    costs: "~400-600 lei (taxe înmatriculare + ITP + plăcuțe)",
    duration: "1-3 zile (după obținerea tuturor documentelor)",
    commonMistakes: [
      "ITP expirat",
      "RCA nevalabil la momentul înmatriculării",
      "Neradierea vehiculului de către vânzător",
      "Documente traduse neautorizat (pentru import)"
    ],
    officialWebsite: "https://www.drpciv.ro",
    canDoOnline: false,
    onlineDetails: "Programare online obligatorie pentru DRPCIV",
    lastUpdated: "14 decembrie 2024",
    isPopular: true,
    frequentlyChanges: true
  },
  {
    id: "pasaport",
    name: "Pașaport simplu electronic",
    shortName: "Pașaport",
    institution: "Direcția Generală de Pașapoarte",
    whereToGo: "Serviciul Public Comunitar de Pașapoarte din județul de domiciliu",
    requiredDocs: [
      "Cerere tip (se completează la ghișeu)",
      "Act de identitate valabil - original",
      "Pașaportul anterior (dacă există)",
      "Chitanța de plată a taxelor",
      "Certificat de naștere (pentru minorii sub 14 ani)"
    ],
    costs: "258 lei (adulți) / 132 lei (minori)",
    duration: "10-15 zile lucrătoare (standard) / 3-5 zile (urgență - taxă suplimentară)",
    commonMistakes: [
      "Buletin expirat",
      "Programare la alt județ decât cel de domiciliu",
      "Lipsa acordului ambilor părinți pentru minori"
    ],
    officialWebsite: "https://pasapoarte.mai.gov.ro/",
    canDoOnline: false,
    onlineDetails: "Programare online prin ePașapoarte (Hub MAI): https://hub.mai.gov.ro/epasapoarte",
    lastUpdated: "13 decembrie 2024",
    isPopular: true,
    frequentlyChanges: false
  },
  {
    id: "permis-b",
    name: "Permis de conducere categoria B",
    shortName: "Permis categoria B",
    institution: "Direcția Regim Permise de Conducere și Înmatriculare a Vehiculelor (DRPCIV)",
    whereToGo: "Serviciul de Permise din cadrul DRPCIV",
    requiredDocs: [
      "Cerere tip",
      "Act de identitate - original și copie",
      "Fișa medicală (aviz medical)",
      "Aviz psihologic",
      "Certificat de absolvire școală auto",
      "Chitanța taxă permis",
      "O fotografie 3x4 cm"
    ],
    costs: "~800-1500 lei (școală auto) + ~100 lei (taxe permis)",
    duration: "Până la 30 de zile după promovarea examenului",
    commonMistakes: [
      "Fișa medicală expirată (valabilitate 6 luni)",
      "Aviz psihologic expirat",
      "Lipsa CNP pe documente"
    ],
    officialWebsite: "https://www.drpciv.ro",
    canDoOnline: false,
    onlineDetails: "Programare examen online pe drpciv.ro",
    lastUpdated: "11 decembrie 2024",
    isPopular: true,
    frequentlyChanges: false
  },
  {
    id: "pfa",
    name: "Persoană Fizică Autorizată (PFA)",
    shortName: "PFA",
    institution: "Oficiul Național al Registrului Comerțului (ONRC)",
    whereToGo: "Oficiul Registrului Comerțului din județul de domiciliu sau online",
    requiredDocs: [
      "Cerere de înregistrare",
      "Declarație pe propria răspundere privind îndeplinirea condițiilor",
      "Copie act de identitate",
      "Specimen de semnătură",
      "Dovada sediului profesional (extras CF, contract închiriere)",
      "Dacă activitatea necesită autorizații speciale - documentele aferente"
    ],
    costs: "~100-200 lei (taxe ONRC)",
    duration: "3-5 zile lucrătoare",
    commonMistakes: [
      "Cod CAEN incorect pentru activitate",
      "Lipsa acordului asociației de proprietari pentru sediu în apartament",
      "Declarații incomplete"
    ],
    officialWebsite: "https://www.onrc.ro",
    canDoOnline: true,
    onlineDetails: "Se poate înregistra complet online prin portal.onrc.ro",
    lastUpdated: "10 decembrie 2024",
    isPopular: true,
    frequentlyChanges: true
  },
  {
    id: "procura",
    name: "Procură notarială",
    shortName: "Procură",
    institution: "Birou notarial",
    whereToGo: "Orice birou notarial din România",
    requiredDocs: [
      "Act de identitate mandant (cel care dă procura)",
      "Copie act de identitate mandatar (cel care primește procura)",
      "Detalii despre obiectul procurii (ex: date imobil, date autovehicul)",
      "Documentele bunului care face obiectul procurii (dacă este cazul)"
    ],
    costs: "50-300 lei (în funcție de complexitate)",
    duration: "Pe loc (30 min - 1 oră)",
    commonMistakes: [
      "Lipsa datelor complete despre mandatar",
      "Nespecificarea clară a limitelor procurii",
      "Procură generală în loc de specială când este necesar"
    ],
    officialWebsite: "https://www.uniuneanotarilor.ro",
    canDoOnline: false,
    lastUpdated: "8 decembrie 2024",
    isPopular: false,
    frequentlyChanges: false
  }
];

export interface Institution {
  id: string;
  name: string;
  shortName: string;
  website: string;
  documentIds: string[];
}

export const institutions: Institution[] = [
  {
    id: "anaf",
    name: "Agenția Națională de Administrare Fiscală",
    shortName: "ANAF",
    website: "https://www.anaf.ro",
    documentIds: ["pfa"]
  },
  {
    id: "casa-pensii",
    name: "Casa Națională de Pensii Publice",
    shortName: "Casa de Pensii",
    website: "https://www.cnpp.ro",
    documentIds: []
  },
  {
    id: "evidenta-persoane",
    name: "Direcția de Evidență a Persoanelor",
    shortName: "Evidența Persoanelor",
    website: "https://www.politiaromana.ro",
    documentIds: ["buletin"]
  },
  {
    id: "primarie",
    name: "Primărie",
    shortName: "Primărie",
    website: "https://depabd.mai.gov.ro/stare_civila.html",
    documentIds: ["certificat-deces"]
  },
  {
    id: "rar",
    name: "Registrul Auto Român",
    shortName: "RAR",
    website: "https://www.rarom.ro",
    documentIds: ["inmatriculare-auto"]
  }
];

export const counties = [
  "Alba", "Arad", "Argeș", "Bacău", "Bihor", "Bistrița-Năsăud", "Botoșani", "Brașov",
  "Brăila", "București", "Buzău", "Caraș-Severin", "Călărași", "Cluj", "Constanța",
  "Covasna", "Dâmbovița", "Dolj", "Galați", "Giurgiu", "Gorj", "Harghita", "Hunedoara",
  "Ialomița", "Iași", "Ilfov", "Maramureș", "Mehedinți", "Mureș", "Neamț", "Olt",
  "Prahova", "Satu Mare", "Sălaj", "Sibiu", "Suceava", "Teleorman", "Timiș", "Tulcea",
  "Vaslui", "Vâlcea", "Vrancea"
];

export const getDocumentById = (id: string): Document | undefined => {
  return documents.find(doc => doc.id === id);
};

export const getPopularDocuments = (): Document[] => {
  return documents.filter(doc => doc.isPopular);
};

export const getDocumentsByInstitution = (institutionId: string): Document[] => {
  const institution = institutions.find(inst => inst.id === institutionId);
  if (!institution) return [];
  return documents.filter(doc => institution.documentIds.includes(doc.id));
};

export const searchDocuments = (query: string): Document[] => {
  const lowerQuery = query.toLowerCase();
  return documents.filter(doc => 
    doc.name.toLowerCase().includes(lowerQuery) ||
    doc.shortName.toLowerCase().includes(lowerQuery) ||
    doc.institution.toLowerCase().includes(lowerQuery)
  );
};