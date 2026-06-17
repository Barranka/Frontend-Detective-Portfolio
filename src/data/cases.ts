import type { CaseItem } from '../types';

export const caseFiles: CaseItem[] = [
  {
    id: '001',
    status: 'Solved',
    translations: {
      en: {
        title: 'Build Time: 40 min → 6 min',
        category: 'Developer Experience',
        summary:
          'The UI library build was taking 40+ minutes, blocking every release cycle. I audited the full pipeline, identified bottlenecks in Webpack configuration and parallelization, and restructured the build to cut time down to 6–8 minutes — a 6× improvement that made daily releases practical.',
        highlights: ['Webpack optimization', 'pipeline parallelization', 'CI infrastructure'],
      },
      ru: {
        title: 'Время сборки: 40 мин → 6 мин',
        category: 'Developer Experience',
        summary:
          'Сборка UI-библиотеки занимала 40+ минут и блокировала каждый релизный цикл. Провела аудит пайплайна, нашла узкие места в конфигурации Webpack и параллелизации, реструктурировала сборку — время сократилось до 6–8 минут, то есть в 6 раз. Это сделало ежедневные релизы реальными.',
        highlights: ['оптимизация Webpack', 'параллелизация', 'CI-инфраструктура'],
      },
    },
  },
  {
    id: '002',
    status: 'Solved',
    translations: {
      en: {
        title: 'Vue 2 → Vue 3: Zero-Downtime Migration Across 7 Products',
        category: 'Architecture / Migration',
        summary:
          'Migrating a shared UI library used by 7 products is a high-risk operation — any breaking change cascades everywhere. I designed a hybrid architecture that allowed both Vue 2 and Vue 3 consumers to coexist during the transition, ran a full component audit, and migrated incrementally with no production regressions.',
        highlights: ['hybrid architecture', 'component audit', 'incremental migration strategy'],
      },
      ru: {
        title: 'Vue 2 → Vue 3: миграция без простоя в 7 продуктах',
        category: 'Архитектура / миграция',
        summary:
          'Миграция общей UI-библиотеки, которую используют 7 продуктов — высокорисковая операция: любой breaking change ломает всё сразу. Спроектировала гибридную архитектуру, позволившую потребителям на Vue 2 и Vue 3 сосуществовать во время перехода, провела полный аудит компонентов и мигрировала поэтапно — без критических регрессий в продакшене.',
        highlights: ['гибридная архитектура', 'аудит компонентов', 'стратегия поэтапной миграции'],
      },
    },
  },
  {
    id: '003',
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
    status: 'Solved',
    translations: {
      en: {
        title: 'App Startup in 2 Seconds',
        category: 'Frontend Performance',
        summary:
          'The application was slow to load, hurting first impressions and retention. I ran a full bundle analysis, identified bloated dependencies and unnecessary synchronous imports, restructured the loading strategy, and brought startup time down to ~2 seconds — with measurable improvement in Core Web Vitals.',
        highlights: ['bundle analysis', 'dependency audit', 'lazy loading', 'Core Web Vitals'],
      },
      ru: {
        title: 'Запуск приложения за 2 секунды',
        category: 'Frontend Performance',
        summary:
          'Приложение долго загружалось, что негативно сказывалось на первом впечатлении и удержании пользователей. Провела полный анализ бандла, нашла раздутые зависимости и лишние синхронные импорты, переработала стратегию загрузки — время запуска упало до ~2 секунд с измеримым улучшением Core Web Vitals.',
        highlights: ['анализ бандла', 'аудит зависимостей', 'lazy loading', 'Core Web Vitals'],
      },
    },
  },
  {
    id: '006',
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
    status: 'Solved',
    translations: {
      en: {
        title: 'One Design System for Seven Products',
        category: 'Design Systems',
        summary:
          'Seven products were drifting apart visually and technically, with duplicated components and no shared standards. I designed and rolled out a unified design system based on Atomic Design principles — standardizing components, establishing documentation, and giving teams a single source of truth for UI.',
        highlights: ['Atomic Design', 'component standardization', 'cross-team adoption', 'documentation'],
      },
      ru: {
        title: 'Единая дизайн-система для 7 продуктов',
        category: 'Дизайн-системы',
        summary:
          'Семь продуктов расходились визуально и технически: компоненты дублировались, общих стандартов не было. Спроектировала и внедрила единую дизайн-систему на основе Atomic Design — стандартизировала компоненты, выстроила документацию и дала командам единый источник правды для UI.',
        highlights: ['Atomic Design', 'стандартизация компонентов', 'внедрение в командах', 'документация'],
      },
    },
  },
  {
    id: '010',
    status: 'Solved',
    translations: {
      en: {
        title: 'High-Frequency WebSocket Streams at Scale',
        category: 'Realtime Systems',
        summary:
          'A high-load dashboard was receiving hundreds of WebSocket events per second, causing the UI to lag and state to desync. I redesigned the event processing layer with a reactive architecture, introduced stream throttling and selective state updates — making realtime actually real.',
        highlights: ['WebSocket optimization', 'reactive architecture', 'stream throttling', 'state management'],
      },
      ru: {
        title: 'Высокочастотные WebSocket-потоки на высоких нагрузках',
        category: 'Realtime Systems',
        summary:
          'Высоконагруженный дашборд получал сотни WebSocket-событий в секунду — UI лагал, состояние рассинхронизировалось. Переработала слой обработки событий на реактивной архитектуре, внедрила троттлинг потоков и точечные обновления состояния — realtime стал по-настоящему реальным.',
        highlights: ['оптимизация WebSocket', 'реактивная архитектура', 'троттлинг потоков', 'управление состоянием'],
      },
    },
  },
];
