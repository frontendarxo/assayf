import type { Locale } from "./locale"

interface MessageTree {
    [key: string]: string | MessageTree
}

const en: MessageTree = {
    nav: {
        home: "Home",
        about: "About",
        activities: "Activities",
        reviews: "Reviews",
        contact: "Contact",
    },
    navAria: {
        openMenu: "Open menu",
        closeMenu: "Close menu",
    },
    hero: {
        title:
            "International holding in trade, logistics, and financial solutions",
    },
    header: {
        chooseDirection: "Choose a direction",
        contactUs: "Contact us",
    },
    about: {
        sectionTitle: "About the company",
        lead: "ASSAYF COMPANY is an international holding uniting directions in trade, logistics, and financial operations.",
        moreBody:
            "We build direct relationships with manufacturers, organize goods supply, and provide financial support for transactions worldwide.\n\nWe work without intermediaries, controlling every stage — from negotiations to delivery and settlements.\n\nThe company's geography covers Russia, Turkey, China, CIS countries, the Middle East, and Southeast Asia.",
        readMore: "Read more",
        readLess: "Show less",
        imageAlt: "Assayf company founder — Ibrahim",
        imageCaption: "Founder — Ibragimov Ibragim",
        imageHoverHint: "Click for details",
        statsTitle: "By the numbers",
        stat1: "Completed projects to date",
        stat2: "Satisfied clients",
        stat3: "Team members",
        stat4: "Years of experience in the industry",
        founderInfoOpen: "About the founder — details",
        founderInfoClose: "Close",
        founderInfoTitle: "About the founder",
        founderInfoBody:
            "An entrepreneur developing international trade and logistics directions.\n\nExperience working in different countries and direct interaction with manufacturers enable effective business processes and optimal solutions for clients.\n\nGeography of operations — more than 18 countries, continuous development of new directions and markets.",
        founderInfoContactHeading: "Contact:",
        founderInfoWhatsAppLink: "Message on WhatsApp",
    },
    advantages: {
        sectionTitle: "Why choose ASSAYF",
        items: {
            "1": "No intermediaries",
            "2": "Direct ties with suppliers and factories",
            "3": "Control at every stage",
            "4": "Confidentiality of operations",
            "5": "International geography",
            "6": "Individual approach to each project",
        },
    },
    spheres: {
        sectionTitle: "Our projects",
        imageAltSuffix: "image",
        servicesTitle: "Services",
        advantagesTitle: "Advantages",
        forWhomTitle: "Who it is for",
        geographyTitle: "Coverage",
        categoriesTitle: "Categories",
        currentProductTitle: "Current product",
        plansTitle: "Plans",
        casesTitle: "Case studies",
    },
    sphere: {
        cargo: {
            subtitle: "International logistics and freight",
            lead: "We organize shipments from Turkey to Russia, Kazakhstan, and CIS countries — with full support and control at every step.",
            description:
                "ASSAYF Cargo is the company’s logistics arm focused on international freight.\n\nWe handle shipments of any scale — from groupage to full truckloads.\n\nWe work with both cargo and formal shipments, giving clients a transparent, controlled logistics process.",
            services: `• International freight (road / air)
• Courier delivery from Istanbul to Moscow and Grozny — regular runs twice a week, 1–2 days transit
• Delivery from Turkey to Russia, Kazakhstan, and the CIS
• Cargo consolidation
• Warehousing
• Purchase support and goods escort
• Delivery tracking at every stage
• Last-mile delivery to the client`,
            advantages: `• Direct routes without unnecessary intermediaries
• Control at every stage of transport
• Fast client communication 24/7
• Reliability and on-time delivery
• Confidentiality`,
            forWhom: "",
            geography: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cases: {
                "1": {
                    title: "Goods supply from Turkey to Russia",
                    detail: "Mode: full truckload\nLead time: 3–4 weeks\nOutcome: stable, on-time delivery",
                },
                "2": {
                    title: "Regular groupage shipments",
                    detail: "Route: Turkey → Russia\nMode: consolidation\nOutcome: lower costs for the client",
                },
                "3": {
                    title: "High-volume shipments",
                    detail: "Mode: full trucks\nOutcome: a systematic logistics setup for the client",
                },
            },
            cta: "Contact the logistics team",
        },
        china: {
            subtitle: "Turnkey supplies from China",
            lead: "Sourcing, purchasing, and delivery from China — from idea to finished product.",
            description:
                "ASSAYF China covers the full cycle of working with China.\n\nWe find suppliers, negotiate with factories, inspect production, and organize delivery worldwide.\n\nWe support both entrepreneurs and companies that are launching brands and scaling operations.",
            services: `• Product and supplier search
• Factory negotiations
• Manufacturer verification
• Goods purchasing
• Quality control
• Delivery organization
• Own brand launch (OEM / Private Label)`,
            forWhom: `• Marketplace sellers
• Wholesale businesses
• Entrepreneurs
• Brands
• Startups`,
            advantages: `• Direct supplier relationships
• No unnecessary intermediaries
• Broad product categories
• End-to-end deal support
• Optimized purchase costs`,
            geography: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote:
                "We work across a wide range of product categories depending on your goals.",
            cta: "Start working with China",
        },
        valut: {
            subtitle: "International finance and currency exchange",
            lead: "Fast, secure settlements worldwide — for businesses and private clients.",
            description:
                "VALUT ASSAYF focuses on currency exchange and international transfers.\n\nWe enable cross-border payments, supplier payments, transfers, and USDT operations.\n\nWe serve both travelers and entrepreneurs with flexible, reliable options.",
            services: `• Currency exchange
• International transfers
• Goods payments
• Supplier payments
• USDT operations
• Transaction support`,
            geography: "Russia, Turkey, UAE, Kazakhstan, Saudi Arabia, Tajikistan, and other countries",
            advantages: `• Fast execution
• Confidentiality
• Security
• Competitive terms
• Deal support`,
            forWhom: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cta: "Contact us about finance",
        },
        product: {
            subtitle: "Developing and launching own products",
            lead: "",
            description:
                "ASSAYF Product builds and grows proprietary brands.\n\nThe team develops products, brings them to market, and sets up distribution.\n\nFocus: quality, positioning, and scale.",
            services: "",
            advantages: "",
            forWhom: "",
            geography: "",
            categories: "",
            currentProduct: "ASSAYF MASS — a natural blend for mass gain and energy",
            plans: `• New product launches
• Line extensions
• Entering international markets
• Distribution across the CIS and beyond`,
            closingNote: "",
            cta: "Learn more about the products",
        },
        export: {
            subtitle: "Export and distribution",
            lead: "",
            description:
                "ASSAYF Export supplies goods from multiple countries and works with manufacturers.\n\nWe organize exports, build distribution, and close wholesale contracts.",
            services: `• Export from Turkey
• Import into Russia and the CIS
• Manufacturer partnerships
• Product distribution
• Wholesale supply`,
            advantages: "",
            forWhom: "",
            geography: "",
            categories:
                "Food, beverages, confectionery, household chemicals, dietary supplements, perfumery, and other groups",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cta: "Discuss supplies",
        },
    },
    shpera: {
        readMore: "Read more",
        collapse: "Collapse",
    },
    reviews: {
        sectionTitle: "Reviews",
        subtitle:
            "Assayf’s main goal is to give clients maximum convenience and service quality. We are proud that clients trust us with their projects and tasks, and we strive to leave a lasting impression.",
        carouselLabel: "Client reviews",
        items: {
            "1": "I recommend Assayf for logistics and freight tasks.",
            "2": "Great rates and fast on-site support.",
            "3": "Great service, quick responses, always reachable, always helpful.",
            "4": "I tried the Assayf product and got a very good result.",
        },
    },
    contact: {
        sectionTitle: "Contact us",
        channels: {
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "Email",
        },
        formLegend: "What contact are you leaving",
        fieldContact: "Your contact",
        placeholders: {
            whatsapp: "e.g. +7 900 000-00-00",
            telegram: "e.g. @username",
            email: "e.g. name@mail.ru",
        },
        addMessage: "Add a message (optional)",
        messageLabel: "Message",
        messagePlaceholder: "Your message",
        removeMessage: "Remove message",
        submit: "Send",
        feedbackHeader: "Website contact",
        feedbackHowContact: "How to reach you",
        feedbackMessage: "Message",
        spherePrompt: "Request topic",
        mainContactTitle: "Main contact",
        sphereLegend: "Topic",
        spheres: {
            china: "Supplies from China",
            logistics: "Logistics",
            assayf_product: "Assayf products",
            export_import: "Export & import",
            valut: "Currency services",
        },
    },
    footer: {
        tagline:
            "International business platform: we connect, manage, and deliver results.",
        logoAria: "Assayf — back to top",
        copyright: "Assayf Company",
    },
}

