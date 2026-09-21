export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Services', href: '/services' },
      { label: 'Book Promotion', href: '/services' },
      { label: 'Trailers', href: '/trailers' },
      { label: 'ROI Calculator', href: '/services' },
      { label: 'Results', href: '/results' },
    ],
  },
  {
    label: 'Publishing',
    href: '/publishing',
    children: [
      { label: 'Publishing', href: '/publishing' },
      { label: 'Partnerships', href: '/publishing' },
      { label: 'How It Works', href: '/how-it-works' },
    ],
  },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'Results', href: '/results' },
  { label: 'How It Works', href: '/how-it-works' },
  {
    label: 'Company',
    href: '/',
    children: [
      { label: 'About', href: '/' },
      { label: 'Team', href: '/' },
    ],
  },
  { label: 'Contact', href: '/contact' },
]

export const LANGUAGES = [
  { flag: '🇫🇷', label: 'French' },
  { flag: '🇩🇪', label: 'German' },
  { flag: '🇬🇧', label: 'English' },
  { flag: '🇪🇸', label: 'Spanish' },
  { flag: '🇳🇱', label: 'Dutch' },
]

export const HERO_STATS = [
  { value: '350+', label: 'Authors Launched' },
  { value: '12+', label: 'Major Platforms' },
  { value: '6', label: 'Languages' },
  { value: '98%', label: 'Satisfaction' },
]

export const MARQUEE_ITEMS = [
  '340% Average Sales Increase',
  '5,000+ Reader Reviews Earned',
  'Top 50 Amazon Rankings',
  '98% Client Satisfaction',
  '6 Languages Supported',
  '350+ Authors Launched',
]

export const PILLARS = [
  {
    title: 'Cinematic Promotion',
    body: 'Hollywood-quality book trailers and mockups that stop readers mid-scroll and make them reach for their wallets.',
  },
  {
    title: 'Multilingual Reach',
    body: 'Native campaigns in French, German, English, Spanish - reaching readers across international markets simultaneously.',
  },
  {
    title: 'Proven Results',
    body: '52,000+ Goodreads views for a single client. Top 50 Amazon rankings. Real, measurable numbers you can verify.',
  },
  {
    title: 'Surgical Targeting',
    body: "We place your book in front of readers who are already looking for exactly what you've written - not random traffic.",
  },
  {
    title: 'Full Transformation',
    body: 'From unknown author to recognized voice - we handle every touchpoint of your literary brand evolution.',
  },
  {
    title: 'Boutique Dedication',
    body: 'We take only a handful of clients per month. Your success is our entire focus, not one of hundreds of files.',
  },
]

export const PARTNERSHIP_ITEMS = [
  {
    title: 'Author Strategy',
    body: 'We help authors identify the right audience, positioning, and launch plan before a single campaign asset is produced.',
  },
  {
    title: 'Reader Communities',
    body: 'Our placements sit inside active Goodreads communities and genre-led groups where readers are already discussing the kind of books you write.',
  },
  {
    title: 'International Reach',
    body: 'From French and German to English and Spanish markets, we create campaigns that travel across linguistic and cultural boundaries.',
  },
  {
    title: 'Launch Partnerships',
    body: 'We align your cover, metadata, trailer, and outreach into one coordinated campaign built to amplify every touchpoint at once.',
  },
]

export type Service = {
  title: string
  tagline: string
  included: string[]
  forWho?: string[]
  note?: string
}

