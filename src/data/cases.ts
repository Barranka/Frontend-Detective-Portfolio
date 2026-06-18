import type { CaseItem } from '../types';

export const caseFiles: CaseItem[] = [
  {
    id: '001',
    categoryKey: 'performance',
    status: 'Solved',
    translations: {
      en: {
        title: 'Build Time: 40 min → 6 min',
        category: 'Performance',
        summary:
          'The UI library build was taking 40+ minutes, blocking every release cycle. I audited the full pipeline, identified bottlenecks in Webpack configuration and parallelization, and restructured the build to cut time down to 6–8 minutes — a 6× improvement that made daily releases practical.',
        highlights: ['Webpack optimization', 'pipeline parallelization', 'CI infrastructure'],
      },
      ru: {
        title: 'Время сборки: 40 мин → 6 мин',
        category: 'Производительность',
        summary:
          'Сборка UI-библиотеки занимала 40+ минут и блокировала каждый релизный цикл. Провела аудит пайплайна, нашла узкие места в конфигурации Webpack и параллелизации, реструктурировала сборку — время сократилось до 6–8 минут, то есть в 6 раз. Это сделало ежедневные релизы реальными.',
        highlights: ['оптимизация Webpack', 'параллелизация', 'CI-инфраструктура'],
      },
    },
  },
  {
    id: '002',
    categoryKey: 'architecture-migration',
    categoryTags: ['architecture', 'migrations'],
    status: 'Solved',
    translations: {
      en: {
        title: 'Vue 2 → Vue 3: Zero-Downtime Migration Across 7 Products',
        category: 'Migration / Architecture',
        summary:
          'Migrating a shared UI library used by 7 products is a high-risk operation — any breaking change cascades everywhere. I designed a hybrid architecture that allowed both Vue 2 and Vue 3 consumers to coexist during the transition, ran a full component audit, and migrated incrementally with no production regressions.',
        highlights: ['hybrid architecture', 'component audit', 'incremental migration strategy'],
      },
      ru: {
        title: 'Vue 2 → Vue 3: миграция без простоя в 7 продуктах',
        category: 'Миграция / Архитектура',
        summary:
          'Миграция общей UI-библиотеки, которую используют 7 продуктов — высокорисковая операция: любой breaking change ломает всё сразу. Спроектировала гибридную архитектуру, позволившую потребителям на Vue 2 и Vue 3 сосуществовать во время перехода, провела полный аудит компонентов и мигрировала поэтапно — без критических регрессий в продакшене.',
        highlights: ['гибридная архитектура', 'аудит компонентов', 'стратегия поэтапной миграции'],
      },
    },
  },
  {
    id: '003',
    categoryKey: 'performance',
    status: 'Solved',
    translations: {
      en: {
        title: 'Rendering 10,000+ Map Markers Without Freezing',
        category: 'Performance',
        summary:
          'A real-time map with ~10,000 interactive objects was causing severe UI freezes on every data update. I profiled the rendering pipeline, introduced a clustering strategy to reduce DOM load, optimized the underlying data structures, and implemented fine-grained update control — turning a broken experience into a smooth one.',
        highlights: ['render profiling', 'clustering strategy', 'data structure optimization', 'update batching'],
      },
      ru: {
        title: 'Рендеринг 10 000+ маркеров без фризов',
        category: 'Производительность',
        summary:
          'Карта в реальном времени с ~10 000 интерактивных объектов вызывала сильные фризы при каждом обновлении данных. Профилировала рендер-пайплайн, внедрила кластеризацию для снижения нагрузки на DOM, оптимизировала структуры данных и реализовала точечный контроль обновлений — интерфейс стал плавным.',
        highlights: ['профилирование рендера', 'кластеризация', 'оптимизация структур данных', 'батчинг обновлений'],
      },
    },
  },
  {
    id: '004',
    categoryKey: 'ci-cd',
    status: 'Solved',
    translations: {
      en: {
        title: 'Fully Automated Release Pipeline',
        category: 'CI/CD',
        summary:
          'Releases required manual steps that introduced delays and human error. I replaced the entire workflow with automated steps pipelines: linting, testing, versioning, and deployment all run without human touch. Release time dropped from hours to minutes, and error rate from manual steps dropped to zero.',
        highlights: ['zero-touch deploys', 'automated quality checks'],
      },
      ru: {
        title: 'Полностью автоматизированный релизный пайплайн',
        category: 'CI/CD',
        summary:
          'Релизы требовали ручных шагов, которые вносили задержки и человеческие ошибки. Заменила весь процесс на автоматизированные шаги: линтинг, тесты, версионирование и деплой запускаются без участия человека. Время релиза сократилось с часов до минут, количество ошибок из-за ручных действий — до нуля.',
        highlights: ['деплой без ручных шагов', 'автоматические quality checks'],
      },
    },
  },
  {
    id: '005',
    categoryKey: 'performance',
    status: 'Solved',
    translations: {
      en: {
        title: 'App Startup in 2 Seconds',
        category: 'Performance',
        summary:
          'The application was slow to load, hurting first impressions and retention. I ran a full bundle analysis, identified bloated dependencies and unnecessary synchronous imports, restructured the loading strategy, and brought startup time down to ~2 seconds — with measurable improvement in Core Web Vitals.',
        highlights: ['bundle analysis', 'dependency audit', 'lazy loading', 'Core Web Vitals'],
      },
      ru: {
        title: 'Запуск приложения за 2 секунды',
        category: 'Производительность',
        summary:
          'Приложение долго загружалось, что негативно сказывалось на первом впечатлении и удержании пользователей. Провела полный анализ бандла, нашла раздутые зависимости и лишние синхронные импорты, переработала стратегию загрузки — время запуска упало до ~2 секунд с измеримым улучшением Core Web Vitals.',
        highlights: ['анализ бандла', 'аудит зависимостей', 'lazy loading', 'Core Web Vitals'],
      },
    },
  },
  {
    id: '006',
    categoryKey: 'architecture',
    status: 'Solved',
    translations: {
      en: {
        title: 'Admin Panel Architecture from Scratch',
        category: 'Architecture',
        summary:
          'Built a frontend platform for order management from the ground up: chose Vue 3 with Feature-Sliced Design for scalability, implemented RBAC for role-based access control, and structured shared logic through composables. The result was a maintainable codebase that the team could extend without accumulating debt.',
        highlights: ['Vue 3', 'Feature-Sliced Design', 'RBAC', 'composables'],
      },
      ru: {
        title: 'Архитектура админ-панели с нуля',
        category: 'Архитектура',
        summary:
          'Построила фронтенд-платформу для управления заказами с нуля: выбрала Vue 3 с Feature-Sliced Design ради масштабируемости, реализовала RBAC для ролевого доступа, структурировала общую логику через composables. Результат — поддерживаемая кодовая база, которую команда расширяет без накопления долга.',
        highlights: ['Vue 3', 'Feature-Sliced Design', 'RBAC', 'composables'],
      },
    },
  },
  {
    id: '007',
    categoryKey: 'design-systems',
    categoryTags: ['design-systems', 'architecture'],
    status: 'Solved',
    translations: {
      en: {
        title: 'Web Components UI Adaptation for Angular Integration',
        category: 'Design Systems / Architecture',
        summary:
          'A UI library originally built with Vue components needed to be integrated into an Angular project. The requirement was to enable usage of components as Web Components without dependency on the Vue runtime. I adapted the library for Web Components by defining an isolation layer, enabling Shadow DOM/style encapsulation, and redesigning the icon and style system to work correctly outside the Vue ecosystem. As a result, the components became framework-independent and could be used in Angular without losing visual consistency or suffering style conflicts.',
        highlights: ['web components migration', 'framework-independent UI', 'style isolation', 'design system interoperability'],
      },
      ru: {
        title: 'Адаптация UI на Web Components для интеграции с Angular',
        category: 'Дизайн-системы / Архитектура',
        summary:
          'UI-библиотека, изначально построенная на Vue-компонентах, должна была быть интегрирована в Angular-проект. Требовалось обеспечить использование компонентов как Web Components без привязки к Vue runtime. Провела адаптацию библиотеки под Web Components: выделила слой изоляции, обеспечила Shadow DOM/стилевую инкапсуляцию и переработала систему иконок и стилей для корректной работы вне Vue-экосистемы. В результате компоненты стали фреймворк-независимыми и могли использоваться в Angular без потери визуальной консистентности и конфликтов стилей.',
        highlights: ['миграция на Web Components', 'фреймворк-независимый UI', 'изоляция стилей', 'интероперабельность дизайн-системы'],
      },
    },
  },
  {
    id: '010',
    categoryKey: 'migrations',
    categoryTags: ['migrations', 'performance'],
    status: 'Solved',
    translations: {
      en: {
        title: 'Webpack 4 → Webpack 5 Migration',
        category: 'Migrations / Performance',
        summary:
          'Legacy Webpack 4 build configuration slowed product development: slow builds, inconsistent environment behavior, and three separate configs for dev, prod, and npm package builds. I migrated each config to Webpack 5, handled breaking changes like asset modules, caching, and resolution rules, and verified every build end-to-end. After migration, environment drift disappeared and all builds behaved consistently.',
        highlights: ['webpack migration', 'build system upgrade', 'multi-config consistency', 'build stability'],
      },
      ru: {
        title: 'Webpack 4 → Webpack 5 миграция',
        category: 'Миграции / Производительность',
        summary:
          'Легаси-сборка на Webpack 4 сдерживала продукт: медленные сборки, нестабильность окружений и три разные конфигурации для dev, prod и npm-пакета. Я мигрировала все конфигурации на Webpack 5, учла breaking changes (asset modules, caching, resolution rules) и проверила каждый тип сборки. После миграции устранила расхождения между окружениями и привела систему к единому предсказуемому поведению.',
        highlights: ['webpack migration', 'обновление сборочной системы', 'согласованность многоконфигурной сборки', 'стабильность сборочного процесса'],
      },
    },
  },
];