const ru: MessageTree = {
    nav: {
        home: "Главная",
        about: "О компании",
        activities: "Деятельности",
        reviews: "Отзывы",
        contact: "Обратная связь",
    },
    navAria: {
        openMenu: "Открыть меню",
        closeMenu: "Закрыть меню",
    },
    hero: {
        title:
            "Международный холдинг в сфере торговли, логистики и финансовых решений",
    },
    header: {
        chooseDirection: "Выбрать направление",
        contactUs: "Связаться с нами",
    },
    about: {
        sectionTitle: "О компании",
        lead: "ASSAYF COMPANY Международный холдинг, объединяющий направления в сфере торговли, логистики и финансовых операций.",
        moreBody:
            "Мы выстраиваем прямые связи с производителями, организуем поставки товаров и обеспечиваем финансовое сопровождение сделок по всему миру.\n\nРаботаем без посредников, контролируя каждый этап — от переговоров до доставки и расчётов.\n\nГеография компании охватывает Россию, Турцию, Китай, страны СНГ, Ближний Восток и Юго-Восточную Азию.",
        readMore: "Читать далее",
        readLess: "Свернуть",
        imageAlt: "Основатель компании Assayf — Ибрагим",
        imageCaption: "Основатель — Ибрагимов Ибрагим",
        imageHoverHint: "Нажмите для подробностей",
        statsTitle: "Мы в цифрах",
        stat1: "Выполненных задач во время",
        stat2: "Довольных клиентов",
        stat3: "Сотрудников",
        stat4: "Лет опыта в сфере",
        founderInfoOpen: "Подробнее об основателе",
        founderInfoClose: "Закрыть",
        founderInfoTitle: "Об основателе",
        founderInfoBody:
            "Предприниматель, развивающий международные торговые и логистические направления.\n\nОпыт работы в разных странах и прямое взаимодействие с производителями позволяют выстраивать эффективные бизнес-процессы и находить оптимальные решения для клиентов.\n\nГеография работы — более 18 стран, постоянное развитие новых направлений и рынков.",
        founderInfoContactHeading: "Контакт:",
        founderInfoWhatsAppLink: "Написать в WhatsApp",
    },
    advantages: {
        sectionTitle: "Почему выбирают ASSAYF",
        items: {
            "1": "Работа без посредников",
            "2": "Прямые связи с поставщиками и фабриками",
            "3": "Контроль на каждом этапе",
            "4": "Конфиденциальность работы",
            "5": "Международная география",
            "6": "Индивидуальный подход к каждому проекту",
        },
    },
    spheres: {
        sectionTitle: "Наши проекты",
        imageAltSuffix: "изображение",
        servicesTitle: "Услуги",
        advantagesTitle: "Преимущества",
        forWhomTitle: "Для кого",
        geographyTitle: "География",
        categoriesTitle: "Категории",
        currentProductTitle: "Текущий продукт",
        plansTitle: "Планы",
        casesTitle: "Кейсы",
    },
    sphere: {
        cargo: {
            subtitle: "Международная логистика и грузоперевозки",
            lead: "Организуем поставки грузов из Турции в Россию, Казахстан и страны СНГ — с полным сопровождением и контролем на каждом этапе.",
            description:
                "ASSAYF Cargo — это логистическое направление компании, специализирующееся на международных грузоперевозках.\n\nМы обеспечиваем доставку грузов различного объёма — от сборных партий до полной загрузки транспортных средств.\n\nРаботаем как с карго-поставками, так и с официальными грузами, предоставляя клиенту прозрачную и контролируемую систему логистики.",
            services: `• Международные грузоперевозки (авто / авиа)
• Курьерская доставка из Стамбула в Москву и Грозный. Регулярные рейсы — 2 раза в неделю. Срок доставки: 1–2 дня
• Доставка из Турции в Россию, Казахстан и СНГ
• Консолидация грузов
• Складские услуги
• Выкуп и сопровождение товаров
• Контроль доставки на каждом этапе
• Доставка до клиента`,
            advantages: `• Прямые логистические маршруты без посредников
• Контроль каждого этапа перевозки
• Оперативная связь с клиентом 24/7
• Надёжность и соблюдение сроков
• Конфиденциальность работы`,
            forWhom: "",
            geography: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cases: {
                "1": {
                    title: "Поставка товаров из Турции в Россию",
                    detail:
                        "Формат: загрузка (фура)\nСрок: 3–4 недели\nРезультат: стабильная и своевременная доставка без задержек",
                },
                "2": {
                    title: "Регулярные поставки сборных грузов",
                    detail:
                        "Маршрут: Турция → Россия\nФормат: консолидация\nРезультат: оптимизация затрат клиента",
                },
                "3": {
                    title: "Крупнообъёмные поставки",
                    detail: "Формат: фуры\nРезультат: выстроена системная логистика для клиента",
                },
            },
            cta: "Связаться с логистическим отделом",
        },
        china: {
            subtitle: "Поставки товаров из Китая под ключ",
            lead: "Поиск, выкуп и доставка товаров из Китая — от идеи до готового продукта.",
            description:
                "ASSAYF China — направление, обеспечивающее полный цикл работы с Китаем.\n\nМы находим поставщиков, ведём переговоры с фабриками, проверяем продукцию и организуем доставку в любую страну.\n\nРаботаем как с предпринимателями, так и с компаниями, помогая запускать собственные бренды и масштабировать бизнес.",
            services: `• Поиск товаров и поставщиков
• Переговоры с фабриками
• Проверка производителей
• Выкуп товаров
• Контроль качества
• Организация доставки
• Запуск собственного бренда (OEM / Private Label)`,
            forWhom: `• Продавцы маркетплейсов
• Оптовые компании
• Предприниматели
• Бренды
• Стартапы`,
            advantages: `• Прямые связи с поставщиками
• Работа без посредников
• Широкий выбор товарных категорий
• Полное сопровождение сделки
• Оптимизация стоимости закупки`,
            geography: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote:
                "Работаем с широким спектром товарных категорий в зависимости от задач клиента",
            cta: "Начать работу с Китаем",
        },
        valut: {
            subtitle: "Международные финансовые операции и обмен валют",
            lead: "Быстрые и безопасные расчёты по всему миру — для бизнеса и частных клиентов.",
            description:
                "VALUT ASSAYF — направление, специализирующееся на обмене валют и международных переводах.\n\nМы обеспечиваем финансовые расчёты между странами, включая оплату поставщиков, переводы средств и операции с USDT.\n\nРаботаем как с туристами, так и с предпринимателями, предоставляя гибкие и надёжные решения.",
            services: `• Обмен валют
• Международные переводы
• Расчёты за товар
• Оплата поставщиков
• Работа с USDT
• Финансовое сопровождение сделок`,
            geography:
                "Россия, Турция, ОАЭ, Казахстан, Саудовская Аравия, Таджикистан и другие страны",
            advantages: `• Высокая скорость операций
• Конфиденциальность
• Безопасность
• Выгодные условия
• Сопровождение сделок`,
            forWhom: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cta: "Связаться по финансовым операциям",
        },
        product: {
            subtitle: "Разработка и запуск собственных продуктов",
            lead: "",
            description:
                "ASSAYF Product — направление по созданию и развитию собственных брендов.\n\nКомпания разрабатывает продукты, выводит их на рынок и организует дистрибуцию.\n\nОсновной фокус — качество, позиционирование и масштабирование.",
            services: "",
            advantages: "",
            forWhom: "",
            geography: "",
            categories: "",
            currentProduct:
                "ASSAYF MASS — натуральная смесь для набора массы и энергии",
            plans: `• Запуск новых продуктов
• Расширение линейки
• Выход на международные рынки
• Дистрибуция по СНГ и другим регионам`,
            closingNote: "",
            cta: "Узнать подробнее о продукции",
        },
        export: {
            subtitle: "Экспорт и дистрибуция товаров",
            lead: "",
            description:
                "ASSAYF Export — направление, специализирующееся на поставках товаров из разных стран и работе с производителями.\n\nМы организуем экспорт продукции, выстраиваем дистрибуцию и заключаем оптовые контракты.",
            services: `• Экспорт товаров из Турции
• Импорт в Россию и страны СНГ
• Работа с производителями
• Дистрибуция товаров
• Оптовые поставки`,
            advantages: "",
            forWhom: "",
            geography: "",
            categories:
                "Продукты питания, напитки, сладости, бытовая химия, БАДы, парфюмерия и другие товарные группы",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cta: "Обсудить поставки",
        },
    },
    shpera: {
        readMore: "Читать полностью",
        collapse: "Свернуть",
    },
    reviews: {
        sectionTitle: "Отзывы",
        subtitle:
            "Главная цель компании Assayf — предоставить клиентам максимальное удобство и качество услуг. Мы гордимся тем, что наши клиенты доверяют нам свои проекты и задачи, и мы стараемся не оставлять их равнодушными.",
        carouselLabel: "Отзывы клиентов",
        items: {
            "1": "Советую компанию Assayf для задач по логистике и перевозкам.",
            "2": "Очень хороший курс и быстрая обратная связь с выездом на место.",
            "3": "Хороший сервис, быстрая обратная связь, всегда на связи, всегда помогают.",
            "4": "Пробовал assayf-продукт и получил очень хороший результат.",
        },
    },
    contact: {
        sectionTitle: "Напишите нам",
        channels: {
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "Почта",
        },
        formLegend: "Какой контакт вы оставляете",
        fieldContact: "Ваш контакт",
        placeholders: {
            whatsapp: "Например: +7 900 000-00-00",
            telegram: "Например: @username",
            email: "Например: name@mail.ru",
        },
        addMessage: "Добавить сообщение (необязательно)",
        messageLabel: "Сообщение",
        messagePlaceholder: "Текст обращения",
        removeMessage: "Убрать сообщение",
        submit: "Отправить",
        feedbackHeader: "Обратная связь с сайта",
        feedbackHowContact: "Как с вами связаться",
        feedbackMessage: "Сообщение",
        spherePrompt: "Выберите направление — и ниже появятся контакты для связи",
        mainContactTitle: "Основной контакт",
        sphereLegend: "Контакты направлений",
        spheres: {
            china: "Поставки из Китая",
            logistics: "Логистика",
            assayf_product: "Продукция Assayf",
            export_import: "Экспорт и импорт",
            valut: "Валютные операции",
        },
    },
    footer: {
        tagline:
            "Международная бизнес-платформа: соединяем, управляем и гарантируем результат.",
        logoAria: "Assayf — наверх к началу страницы",
        copyright: "Assayf Company",
    },
}

