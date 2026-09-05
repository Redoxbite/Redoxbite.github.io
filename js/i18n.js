(function () {
  const translations = {
    sk: {
      pageTitle: "Redox Bite | by ZEOZOE",
      metaDesc:
        "REDOX BITE by ZEOZOE — Funkčná redoxná tyčinka so záporným ORP pre prirodzenú bunkovú energiu a podporu trávenia. Berry Digest. Vyrobené na Slovensku.",
      navAbout: "O nás",
      navShop: "Obchod",
      navBenefits: "Benefity",
      navIngredients: "Zloženie",
      navContact: "Kontakt",
      navToggle: "Otvoriť menu",
      langAria: "Prepnúť do angličtiny",
      heroSub:
        'Úplne nový prístup k funkčným potravinám. Vďaka merateľnému zápornému oxidačno-redukčnému potenciálu <span class="orp-badge">[ORP -30mV]</span> podporuje prirodzenú energiu buniek a efektívne trávenie na hĺbkovej úrovni.',
      btnShop: "Nakupovať",
      btnZeozoeShop: "Obchod ZEOZOE",
      statOrp: "Záporné ORP",
      statSugar: "Pridaný cukor",
      statVegan: "Vegánske",
      gallerySingleAlt: "REDOX BITE Berry Digest — jedna tyčinka",
      galleryPackAlt: "REDOX BITE Berry Digest — výhodné balenie 30 tyčiniek",
      gallerySingleCap: "Berry Digest — 1 tyčinka (40 g)",
      galleryPackCap: "Výhodné balenie — 30 tyčiniek",
      aboutLabel: "O produkte",
      aboutTitle: 'Funkčná redoxná tyčinka pre <span class="highlight">reštart trávenia</span>',
      aboutP1:
        "REDOX BITE Berry Digest predstavuje úplne novú generáciu funkčných potravín. Spája záporný oxidačno-redukčný potenciál (–30 mV), silu polyfenolov a resveratrolu s múdrosťou Tradičnej čínskej medicíny (TČM) — a vytvára tak revolučný produkt.",
      aboutP2:
        "Nie je to len tyčinka. Je to kombinácia západnej biochémie a tisícročnej filozofie TČM, ktorá vníma trávenie ako stred tela a zdroj životnej energie Qi.",
      aboutP3:
        "Tento unikátny produkt spája silu polyfenolov, resveratrolu, prebiotickej vlákniny a kvalitného hrachového proteínu s múdrosťou TČM, čím pomáha vytvárať ideálne podmienky pre zdravšie, ľahšie a vitálnejšie trávenie.",
      aboutCardTitle: "Čo je Redox technológia?",
      aboutCardP1:
        "ORP (oxidačno-redukčný potenciál) vyjadruje schopnosť látky odovzdávať elektróny — teda energiu. Čím je hodnota nižšia (záporná), tým viac energie môže látka odovzdať.",
      aboutCardP2:
        "Vďaka špeciálnej fotónovej a frekvenčnej úprave majú zložky upravenú štruktúru, ktorú telo dokáže okamžite absorbovať a premeniť na čistú vitalitu a energiu.",
      aboutCredit: 'Registrovaná značka <strong>ZEOZOE®</strong> &middot; Vyrobené na Slovensku',
      productsLabel: "Produkty",
      productsTitle: 'Redox Bite by <span class="highlight">ZEOZOE</span>',
      productsIntro: "Berry Digest — funkčná tyčinka pre energiu a trávenie. YUMMI CACAO Pomaranč — kakao bez pridaného cukru.",
      badgeNew: "Novinka",
      productSingleDesc:
        "Funkčná redoxná tyčinka — 1 × 40 g. Podporuje bunkovú energiu a rovnováhu trávenia vďaka zápornému ORP –30 mV.",
      tagEnergy: "Energia",
      tagDigest: "Trávenie",
      tagNatural: "Prírodné",
      btnBuyZeozoe: "Kúpiť na ZEOZOE",
      productPackAlt: "REDOX BITE Berry Digest výhodné balenie 30 tyčiniek",
      productPackTitle: "REDOX BITE Berry Digest — výhodné balenie",
      productPackDesc:
        "30 funkčných tyčiniek (30 × 40 g) so záporným ORP –30 mV. Ideálne na kompletnú 14-dňovú kúru reštartu trávenia.",
      tagBars: "30 tyčiniek",
      tagPack: "Výhodné balenie",
      tagCure: "14-dňová kúra",
      benefitsLabel: "Benefity",
      benefitsTitle: 'Prečo REDOX BITE <span class="highlight">Berry Digest</span>?',
      feat1Title: "Záporné ORP",
      feat1Text: "–30 mV pôsobí ako aktívny bunkový dobíjač a znižuje oxidačný stres v tráviacom trakte.",
      feat2Title: "Polyfenoly a resveratrol",
      feat2Text: "Chránia mikroflóru a podporujú zdravie črevnej sliznice.",
      feat3Title: "Prebiotická vláknina",
      feat3Text: "Oligofruktóza a prírodná vláknina vyživujú priaznivé črevné baktérie.",
      feat4Title: "17 % hrachového proteínu",
      feat4Text: "Kvalitné rastlinné stavebné kamene bez zaťaženia žalúdka.",
      feat5Title: "Bez pridaného cukru",
      feat5Text:
        "Prirodzenú sladkosť tvorí datľová pasta a lyofilizované maliny. Bez umelých farbív a syntetických aróm.",
      feat6Title: "Vegánske zloženie",
      feat6Text: "Vhodné pre rastlinný životný štýl. Vyrobené na Slovensku s inovatívnou redox technológiou.",
      benefitsMainTitle: "Hlavné benefity",
      ben1: "Podporuje efektívne trávenie a vstrebávanie živín",
      ben2: "Zmierňuje pocit nafukovania a ťažoby",
      ben3: "Prebúdza metabolizmus a vnútornú vitalitu",
      ben4: "Chráni črevnú mikroflóru vďaka polyfenolovému štítu",
      ben5: "Dodáva stabilnú energiu bez výkyvov hladiny cukru",
      ben6: "Svieža chuť malín — zdravé potešenie bez výčitiek",
      ben7: "Pomáha obnoviť rovnováhu trávenia a premeniť jedlo na energiu Qi, nie na únavu",
      ingLabel: "Zloženie a použitie",
      ingTitle: 'Čo je vo vnútri a <span class="highlight">ako používať</span>',
      ingHeading: "Zloženie",
      ingText:
        "Datľová pasta 30 %, oligofruktóza (vláknina), hrachový proteín 17 %, pražená kešu pasta 13 %, kúsky kešu 5,5 %, polyfenolový extrakt, resveratrol, kúsky lyofilizovaných malín 3,3 %, slnečnicové semienka, tekvicové semienka, kakaové maslo, prírodná malinová aróma, antioxidant: extrakt bohatý na tokoferoly.",
      ingAllergens:
        "<strong>Alergény:</strong> Môže obsahovať mlieko, sóju, arašidy a iné orechy. Môže obsahovať malé kúsky kôstok a škrupín.",
      ingDisclaimer:
        "Doplnok stravy nie je náhradou vyváženej a pestrej stravy ani zdravého životného štýlu. Neprekračujte odporúčanú dennú dávku. Uchovávajte mimo dosahu detí. Ak užívate lieky alebo trpíte zdravotnými ťažkosťami, pred použitím sa poraďte s lekárom. Informácie vychádzajú z tradičného používania prírodných zložiek a zásad TČM — nejde o lekárske tvrdenia.",
      usageTitle: "14-dňová kúra reštartu trávenia",
      usage1: "<strong>Dávka:</strong> 1 až 2 tyčinky denne",
      usage2: "<strong>Kedy:</strong> Ideálne ako dopoludňajšia desiata alebo olovrant medzi jedlami",
      usage3:
        "<strong>Tip:</strong> Tyčinku zapíjajte vlažnou vodou alebo teplým čajom — podporíte oheň trávenia podľa zásad TČM",
      usage4: "<strong>Prvých 14 dní:</strong> Obmedzte studené a surové nápoje pre maximálnu podporu trávenia",
      usageFooter: "Odovzdávanie elektrónov. Prirodzená vitalita.",
      trustTitle: 'Značka, ktorej môžete <span class="highlight">dôverovať</span>',
      prom1: "Certifikovaný výrobca",
      prom2: "Vyrobené na Slovensku",
      prom3: "Doprava zadarmo od 80 €",
      prom4: "Prírodné zloženie",
      prom5: "Nový pocit",
      prom6: "Netestované na zvieratách",
      ctaTitle: 'Pripravení na <span class="highlight">reštart trávenia</span>?',
      ctaText: "Objednajte si REDOX BITE Berry Digest výhradne v oficiálnom obchode ZEOZOE.",
      ctaBtn: "Nakupovať Redox Bite",
      contactLabel: "Kontakt",
      contactTitle: 'Kontaktujte <span class="highlight">ZEOZOE</span>',
      phName: "Vaše meno",
      phEmail: "E-mailová adresa",
      phMessage: "Vaša správa...",
      btnSend: "Odoslať správu",
      formNote: "Ďakujeme! Váš e-mailový klient by sa mal otvoriť so správou.",
      phoneLabel: "Telefón",
      phoneHours: "Pracovné dni 09:00–16:00",
      emailLabel: "E-mail",
      shopLabel: "Obchod",
      footerCredit: "by ZEOZOE® &middot; Vyrobené na Slovensku &middot; &copy; 2026",
      mailSubjectPrefix: "Redox Bite — Správa od ",
      cacaoPageTitle: "YUMMI CACAO Pomaranč | Bez pridaného cukru",
      cacaoMetaDesc:
        "Prémiová kakaová zmes s pomarančom, pravou vanilkou a bez pridaného cukru. Na horúce kakao, smoothie, jogurt, tvaroh aj pečenie. 100 g.",
      cacaoHome: "Domov",
      cacaoBreadcrumb: "YUMMI CACAO Pomaranč",
      cacaoH1: 'YUMMI CACAO <span class="highlight">Pomaranč</span>',
      cacaoSeoName: "REDOX BITE YUMMI CACAO Pomaranč – kakao bez pridaného cukru, 100 g",
      cacaoShort:
        "REDOX BITE YUMMI CACAO Pomaranč je prémiová kakaová zmes s vysokým obsahom kakaa, sviežou pomarančovou príchuťou a pravou vanilkou. Neobsahuje pridaný cukor a môžete ju použiť na prípravu horúceho kakaa, do smoothie, jogurtu, tvarohu aj pri pečení. Receptúra je navrhnutá na dosiahnutie stabilného záporného ORP po príprave.",
      cacaoTagSugar: "Bez pridaného cukru",
      cacaoTagVegan: "Vegan",
      cacaoTagOrp: "Záporné ORP",
      cacaoTagOrange: "Pomaranč",
      cacaoUseBtn: "Ako používať",
      cacaoCardTitle: "REDOX BITE YUMMI CACAO Pomaranč",
      cacaoCardDesc:
        "Prémiová kakaová zmes s pomarančom, pravou vanilkou a bez pridaného cukru. Na horúce kakao, smoothie, jogurt, tvaroh aj pečenie. 100 g.",
      cacaoCardBtn: "Zistiť viac",
      cacaoFrontAlt: "REDOX BITE YUMMI CACAO s pomarančom v čiernom doypack balení 100 g",
      cacaoBackAlt: "Zadná strana balenia YUMMI CACAO Pomaranč so zložením, použitím a výživovými údajmi",
      cacaoAboutLabel: "O produkte",
      cacaoAboutTitle: 'Kakao novej generácie s <span class="highlight">pomarančom</span>',
      cacaoLong1:
        "Objavte spojenie intenzívnej kakaovej chuti, voňavej vanilky a sviežeho pomaranča. REDOX BITE YUMMI CACAO Pomaranč obsahuje kombináciu alkalizovaného a prírodného kakaového prášku, ktoré spolu tvoria 96 % receptúry.",
      cacaoLong2:
        "Kakaovú chuť dopĺňa pomarančový prášok, prírodná pomarančová aróma, pravá vanilka, kurkuma, kardamóm a jemná štipka soli. Výsledkom je aromatická kakaová zmes vhodná na každodennú prípravu teplých aj studených jedál a nápojov.",
      cacaoLong3:
        "YUMMI CACAO neobsahuje pridaný cukor. Sladkosť si preto môžete prispôsobiť podľa vlastnej chuti – medom, čakankovým sirupom, cukrom alebo obľúbeným sladidlom.",
      cacaoLong4:
        "Receptúra bola vyvinutá s cieľom dosiahnuť stabilné záporné ORP. Tento údaj opisuje fyzikálno-chemickú vlastnosť produktu po príprave a nemení jeho univerzálne využitie v kuchyni.",
      cacaoFeatLabel: "Hlavné vlastnosti",
      cacaoFeatTitle: 'Prečo YUMMI CACAO <span class="highlight">Pomaranč</span>',
      cacaoFeat1: "96 % alkalizovaného a prírodného kakaa",
      cacaoFeat2: "bez pridaného cukru",
      cacaoFeat3: "s pomarančovým práškom a pomarančovou arómou",
      cacaoFeat4: "s pravou vanilkou, kurkumou a kardamómom",
      cacaoFeat5: "vhodné pre vegánov",
      cacaoFeat6: "stabilné záporné ORP po príprave",
      cacaoFeat7: "na teplé kakao, smoothie, jogurt, tvaroh a pečenie",
      cacaoFeat8: "praktické balenie 100 g",
      cacaoUseLabel: "Použitie",
      cacaoUseTitle: 'Ako používať <span class="highlight">YUMMI CACAO</span>',
      cacaoUse1Title: "Horúce kakao",
      cacaoUse1Text: "Zmiešajte 1–2 čajové lyžičky s teplým mliekom alebo rastlinným nápojom. Oslaďte podľa vlastnej chuti.",
      cacaoUse2Title: "Jogurt alebo tvaroh",
      cacaoUse2Text: "Primiešajte požadované množstvo do jogurtu alebo tvarohu a podľa chuti pridajte ovocie alebo sladidlo.",
      cacaoUse3Title: "Smoothie",
      cacaoUse3Text: "Pridajte do ovocného, proteínového alebo raňajkového smoothie pre výraznejšiu kakaovo-pomarančovú chuť.",
      cacaoUse4Title: "Pečenie",
      cacaoUse4Text: "Použite do koláčov, muffinov, dezertov, kaší alebo domáceho pečiva.",
      cacaoIngTitle: 'Čo je vo <span class="highlight">vrecku</span>',
      cacaoIngText:
        "Alkalizovaný kakaový prášok 59,7 %, prírodný kakaový prášok 36,3 %, pomarančová aróma (dextróza, prírodná pomarančová aróma), pomarančový prášok (pomarančová šťava, maltodextrín), kurkuma, kardamóm, prírodná škoricová aróma, mletá vanilka, soľ, stabilizátory: chlorid vápenatý (E509), chlorid horečnatý (E511).",
      cacaoAllergens: "Môže obsahovať stopy orechov.",
      cacaoStorage: "Skladujte v suchu pri teplote do 25 °C, chráňte pred vlhkosťou a slnečným žiarením.",
      cacaoNutriTitle: "Nutričné hodnoty na 100 g",
      cacaoNutriEnergy: "Energetická hodnota",
      cacaoNutriFat: "Tuky",
      cacaoNutriSat: "z toho nasýtené mastné kyseliny",
      cacaoNutriCarb: "Sacharidy",
      cacaoNutriSugar: "z toho cukry",
      cacaoNutriFiber: "Vláknina",
      cacaoNutriProtein: "Bielkoviny",
      cacaoNutriSalt: "Soľ",
      cacaoFaqLabel: "Časté otázky",
      cacaoFaqTitle: 'Odpovede na <span class="highlight">najčastejšie otázky</span>',
      cacaoFaq1Q: "Obsahuje YUMMI CACAO cukor?",
      cacaoFaq1A: "Produkt neobsahuje pridaný cukor. Prirodzene sa v ňom však nachádza malé množstvo cukrov pochádzajúcich zo surovín.",
      cacaoFaq2Q: "Je YUMMI CACAO vhodné pre vegánov?",
      cacaoFaq2A: "Áno, samotná kakaová zmes neobsahuje zložky živočíšneho pôvodu. Môžete ju pripraviť s rastlinným nápojom alebo pridať do rastlinného jogurtu.",
      cacaoFaq3Q: "Ako sa pomarančové kakao pripravuje?",
      cacaoFaq3A: "Jednu až dve čajové lyžičky rozmiešajte v teplom mlieku alebo rastlinnom nápoji. Podľa chuti oslaďte.",
      cacaoFaq4Q: "Dá sa použiť aj pri pečení?",
      cacaoFaq4A: "Áno. Hodí sa do koláčov, muffinov, dezertov, raňajkových kaší, smoothie aj domáceho pečiva.",
      cacaoCtaTitle: 'Chcete YUMMI CACAO <span class="highlight">Pomaranč</span>?',
      cacaoCtaText: "Napíšte nám alebo navštívte oficiálny obchod ZEOZOE. Radi vám poradíme s objednávkou."
    },
    en: {
      pageTitle: "Redox Bite | by ZEOZOE",
      metaDesc:
        "REDOX BITE by ZEOZOE — Functional redox bar with negative ORP for natural cellular energy and digestion support. Berry Digest. Made in Slovakia.",
      navAbout: "About",
      navShop: "Shop",
      navBenefits: "Benefits",
      navIngredients: "Ingredients",
      navContact: "Contact",
      navToggle: "Open menu",
      langAria: "Switch to Slovak",
      heroSub:
        'A completely new approach to functional foods. Thanks to a measurable negative oxidation-reduction potential <span class="orp-badge">[ORP -30mV]</span>, it supports natural cellular energy and effective digestion at a deeper level.',
      btnShop: "Shop now",
      btnZeozoeShop: "ZEOZOE store",
      statOrp: "Negative ORP",
      statSugar: "Added sugar",
      statVegan: "Vegan",
      gallerySingleAlt: "REDOX BITE Berry Digest — single bar",
      galleryPackAlt: "REDOX BITE Berry Digest — value pack of 30 bars",
      gallerySingleCap: "Berry Digest — 1 bar (40 g)",
      galleryPackCap: "Value pack — 30 bars",
      aboutLabel: "About the product",
      aboutTitle: 'A functional redox bar for a <span class="highlight">digestion reset</span>',
      aboutP1:
        "REDOX BITE Berry Digest represents a completely new generation of functional foods. It combines negative oxidation-reduction potential (–30 mV), the power of polyphenols and resveratrol with the wisdom of Traditional Chinese Medicine (TCM) — creating a revolutionary product.",
      aboutP2:
        "It is not just a bar. It is a combination of Western biochemistry and the thousand-year philosophy of TCM, which sees digestion as the center of the body and the source of vital Qi energy.",
      aboutP3:
        "This unique product combines the power of polyphenols, resveratrol, prebiotic fiber and high-quality pea protein with TCM wisdom, helping create ideal conditions for healthier, lighter and more vital digestion.",
      aboutCardTitle: "What is Redox technology?",
      aboutCardP1:
        "ORP (oxidation-reduction potential) expresses a substance’s ability to donate electrons — that is, energy. The lower (more negative) the value, the more energy the substance can give.",
      aboutCardP2:
        "Thanks to special photonic and frequency processing, the ingredients have a refined structure that the body can absorb immediately and convert into pure vitality and energy.",
      aboutCredit: 'Registered brand <strong>ZEOZOE®</strong> &middot; Made in Slovakia',
      productsLabel: "Products",
      productsTitle: 'Redox Bite by <span class="highlight">ZEOZOE</span>',
      productsIntro: "Berry Digest — a functional bar for energy and digestion. YUMMI CACAO Orange — cocoa with no added sugar.",
      badgeNew: "New",
      productSingleDesc:
        "Functional redox bar — 1 × 40 g. Supports cellular energy and digestive balance thanks to negative ORP –30 mV.",
      tagEnergy: "Energy",
      tagDigest: "Digestion",
      tagNatural: "Natural",
      btnBuyZeozoe: "Buy on ZEOZOE",
      productPackAlt: "REDOX BITE Berry Digest value pack of 30 bars",
      productPackTitle: "REDOX BITE Berry Digest — value pack",
      productPackDesc:
        "30 functional bars (30 × 40 g) with negative ORP –30 mV. Ideal for a complete 14-day digestion reset.",
      tagBars: "30 bars",
      tagPack: "Value pack",
      tagCure: "14-day reset",
      benefitsLabel: "Benefits",
      benefitsTitle: 'Why REDOX BITE <span class="highlight">Berry Digest</span>?',
      feat1Title: "Negative ORP",
      feat1Text: "–30 mV acts as an active cellular charger and reduces oxidative stress in the digestive tract.",
      feat2Title: "Polyphenols and resveratrol",
      feat2Text: "They protect the microbiota and support intestinal mucosal health.",
      feat3Title: "Prebiotic fiber",
      feat3Text: "Oligofructose and natural fiber nourish beneficial gut bacteria.",
      feat4Title: "17% pea protein",
      feat4Text: "High-quality plant building blocks without burdening the stomach.",
      feat5Title: "No added sugar",
      feat5Text:
        "Natural sweetness comes from date paste and freeze-dried raspberries. No artificial colors or synthetic flavors.",
      feat6Title: "Vegan formula",
      feat6Text: "Suitable for a plant-based lifestyle. Made in Slovakia with innovative redox technology.",
      benefitsMainTitle: "Key benefits",
      ben1: "Supports effective digestion and nutrient absorption",
      ben2: "Helps ease bloating and heaviness",
      ben3: "Awakens metabolism and inner vitality",
      ben4: "Protects gut microbiota with a polyphenol shield",
      ben5: "Provides stable energy without blood sugar spikes",
      ben6: "Fresh raspberry taste — healthy pleasure without guilt",
      ben7: "Helps restore digestive balance and turn food into Qi energy, not fatigue",
      ingLabel: "Ingredients & use",
      ingTitle: 'What’s inside and <span class="highlight">how to use it</span>',
      ingHeading: "Ingredients",
      ingText:
        "Date paste 30%, oligofructose (fiber), pea protein 17%, roasted cashew paste 13%, cashew pieces 5.5%, polyphenol extract, resveratrol, freeze-dried raspberry pieces 3.3%, sunflower seeds, pumpkin seeds, cocoa butter, natural raspberry flavor, antioxidant: tocopherol-rich extract.",
      ingAllergens:
        "<strong>Allergens:</strong> May contain milk, soy, peanuts and other nuts. May contain small pieces of pits and shells.",
      ingDisclaimer:
        "A dietary supplement is not a substitute for a balanced and varied diet or a healthy lifestyle. Do not exceed the recommended daily dose. Keep out of reach of children. If you take medication or have health concerns, consult a doctor before use. Information is based on traditional use of natural ingredients and TCM principles — these are not medical claims.",
      usageTitle: "14-day digestion reset",
      usage1: "<strong>Dose:</strong> 1 to 2 bars per day",
      usage2: "<strong>When:</strong> Ideally as a mid-morning snack or afternoon bite between meals",
      usage3:
        "<strong>Tip:</strong> Enjoy the bar with lukewarm water or warm tea — this supports digestive fire according to TCM principles",
      usage4: "<strong>First 14 days:</strong> Limit cold and raw drinks for maximum digestive support",
      usageFooter: "Electron donation. Natural vitality.",
      trustTitle: 'A brand you can <span class="highlight">trust</span>',
      prom1: "Certified manufacturer",
      prom2: "Made in Slovakia",
      prom3: "Free shipping from €80",
      prom4: "Natural formula",
      prom5: "A new feeling",
      prom6: "Not tested on animals",
      ctaTitle: 'Ready for a <span class="highlight">digestion reset</span>?',
      ctaText: "Order REDOX BITE Berry Digest exclusively in the official ZEOZOE store.",
      ctaBtn: "Shop Redox Bite",
      contactLabel: "Contact",
      contactTitle: 'Contact <span class="highlight">ZEOZOE</span>',
      phName: "Your name",
      phEmail: "Email address",
      phMessage: "Your message...",
      btnSend: "Send message",
      formNote: "Thank you! Your email client should open with the message.",
      phoneLabel: "Phone",
      phoneHours: "Weekdays 09:00–16:00",
      emailLabel: "Email",
      shopLabel: "Store",
      footerCredit: "by ZEOZOE® &middot; Made in Slovakia &middot; &copy; 2026",
      mailSubjectPrefix: "Redox Bite — Message from ",
      cacaoPageTitle: "YUMMI CACAO Orange | No added sugar",
      cacaoMetaDesc:
        "Premium cocoa blend with orange, real vanilla and no added sugar. For hot cocoa, smoothies, yogurt, quark and baking. 100 g.",
      cacaoHome: "Home",
      cacaoBreadcrumb: "YUMMI CACAO Orange",
      cacaoH1: 'YUMMI CACAO <span class="highlight">Orange</span>',
      cacaoSeoName: "REDOX BITE YUMMI CACAO Orange – cocoa with no added sugar, 100 g",
      cacaoShort:
        "REDOX BITE YUMMI CACAO Orange is a premium cocoa blend with a high cocoa content, fresh orange flavour and real vanilla. It contains no added sugar and can be used for hot cocoa, smoothies, yogurt, quark and baking. The recipe is designed to achieve a stable negative ORP after preparation.",
      cacaoTagSugar: "No added sugar",
      cacaoTagVegan: "Vegan",
      cacaoTagOrp: "Negative ORP",
      cacaoTagOrange: "Orange",
      cacaoUseBtn: "How to use",
      cacaoCardTitle: "REDOX BITE YUMMI CACAO Orange",
      cacaoCardDesc:
        "Premium cocoa blend with orange, real vanilla and no added sugar. For hot cocoa, smoothies, yogurt, quark and baking. 100 g.",
      cacaoCardBtn: "Learn more",
      cacaoFrontAlt: "REDOX BITE YUMMI CACAO with orange in a black 100 g doypack",
      cacaoBackAlt: "Back of YUMMI CACAO Orange pack with ingredients, use and nutrition facts",
      cacaoAboutLabel: "About the product",
      cacaoAboutTitle: 'A new generation of cocoa with <span class="highlight">orange</span>',
      cacaoLong1:
        "Discover the combination of intense cocoa flavour, fragrant vanilla and fresh orange. REDOX BITE YUMMI CACAO Orange contains alkalized and natural cocoa powder, which together make up 96% of the recipe.",
      cacaoLong2:
        "The cocoa taste is rounded out with orange powder, natural orange flavour, real vanilla, turmeric, cardamom and a pinch of salt. The result is an aromatic cocoa blend for everyday hot and cold drinks and meals.",
      cacaoLong3:
        "YUMMI CACAO contains no added sugar. You can sweeten it to taste with honey, chicory syrup, sugar or your preferred sweetener.",
      cacaoLong4:
        "The recipe was developed to achieve a stable negative ORP. This describes a physico-chemical property of the product after preparation and does not change its everyday kitchen use.",
      cacaoFeatLabel: "Key features",
      cacaoFeatTitle: 'Why YUMMI CACAO <span class="highlight">Orange</span>',
      cacaoFeat1: "96% alkalized and natural cocoa",
      cacaoFeat2: "no added sugar",
      cacaoFeat3: "with orange powder and orange flavour",
      cacaoFeat4: "with real vanilla, turmeric and cardamom",
      cacaoFeat5: "suitable for vegans",
      cacaoFeat6: "stable negative ORP after preparation",
      cacaoFeat7: "for hot cocoa, smoothies, yogurt, quark and baking",
      cacaoFeat8: "practical 100 g pack",
      cacaoUseLabel: "How to use",
      cacaoUseTitle: 'How to use <span class="highlight">YUMMI CACAO</span>',
      cacaoUse1Title: "Hot cocoa",
      cacaoUse1Text: "Mix 1–2 teaspoons with warm milk or a plant-based drink. Sweeten to taste.",
      cacaoUse2Title: "Yogurt or quark",
      cacaoUse2Text: "Stir the desired amount into yogurt or quark and add fruit or sweetener to taste.",
      cacaoUse3Title: "Smoothie",
      cacaoUse3Text: "Add to a fruit, protein or breakfast smoothie for a richer cocoa-orange flavour.",
      cacaoUse4Title: "Baking",
      cacaoUse4Text: "Use in cakes, muffins, desserts, porridges or homemade baked goods.",
      cacaoIngTitle: 'What’s in the <span class="highlight">pouch</span>',
      cacaoIngText:
        "Alkalized cocoa powder 59.7%, natural cocoa powder 36.3%, orange flavour (dextrose, natural orange flavour), orange powder (orange juice, maltodextrin), turmeric, cardamom, natural cinnamon flavour, ground vanilla, salt, stabilizers: calcium chloride (E509), magnesium chloride (E511).",
      cacaoAllergens: "May contain traces of nuts.",
      cacaoStorage: "Store in a dry place at up to 25 °C, protected from moisture and sunlight.",
      cacaoNutriTitle: "Nutrition facts per 100 g",
      cacaoNutriEnergy: "Energy",
      cacaoNutriFat: "Fat",
      cacaoNutriSat: "of which saturates",
      cacaoNutriCarb: "Carbohydrates",
      cacaoNutriSugar: "of which sugars",
      cacaoNutriFiber: "Fibre",
      cacaoNutriProtein: "Protein",
      cacaoNutriSalt: "Salt",
      cacaoFaqLabel: "FAQ",
      cacaoFaqTitle: 'Answers to the <span class="highlight">most common questions</span>',
      cacaoFaq1Q: "Does YUMMI CACAO contain sugar?",
      cacaoFaq1A: "The product contains no added sugar. It does naturally contain a small amount of sugars from the ingredients.",
      cacaoFaq2Q: "Is YUMMI CACAO suitable for vegans?",
      cacaoFaq2A: "Yes. The cocoa blend itself contains no ingredients of animal origin. Prepare it with a plant-based drink or add it to plant-based yogurt.",
      cacaoFaq3Q: "How is the orange cocoa prepared?",
      cacaoFaq3A: "Stir one to two teaspoons into warm milk or a plant-based drink. Sweeten to taste.",
      cacaoFaq4Q: "Can it be used for baking?",
      cacaoFaq4A: "Yes. It works in cakes, muffins, desserts, breakfast porridges, smoothies and homemade baked goods.",
      cacaoCtaTitle: 'Want YUMMI CACAO <span class="highlight">Orange</span>?',
      cacaoCtaText: "Write to us or visit the official ZEOZOE store. We’ll be happy to help with your order."
    }
  };

  const STORAGE_KEY = "redoxbite-lang";
  let currentLang = localStorage.getItem(STORAGE_KEY) || "sk";

  function getDict(lang) {
    return translations[lang] || translations.sk;
  }

  function applyLanguage(lang) {
    currentLang = lang === "en" ? "en" : "sk";
    localStorage.setItem(STORAGE_KEY, currentLang);
    document.documentElement.lang = currentLang;

    const dict = getDict(currentLang);
    const nextLabel = currentLang === "sk" ? "EN" : "SK";

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });

    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });

    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-aria");
      if (dict[key] != null) el.setAttribute("aria-label", dict[key]);
    });

    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] != null) el.setAttribute("alt", dict[key]);
    });

    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      const key = el.getAttribute("data-i18n-content");
      if (dict[key] != null) el.setAttribute("content", dict[key]);
    });

    const titleEl = document.querySelector("title[data-i18n]");
    if (titleEl) {
      const titleKey = titleEl.getAttribute("data-i18n");
      if (titleKey && dict[titleKey] != null) titleEl.textContent = dict[titleKey];
    }

    const codeEl = document.getElementById("langCode");
    const toggleEl = document.getElementById("langToggle");
    if (codeEl) codeEl.textContent = nextLabel;
    if (toggleEl) toggleEl.setAttribute("aria-label", dict.langAria);
  }

  function toggleLanguage() {
    applyLanguage(currentLang === "sk" ? "en" : "sk");
  }

  window.RedoxI18n = {
    applyLanguage: applyLanguage,
    toggleLanguage: toggleLanguage,
    getLang: function () {
      return currentLang;
    },
    t: function (key) {
      return getDict(currentLang)[key] || key;
    }
  };

  document.addEventListener("DOMContentLoaded", function () {
    applyLanguage(currentLang);
    const toggle = document.getElementById("langToggle");
    if (toggle) toggle.addEventListener("click", toggleLanguage);
  });
})();
