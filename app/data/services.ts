export type Locale = "en" | "es" | "ru" | "ja";

export type Service = {
  slug: string;
  title: string;
  eyebrow: string;
  shortText: string;
  heroText: string;
  includes: string[];
  idealFor: string[];
};

const servicesByLocale: Record<Locale, Service[]> = {
  en: [
    {
      slug: "luxury-concierge",
      title: "Luxury Concierge",
      eyebrow: "Concierge Service",
      shortText:
        "High-touch support designed to make access to trusted services and professionals feel more seamless, personal, and intentional.",
      heroText:
        "Luxury Concierge is designed for clients who want thoughtful guidance, trusted direction, and a more refined way to access the right support.",
      includes: [
        "Personalized guidance based on your needs",
        "Curated support and service direction",
        "A more seamless, high-touch experience",
        "Trusted introductions when appropriate",
      ],
      idealFor: [
        "Clients who value discretion and ease",
        "Busy professionals seeking trusted support",
        "Those wanting a more elevated experience",
      ],
    },
    {
      slug: "curated-referrals",
      title: "Curated Referrals",
      eyebrow: "Referral Service",
      shortText:
        "Thoughtfully selected professionals across home, business, wellness, and lifestyle needs — guided by trust, alignment, and quality.",
      heroText:
        "Curated Referrals is for clients who do not want random options. It is a more intentional path toward professionals who feel aligned from the start.",
      includes: [
        "Thoughtfully selected professional referrals",
        "Quality-focused recommendations",
        "More aligned introductions",
        "Reduced overwhelm and wasted time",
      ],
      idealFor: [
        "Clients who want trusted recommendations",
        "People looking for quality over quantity",
        "Anyone tired of sorting through endless options",
      ],
    },
    {
      slug: "design-support",
      title: "Design Support",
      eyebrow: "Gateway Design",
      shortText:
        "Through Gateway, we offer design-led guidance and elevated visual direction shaped by beauty, function, and intentional living.",
      heroText:
        "Design Support is rooted in visual clarity, thoughtful presentation, and a more elevated approach to how spaces and experiences feel.",
      includes: [
        "Design-led support through Gateway",
        "Visual direction and presentation guidance",
        "Beauty balanced with function",
        "A more intentional lifestyle aesthetic",
      ],
      idealFor: [
        "Clients who value visual polish",
        "Spaces that need refinement and alignment",
        "People seeking beauty with intention",
      ],
    },
    {
      slug: "private-lifestyle-support",
      title: "Private Lifestyle Support",
      eyebrow: "Lifestyle Service",
      shortText:
        "Refined support services chosen to fit modern life with more ease, confidence, comfort, and exclusivity.",
      heroText:
        "Private Lifestyle Support is designed to help clients move through life with greater ease, stronger access, and a more considered level of support.",
      includes: [
        "Lifestyle-focused support",
        "Thoughtful, elevated direction",
        "Services aligned to your standards",
        "A more exclusive, curated feel",
      ],
      idealFor: [
        "Clients who value access and discretion",
        "Those wanting a polished lifestyle experience",
        "People seeking more ease in day-to-day support",
      ],
    },
    {
      slug: "digital-presence",
      title: "Digital Presence",
      eyebrow: "Brand & Web",
      shortText:
        "Refined website design and digital presence built to reflect your brand with clarity, intention, and elevated aesthetic.",
      heroText:
        "Your online presence should feel just as intentional and refined as the experience you offer in real life. We design websites and digital spaces that reflect your brand with clarity, trust, and quiet confidence.",
      includes: [
        "Website design and layout",
        "Brand-aligned visual direction",
        "User experience refinement",
        "Mobile optimization",
        "Clean, modern development",
      ],
      idealFor: [
        "Business owners building a luxury brand",
        "Professionals wanting a more elevated online presence",
        "Clients seeking clean, modern, and intentional design",
      ],
    },
  ],

  es: [
    {
      slug: "luxury-concierge",
      title: "Conserjería de Lujo",
      eyebrow: "Servicio de Conserjería",
      shortText:
        "Apoyo de alto nivel diseñado para que el acceso a servicios y profesionales de confianza se sienta más fluido, personal e intencional.",
      heroText:
        "La Conserjería de Lujo está diseñada para clientes que desean orientación cuidadosa, dirección confiable y una manera más refinada de acceder al apoyo adecuado.",
      includes: [
        "Orientación personalizada según tus necesidades",
        "Apoyo y dirección de servicios seleccionados",
        "Una experiencia más fluida y de alto nivel",
        "Presentaciones de confianza cuando corresponda",
      ],
      idealFor: [
        "Clientes que valoran la discreción y la facilidad",
        "Profesionales ocupados que buscan apoyo confiable",
        "Quienes desean una experiencia más elevada",
      ],
    },
    {
      slug: "curated-referrals",
      title: "Referencias Seleccionadas",
      eyebrow: "Servicio de Referencias",
      shortText:
        "Profesionales cuidadosamente seleccionados en hogar, negocios, bienestar y estilo de vida, guiados por la confianza, la alineación y la calidad.",
      heroText:
        "Referencias Seleccionadas es para clientes que no quieren opciones al azar. Es un camino más intencional hacia profesionales que se sienten alineados desde el principio.",
      includes: [
        "Referencias profesionales cuidadosamente seleccionadas",
        "Recomendaciones enfocadas en la calidad",
        "Conexiones más alineadas",
        "Menos abrumación y menos tiempo perdido",
      ],
      idealFor: [
        "Clientes que desean recomendaciones confiables",
        "Personas que buscan calidad sobre cantidad",
        "Quienes están cansados de revisar opciones interminables",
      ],
    },
    {
      slug: "design-support",
      title: "Apoyo de Diseño",
      eyebrow: "Diseño Gateway",
      shortText:
        "A través de Gateway, ofrecemos orientación de diseño y dirección visual elevada, guiadas por la belleza, la función y una vida intencional.",
      heroText:
        "El Apoyo de Diseño está basado en claridad visual, presentación pensada y una forma más elevada de sentir espacios y experiencias.",
      includes: [
        "Apoyo de diseño a través de Gateway",
        "Dirección visual y orientación de presentación",
        "Belleza equilibrada con funcionalidad",
        "Una estética de vida más intencional",
      ],
      idealFor: [
        "Clientes que valoran una imagen visual pulida",
        "Espacios que necesitan refinamiento y alineación",
        "Personas que buscan belleza con intención",
      ],
    },
    {
      slug: "private-lifestyle-support",
      title: "Apoyo Privado de Estilo de Vida",
      eyebrow: "Servicio de Estilo de Vida",
      shortText:
        "Servicios de apoyo refinados seleccionados para adaptarse a la vida moderna con más facilidad, confianza, comodidad y exclusividad.",
      heroText:
        "El Apoyo Privado de Estilo de Vida está diseñado para ayudar a los clientes a moverse por la vida con mayor facilidad, mejor acceso y un nivel de apoyo más considerado.",
      includes: [
        "Apoyo enfocado en estilo de vida",
        "Dirección pensada y elevada",
        "Servicios alineados con tus estándares",
        "Una sensación más exclusiva y seleccionada",
      ],
      idealFor: [
        "Clientes que valoran acceso y discreción",
        "Quienes desean una experiencia de estilo de vida más pulida",
        "Personas que buscan más facilidad en el apoyo diario",
      ],
    },
    {
      slug: "digital-presence",
      title: "Presencia Digital",
      eyebrow: "Marca y Web",
      shortText:
        "Diseño web refinado y presencia digital construidos para reflejar tu marca con claridad, intención y una estética elevada.",
      heroText:
        "Tu presencia en línea debe sentirse tan intencional y refinada como la experiencia que ofreces en la vida real. Diseñamos sitios web y espacios digitales que reflejan tu marca con claridad, confianza y seguridad tranquila.",
      includes: [
        "Diseño y estructura del sitio web",
        "Dirección visual alineada con la marca",
        "Mejora de experiencia de usuario",
        "Optimización móvil",
        "Desarrollo limpio y moderno",
      ],
      idealFor: [
        "Empresarios construyendo una marca de lujo",
        "Profesionales que desean una presencia digital más elevada",
        "Clientes que buscan diseño limpio, moderno e intencional",
      ],
    },
  ],

  ru: [
    {
      slug: "luxury-concierge",
      title: "Премиум Concierge",
      eyebrow: "Concierge Сервис",
      shortText:
        "Премиальная поддержка, созданная для того, чтобы доступ к надёжным услугам и специалистам ощущался легче, персональнее и осознаннее.",
      heroText:
        "Премиум Concierge создан для клиентов, которым нужна продуманная помощь, надёжное направление и более изысканный способ получить нужную поддержку.",
      includes: [
        "Персонализированное сопровождение под ваши потребности",
        "Тщательно подобранная поддержка и направление по услугам",
        "Более лёгкий премиальный опыт",
        "Надёжные знакомства при необходимости",
      ],
      idealFor: [
        "Клиентов, ценящих деликатность и удобство",
        "Занятых профессионалов, которым нужна надёжная поддержка",
        "Тех, кто хочет более высокий уровень сервиса",
      ],
    },
    {
      slug: "curated-referrals",
      title: "Подобранные Рекомендации",
      eyebrow: "Сервис Рекомендаций",
      shortText:
        "Тщательно отобранные специалисты для дома, бизнеса, wellness и lifestyle, основанные на доверии, соответствии и качестве.",
      heroText:
        "Этот сервис для клиентов, которым не нужны случайные варианты. Это более осознанный путь к специалистам, которые подходят с самого начала.",
      includes: [
        "Тщательно отобранные профессиональные рекомендации",
        "Рекомендации с фокусом на качество",
        "Более подходящие знакомства",
        "Меньше перегруза и потери времени",
      ],
      idealFor: [
        "Клиентов, которым нужны надёжные рекомендации",
        "Людей, выбирающих качество вместо количества",
        "Тех, кто устал перебирать бесконечные варианты",
      ],
    },
    {
      slug: "design-support",
      title: "Дизайн-Поддержка",
      eyebrow: "Gateway Design",
      shortText:
        "Через Gateway мы предлагаем дизайн-ориентированное сопровождение и визуальное направление, основанные на красоте, функции и осознанной жизни.",
      heroText:
        "Дизайн-поддержка строится на визуальной ясности, продуманной подаче и более высоком подходе к ощущению пространства и опыта.",
      includes: [
        "Дизайн-поддержка через Gateway",
        "Визуальное направление и рекомендации по подаче",
        "Баланс красоты и функциональности",
        "Более осознанная эстетика жизни",
      ],
      idealFor: [
        "Клиентов, ценящих визуальную точность",
        "Пространств, которым нужно refinement и выравнивание",
        "Людей, ищущих красоту с намерением",
      ],
    },
    {
      slug: "private-lifestyle-support",
      title: "Частная Lifestyle Поддержка",
      eyebrow: "Lifestyle Сервис",
      shortText:
        "Изысканные сервисы поддержки, подобранные для современной жизни с большим удобством, уверенностью, комфортом и эксклюзивностью.",
      heroText:
        "Частная Lifestyle Поддержка помогает клиентам двигаться по жизни легче, с лучшим доступом и более продуманным уровнем поддержки.",
      includes: [
        "Поддержка в сфере lifestyle",
        "Продуманное и премиальное направление",
        "Сервисы, соответствующие вашим стандартам",
        "Более эксклюзивное и тщательно подобранное ощущение",
      ],
      idealFor: [
        "Клиентов, ценящих доступ и дискретность",
        "Тех, кто хочет более polished lifestyle-опыт",
        "Людей, которым нужна большая лёгкость в повседневной поддержке",
      ],
    },
    {
      slug: "digital-presence",
      title: "Цифровое Присутствие",
      eyebrow: "Бренд и Веб",
      shortText:
        "Изысканный веб-дизайн и цифровое присутствие, созданные для отражения вашего бренда с ясностью, намерением и высоким эстетическим уровнем.",
      heroText:
        "Ваше онлайн-присутствие должно ощущаться таким же продуманным и изысканным, как и опыт, который вы создаёте в реальной жизни. Мы разрабатываем сайты и цифровые пространства, отражающие ваш бренд с ясностью, доверием и спокойной уверенностью.",
      includes: [
        "Дизайн и структура сайта",
        "Визуальное направление в соответствии с брендом",
        "Улучшение пользовательского опыта",
        "Мобильная оптимизация",
        "Чистая современная разработка",
      ],
      idealFor: [
        "Владельцев бизнеса, создающих luxury-бренд",
        "Профессионалов, желающих более высокий уровень онлайн-присутствия",
        "Клиентов, ищущих чистый, современный и осознанный дизайн",
      ],
    },
  ],

  ja: [
    {
      slug: "luxury-concierge",
      title: "ラグジュアリーコンシェルジュ",
      eyebrow: "コンシェルジュサービス",
      shortText:
        "信頼できるサービスや専門家へのアクセスを、よりスムーズで個人的、そして意図的に感じられるようにする上質なサポートです。",
      heroText:
        "ラグジュアリーコンシェルジュは、思慮深い案内、信頼できる方向性、そして必要な支援へより洗練された方法でアクセスしたいお客様のために設計されています。",
      includes: [
        "ニーズに基づいたパーソナルなご案内",
        "厳選されたサポートとサービス提案",
        "よりスムーズで上質な体験",
        "必要に応じた信頼できるご紹介",
      ],
      idealFor: [
        "配慮と安心感を重視するお客様",
        "信頼できるサポートを求める忙しいプロフェッショナル",
        "より洗練された体験を望む方",
      ],
    },
    {
      slug: "curated-referrals",
      title: "厳選紹介サービス",
      eyebrow: "紹介サービス",
      shortText:
        "住まい、ビジネス、ウェルネス、ライフスタイルにおける専門家を、信頼・相性・品質を基準に丁寧に厳選してご紹介します。",
      heroText:
        "厳選紹介サービスは、ただの選択肢ではなく、最初から相性の良い専門家へと導く、より意図的な道を求めるお客様のためのものです。",
      includes: [
        "厳選された専門家のご紹介",
        "品質重視のおすすめ",
        "より相性の良いコネクション",
        "迷いや時間の浪費を軽減",
      ],
      idealFor: [
        "信頼できる紹介を求めるお客様",
        "量より質を重視する方",
        "終わりのない選択肢に疲れている方",
      ],
    },
    {
      slug: "design-support",
      title: "デザインサポート",
      eyebrow: "Gateway デザイン",
      shortText:
        "Gateway を通じて、美しさ・機能性・意図ある暮らしを軸にしたデザイン主導のガイダンスと上質なビジュアルディレクションをご提供します。",
      heroText:
        "デザインサポートは、視覚的な明確さ、思慮ある見せ方、そして空間や体験の感じ方をより高いレベルへ導くことを大切にしています。",
      includes: [
        "Gateway によるデザイン主導のサポート",
        "ビジュアルディレクションと見せ方の提案",
        "美しさと機能性の両立",
        "より意図的なライフスタイル美学",
      ],
      idealFor: [
        "洗練されたビジュアルを重視するお客様",
        "整え直しと方向性が必要な空間",
        "意図のある美しさを求める方",
      ],
    },
    {
      slug: "private-lifestyle-support",
      title: "プライベートライフスタイルサポート",
      eyebrow: "ライフスタイルサービス",
      shortText:
        "現代の暮らしに、より多くの快適さ、安心感、心地よさ、そして特別感をもたらすよう選ばれた上質なサポートサービスです。",
      heroText:
        "プライベートライフスタイルサポートは、より軽やかに、より良いアクセスと、より行き届いたサポートのもとで日々を過ごせるよう設計されています。",
      includes: [
        "ライフスタイル重視のサポート",
        "思慮深く上質なご提案",
        "お客様の基準に合ったサービス",
        "より特別で厳選された感覚",
      ],
      idealFor: [
        "アクセスと配慮を重視するお客様",
        "洗練されたライフスタイル体験を望む方",
        "日常のサポートにもっと余裕を求める方",
      ],
    },
    {
      slug: "digital-presence",
      title: "デジタルプレゼンス",
      eyebrow: "ブランド & ウェブ",
      shortText:
        "明確さ、意図、そして洗練された美しさでブランドを表現する、上質なウェブデザインとデジタルプレゼンスです。",
      heroText:
        "オンライン上の存在感も、現実で提供する体験と同じくらい意図的で洗練されているべきです。私たちは、明確さ、信頼感、そして静かな自信をもってブランドを映し出すウェブサイトとデジタル空間を設計します。",
      includes: [
        "ウェブサイトのデザインと構成",
        "ブランドに沿ったビジュアルディレクション",
        "ユーザー体験の改善",
        "モバイル最適化",
        "クリーンでモダンな開発",
      ],
      idealFor: [
        "ラグジュアリーブランドを築くビジネスオーナー",
        "より洗練されたオンラインプレゼンスを求めるプロフェッショナル",
        "クリーンでモダン、そして意図あるデザインを求めるお客様",
      ],
    },
  ],
};

export function getServices(locale: Locale): Service[] {
  return servicesByLocale[locale] ?? servicesByLocale.en;
}

export function getServiceBySlug(
  locale: Locale,
  slug: string
): Service | undefined {
  return getServices(locale).find((service) => service.slug === slug);
}