export const SERVICES: Service[] = [
  {
    title: 'Book Promotion',
    tagline: 'Goodreads · Amazon · Cinematic Assets',
    included: [
      'Goodreads Listopia placement (top 3 positions)',
      'Goodreads group discussion seeding',
      'Amazon metadata & keyword optimization',
      'Cinematic 3D book mockups (4 variants)',
      '60-second cinematic book trailer',
      'Author page setup & optimization',
    ],
    forWho: [
      'Authors launching their first or next title',
      'Writers with <50 reviews needing social proof',
    ],
    note: '📈 Expected: 200–400% visibility increase, 50+ genuine reader reviews within 60 days',
  },
  {
    title: 'Social Media Marketing',
    tagline: 'BookTok · Instagram · Facebook · Reddit',
    included: [
      'BookTok campaign (5 videos, viral format)',
      'Instagram Reels series + carousel posts',
      'Facebook reader community placement',
      'Reddit AMA & literary subreddit strategy',
      '30-day content calendar',
      'Influencer outreach (micro-BookTubers)',
    ],
    forWho: [
      'Authors wanting organic social growth',
      'Books suited to visual/emotional storytelling',
    ],
    note: '📱 Expected: 10K–50K organic impressions, 500+ profile clicks in first 30 days',
  },
  {
    title: 'SEO for Authors',
    tagline: 'Amazon Metadata · Google Discovery',
    included: [
      'Amazon A9 keyword research & implementation',
      'Category & subcategory optimization',
      'Book description rewrite (conversion-focused)',
      'Author central SEO build-out',
      'Google Knowledge Panel setup',
      'Monthly ranking reports',
    ],
    forWho: [
      'Authors invisible in Amazon search results',
      'Books in competitive niches needing differentiation',
    ],
    note: '🔍 Expected: Top 3 category ranking within 90 days, 3× organic discovery rate',
  },
  {
    title: 'Paid Advertising',
    tagline: 'Amazon AMS · Meta Ads',
    included: [
      'Amazon Sponsored Products campaign setup',
      'Amazon Lockscreen Ads (Kindle)',
      'Facebook & Instagram paid campaigns',
      'Lookalike audience creation from readers',
      'A/B testing of 4 ad creatives',
      'Weekly spend optimization reports',
    ],
    forWho: [
      'Authors ready to invest in paid acceleration',
      'Books with proven organic traction',
    ],
    note: '🎯 Expected: 2–5× ROAS, cost-per-sale under €2 for established titles',
  },
  {
    title: 'Book Cover & Branding',
    tagline: 'Design · Identity · Visual Strategy',
    included: [
      'Professional cover redesign (3 concepts)',
      'Series branding consistency',
      'Author logo & signature design',
      'Press kit creation',
      'Social media templates (10 branded)',
      'Print-ready & digital file delivery',
    ],
    forWho: [
      'Authors with strong writing but weak visual identity',
      'Series relaunches or rebrands',
    ],
    note: '🎨 Expected: Measurable click-through improvement; covers that compete with Big 5 publishers',
  },
  {
    title: 'Author Website',
    tagline: 'Professional · Conversion-Optimised',
    included: [
      'Custom author website (5 pages)',
      'Newsletter signup integration',
      'Amazon & retailer buy buttons',
      'Blog/news section setup',
      'Mobile-optimised & fast-loading',
      '12 months hosting included',
    ],
    forWho: [
      'Authors without a professional web presence',
      'Writers building a long-term reader community',
    ],
    note: '💻 Expected: Professional credibility, direct sales channel, email list growth from day one',
  },
  {
    title: 'Social Media Campaigns',
    tagline: 'Twitter · Instagram · TikTok · Facebook & More',
    included: [
      'Platform-specific content strategy',
      'Daily posting & engagement',
      'Hashtag optimization',
      'Monthly performance reports',
    ],
    note: '📢 Custom strategies across every platform your readers actually live on.',
  },
  {
    title: 'Book Blog Tours',
    tagline: '50+ Genre Blogs · Reviews · Interviews',
    included: [
      '30–50+ blog tour stops',
      'Genre-specific outreach',
      'Review & interview coordination',
      'Guest post placements',
    ],
    note: '📖 Reach thousands of readers through blogs that already trust your genre.',
  },
  {
    title: 'Amazon & Facebook Ads',
    tagline: 'ROI-Optimized Paid Campaigns',
    included: [
      'Amazon Sponsored Products',
      'Facebook & Instagram ads',
      'A/B testing & optimization',
      'Weekly performance reports',
    ],
    note: '💰 Campaigns engineered to drive sales and boost rankings, not just impressions.',
  },
  {
    title: 'Podcast Promotion',
    tagline: 'Get Featured on Shows Your Readers Love',
    included: [
      'Targeted podcast outreach',
      'Host pitch creation & management',
      'Interview scheduling & coordination',
      'Podcast marketing strategy',
    ],
    note: '🎙️ Get featured on podcasts that reach your ideal readers.',
  },
  {
    title: 'Press & Media Outreach',
    tagline: 'Interviews · Features · News Coverage',
    included: [
      'Custom media list building',
      'Press release writing & distribution',
      'Podcast & radio pitch outreach',
      'Interview preparation coaching',
    ],
    note: '📰 Secure podcast interviews, magazine features, and real news coverage.',
  },
  {
    title: 'Book Launch Strategy',
    tagline: 'Pre-Order to Day-One Domination',
    included: [
      '8–12 week launch timeline',
      'ARC distribution & management',
      'Launch day promotion blitz',
      'Post-launch momentum plan',
    ],
    note: '🚀 A complete launch plan, from the first pre-order to sustained momentum.',
  },
  {
    title: 'Email Marketing',
    tagline: 'Newsletters · Automation · List Growth',
    included: [
      'Newsletter platform setup',
      'Lead magnet creation',
      'Automated welcome sequences',
      'Weekly newsletter content',
    ],
    note: '✉️ Turn one-time readers into a list you own and can sell to forever.',
  },
  {
    title: 'Audiobook Promotion',
    tagline: 'ACX · Audible · Review Tours',
    included: [
      'ACX & Audible promotion',
      'Audiobook review tours',
      'Podcast feature outreach',
      'Sales & ranking tracking',
    ],
    note: '🎧 Specialized marketing built for the audiobook listener, not just the reader.',
  },
  {
    title: 'Author Reels',
    tagline: 'Short-Form Video · TikTok · Reels · Shorts',
    included: [
      'A cinematic short-form reel built around you and your book',
      'Formatted for TikTok, Instagram Reels, and YouTube Shorts',
      'Designed to stop the scroll and make readers curious enough to click',
    ],
    forWho: [
      'Authors who genuinely believe in their book and are ready to show up for it',
    ],
    note: '🎁 Message us through the Contact page - if we can tell you\u2019re truly ready, we\u2019ll build your first Author Reel completely free.',
  },
]

