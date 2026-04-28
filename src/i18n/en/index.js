export default {
  routes: {
    download: 'Download',
    pricing: 'Prising',
    faq: 'FAQ',
    contacts: 'Contact Us',
    terms: 'Terms of Services',
    privacyPolicy: 'Privacy Policy'
  },
  buttons: {
    join: 'Join',
    download: 'Download',
    downloadFor: 'Download for',
    login: 'Log in',
    logout: 'Log out',
    registration: 'Registration',
    signIn: 'Sign in',
    signUp: 'Sign up',
    profile: 'Profile',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel',
    send: 'Send'
  },
  inputData: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    password: 'Password',
    passwordConfirmation: 'Confirm password',
    name: 'Name',
    message: 'Message',
  },
  validation: {
    required: 'This field is required',
    notValid: 'This field is not valid',
    onlyOneFileAllowed: 'Only one file is allowed',
    passwordMismatch: 'Passwords do not match',
    minLength: 'The minimum length is {min} characters',
  },
  status: {
    failed: 'Action failed',
    success: 'Action was successful',
  },
  sections: {
    home: {
      title: 'Smart developer tools control center',
      subtitle: 'Your all-in-one command center',
      description: 'Make your work more efficient and comfortable',
    },
    about: {
      titleProject: 'Project Manager',
      descriptionProject: 'Open all your tools instantly',
      titleLauncher: 'Instant launch',
      descriptionLauncher: 'Launch your entire workspace with one click',
      titleAlias: 'Console aliases',
      descriptionAlias: 'Create short aliases for any console operations',
      titlePassword: 'Password manager',
      descriptionPassword: 'Secure storage and easy password organization',
      titleServer: 'Server management',
      descriptionServer: 'Easy server connection and full control over files',
    },
    project: {
      title: 'Project Manager',
      description: 'Centralized storage of all projects in one place for quick access and instant start in your preferred environment',
    },
    launcher: {
      title: 'Instant launch',
      description: 'Instantly launch all the tools and applications you need for a comfortable workflow in one place',
    },
    alias: {
      title: 'Console aliases',
      description: 'Create short and memorable aliases for any complex console commands',
      list: [
        {
          title: 'Customization and flexibility',
          description: 'Customize aliases to fit your needs and workflows for maximum comfort'
        },
        {
          title: 'Simplifying routine tasks',
          description: 'Easily access Docker containers, launch local servers with a single command, and manage programming language versions',
        },
        {
          title: 'Increased efficiency',
          description: 'Reduce the time spent typing commands and boost your terminal productivity',
        },
      ],
    },
    password: {
      title: 'Password manager',
      description: 'Secure storage and easy password organization',
      list: {
        titleCoding: 'Reliable AES-256-GCM encryption',
        descriptionCoding: 'Maximum protection of your credentials using advanced encryption standards.',
        titleFrame: 'Hierarchical folder structure',
        descriptionFrame: 'Organize passwords and sensitive data into convenient folders and subfolders.',
        titleDefense: 'Master password protection',
        descriptionDefense: 'Your data is encrypted with a unique master password known only to you.',
        titleSafety: 'Secure storage of any information',
        descriptionSafety: 'Store not only passwords, but also notes, API keys, and other sensitive data.',
      }
    },
    sftp: {
      title: 'Server management',
      description: 'Transfer files, manage content, and perform operations without risking your data thanks to a secure connection',
    },
    reviews: {
      title: 'What our users say',
      list: [
        {
          author: 'Alexey K.',
          role: 'Frontend Developer (Windows)',
          text: 'Launching my work environment used to take forever. Now with Slay, I start working with one click, saving 10 minutes every morning! It\'s a real productivity lifesaver.',
          feature: 'Instant launch',
          date: '07.01.2026'
        },
        {
          author: 'Ivan T.',
          role: 'PHP/Laravel developer',
          text: 'Console aliases in Slay changed my work with PHP versions and Docker. Quick access to containers, switching between PHP versions on Windows — everything has become much easier. No more long commands!',
          feature: 'Console aliases',
          date: '28.05.2026'
        },
        {
          author: 'Maria S.',
          role: 'Freelance developer',
          text: 'As a freelancer with dozens of projects, I constantly faced chaos. Slay’s project and password manager brought everything in order. All projects are organized, and passwords are securely stored. My productivity has skyrocketed!',
          feature: 'Project Manager & Password',
          date: '19.02.2026'
        },
        {
          author: 'Olga P.',
          role: 'QA Engineer',
          text: 'For testing, I need dozens of accounts (admin, user, manager). Slay’s password manager allows me to keep them all organized, switch quickly, and always have access to the necessary credentials. Indispensable!',
          feature: 'Password manager',
          date: '15.06.2026'
        },
        {
          author: 'Dmitry V.',
          role: 'Backend developer',
          text: 'Storing passwords for Stripe, Mailgun, Mailtrap, and many servers is a pain. Slay not only stores them securely, but console aliases have also sped up my access to servers and execution of complex commands. It’s a must-have for backend.',
          feature: 'Console aliases & Password manager',
          date: '03.03.2026'
        }
      ]
    },
    cta: {
      title: 'Ready to increase your productivity?',
      subtitle: 'Start using Slay today'
    }
  },
  account: {
    profile: {
      title: 'Profile',
      created_at: 'Created',
      updated_at: 'Updated',
    },
    login: {
      title: 'Login',
      reg_text: "If you don’t have an account, you can",
    },
    register: {
      title: 'Registration',
      have_account_text: 'If you already have an account, you can',
    },
  },
  download: {
    title: 'Download SLAY',
    subtitle: 'Choose a platform and start developing faster',
    instruction: 'Instructions',
    list: [
      {
        title: 'Download and install SLAY',
      },
      {
        title: 'Run <code>slay --help</code> to check the command line interface',
      },
      {
        title: 'Enjoy quick access to developer tools',
      },
    ]
  },
  text: {
    allRightsReserved: 'All rights reserved',
    haveQuestion: "Have a question or need help? We're here for you",
  }
}
