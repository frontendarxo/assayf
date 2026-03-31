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
        subtitle:
            "We organize goods supply, international settlements, and turnkey business processes — without intermediaries, with full control at every stage.",
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
        founderInfoWhatsAppLine: "WhatsApp: +7 934 444 50 40",
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
    },
    sphere: {
        cargo: {
            subtitle: "About Assayf Cargo",
            description:
                "Our cargo service has been successfully delivered for many clients, providing reliable and efficient freight transport. Our specialists will help you choose transport and deliver your shipment to the right country.",
            cases: {
                "1": "5 tons of cargo from Turkey to Russia",
                "2": "",
                "3": "Case title",
            },
        },
        valut: {
            subtitle: "About Assayf Currency",
            description:
                "We provide currency conversion and money transfer services to various countries. Our specialists will help you choose the right currency and route funds to the destination country.",
            cases: {
                "1": "Case title",
                "2": "Case title",
                "3": "Case title",
            },
        },
        china: {
            subtitle: "About Assayf China",
            description:
                "We ship goods from China to other countries with reliable and efficient freight transport. Our specialists will help you choose transport and deliver your shipment to the right country.",
            cases: {
                "1": "Case title",
                "2": "Case title",
                "3": "Case title",
            },
        },
        product: {
            subtitle: "About Assayf Product",
            description:
                "We design and manufacture our own products for the market. Our specialists will help you choose a product and bring it to production.",
            cases: {
                "1": "Case title",
                "2": "Case title",
                "3": "Case title",
            },
        },
        export: {
            subtitle: "About export",
            description:
                "We export goods from other countries to Russia, Tajikistan, China, and Turkey with reliable and efficient freight transport. Our specialists will help you choose transport and deliver your shipment to the right country.",
            cases: {
                "1": "Case title",
                "2": "Case title",
                "3": "Case title",
            },
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
            "1": "I recommend Assayf for any logistics-related tasks.",
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
        about: "Обо мне",
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
        subtitle:
            "Организуем поставки товаров, международные расчёты и бизнес-процессы под ключ — без посредников, с полным контролем на каждом этапе.",
    },
    header: {
        chooseDirection: "Выбрать направление",
        contactUs: "Связаться с нами",
    },
    about: {
        sectionTitle: "О компании",
        lead: "ASSAYF COMPANY — международный холдинг, объединяющий направления в сфере торговли, логистики и финансовых операций.",
        moreBody:
            "Мы выстраиваем прямые связи с производителями, организуем поставки товаров и обеспечиваем финансовое сопровождение сделок по всему миру.\n\nРаботаем без посредников, контролируя каждый этап — от переговоров до доставки и расчётов.\n\nГеография компании охватывает Россию, Турцию, Китай, страны СНГ, Ближний Восток и Юго-Восточную Азию.",
        readMore: "Читать далее",
        readLess: "Свернуть",
        imageAlt: "Основатель компании Assayf — Ибрагим",
        imageCaption: "Основатель — Ибрагимов Ибрагим",
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
        founderInfoWhatsAppLine: "WhatsApp: +7 934 444 50 40",
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
    },
    sphere: {
        cargo: {
            subtitle: "Об Assayf Карго",
            description:
                "Наше Карго успешно реализовано для многих клиентов, обеспечивая надёжное и эффективное транспортирование грузов. Наши специалисты помогут вам с выбором транспорта и доставкой груза в нужную страну.",
            cases: {
                "1": "5 тонн груза из Турции в Россию",
                "2": "",
                "3": "Название кейса",
            },
        },
        valut: {
            subtitle: "Об Assayf Валюта",
            description:
                "Наша компания предоставляет услуги по конвертации валюты и переводу денег в различные страны. Наши специалисты помогут вам с выбором валюты и переводом денег в нужную страну.",
            cases: {
                "1": "Название кейса",
                "2": "Название кейса",
                "3": "Название кейса",
            },
        },
        china: {
            subtitle: "Об Assayf Китай",
            description:
                "Наша компания предоставляет услуги по транспортировке товаров из Китая в другие страны, обеспечивая надёжное и эффективное транспортирование грузов. Наши специалисты помогут вам с выбором транспорта и доставкой груза в нужную страну.",
            cases: {
                "1": "Название кейса",
                "2": "Название кейса",
                "3": "Название кейса",
            },
        },
        product: {
            subtitle: "Об Assayf Продукт",
            description:
                "Наша компания создаёт и производит собственные продукты, которые мы предлагаем на рынке. Наши специалисты помогут вам с выбором продукта и его производством.",
            cases: {
                "1": "Название кейса",
                "2": "Название кейса",
                "3": "Название кейса",
            },
        },
        export: {
            subtitle: "Об экспорте товаров",
            description:
                "Наша компания предоставляет услуги по экспорту товаров из других стран в Россию, Таджикистан, Китай и Турцию, обеспечивая надёжное и эффективное транспортирование грузов. Наши специалисты помогут вам с выбором транспорта и доставкой груза в нужную страну.",
            cases: {
                "1": "Название кейса",
                "2": "Название кейса",
                "3": "Название кейса",
            },
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
            "1": "Советую компанию Assayf для любых задач, связанных с перевозками.",
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
        subtitle:
            "Mal tedarikini, uluslararası ödemeleri ve anahtar teslim iş süreçlerini organize ediyoruz — aracı olmadan, her aşamada tam kontrolle.",
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
        founderInfoWhatsAppLine: "WhatsApp: +7 934 444 50 40",
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
    },
    sphere: {
        cargo: {
            subtitle: "Assayf Kargo hakkında",
            description:
                "Kargo hizmetimiz birçok müşteri için başarıyla sunuldu; güvenilir ve verimli taşımacılık sağlıyoruz. Uzmanlarımız taşıma seçimi ve gönderinizi doğru ülkeye ulaştırma konusunda yardımcı olur.",
            cases: {
                "1": "Türkiye'den Rusya'ya 5 ton yük",
                "2": "",
                "3": "Vaka başlığı",
            },
        },
        valut: {
            subtitle: "Assayf Döviz hakkında",
            description:
                "Çeşitli ülkelere döviz çevirisi ve para transferi hizmetleri sunuyoruz. Uzmanlarımız doğru para birimini seçmenize ve parayı hedef ülkeye yönlendirmenize yardımcı olur.",
            cases: {
                "1": "Vaka başlığı",
                "2": "Vaka başlığı",
                "3": "Vaka başlığı",
            },
        },
        china: {
            subtitle: "Assayf Çin hakkında",
            description:
                "Çin'den diğer ülkelere güvenilir ve verimli taşımacılıkla ürün sevkiyatı sağlıyoruz. Uzmanlarımız taşıma seçimi ve gönderinizi doğru ülkeye ulaştırma konusunda yardımcı olur.",
            cases: {
                "1": "Vaka başlığı",
                "2": "Vaka başlığı",
                "3": "Vaka başlığı",
            },
        },
        product: {
            subtitle: "Assayf Ürün hakkında",
            description:
                "Piyasaya kendi ürünlerimizi tasarlayıp üretiyoruz. Uzmanlarımız ürün seçimi ve üretime geçişte yardımcı olur.",
            cases: {
                "1": "Vaka başlığı",
                "2": "Vaka başlığı",
                "3": "Vaka başlığı",
            },
        },
        export: {
            subtitle: "İhracat hakkında",
            description:
                "Diğer ülkelerden Rusya, Tacikistan, Çin ve Türkiye'ye güvenilir ve verimli taşımacılıkla ürün ihracatı sağlıyoruz. Uzmanlarımız taşıma seçimi ve gönderinizi doğru ülkeye ulaştırma konusunda yardımcı olur.",
            cases: {
                "1": "Vaka başlığı",
                "2": "Vaka başlığı",
                "3": "Vaka başlığı",
            },
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
            "1": "Lojistikle ilgili her türlü iş için Assayf'ı tavsiye ederim.",
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