export type PortfolioItem = {
  kind: 'poster' | 'mockup' | 'goodreads'
  title: string
  author: string
  market: string
  tag?: string
  image: string
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  { kind: 'poster', title: 'Communication is my Superpower', author: 'Alicia Ortego', market: 'English Market', image: '/Communication is my Superpower.jpg' },
  { kind: 'poster', title: 'Chevaux Camargue', author: 'Olivier Saura', market: 'German Market', image: '/Chevaux Camargue.jpg' },
  { kind: 'poster', title: 'Marie tire les cartes', author: 'Martine Montémont', market: 'French Market', image: '/Marie tire les cartes.jpg' },
  { kind: 'poster', title: 'Theaterblut', author: 'Rita Hausen', market: 'German Market', image: '/Theaterblut.jpg' },
  { kind: 'mockup', title: 'Aus den Augen', author: 'Christoph Braendle', market: 'German Market', image: '/Aus den Augen.jpg' },
  { kind: 'mockup', title: 'Die Macht der Kristalle', author: 'Rudolf Bulant', market: 'German Market', image: '/Die Macht der Kristalle.jpg' },
  { kind: 'mockup', title: 'Reiki - Handbuch', author: "Johnny De'Carli", market: 'German Market', image: '/Reiki - Handbuch.jpg' },
  { kind: 'mockup', title: "L'Invention des Dimanches", author: 'Gwenaëlle Abolivier', market: 'French Market', image: "/L'Invention des Dimanches.jpg" },
  { kind: 'mockup', title: 'Main Basse sur le 6e Continent', author: 'Nicolas Antoniucci', market: 'French Market', image: '/Main Basse sur le 6e Continent.jpg' },
  { kind: 'mockup', title: 'The BumbleBeatle Battle', author: 'Oli Boli', market: 'German Market', image: '/The BumbleBeatle Battle.jpg' },
  { kind: 'mockup', title: "L'Ombre de l'Étoile", author: 'Marina Tirion', market: 'French Market', image: "/L'Ombre de l'Étoile.jpg" },
  { kind: 'mockup', title: 'Seemannsgrab für Norderney', author: 'Dirk Trost', market: 'German Market', image: '/Seemannsgrab für Norderney.jpg' },
  { kind: 'mockup', title: 'The Sunstead Academy', author: 'Emelie Thomas', market: 'German Market', image: '/The Sunstead Academy.jpg' },
  { kind: 'mockup', title: 'Atmen in Türkis', author: 'Carina Kohrs', market: 'German Market', image: '/Atmen in Türkis.jpg' },
  { kind: 'mockup', title: "Les Souvenirs d'un Incube", author: 'Marina Tirion', market: 'French Market', image: "/Les Souvenirs d'un Incube.jpg" },
  { kind: 'mockup', title: 'Alpha Cha / Le Tatouage de Jade', author: 'Nicolas Antoniucci', market: 'French Market', image: '/Alpha Cha Le Tatouage de Jade.jpg' },
  { kind: 'mockup', title: 'Amongst the Apples', author: 'Eli Rohner', market: 'English Market', image: '/Amongst the Apples.jpg' },
  { kind: 'mockup', title: 'Faded Days', author: 'Bridget Lionhill', market: 'German Market', image: '/Faded Days.jpg' },
  { kind: 'goodreads', title: 'Bestsellers Fiction Group', author: 'Michel Quint', market: 'French Market', tag: 'Goodreads · 1,000,000 Views', image: '/Bestsellers Fiction Group.jpg' },
  { kind: 'goodreads', title: 'The Last Light Circle', author: 'Michel Quint', market: 'French Market', tag: 'Goodreads · 528,206 Views', image: '/The Last Light Circle.jpg' },
  { kind: 'goodreads', title: 'Groupe International Sci-Fi', author: 'Nicolas Antoniucci', market: 'French Market', tag: 'Goodreads · 117,652 Views', image: '/Groupe International Sci-Fi.jpg' },
  { kind: 'goodreads', title: 'Kommunikation & Beziehungen', author: 'Bernhard Fink', market: 'German Market', tag: 'Goodreads · 52,715 Views', image: '/Kommunikation & Beziehungen.jpg' },
  { kind: 'goodreads', title: 'Psychologisches Drama', author: 'Christoph Braendle', market: 'German Market', tag: 'Goodreads · 46,788 Views', image: '/Psychologisches Drama.jpg' },
  { kind: 'goodreads', title: 'The Green Hour Readers', author: 'John Coyne', market: 'English Market', tag: 'Goodreads · 14,325 Views', image: '/The Green Hour Readers.jpg' },
]

