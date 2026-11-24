export const navLinks = [
  { id: 'hero', label: 'Главная' },
  { id: 'about', label: 'Обо мне' },
  { id: 'skills', label: 'Навыки' },
  { id: 'projects', label: 'Проекты' },
  { id: 'experience', label: 'Опыт' },
  { id: 'contact', label: 'Контакты' },
];

export const hero = {
  greeting: 'Привет, я',
  name: 'Алексей Смирнов',
  role: 'Frontend Developer',
  description:
    'Создаю быстрые, доступные и визуально цельные интерфейсы. 5+ лет превращаю макеты в живой продукт на React.',
  ctaPrimary: 'Смотреть проекты',
  ctaSecondary: 'Связаться',
  stats: [
    { value: '5+', label: 'лет опыта' },
    { value: '40+', label: 'проектов' },
    { value: '12', label: 'командных релизов' },
  ],
};

export const about = {
  paragraphs: [
    'Я frontend-разработчик, специализируюсь на React и экосистеме вокруг него. Люблю чистую архитектуру, типизацию и интерфейсы, которые не ломаются под нагрузкой.',
    'Работал в продуктовых командах от финтеха до e-commerce: от прототипа на два спринта до крупных модулей с десятками тысяч пользователей в день. Часто беру на себя не только код, но и код-ревью, онбординг новичков и настройку CI.',
    'Вне работы пишу технические статьи и менторю джунов — считаю, что прозрачность знаний делает всю индустрию сильнее.',
  ],
  highlights: [
    { icon: '⚛️', title: 'React-экспертиза', text: 'Hooks, Suspense, оптимизация рендеров, SSR-основы' },
    { icon: '🎯', title: 'Внимание к деталям', text: 'Пиксель-perfect, a11y, метрики Core Web Vitals' },
    { icon: '🤝', title: 'Командная работа', text: 'Agile, код-ревью, наставничество, документация' },
  ],
};

export const skills = [
  {
    category: 'Ядро',
    items: [
      { name: 'JavaScript (ES2023)', level: 95 },
      { name: 'TypeScript', level: 88 },
      { name: 'HTML5 / CSS3', level: 92 },
    ],
  },
  {
    category: 'Фреймворки и библиотеки',
    items: [
      { name: 'React', level: 95 },
      { name: 'Redux Toolkit / Zustand', level: 85 },
      { name: 'Next.js', level: 78 },
      { name: 'Vue 3', level: 65 },
    ],
  },
  {
    category: 'Инструменты и инфраструктура',
    items: [
      { name: 'Vite / Webpack', level: 85 },
      { name: 'Git / GitLab CI', level: 88 },
      { name: 'Jest / Testing Library', level: 80 },
      { name: 'Figma → код', level: 82 },
    ],
  },
];

export const projects = [
  {
    title: 'FinFlow — дашборд личных финансов',
    description:
      'SPA на React + TypeScript с графиками транзакций, офлайн-режимом и синхронизацией в фоне. Сократил время первого рендера с 3.2s до 1.1s.',
    tags: ['React', 'TypeScript', 'Chart.js', 'PWA'],
    gradient: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
    icon: '💸',
    links: { live: '#', code: '#' },
  },
  {
    title: 'MarketHub — витрина e-commerce',
    description:
      'Каталог на 10k+ товаров с виртуализацией списка, SSR на Next.js и предсказуемым DePV < 2%. Ведёт за собой дизайн-систему из 40 компонентов.',
    tags: ['Next.js', 'Zustand', 'Storybook', 'SSR'],
    gradient: 'linear-gradient(135deg, #10b981 0%, #0ea5e9 100%)',
    icon: '🛍️',
    links: { live: '#', code: '#' },
  },
  {
    title: 'TaskFlow — kanban для команды',
    description:
      'Реалтайм-доска задач на WebSocket с оптимистичными обновлениями и drag-and-drop. Покрытие тестами 87%.',
    tags: ['React', 'WebSocket', 'dnd-kit', 'Jest'],
    gradient: 'linear-gradient(135deg, #f43f5e 0%, #f97316 100%)',
    icon: '📋',
    links: { live: '#', code: '#' },
  },
  {
    title: 'A11y Kit — библиотека доступных компонентов',
    description:
      'Открытая библиотека headless-компонентов с полной поддержкой клавиатуры и скринридеров. 1.2k звёзд на GitHub.',
    tags: ['TypeScript', 'IEEE', 'a11y', 'Open Source'],
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
    icon: '♿',
    links: { live: '#', code: '#' },
  },
];

export const experience = [
  {
    period: '2022 — настоящее время',
    role: 'Senior Frontend Developer',
    company: 'TechLabs',
    points: [
      'Веду разработку клиентской части основного продукта: архитектура, релизы, менторство.',
      'Сократил bundle на 38% через code splitting и tree-shaking аудиты.',
      'Внедрил e2e-тесты (Playwright) в CI — регрессии на проде упали втрое.',
    ],
  },
  {
    period: '2020 — 2022',
    role: 'Frontend Developer',
    company: 'Softline Studio',
    points: [
      'Разрабатывал SPA для клиентов e-commerce и медиа на React + Redux.',
      'Собрал внутренний UI-kit, ускоривший сборку новых экранов вдвое.',
    ],
  },
  {
    period: '2019 — 2020',
    role: 'Junior Frontend Developer',
    company: 'Digital Wave',
    points: [
      'Вёрстка адаптивных лендингов и интеграция с REST API.',
      'Автоматизировал деплой статических сайтов через GitLab CI.',
    ],
  },
];

export const contact = {
  title: 'Давайте работать вместе',
  text: 'Открыт к интересным продуктовым задачам, фрилансу и просто к разговору о фронтенде. Отвечаю в течение одного рабочего дня.',
  email: 'alexey.smirnov.dev@example.com',
  links: [
    { label: 'GitHub', href: 'https://github.com', icon: '🐙' },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: '💼' },
    { label: 'Telegram', href: 'https://t.me', icon: '✈️' },
  ],
};

export const footer = {
  year: new Date().getFullYear(),
  author: 'Алексей Смирнов',
};
