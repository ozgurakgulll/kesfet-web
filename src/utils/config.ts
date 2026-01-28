import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Keşfet",
  seo: {
    title: "Keşfet – Akıllı Gezi Planlama Uygulaması",
    description:
        "Keşfet ile gittiğin şehirde ilgi alanlarına göre gezilecek yerleri keşfet, favorilerini seç ve sana özel rota ve gezi planını oluştur.",
  },

  backgroundGrid: false,
  logo: "/logo.svg",
  theme: "light",
  forceTheme: false,
  showThemeSwitch: true,

  appStoreLink: "https://apps.apple.com",
  googlePlayLink: "https://play.google.com",

  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/kesfetapp",
      facebook: "https://facebook.com/kesfetapp",
      twitter: "https://x.com/kesfetapp",
    },
    links: [
      { href: "/#features", title: "Özellikler" },
      { href: "/#how-it-works", title: "Nasıl Çalışır?" },
      { href: "/#pricing", title: "Fiyatlandırma" },
      { href: "/#faq", title: "SSS" },
    ],
  },

  topNavbar: {
    cta: "Uygulamayı İndir",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Özellikler" },
      { href: "/#how-it-works", title: "Nasıl Çalışır?" },
      { href: "/#pricing", title: "Fiyatlandırma" },
      { href: "/#faq", title: "SSS" },
    ],
  },

  appBanner: {
    id: "app-banner",
    title: "Yeni Şehri Akıllıca Keşfet!",
    subtitle:
        "Keşfet, ilgi alanlarına göre sana özel yer önerileri sunar. Favorilerini seç, kaç gün kalacağını söyle, gerisini biz halledelim.",
    screenshots: [
      "/screenshots/1.webp",
      "/screenshots/2.webp",
      "/screenshots/3.webp",
    ],
  },

  home: {
    seo: {
      title: "Keşfet – Kişisel Gezi Planlayıcın",
      description:
          "Gittiğin şehirde nereleri gezmen gerektiğini Keşfet söyler. İlgi alanlarına göre rota ve gezi planı oluşturur.",
    },

    testimonials: {
      id: "testimonials",
      title: "Kullanıcı Yorumları",
      subtitle: "Keşfet’i deneyen gezginlerin yorumları",
      cards: [
        {
          name: "Ayşe K.",
          comment:
              "İlk defa gittiğim şehirde ne yapacağımı hiç düşünmedim. Keşfet sayesinde harika bir rota çıktı.",
        },
        {
          name: "Mehmet T.",
          comment:
              "İlgi alanlarıma göre öneri yapması efsane. Gereksiz yerlere zaman harcamadım.",
        },
        {
          name: "Elif A.",
          comment:
              "3 günlük seyahatim için mükemmel bir plan oluşturdu. Resmen kişisel rehber gibi.",
        },
      ],
    },

    partners: {
      title: "Güvenilen Platformlar",
      logos: [
        "/misc/companies/apple.svg",
        "/misc/companies/google.svg",
        "/misc/companies/aws.svg",
      ],
    },

    howItWorks: {
      id: "how-it-works",
      title: "Nasıl Çalışır?",
      subtitle:
          "Sadece birkaç adımda sana özel gezi planını oluştur",
      steps: [
        {
          title: "Şehri Seç",
          subtitle:
              "Gitmek istediğin şehri seç ve keşfe başla.",
          image: "/stock/01.webp",
        },
        {
          title: "İlgi Alanlarını Belirle",
          subtitle:
              "Müze, doğa, kafe, gece hayatı gibi sevdiğin kategorileri seç.",
          image: "/stock/02.webp",
        },
        {
          title: "Favorilerini İşaretle",
          subtitle:
              "Önerilen yerler arasından gitmek istediklerini seç.",
          image: "/stock/03.webp",
        },
        {
          title: "Kalış Süreni Gir",
          subtitle:
              "Kaç gün kalacağını belirt, Keşfet en mantıklı planı oluştursun.",
          image: "/stock/04.webp",
        },
        {
          title: "Hazır Rota ile Gez",
          subtitle:
              "Zamana ve mesafeye göre optimize edilmiş rota ile rahatça gez.",
          image: "/stock/05.webp",
        },
      ],
    },

    features: {
      id: "features",
      title: "Akıllı Gezi Deneyimi",
      subtitle:
          "Keşfet, seyahatini planlamak yerine yaşamanı sağlar",
      cards: [
        {
          title: "Kişisel Yer Önerileri",
          subtitle:
              "İlgi alanlarına göre sana özel mekan ve aktivite önerileri.",
          icon: "/3D/link-front-color.webp",
        },
        {
          title: "Akıllı Rota Oluşturma",
          subtitle:
              "Seçtiğin yerlere göre zaman ve mesafeyi optimize eden gezi rotası.",
          icon: "/3D/clock-front-color.webp",
        },
        {
          title: "Kolay ve Hızlı Kullanım",
          subtitle:
              "Karmaşık planlamalara gerek yok, birkaç dokunuş yeterli.",
          icon: "/3D/roll-brush-front-color.webp",
        },
        {
          title: "Zamandan Tasarruf",
          subtitle:
              "Gereksiz aramalar yerine direkt gezmeye başla.",
          icon: "/3D/sheild-front-color.webp",
        },
      ],
    },

    faq: {
      id: "faq",
      title: "Sıkça Sorulan Sorular",
      qa: [
        {
          question: "Keşfet ücretsiz mi?",
          answer:
              "Keşfet’in temel özelliklerini ücretsiz kullanabilirsiniz. Gelişmiş planlama özellikleri için premium paketler sunulmaktadır.",
        },
        {
          question: "İnternet olmadan kullanabilir miyim?",
          answer:
              "Oluşturduğun gezi planlarını çevrimdışı olarak görüntüleyebilirsin.",
        },
        {
          question: "Rotalar neye göre oluşturuluyor?",
          answer:
              "Seçtiğin yerler, kalış süren ve mesafeler dikkate alınarak en mantıklı rota oluşturulur.",
        },
      ],
    },

    header: {
      headline: "Gezini Planlamakla Uğraşma, Keşfet Yapsın",
      subtitle:
          "Keşfet ile gittiğin her şehirde sana özel gezi planı ve rota oluştur.",
      screenshots: [
        "/screenshots/1.webp",
        "/screenshots/2.webp",
        "/screenshots/3.webp",
      ],
      rewards: ["Gezginlerin Favorisi", "Akıllı Rota"],
      usersDescription: "1000+ gezgin Keşfet ile plan yaptı",
      headlineMark: [1, 3],
    },

    pricing: {
      id: "pricing",
      title: "Fiyatlandırma",
      subtitle: "Her gezgin için uygun plan",
      actionText: "Uygulamayı İndir",
      plans: [
        {
          title: "Ücretsiz",
          price: "₺0",
          rows: ["Temel yer önerileri", "Favori listesi"],
        },
        {
          title: "Premium",
          price: "₺49 / ay",
          featured: true,
          rows: [
            "Akıllı rota oluşturma",
            "Günlük gezi planı",
            "Çevrimdışı erişim",
          ],
        },
      ],
    },
  },
  privacyPolicy: {
    seo: {
      title: "Gizlilik Politikası – Keşfet",
      description: "Keşfet uygulaması gizlilik politikası",
    },
    content: `
# Gizlilik Politikası

Keşfet, kullanıcılarının gizliliğini korumayı taahhüt eder.

Toplanan veriler yalnızca kişisel gezi planı oluşturmak ve uygulama deneyimini iyileştirmek amacıyla kullanılır.
`,
  },

  cookiesPolicy: {
    seo: {
      title: "Çerez Politikası – Keşfet",
      description: "Keşfet uygulamasında kullanılan çerezler",
    },
    content: `
# Çerez Politikası

Keşfet, kullanıcı deneyimini geliştirmek için çerezler kullanır.
`,
  },

  termsAndConditions: {
    seo: {
      title: "Kullanım Koşulları – Keşfet",
      description: "Keşfet uygulaması kullanım koşulları",
    },
    content: `
# Kullanım Koşulları

Keşfet, ilgi alanlarına göre gezi planı önerileri sunan bir uygulamadır.

Oluşturulan rotalar tavsiye niteliğindedir.
`,
  },
};

export default templateConfig;