export const TESTIMONIALS = [
  {
    quote:
      "In just weeks, my Goodreads discussion reached over 52,000 views. I had been invisible for years. Buchaufstieg didn\u2019t just market my book - they rebuilt my entire author presence from the ground up.",
    name: 'Bernhard Fink',
    book: 'Bewusst DENKEN - Austria',
  },
  {
    quote:
      'My novels were only known in France. Today, The Island of Kamas has readers in 6 countries, bilingual trailers, and a cinematic presence that rivals major publishers. The team has an extraordinary gift for storytelling.',
    name: 'Nicolas Antoniucci',
    book: 'The Island of Kamas - France',
  },
  {
    quote:
      'The trailer they created for Déviances left me speechless. It captured the soul of my writing in 60 seconds. Readers who watched it immediately added the book to their reading lists. Pure magic.',
    name: 'Lucile Gauchers',
    book: 'Déviances Nouvelles Sombres - France',
  },
  {
    quote:
      "Working with Buchaufstieg has been a revelation. My fantasy series was reaching only local readers. After their campaign for L\u2019Ombre de l\u2019Étoile, I found myself in reading lists across six countries.",
    name: 'Marina Tirion',
    book: "L'Ombre de l'Étoile - France",
  },
  {
    quote:
      'As a literary author writing in Hungarian and German, I never imagined an English-market campaign was possible. Buchaufstieg made it happen, and now In Our Strange Gardens has readers across three language markets.',
    name: 'Ferenc Barnás',
    book: 'Bis ans Ende unserer Leben - Hungary/Germany',
  },
  {
    quote:
      'Die Macht der Kristalle was a niche science fiction novel. After Buchaufstieg\u2019s campaign and the Goodreads placement, I received my first 5-star international review within days. The reach they have is extraordinary.',
    name: 'Rudolf Bulant',
    book: 'Die Macht der Kristalle - Germany',
  },
]

