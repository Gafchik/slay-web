export default {
  routes: {
    download: 'Download',
    pricing: 'Prising',
    faq: 'Faq',
    contact_us: 'Contact Us',
    terms_privacy: 'Terms Privacy',
  },
  buttons: {
    /*join: 'Join',
    edit: 'Edit',
    save: 'Save',
    download: 'Download',
    login: 'Log In',
    logout: 'Log Out',
    registration: 'Registration',
    signUp: 'Sign Up',
    profile: 'profile',*/
    join: 'Присоединиться',
    download: 'Скачать',
    login: 'Войти',
    logout: 'Выйти',
    registration: 'Регистрация',
    signIn: 'Авторизоваться',
    signUp: 'Зарегистрироваться',
    profile: 'Профиль',
    edit: 'Редактировать',
    save: 'Сохранить'
  },
  inputData: {
    first_name: 'Имя',
    last_name: 'Фамилия',
    email: 'Почта',
    password: 'Пароль',
    password_confirmation: 'Подтвердите пароль',
  },
  validation: {
    required: 'This field is required',
    not_valid: 'This field is not valid',
    only_one_file_allowed: 'Only one file is allowed',
    password_mismatch: 'Passwords do not match',
    min_length: 'The minimum length is {min} characters',
  },
  status: {
    failed: 'Action failed',
    success: 'Action was successful',
  },
  sections: {
    home: {
      /*title: 'Smart Launcher for All Your devtools',
      subtitle: 'Your unified command center',
      description: 'Make your work more efficient and comfortable.',*/
      title: 'Умный центр управления инструментами разработчика',
      subtitle: 'Ваш единый командный центр',
      description: 'Сделайте свою работу более эффективной и комфортной',
    },
    about: {
      titleProject: 'Менеджер Проектов',
      descriptionProject: 'Открывайте все рабочие инструменты моментально',
      titleLauncher: 'Мгновенный запуск',
      descriptionLauncher: 'Запуск всего рабочего пространства одним кликом',
      titleAlias: 'Консольные Алиасы',
      descriptionAlias: 'Создавайте короткие алиасы для любых консольных операций',
      titlePassword: 'Менеджер паролей',
      descriptionPassword: 'Безопасное хранение и удобная организация паролей',
      titleServer: 'Работа с сервером',
      descriptionServer: 'Лёгкое подключение к серверу и полный контроль над файлами',
    },
    project: {
      title: 'Менеджер Проектов',
      description: 'Централизованное хранение всех проектов в едином пространстве для быстрого поиска и мгновенного начала работы в предпочитаемой среде',
    },
    launcher: {
      title: 'Мгновенный запуск',
      description: 'Мгновенно запускайте все необходимые инструменты и приложения для вашей комфортной работы в едином месте',
    },
    alias: {
      title: 'Консольные Алиасы',
      description: 'Создавайте короткие и запоминающиеся алиасы для любых сложных консольных команд',
      list: {
        titlePersonally: 'Персонализация и гибкость',
        descriptionPersonally: 'Настраивайте алиасы под свои нужды и рабочие процессы для максимального комфорта',
        titleSimple: 'Упрощение рутинных задач',
        descriptionSimple: 'Легко входите в Docker конейнер, одной командой запускайте локальные сервера, именуйте версии язиков програмирования',
        titleIncrease: 'Повышение эффективности',
        descriptionIncrease: 'Сократите время на ввод команд в разы и повысьте свою продуктивность в терминале',
      }
    },
    password: {
      title: 'Менеджер паролей',
      description: 'Безопасное хранение и удобная организация паролей',
      list: {
        titleCoding: 'Надежное AES-256-GCM шифрование',
        descriptionCoding: 'Максимальная защита ваших учетных данных с использованием передового стандарта шифрования.',
        titleFrame: 'Иерархическая структура папок',
        descriptionFrame: 'Организуйте пароли и конфиденциальные данные в удобные папки и подпапки.',
        titleDefense: 'Защита мастер-паролем',
        descriptionDefense: 'Ваши данные шифруются уникальным мастер-паролем, который знаете только вы.',
        titleSafety: 'Безопасное хранение любой информации',
        descriptionSafety: 'Храните не только пароли, но и заметки, ключи API и другие конфиденциальные данные.',
      }
    },
    sftp: {
      title: 'Работа с сервером',
      description: 'Передавайте файлы, управляйте содержимым и выполняйте операции без риска для данных благодаря защищённому соединению',
    },
    reviews: {
      title: 'Что говорят наши пользователи',
    },
    cta: {
      title: 'Готовы повысить свою продуктивность?',
      subtitle: 'Начните использовать Slay сегодня'
    }
  },
  account: {
    profile: {
      /*
      title: 'Profile',
      created_at: 'Created at',
      updated_at: 'Last update',
      */
      title: 'Профиль',
      created_at: 'Создан',
      updated_at: 'Обновлен',
    },
    login: {
      /*
      title: 'Login',
      reg_text: "If you don't have an account, you can",
      */
      title: 'Логин',
      reg_text: "Если у вас нет учетной записи, вы можете",
    },
    register: {
      /*
      title: 'Register',
      have_account_text: 'If you already have an account, you can',
      */
      title: 'Регистрация',
      have_account_text: 'Если у вас уже есть аккаунт, вы можете',
    },
  },
}
