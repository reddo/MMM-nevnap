Module.register("MMM-Nevnap", {
  defaults: {
    mode: "today", // today, tomorrow, yesterday, day, name
    day: "", // 1-31
    month: "", // 1-12
    name: "",
    fontSize: "1em",
    updateInterval: 5 * 60 * 1000, // every 5 minutes
    initialLoadDelay: 3000,
    lang: config.language
  },

  getScripts: () => ["moment.js"],

  getTranslations: function () {
    return {
      en: "translations/en.json",
      cs: "translations/cs.json",
      de: "translations/de.json",
      es: "translations/es.json",
      fr: "translations/fr.json",
      hr: "translations/hr.json",
      hu: "translations/hu.json",
      it: "translations/it.json",
      pl: "translations/pl.json",
      sv: "translations/sv.json"
    };
  },

  nameDays: {
    "01-01": ["Alpár", "Fruzsina", "Bazil"],
    "01-02": ["Ábel", "Gergely", "Vazul"],
    "01-03": ["Genovéva", "Gyöngyvér", "Benjámin", "Dzsenifer"],
    "01-04": ["Titusz", "Leona", "Angéla"],
    "01-05": ["Simon", "Emília"],
    "01-06": ["Gáspár", "Menyhért", "Boldizsár"],
    "01-07": ["Attila", "Ramóna", "Rajmund", "Bálint"],
    "01-08": ["Gyöngyvér", "Szeverin", "Szörény"],
    "01-09": ["Marcell", "Juliánusz"],
    "01-10": ["Melánia", "Vilmos", "Vilma"],
    "01-11": ["Ágota", "Honoráta"],
    "01-12": ["Ernő", "Erneszta", "Tatjána"],
    "01-13": ["Veronika", "Csongor", "Yvett"],
    "01-14": ["Bódog", "Félix"],
    "01-15": ["Lóránt", "Loránd", "Pál"],
    "01-16": ["Gusztáv", "Marcell"],
    "01-17": ["Antal", "Antónia"],
    "01-18": ["Margit", "Piroska"],
    "01-19": ["Sára", "Márta", "Márió"],
    "01-20": ["Fábián", "Sebestyén"],
    "01-21": ["Ágnes", "Agnéta"],
    "01-22": ["Vince", "Artúr"],
    "01-23": ["Zelma", "Rajmund", "Emerencia", "Emese"],
    "01-24": ["Timót", "Ferenc"],
    "01-25": ["Pál", "Henrik"],
    "01-26": ["Vanda", "Paula", "Timóteusz"],
    "01-27": ["Angéla", "Angelika"],
    "01-28": ["Károly", "Karola", "Tamás"],
    "01-29": ["Adél", "Valér"],
    "01-30": ["Martina", "Gerda", "Jácinta"],
    "01-31": ["Marcella", "János"],
    "02-01": ["Ignác", "Brigitta", "Kincső"],
    "02-02": ["Karolina", "Karola", "Aida"],
    "02-03": ["Balázs", "Oszkár", "Celerina"],
    "02-04": ["Ráhel", "Csenge", "Veronika", "András"],
    "02-05": ["Ágota", "Ingrid", "Etelka", "Léda"],
    "02-06": ["Dorottya", "Dóra", "Pál"],
    "02-07": ["Tódor", "Rómeó", "Richárd"],
    "02-08": ["Aranka", "Jeromos"],
    "02-09": ["Abigél", "Alex", "Apollónia"],
    "02-10": ["Elvira"],
    "02-11": ["Bertold", "Marietta"],
    "02-12": ["Lívia", "Lídia", "Eulália"],
    "02-13": ["Ella", "Linda", "Levente", "Katalin"],
    "02-14": ["Bálint", "Valentin", "Cirill", "Metód"],
    "02-15": ["Kolos", "Györgyi", "Georgina"],
    "02-16": ["Julianna", "Lilla", "Filippa"],
    "02-17": ["Donát"],
    "02-18": ["Bernadett", "Simon", "Zenkő"],
    "02-19": ["Zsuzsanna", "Eliza", "Konrád"],
    "02-20": ["Aladár", "Álmos", "Leó"],
    "02-21": ["Eleonóra", "Zelmira", "Péter"],
    "02-22": ["Gerzson", "Margit", "Zétény"],
    "02-23": ["Alfréd", "Polikárp", "Mirtill"],
    "02-24": ["Mátyás", "Jázmin"],
    "02-25": ["Géza", "Cézár", "Vanda"],
    "02-26": ["Edina", "Viktor", "Győző"],
    "02-27": ["Ákos", "Bátor", "Gábor"],
    "02-28": ["Elemér", "Oszvald", "Román"],
    "03-01": ["Albin", "Albina", "Leonita", "Lea"],
    "03-02": ["Lujza", "Ágnes", "Henrik", "Magor"],
    "03-03": ["Kornélia", "Kunigunda", "Frigyes"],
    "03-04": ["Kázmér", "Lúciusz", "Zorán"],
    "03-05": ["Adorján", "Adrián"],
    "03-06": ["Leonóra", "Inez", "Koletta"],
    "03-07": ["Tamás", "Perpétua", "Felicitász"],
    "03-08": ["János", "Zoltán", "Apolka"],
    "03-09": ["Franciska", "Fanni"],
    "03-10": ["Ildikó", "Emil", "Gusztáv"],
    "03-11": ["Szilárd", "Tímea", "Konstantin"],
    "03-12": ["Gergely", "Maximilián"],
    "03-13": ["Krisztián", "Ajtony", "Egyed", "Patrícia"],
    "03-14": ["Matild", "Matilda", "Trilla"],
    "03-15": ["Kristóf", "Kelemen"],
    "03-16": ["Henrietta", "Herbert"],
    "03-17": ["Gertrúd", "Patrik"],
    "03-18": ["Sándor", "Ede", "Cirill"],
    "03-19": ["József", "Bánk"],
    "03-20": ["Klaudia", "Alexandra"],
    "03-21": ["Benedek", "Bence", "Miklós"],
    "03-22": ["Beáta", "Izolda", "Lea"],
    "03-23": ["Emőke", "Botond", "Ottó", "Kartal"],
    "03-24": ["Gábor", "Karina"],
    "03-25": ["Irén", "Írisz", "Lúcia"],
    "03-26": ["Emánuel", "Emánuéla", "Larissza", "Árpád"],
    "03-27": ["Hajnalka", "Lídia", "Auguszta"],
    "03-28": ["Gedeon", "Johanna"],
    "03-29": ["Auguszta", "Bertold"],
    "03-30": ["Zalán"],
    "03-31": ["Árpád", "Benjámin", "Benő"],
    "04-01": ["Hugó", "Agád"],
    "04-02": ["Áron", "Ferenc"],
    "04-03": ["Buda", "Richárd", "Hóvirág", "Indira"],
    "04-04": ["Izidor"],
    "04-05": ["Vince", "Irén", "Teodóra"],
    "04-06": ["Vilmos", "Bíborka", "Taksony", "Celesztin"],
    "04-07": ["Herman", "János"],
    "04-08": ["Dénes", "Valér", "Valter"],
    "04-09": ["Erhard", "Ákos", "Döme"],
    "04-10": ["Zsolt", "Ezékiel"],
    "04-11": ["Leó", "Szaniszló", "Glória"],
    "04-12": ["Gyula", "Baldvin", "Sába"],
    "04-13": ["Ida", "Márton", "Hermina"],
    "04-14": ["Tibor"],
    "04-15": ["Anasztázia", "Tas", "Oktávia"],
    "04-16": ["Csongor", "Bernadett"],
    "04-17": ["Rudolf", "Izidóra"],
    "04-18": ["Andrea", "Ilma", "Apolló", "Aladár"],
    "04-19": ["Emma", "Malvin", "Zseraldina"],
    "04-20": ["Tivadar", "Tihamér", "Töhötöm"],
    "04-21": ["Konrád", "Zelmira", "Anzelm"],
    "04-22": ["Csilla", "Noémi", "Kájusz"],
    "04-23": ["Béla", "Adalbert"],
    "04-24": ["György", "Fidél", "Debóra"],
    "04-25": ["Márk", "Ányos"],
    "04-26": ["Ervin", "Klétusz"],
    "04-27": ["Zita", "Mariann", "Anasztáz"],
    "04-28": ["Valéria", "Péter"],
    "04-29": ["Péter", "Katalin", "Roberta"],
    "04-30": ["Katalin", "Kitti", "Zsófia", "Piusz"],
    "05-01": ["Fülöp", "Jakab", "Zsaklin", "Jefte", "József"],
    "05-02": ["Zsigmond", "Atanáz", "Zoé"],
    "05-03": ["Tímea", "Irma", "Jakab", "Fülöp"],
    "05-04": ["Mónika", "Flórián"],
    "05-05": ["Györgyi", "Irén"],
    "05-06": ["Ivett", "Frida", "Judit", "Yvett"],
    "05-07": ["Gizella", "Gusztáv", "Bendegúz"],
    "05-08": ["Mihály", "Győző"],
    "05-09": ["Gergely", "Katinka", "Alberta", "Édua"],
    "05-10": ["Ármin", "Pálma", "Izidor"],
    "05-11": ["Ferenc"],
    "05-12": ["Pongrác"],
    "05-13": ["Szervác", "Imola", "Imelda"],
    "05-14": ["Bonifác", "Gyöngyi"],
    "05-15": ["Zsófia", "Szonja", "Döníz"],
    "05-16": ["Mózes", "Botond", "János"],
    "05-17": ["Paszkál", "Ditmár", "Rezeda"],
    "05-18": ["Erik", "Alexandra", "János"],
    "05-19": ["Ivó", "Iván", "Milán"],
    "05-20": ["Bernát", "Bernardin", "Felícia"],
    "05-21": ["Konstantin", "András"],
    "05-22": ["Júlia", "Rita", "Emil"],
    "05-23": ["Dezső", "Vilmos", "Renáta"],
    "05-24": ["Eszter", "Eliza", "Vanessza"],
    "05-25": ["Orbán", "Gergely"],
    "05-26": ["Fülöp", "Evelin"],
    "05-27": ["Hella", "Pelbárt", "Ágoston"],
    "05-28": ["Emil", "Csanád", "Vilmos"],
    "05-29": ["Magdolna", "Magda", "Ervin", "Léna"],
    "05-30": ["Janka", "Zsanett", "Johanna", "Nándor"],
    "05-31": ["Angéla", "Petronella"],
    "06-01": ["Tünde", "Jusztinusz"],
    "06-02": ["Kármen", "Anita", "Péter", "Marcellinusz"],
    "06-03": ["Klotild", "Cecília", "Károly"],
    "06-04": ["Bulcsú", "Kerény", "Kerubin"],
    "06-05": ["Fatime", "Fatima", "Bonifác"],
    "06-06": ["Norbert", "Norberta", "Cintia"],
    "06-07": ["Róbert", "Robertina", "Arianna", "Fülöp", "Roberta"],
    "06-08": ["Medárd", "Helga"],
    "06-09": ["Félix", "Előd", "Annamária", "Annabella"],
    "06-10": ["Margit", "Gréta"],
    "06-11": ["Barnabás"],
    "06-12": ["Villő", "Orfeusz", "Adelaida"],
    "06-13": ["Antal", "Anett"],
    "06-14": ["Vazul", "Elizeus", "Herta"],
    "06-15": ["Jolán", "Vid", "Viola"],
    "06-16": ["Jusztin", "Jusztina", "Auréliusz"],
    "06-17": ["Laura", "Alida", "Alina", "Szabolcs", "Adolf", "Bató"],
    "06-18": ["Arnold", "Levente", "Doloróza"],
    "06-19": ["Gyárfás", "Romuald"],
    "06-20": ["Rafael", "Dina"],
    "06-21": ["Alajos", "Leila"],
    "06-22": ["Paulina", "Tamás"],
    "06-23": ["Zoltán", "Szultána"],
    "06-24": ["János", "Iván"],
    "06-25": ["Vilmos", "Viola", "Vilma"],
    "06-26": ["János", "Pál", "Cirill"],
    "06-27": ["László", "Sámson"],
    "06-28": ["Levente", "Irén", "Iréneusz"],
    "06-29": ["Péter", "Pál", "Emőke", "Judit", "Petra", "Szulamit", "Ivett"],
    "06-30": ["Pál"],
    "07-01": ["Tihamér", "Annamária", "Olivér", "Áron"],
    "07-02": ["Ottó"],
    "07-03": ["Kornél", "Soma", "Tamás"],
    "07-04": ["Ulrik", "Erzsébet"],
    "07-05": ["Emese", "Sarolta", "Lotti", "Antal"],
    "07-06": ["Csaba", "Mária"],
    "07-07": ["Apollónia", "Vilibald", "Bene"],
    "07-08": ["Ellák", "Edgár", "Eperke"],
    "07-09": ["Lukrécia", "Veronika", "Hajnalka"],
    "07-10": ["Amália", "Melina", "Engelbert", "Ulrika"],
    "07-11": ["Nóra", "Lili", "Nelli", "Benedek"],
    "07-12": ["Izabella", "Dalma", "Eleonóra"],
    "07-13": ["Jenő", "Henrik"],
    "07-14": ["Örs", "Stella", "Kamil"],
    "07-15": ["Örkény", "Henrik", "Roland", "Bonaventúra"],
    "07-16": ["Valter", "Irma"],
    "07-17": ["Endre", "Elek", "András"],
    "07-18": ["Szömér", "Frigyes", "Milla", "Hedvig", "Mirkó"],
    "07-19": ["Emília"],
    "07-20": ["Illés", "Margaréta"],
    "07-21": ["Dániel", "Daniella", "Lőrinc"],
    "07-22": ["Magdolna", "Mária", "Magda"],
    "07-23": ["Lenke", "Brigitta", "Apollinár"],
    "07-24": ["Kinga", "Kunigunda", "Kincső", "Krisztina"],
    "07-25": ["Kristóf", "Jakab"],
    "07-26": ["Anna", "Anikó", "Joakim"],
    "07-27": ["Olga", "Liliána", "Natália", "Pantaleon"],
    "07-28": ["Szabolcs", "Alina", "Ince", "Győző"],
    "07-29": ["Márta", "Flóra"],
    "07-30": ["Judit", "Xénia", "Péter"],
    "07-31": ["Oszkár", "Ignác", "Bató"],
    "08-01": ["Boglárka", "Nimród", "Alfonz"],
    "08-02": ["Lehel"],
    "08-03": ["Hermina", "Lídia", "Kamélia", "Mirtill"],
    "08-04": ["Domonkos", "Dominik", "János", "Dominika"],
    "08-05": ["Krisztina"],
    "08-06": ["Berta", "Bettina"],
    "08-07": ["Ibolya"],
    "08-08": ["László", "Domonkos"],
    "08-09": ["Emőd", "Román"],
    "08-10": ["Lőrinc", "Blanka", "Csilla"],
    "08-11": ["Zsuzsanna", "Tiborc", "Klára"],
    "08-12": ["Klára", "Hilária", "Diána"],
    "08-13": ["Ipoly", "Ince", "Vitália"],
    "08-14": ["Marcell", "Maximilián"],
    "08-15": ["Mária"],
    "08-16": ["Ábrahám", "Rókus"],
    "08-17": ["Jácint", "Réka", "Hetény"],
    "08-18": ["Ilona", "Rajnald"],
    "08-19": ["Huba", "Marián", "Emília"],
    "08-20": ["István", "Bernát"],
    "08-21": ["Sámuel", "Hajna", "Piusz"],
    "08-22": ["Menyhért", "Mirjam"],
    "08-23": ["Bence", "Róza", "Szidónia"],
    "08-24": ["Bertalan", "Aliz", "Detre"],
    "08-25": ["Lajos", "Patrícia"],
    "08-26": ["Izsó", "Tália", "Natália", "Zamfira"],
    "08-27": ["Gáspár", "Mónika"],
    "08-28": ["Ágoston", "Mózes"],
    "08-29": ["Beatrix", "Erna"],
    "08-30": ["Rózsa", "Félix", "Letícia"],
    "08-31": ["Erika", "Bella", "Arisztid"],
    "09-01": ["Egyed", "Egon", "Noémi", "Tamara"],
    "09-02": ["Rebeka", "Dorina", "Renáta", "Ingrid", "István"],
    "09-03": ["Hilda", "Gergely"],
    "09-04": ["Rozália", "Róza", "Ida"],
    "09-05": ["Viktor", "Lőrinc", "Ofélia"],
    "09-06": ["Zakariás", "Beáta"],
    "09-07": ["Regina"],
    "09-08": ["Mária", "Adrienn"],
    "09-09": ["Ádám", "Péter"],
    "09-10": ["Nikolett", "Hunor", "Miklós"],
    "09-11": ["Teodóra", "Jácint", "Igor", "Helga"],
    "09-12": ["Mária", "Irma"],
    "09-13": ["Kornél", "János"],
    "09-14": ["Szeréna", "Roxána"],
    "09-15": ["Enikő", "Melitta"],
    "09-16": ["Edit", "Ciprián"],
    "09-17": ["Zsófia", "Róbert"],
    "09-18": ["Diána", "József"],
    "09-19": ["Vilhelmina", "Januáriusz", "Dorián"],
    "09-20": ["Friderika"],
    "09-21": ["Máté", "Mirella", "Jónás"],
    "09-22": ["Móric", "Tamás"],
    "09-23": ["Tekla", "Líviusz", "Ila"],
    "09-24": ["Gellért", "Gerda", "Mercédesz"],
    "09-25": ["Eufrozina", "Kende"],
    "09-26": ["Jusztina", "Kozma", "Damján"],
    "09-27": ["Adalbert", "Vince"],
    "09-28": ["Vencel", "Salamon"],
    "09-29": ["Mihály", "Gábor", "Rafael", "Mirabella"],
    "09-30": ["Jeromos", "Honória", "Hunor"],
    "10-01": ["Malvin", "Teréz"],
    "10-02": ["Petra", "Örs"],
    "10-03": ["Helga", "Évald"],
    "10-04": ["Ferenc", "Hajnalka"],
    "10-05": ["Aurél", "Placid", "Attila", "Rella"],
    "10-06": ["Brúnó", "Renáta", "Renátó"],
    "10-07": ["Amália", "Bekény"],
    "10-08": ["Koppány", "Benedikta"],
    "10-09": ["Dénes", "János"],
    "10-10": ["Gedeon", "Ferenc", "Bendegúz"],
    "10-11": ["Brigitta", "Placida", "Etel", "Gitta"],
    "10-12": ["Miksa", "Rezső", "Edvin"],
    "10-13": ["Kálmán", "Ede", "Edvárd"],
    "10-14": ["Helén", "Kaldixtusz"],
    "10-15": ["Teréz", "Aranka"],
    "10-16": ["Gál", "Margit", "Hedvig"],
    "10-17": ["Hedvig", "Ignác", "Rudolf"],
    "10-18": ["Lukács", "Jusztusz"],
    "10-19": ["Nándor", "János", "Pál"],
    "10-20": ["Vendel", "Irén", "Kleopátra"],
    "10-21": ["Orsolya", "Zsolt"],
    "10-22": ["Előd", "Szalóme", "Kordélia"],
    "10-23": ["Gyöngyvér", "János", "Gyöngyi"],
    "10-24": ["Salamon", "Antal"],
    "10-25": ["Blanka", "Bianka", "Mór"],
    "10-26": ["Dömötör", "Armand", "Örs"],
    "10-27": ["Szabina", "Antonietta"],
    "10-28": ["Simon", "Szimonetta", "Szimóna", "Júdás", "Tádé"],
    "10-29": ["Nárcisz", "Melinda", "Őzike"],
    "10-30": ["Alfonz", "Zenóbia"],
    "10-31": ["Farkas", "Rodrigó", "Wolfgang"],
    "11-01": ["Marianna"],
    "11-02": ["Achilles", "Bató"],
    "11-03": ["Győző", "Márton"],
    "11-04": ["Károly", "Karola"],
    "11-05": ["Imre", "Zakariás", "Tétény"],
    "11-06": ["Lénárd", "Krisztina"],
    "11-07": ["Csenger", "Rezső", "Ernő", "Florentin"],
    "11-08": ["Zsombor", "Kolos", "Gottfrid"],
    "11-09": ["Tivadar"],
    "11-10": ["Réka", "András", "Leó"],
    "11-11": ["Márton", "Atád", "Tódor"],
    "11-12": ["Jónás", "Renátó", "Jozafát"],
    "11-13": ["Szilvia", "Szaniszló"],
    "11-14": ["Aliz", "Vanda", "Huba", "Klementina"],
    "11-15": ["Albert", "Lipót"],
    "11-16": ["Ödön", "Margit"],
    "11-17": ["Hortenzia", "Gergő", "Dénes"],
    "11-18": ["Jenő"],
    "11-19": ["Erzsébet", "Zsóka"],
    "11-20": ["Jolán", "Zsolt", "Ödön", "Bódog"],
    "11-21": ["Olivér"],
    "11-22": ["Cecília", "Filemon"],
    "11-23": ["Kelemen", "Klementina", "Kolumbán"],
    "11-24": ["Emma", "Flóra", "Virág"],
    "11-25": ["Katalin", "Liza", "Katinka"],
    "11-26": ["Virág", "Szvetlana", "Konrád", "Viktória", "Milos"],
    "11-27": ["Virgil", "Virgínia"],
    "11-28": ["Stefánia", "Jakab"],
    "11-29": ["Taksony", "Ilma", "Filoména"],
    "11-30": ["András", "Andor", "Andrea"],
    "12-01": ["Elza", "Natália", "Blanka", "Bonita"],
    "12-02": ["Melinda", "Vivien", "Aranka"],
    "12-03": ["Ferenc", "Olívia"],
    "12-04": ["Borbála", "Barbara", "János"],
    "12-05": ["Vilma", "Ünige", "Csaba"],
    "12-06": ["Miklós", "Csinszka", "Gyopár", "Gyopárka"],
    "12-07": ["Ambrus", "Ambrózia"],
    "12-08": ["Mária", "Emőke"],
    "12-09": ["Natália", "Valéria", "Filótea"],
    "12-10": ["Judit", "Loretta", "Eulália"],
    "12-11": ["Árpád", "Árpádina", "Damazusz"],
    "12-12": ["Gabriella", "Johanna", "Franciska"],
    "12-13": ["Luca", "Otília", "Lúcia", "Éda", "Tilia"],
    "12-14": ["Szilárda", "Szilárd", "János"],
    "12-15": ["Valér", "Detre"],
    "12-16": ["Etelka", "Aletta", "Adelaida"],
    "12-17": ["Lázár", "Olimpia"],
    "12-18": ["Auguszta", "Gracián"],
    "12-19": ["Viola", "Anasztáz"],
    "12-20": ["Teofil", "Liberátusz"],
    "12-21": ["Tamás", "Péter"],
    "12-22": ["Zénó", "Flórián"],
    "12-23": ["Viktória", "János"],
    "12-24": ["Ádám", "Éva", "Adél"],
    "12-25": ["Eugénia", "Anasztázia"],
    "12-26": ["István"],
    "12-27": ["János", "Teodor"],
    "12-28": ["Kamilla", "Apor"],
    "12-29": ["Tamás", "Tamara"],
    "12-30": ["Dávid", "Hunor", "Libériusz"],
    "12-31": ["Szilveszter", "Donáta"]
  },

  getStyles: function () {
    return ["MMM-Nevnap.css"];
  },

  start: function () {
    Log.info("Starting module: " + this.name);
    this.names = [];
    this.date = [];
    this.loaded = false;
    this.scheduleUpdate(this.config.initialLoadDelay);
    this.updateTimer = null;
  },

  getURL: function () {
    const baseUrl = "https://api.nevnapok.eu/";
    let url;
    const date = moment();
    switch (this.config.mode) {
      case "today":
        url = `${baseUrl}ma`;
        break;
      case "tomorrow":
        url = `${baseUrl}nap/${date.add(1, "days").format("MM-DD")}`;
        break;
      case "yesterday":
        url = `${baseUrl}nap/${date.subtract(1, "days").format("MM-DD")}`;
        break;
      case "day":
        if (this.config.day !== "" && this.config.month !== "") {
          url = `${baseUrl}nap/${this.config.month}-${this.config.day}`;
          break;
        } else {
          Log.error(self.name + ": Month or day not defined!");
          break;
        }
      case "name":
        if (this.config.name !== "") {
          url = `${baseUrl}nev/${this.config.name}`;
          break;
        } else {
          Log.error(self.name + ": Name not inserted!!");
          break;
        }
      default:
        break;
    }
    return url;
  },

  joinNames: function (arr) {
    if (arr.length === 1) return arr[0];
    const firsts = arr.slice(0, arr.length - 1);
    const last = arr[arr.length - 1];
    return `${firsts.join(", ")} ${this.translate("AND")} ${last}`;
  },

  // could use some improvement
  findDate: function (str) {
    let day;
    const nameDays = Object.values(this.nameDays);
    for (var i = 0; i < nameDays.length; i++) {
      day = nameDays[i];

      if (day.includes(str)) {
        return Object.keys(this.nameDays)[i];
      }
    }

    return false;
  },

  getData: function () {
    const self = this;
    const date = moment();

    switch (this.config.mode) {
      case "today":
        self.names = self.joinNames(this.nameDays[`${date.format("MM-DD")}`]);
        break;
      case "tomorrow":
        self.names = self.joinNames(
          this.nameDays[`${date.add(1, "days").format("MM-DD")}`]
        );
        break;
      case "yesterday":
        self.names = self.joinNames(
          this.nameDays[`${date.subtract(1, "days").format("MM-DD")}`]
        );
        break;
      case "day":
        if (this.config.day !== "" && this.config.month !== "") {
          self.names = self.joinNames(
            this.nameDays[`${this.config.month}-${this.config.day}`]
          );
          break;
        } else {
          Log.error(self.name + ": Month or day not defined!");
          break;
        }
      case "name":
        if (this.config.name !== "") {
          const date = self.findDate(this.config.name);
          if (date) {
            self.date = date.split("-");
          } else {
            Log.error(self.name + ": Name not found!");
          }
          break;
        } else {
          Log.error(self.name + ": Name not defined!");
          break;
        }
      default:
        break;
    }

    self.loaded = true;
    self.updateDom();
  },

  getDom: function () {
    let message;
    const modes = ["today", "tomorrow", "yesterday", "day", "name"];

    const wrapper = document.createElement("div");
    wrapper.className = "nameDay-wrapper";
    wrapper.style.fontSize = this.config.fontSize;

    if (!modes.includes(this.config.mode)) {
      wrapper.innerHTML = this.translate("SET_CORRECT_MODE") + this.name + ".";
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    if (!this.loaded) {
      wrapper.innerHTML = this.translate("LOADING");
      wrapper.className = "dimmed light small";
      return wrapper;
    }

    switch (this.config.mode) {
      case "today":
        message = this.translate("NAMEDAY_TODAY").replace("$NAME$", this.names);
        break;
      case "tomorrow":
        message = this.translate("NAMEDAY_TOMORROW").replace(
          "$NAME$",
          this.names
        );
        break;
      case "yesterday":
        message = this.translate("NAMEDAY_YESTERDAY").replace(
          "$NAME$",
          this.names
        );
        break;
      case "day":
        if (this.config.day !== "" && this.config.month !== "") {
          message = this.translate("NAMEDAY_NAMEDAYS")
            .replace("$DAY$", this.config.day)
            .replace("$MONTH$", this.config.month)
            .replace("$NAME$", this.names);
          break;
        } else {
          Log.error(self.name + ": Month or day not defined!");
          break;
        }
      case "name":
        if (this.config.name !== "") {
          message = this.translate("NAMEDAY_NAMEDAYS")
            .replace("$DAY$", this.date[1])
            .replace("$MONTH$", this.date[0])
            .replace("$NAME$", this.config.name);
          break;
        } else {
          Log.error(self.name + ": Name not defined!");
          break;
        }
      default:
        break;
    }

    wrapper.innerHTML = message;
    return wrapper;
  },

  scheduleUpdate: function (delay) {
    let nextLoad = this.config.updateInterval;
    if (typeof delay !== "undefined" && delay >= 0) {
      nextLoad = delay;
    }
    const self = this;
    clearTimeout(this.updateTimer);
    this.updateTimer = setTimeout(function () {
      self.getData();
    }, nextLoad);
  }
});