export const AUTHOR_REVIEWS = [
  {
    quote: 'My novels were only known in France. Today, The Island of Kamas has readers in 6 countries, bilingual trailers, and a cinematic presence that rivals major publishers. The team has an extraordinary gift for storytelling.',
    name: 'Nicolas Antoniucci',
    book: 'The Island of Kamas - France',
    image: '/Nicolas Antoniucci.jpg',
  },
  {
    quote: "Working with Buchaufstieg has been a revelation. My fantasy series was reaching only local readers. After their campaign for L'Ombre de l'Étoile, I found myself in reading lists across six countries.",
    name: 'Marina Tirion',
    book: "L'Ombre de l'Étoile - France",
    image: '/Marina Tirion.jpg',
  },
  {
    quote: "I'd seen plenty of generic book trailers before and expected the same. What Buchaufstieg delivered was genuinely cinematic - the kind of quality I'd expect from a major publisher, not a self-published title.",
    name: 'Neil Griffiths',
    book: 'United Kingdom',
    image: '/Neil Griffiths.jpg',
  },
  {
    quote: 'The trailer they created for Déviances left me speechless. It captured the soul of my writing in 60 seconds. Readers who watched it immediately added the book to their reading lists. Pure magic.',
    name: 'Lucile Gauchers',
    book: 'Déviances Nouvelles Sombres - France',
    image: '/Lucile Gauchers.jpg',
  },
  {
    quote: 'I write dark German thrillers and fantasy, a niche I thought would always stay small. The trailers Buchaufstieg created gave my books a cinematic presence I never expected - readers started discovering my work who had never heard of me before.',
    name: 'Veronika A. Grager',
    book: 'Donauweibchen küssen härter - Germany',
    image: '/Veronika A. Grager.jpg',
  },
  {
    quote: "In just weeks, my Goodreads discussion reached over 52,000 views. I had been invisible for years. Buchaufstieg didn't just market my book - they rebuilt my entire author presence from the ground up.",
    name: 'Bernhard Fink',
    book: 'Bewusst DENKEN - Austria',
    image: '/Bernhard Fink.jpg',
  },
  {
    quote: "My book on Krems' wartime history mattered deeply to me, but I worried it would only ever reach a small academic audience. Buchaufstieg brought it in front of readers across Austria and Germany - people told me they'd never seen this history discussed quite this way.",
    name: 'Robert Streibel',
    book: 'Krems 1938–1945 - Austria',
    image: '/Robert Streibel.jpg',
  },
  {
    quote: "Die Macht der Kristalle was a niche science fiction novel from a small Austrian press. After Buchaufstieg's campaign and Goodreads placement, I received my first international 5-star review within days. The reach they gave my book was extraordinary.",
    name: 'Rudolf Bulant',
    book: 'Die Macht der Kristalle - Austria',
    image: '/Rudolf Bulant.jpg',
  },
  {
    quote: 'As a literary author writing in Hungarian and German, I never imagined an English-language campaign was possible. Buchaufstieg made it happen - my work now reaches readers across three language markets I never thought I\'d enter.',
    name: 'Ferenc Barnás',
    book: 'Bis ans Ende unserer Leben - Hungary / Germany',
    image: '/Ferenc Barnás.jpg',
  },
]