const tr: MessageTree = {
    nav: {
        home: "Ana Sayfa",
        about: "Hakkımızda",
        activities: "Faaliyetler",
        reviews: "Yorumlar",
        contact: "İletişim",
    },
    navAria: {
        openMenu: "Menüyü aç",
        closeMenu: "Menüyü kapat",
    },
    hero: {
        title:
            "Ticaret, lojistik ve finansal çözümler alanında uluslararası holding",
    },
    header: {
        chooseDirection: "Yön seç",
        contactUs: "Bize ulaşın",
    },
    about: {
        sectionTitle: "Şirket hakkında",
        lead: "ASSAYF COMPANY; ticaret, lojistik ve finansal operasyonlar alanında faaliyet gösteren uluslararası bir holdingdir.",
        moreBody:
            "Üreticilerle doğrudan bağlantılar kuruyoruz, mal tedarikini organize ediyoruz ve dünya genelinde işlemler için finansal destek sağlıyoruz.\n\nAracı olmadan çalışıyoruz; müzakereden teslimata ve ödemelere kadar her aşamayı kontrol ediyoruz.\n\nŞirketin coğrafyası Rusya, Türkiye, Çin, BDT ülkeleri, Orta Doğu ve Güneydoğu Asya'yı kapsar.",
        readMore: "Devamını oku",
        readLess: "Daralt",
        imageAlt: "Assayf şirketi kurucusu — İbrahim",
        imageCaption: "Kurucu — İbrahimov İbrahim",
        imageHoverHint: "Ayrıntılar için tıklayın",
        statsTitle: "Rakamlarla biz",
        stat1: "Bugüne kadar tamamlanan görevler",
        stat2: "Memnun müşteriler",
        stat3: "Çalışanlar",
        stat4: "Sektördeki deneyim yılı",
        founderInfoOpen: "Kurucu hakkında ayrıntılar",
        founderInfoClose: "Kapat",
        founderInfoTitle: "Kurucu hakkında",
        founderInfoBody:
            "Uluslararası ticaret ve lojistik yönlerini geliştiren bir girişimci.\n\nFarklı ülkelerde çalışma deneyimi ve üreticilerle doğrudan etkileşim, etkili iş süreçleri ve müşteriler için optimal çözümler sunmaya olanak tanır.\n\nFaaliyet coğrafyası — 18'den fazla ülke, yeni yönlerin ve pazarların sürekli gelişimi.",
        founderInfoContactHeading: "İletişim:",
        founderInfoWhatsAppLink: "WhatsApp’tan yazın",
    },
    advantages: {
        sectionTitle: "Neden ASSAYF tercih ediliyor",
        items: {
            "1": "Aracı olmadan çalışma",
            "2": "Tedarikçiler ve fabrikalarla doğrudan bağlantılar",
            "3": "Her aşamada kontrol",
            "4": "Çalışmaların gizliliği",
            "5": "Uluslararası coğrafya",
            "6": "Her projeye özel yaklaşım",
        },
    },
    spheres: {
        sectionTitle: "Projelerimiz",
        imageAltSuffix: "görsel",
        servicesTitle: "Hizmetler",
        advantagesTitle: "Avantajlar",
        forWhomTitle: "Kimler için",
        geographyTitle: "Coğrafya",
        categoriesTitle: "Kategoriler",
        currentProductTitle: "Güncel ürün",
        plansTitle: "Planlar",
        casesTitle: "Örnek işler",
    },
    sphere: {
        cargo: {
            subtitle: "Uluslararası lojistik ve yük taşımacılığı",
            lead: "Türkiye'den Rusya, Kazakistan ve BDT ülkelerine sevkiyatı uçtan uca destek ve her aşamada kontrolle organize ediyoruz.",
            description:
                "ASSAYF Cargo, uluslararası yük taşımacılığına odaklanan şirketin lojistik koludur.\n\nParsiyelden tam treyler yüklemesine kadar farklı hacimlerde sevkiyat sağlıyoruz.\n\nHem kargo hem resmi sevkiyatlarla çalışıyor; müşteriye şeffaf ve kontrollü bir lojistik süreci sunuyoruz.",
            services: `• Uluslararası yük taşımacılığı (kara / hava)
• İstanbul’dan Moskova ve Grozni’ye kurye teslimat — haftada iki sefer, 1–2 gün transit
• Türkiye’den Rusya, Kazakistan ve BDT’ye teslimat
• Konsolidasyon
• Depolama
• Ürün satın alma ve refakat
• Her aşamada takip
• Son müşteri teslimatı`,
            advantages: `• Gereksiz aracı olmadan doğrudan güzergahlar
• Taşımanın her aşamasında kontrol
• Müşteriyle 7/24 hızlı iletişim
• Güvenilirlik ve zamanında teslimat
• Gizlilik`,
            forWhom: "",
            geography: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cases: {
                "1": {
                    title: "Türkiye’den Rusya’ya mal tedariki",
                    detail: "Mod: tam treyler\nSüre: 3–4 hafta\nSonuç: istikrarlı ve zamanında teslimat",
                },
                "2": {
                    title: "Düzenli parsiyel sevkiyatlar",
                    detail: "Güzergah: Türkiye → Rusya\nMod: konsolidasyon\nSonuç: müşteri maliyetlerinde iyileşme",
                },
                "3": {
                    title: "Yüksek hacimli sevkiyatlar",
                    detail: "Mod: tam treylerler\nSonuç: müşteri için sistematik lojistik",
                },
            },
            cta: "Lojistik ekibiyle iletişime geçin",
        },
        china: {
            subtitle: "Çin’den anahtar teslim tedarik",
            lead: "Çin’de ürün arama, satın alma ve teslimat — fikirden ürüne.",
            description:
                "ASSAYF China, Çin ile çalışmanın tüm döngüsünü kapsar.\n\nTedarikçi bulur, fabrikalarla görüşür, üretimi kontrol eder ve dünya çapında teslimatı organize eder.\n\nHem girişimcilere hem marka kurup ölçekleyen şirketlere destek veriyoruz.",
            services: `• Ürün ve tedarikçi araması
• Fabrika görüşmeleri
• Üretici doğrulama
• Ürün satın alma
• Kalite kontrolü
• Teslimat organizasyonu
• Kendi markanızı başlatma (OEM / Private Label)`,
            forWhom: `• Pazaryeri satıcıları
• Toptan satış şirketleri
• Girişimciler
• Markalar
• Start-up’lar`,
            advantages: `• Doğrudan tedarikçi bağlantıları
• Gereksiz aracı olmadan çalışma
• Geniş ürün kategorileri
• Anlaşmanın başından sonuna destek
• Satın alma maliyetini iyileştirme`,
            geography: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote:
                "Hedeflerinize bağlı olarak geniş bir ürün yelpazesiyle çalışıyoruz.",
            cta: "Çin ile çalışmaya başlayın",
        },
        valut: {
            subtitle: "Uluslararası finans ve döviz işlemleri",
            lead: "Dünya genelinde hızlı ve güvenli ödemeler — işletmeler ve bireyler için.",
            description:
                "VALUT ASSAYF döviz ve uluslararası transferlere odaklanır.\n\nSınır ötesi ödemeler, tedarikçi ödemeleri, transferler ve USDT işlemleri sunuyoruz.\n\nHem gezginlere hem girişimcilere esnek ve güvenilir çözümler sağlıyoruz.",
            services: `• Döviz takası
• Uluslararası havaleler
• Mal ödemeleri
• Tedarikçi ödemeleri
• USDT işlemleri
• İşlem desteği`,
            geography:
                "Rusya, Türkiye, BAE, Kazakistan, Suudi Arabistan, Tacikistan ve diğer ülkeler",
            advantages: `• Hızlı işlem
• Gizlilik
• Güvenlik
• Uygun koşullar
• Anlaşma desteği`,
            forWhom: "",
            categories: "",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cta: "Finans işlemleri için iletişime geçin",
        },
        product: {
            subtitle: "Kendi ürünlerini geliştirme ve lansman",
            lead: "",
            description:
                "ASSAYF Product kendi markalarını oluşturur ve büyütür.\n\nÜrün geliştirir, pazara çıkarır ve dağıtımı kurar.\n\nOdak: kalite, konumlandırma ve ölçek.",
            services: "",
            advantages: "",
            forWhom: "",
            geography: "",
            categories: "",
            currentProduct:
                "ASSAYF MASS — kütle ve enerji için doğal karışım",
            plans: `• Yeni ürün lansmanları
• Ürün gamını genişletme
• Uluslararası pazarlara giriş
• BDT ve ötesinde dağıtım`,
            closingNote: "",
            cta: "Ürünler hakkında daha fazla bilgi",
        },
        export: {
            subtitle: "İhracat ve dağıtım",
            lead: "",
            description:
                "ASSAYF Export çok ülkeden tedarik ve üretici işleriyle ilgilenir.\n\nİhracatı organize eder, dağıtım kurar ve toptan sözleşmeler yapar.",
            services: `• Türkiye’den ihracat
• Rusya ve BDT’ye ithalat
• Üretici iş birlikleri
• Ürün dağıtımı
• Toptan tedarik`,
            advantages: "",
            forWhom: "",
            geography: "",
            categories:
                "Gıda, içecek, şekerleme, ev kimyasalları, takviyeler, parfüm ve diğer gruplar",
            currentProduct: "",
            plans: "",
            closingNote: "",
            cta: "Tedariki görüşün",
        },
    },
    shpera: {
        readMore: "Tamamını oku",
        collapse: "Daralt",
    },
    reviews: {
        sectionTitle: "Yorumlar",
        subtitle:
            "Assayf'ın temel amacı müşterilere maksimum kolaylık ve hizmet kalitesi sunmaktır. Müşterilerimizin projelerini ve güvenlerini bize emanet etmelerinden gurur duyuyoruz ve onları etkisiz bırakmamaya çalışıyoruz.",
        carouselLabel: "Müşteri yorumları",
        items: {
            "1": "Lojistik ve taşımacılık işleri için Assayf'ı tavsiye ederim.",
            "2": "Çok iyi kur ve sahada hızlı geri bildirim.",
            "3": "İyi hizmet, hızlı geri bildirim, her zaman ulaşılabilir, her zaman yardımcı oluyorlar.",
            "4": "Assayf ürününü denedim ve çok iyi sonuç aldım.",
        },
    },
    contact: {
        sectionTitle: "Bize yazın",
        channels: {
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "E-posta",
        },
        formLegend: "Hangi iletişimi bırakıyorsunuz",
        fieldContact: "İletişiminiz",
        placeholders: {
            whatsapp: "Örn: +90 500 000 00 00",
            telegram: "Örn: @kullaniciadi",
            email: "Örn: isim@mail.com",
        },
        addMessage: "Mesaj ekle (isteğe bağlı)",
        messageLabel: "Mesaj",
        messagePlaceholder: "Mesajınız",
        removeMessage: "Mesajı kaldır",
        submit: "Gönder",
        feedbackHeader: "Web sitesi iletişimi",
        feedbackHowContact: "Size nasıl ulaşalım",
        feedbackMessage: "Mesaj",
        spherePrompt: "Kişileri görmek için bir yön seçin",
        mainContactTitle: "Ana iletişim",
        sphereLegend: "Yön",
        spheres: {
            china: "Çin tedariki",
            logistics: "Lojistik",
            assayf_product: "Assayf ürünleri",
            export_import: "İhracat ve ithalat",
            valut: "Assayf döviz",
        },
    },
    footer: {
        tagline:
            "Uluslararası iş platformu: bağlarız, yönetiriz ve sonuçları garanti ederiz.",
        logoAria: "Assayf — sayfanın başına dön",
        copyright: "Assayf Company",
    },
}

export const messagesByLocale: Record<Locale, MessageTree> = {
    ru,
    en,
    tr,
}

function isMessageTree(value: string | MessageTree): value is MessageTree {
    return typeof value === "object" && value !== null
}

export function getMessage(locale: Locale, path: string): string {
    const parts = path.split(".")
    let current: string | MessageTree | undefined = messagesByLocale[locale]

    for (const part of parts) {
        if (!current || !isMessageTree(current)) return path
        current = current[part]
    }

    return typeof current === "string" ? current : path
}