export const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery & Strategy',
    body: 'We analyse your book, your market, your competition. We identify the exact readers waiting for your story and chart the path to them.',
  },
  {
    num: '02',
    title: 'Campaign Creation',
    body: 'Cinematic trailers, mockups, Goodreads placements, social content - all crafted with literary and visual precision over 7–14 days.',
  },
  {
    num: '03',
    title: 'Launch & Deploy',
    body: 'Simultaneous multi-platform launch across all agreed channels. Strategic timing, coordinated drops, maximum first-week impact.',
  },
  {
    num: '04',
    title: 'Optimise & Scale',
    body: 'Weekly reporting, real-time adjustments, and ongoing amplification until your book reaches its full potential audience.',
  },
]

export const DELIVERABLES = [
  {
    title: 'Cinematic Book Mockups',
    body: 'Your book cover transformed into breathtaking 3D visual scenes - floating in space, resting on ancient stone, glowing in an enchanted forest. Used across Amazon, Goodreads, and social media.',
    tags: 'Amazon A+ Content · Social Posts · Goodreads Banners',
  },
  {
    title: 'Author Poster - You Are the Story',
    body: 'We believe: without the author, there is no story. Author posters place you at the centre - your face, your presence, your name - surrounded by the world of your book.',
    tags: 'Social Campaigns · Press Kits · Amazon Author Page',
  },
  {
    title: 'Goodreads Group Placements',
    body: 'Strategic placement inside the most active reader communities on Goodreads - matched precisely to your genre and language market. This is where organic discovery lives.',
    tags: '150M+ Reader Community · Algorithm Boosting · Reviews',
  },
  {
    title: 'Cinematic Book Trailers',
    body: '60-second visual narratives that capture the soul of your book. Original music. Atmospheric visuals. Trailers that stop people mid-scroll and make them want to read your book immediately.',
    tags: 'BookTok · YouTube · Instagram Reels · Author Website',
  },
  {
    title: 'Amazon SEO & Metadata',
    body: "Your book\u2019s discoverability on Amazon is determined entirely by its metadata. We rewrite all of it using data-driven research. The difference between invisible and visible is often just the right seven words.",
    tags: 'Amazon Search Rankings · Kindle Discovery · Bestsellers',
  },
  {
    title: 'Multi-Language Campaigns',
    body: 'Your story has no borders. We run campaigns in French, German, English, Spanish, and Dutch - targeting reader communities across 12+ countries worldwide.',
    tags: '5 Language Markets · 12+ Countries · Cross-Cultural',
  },
]

export const TRAILER_ITEMS = [
  { category: 'Fantasy', title: "L'Ombre de l'Étoile, tome 2", subtitle: 'Marina Tirion · French Fantasy', url: 'https://drive.google.com/file/d/1ak6OAF-4Gt_oW3ZJfo0KCGQwKqaGjYBF/view' },
  { category: 'Thriller', title: 'Pour Morgane', subtitle: 'Nicolas Antoniucci · French Thriller', url: 'https://drive.google.com/file/d/1qpFArlGQQBbQEBldAh8rUIWRhLnfFtwh/view' },
  { category: 'Thriller', title: 'The Island of Kamas', subtitle: 'Nicolas Antoniucci · English Version', url: 'https://drive.google.com/file/d/1dxdDYnFQ0aC0XOnfVmfwbnIgc_Go7xYJ/view' },
  { category: 'Campaign', title: 'Book Campaign Reel', subtitle: 'Gitte Jurssen · Author Showcase', url: 'https://drive.google.com/file/d/1aAL6iRAeA7cHHWnDOgRQNRmNe9QkvQPX/view' },
  { category: 'Dark Fiction', title: 'Déviances - Nouvelles Sombres', subtitle: 'Lucile Gauchers · Dark Fiction', url: 'https://drive.google.com/file/d/1_dlv-11WOyHyLuamJkP9vSNkXQ5-giSh/view' },
  { category: 'Legacy Reel', title: 'Author Legacy Reel', subtitle: 'Nicolas Antoniucci · Mini-Documentary', url: 'https://drive.google.com/file/d/1sf-Y-eFc1x1LB3etU2-w6iDTgazXEFyg/view' },
  { category: 'History', title: 'Krems 1938–1945', subtitle: 'Robert Streibel · Austrian History', url: 'https://drive.google.com/file/d/1rt67sAggARxCAyhoy_mbcs4J-15VuV25/view' },
  { category: 'Fantasy', title: 'Donauweibchen küssen härter', subtitle: 'Veronika A. Grager · German Fantasy', url: 'https://drive.google.com/file/d/14qvL3YHZZKqcYvb4A6GtKDAJtVk01UYg/view' },
  { category: 'Memoir', title: 'Still the Pain', subtitle: 'Shelle Crow · Memoir', url: 'https://drive.google.com/file/d/1SUBZx1xqVKav-5MtpIeJmsIHkRrFL09M/view' },
  { category: 'Drama', title: 'Natalies Traum', subtitle: 'Peter Märkert · German Drama', url: 'https://drive.google.com/file/d/1VFnDAlcZ1_80xGonG4SZFYBuXyJGdN1S/view' },
  { category: 'Author Reel', title: 'Author Showcase Reel', subtitle: 'Dirk Trost · German Market', url: 'https://drive.google.com/file/d/1hHLysz5FjwvU4Miy1nSCtlctZj64qzLL/view' },
  { category: 'Sci-Fi', title: 'Fer-Or', subtitle: 'Nicolas Antoniucci · French Sci-Fi', url: 'https://drive.google.com/file/d/1t4sZRyL158mBcN6ASKtA8gfmKj3YNP9C/view' },
  { category: 'Author Reel', title: 'Author Showcase Reel', subtitle: 'Jessica Bernier', url: 'https://drive.google.com/file/d/1tZoInzlscFnygC_J83yBEMAlaO52XjGf/view' },
]

export const FAQS = [
  {
    q: 'How quickly will I see results?',
    a: 'Most authors see measurable Goodreads and Amazon activity within 7–14 days of campaign launch. Full impact (sales lifts, ranking changes) typically shows within 30–45 days.',
  },
  {
    q: 'Do you work with authors in all languages?',
    a: 'Yes - we run native campaigns in French, German, English, and Spanish. We also support Dutch, Italian, and Portuguese markets through our partner network.',
  },
  {
    q: "What if I don't have an Amazon listing yet?",
    a: 'We can help set up your Amazon Author Central, KDP listing, and metadata from scratch as part of any package. Just mention it in your brief.',
  },
  {
    q: 'How does the guarantee work?',
    a: "If after 30 days we haven\u2019t delivered the agreed deliverables (views, placement, content), we refund proportionally or extend the campaign at no cost. Your investment is protected.",
  },
  {
    q: 'Can I see examples before I decide?',
    a: 'Absolutely - visit our Portfolio page for real campaign images, trailers, and verified Goodreads metrics from current clients.',
  },
]

export const TEAM_LEADS = [
  {
    name: 'Jake Stone',
    role: 'Director of Author Growth',
    focus: '📍 Strategy · Partnerships · Closing',
    body: "Jake oversees every author relationship at Buchaufstieg from first contact to final results. With a sharp eye for market positioning and a track record of turning invisible books into reader favourites, he leads the agency\u2019s growth strategy across markets worldwide. When you book a call, you speak with Jake.",
  },
  {
    name: 'Felicia Bele',
    role: 'Creative Director & Campaign Lead',
    focus: '📍 French Markets · Literary Campaigns · Author Branding',
    body: 'Felicia is the creative heartbeat of Buchaufstieg. A literary strategist fluent in the language of readers and algorithms alike, she designs every campaign with cinematic precision. She leads the French-speaking market and personally oversees each author\u2019s brand narrative from concept to execution.',
  },
]

export const AWARDS = [
  '🏆 Nicolas Antoniucci - Best Author of the Year, Brown University Department of Literary Arts - for CNIDARIA (2026)',
  '🏆 Nicolas Antoniucci - Recognized for Outstanding Literary Excellence and Impactful Storytelling',
  '🏆 Veronika A. Grager - Most Influential Author, Brown University Book Club (2026)',
]

export const CONTACT = {
  whatsapp: '+44 7473 953128',
  email: 'Buchaufstieg@protonmail.com',
  general: 'Buchaufstieg0@gmail.com',
}
