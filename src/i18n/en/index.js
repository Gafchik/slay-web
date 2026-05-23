export default {
  routes: {
    download: 'Download',
    pricing: 'Pricing',
    faq: 'FAQ',
    contacts: 'Contact Us',
    terms: 'Terms of Services',
    privacyPolicy: 'Privacy Policy',
    refundPolicy: 'Refund Policy',
  },
  buttons: {
    join: 'Join',
    download: 'Download {data}',
    downloadFor: 'Download for',
    login: 'Log in',
    logout: 'Log out',
    registration: 'Registration',
    signIn: 'Sign in',
    signUp: 'Sign up',
    profile: 'Profile',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel {data}',
    send: 'Send',
    delete: 'Delete',
    start: 'Start {data}',
    upgrade: 'Upgrade {data}',
    choose: 'Choose {data}',
    renew: 'Renew {data}',
    confirm: 'Confirm',
    open: 'Open {data}'
  },
  inputData: {
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    password: 'Password',
    passwordConfirmation: 'Confirm password',
    name: 'Name',
    message: 'Message',
    agreeTos: 'I have read and agree to the'
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
      title: 'Smart Launcher for All Your devtools',
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
      list: [
        {
          key: 'coding',
          title: 'Reliable AES-256-GCM encryption',
          description: 'Maximum protection of your credentials using advanced encryption standards.'
        },
        {
          key: 'frame',
          title: 'Hierarchical folder structure',
          description: 'Organize passwords and sensitive data into convenient folders and subfolders.'
        },
        {
          key: 'defense',
          title: 'Master password protection',
          description: 'Your data is encrypted with a unique master password known only to you.'
        },
        {
          key: 'safety',
          title: 'Secure storage of any information',
          description: 'Store not only passwords, but also notes, API keys, and other sensitive data.'
        }
      ]
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
      trial_ends_at: 'Trial period end',
      profileInfo: 'Profile information',
      profileDescription: 'View and manage your personal information.',
      profileAction: 'Account Actions',
      profileActionDescription: 'Manage your account settings.',
      profileRemove: 'Danger Zone',
      profileRemoveDescription: 'Irreversible and destructive actions',
      deleteAccount: 'Delete Account',
      deleteAccountDescription: 'Permanently delete your account and all of your data',
      deleteConfirm: {
        title: 'Deleting an account',
        text: 'Are you sure you want to permanently delete your account?',
      }
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
  pricing: {
    freeTrial: 'Free Trial',
    subTitle: 'Choose your plan and get full access to all SLAY features',
    info: {
      free: 'after 1 month free',
      list: [
        {
          key: 'full',
          title: 'Full access to all features'
        },
        {
          key: 'cancel',
          title: 'Cancel anytime'
        },
        {
          key: 'period',
          title: 'Access until the end of the billing period'
        },
        {
          key: 'renewal',
          title: 'Automatic renewal'
        },
        {
          key: 'discount',
          title: 'Save {discount} - only {discountPrice}'
        },
      ],
      taxes: 'Taxes may be applied at checkout based on your location.',
    },
    features: {
      title: 'Everything included',
      description: 'Full access to all SLAY features in every plan',
      list: [
        {
          icon: 'folder',
          title: 'Project Manager'
        },
        {
          icon: 'rocket_launch',
          title: 'Launcher workspace'
        },
        {
          icon: 'terminal',
          title: 'Console aliases'
        },
        {
          icon: 'lock',
          title: 'Password Manager'
        },
        {
          icon: 'cloud',
          title: 'Servers'
        },
      ],
    },
    details: [
      {
        icon: 'calendar_month',
        title: 'Start with a 1-month free trial.',
        description: 'The trial version starts from the moment of registration.',
      },
      {
        icon: 'cached',
        title: 'After the trial period ends, access to the service will require payment.',
        description: 'After payment, access will be restored without data loss.',
      },
      {
        icon: 'free_cancellation',
        title: 'You can cancel anytime.',
        description: 'Access remains active until the end of the billing period.',
      },
      {
        icon: 'safety_check',
        title: 'Secure payments processed by Paddle.',
        description: 'Your payment information is safe and never stored by us.',
      },
      {
        icon: 'lock',
        title: 'We use end-to-end encryption.',
        description: 'To keep your data safe and private.',
      },
    ],
    cards: {
      monthly: {
        title: "Monthly",
        subtitle: "Billed monthly",
        price: "$7.99",
        discount: "",
        discountPrice: "",
        badge: "",
        period: 'month'
      },
      sixMonths: {
        title: "6 Months",
        subtitle: "Billed semiannually",
        price: "$41.94",
        discount: "12%",
        discountPrice: "$6.99/month",
        badge: "",
        period: 'every 6 month',
      },
      yearly: {
        title: "Yearly",
        subtitle: "Billed annually",
        price: "$71.88",
        discount: "25%",
        discountPrice: "$5.99/month",
        badge: "Best Value",
        period: 'per year'
      }
    },
  },
  subscription: {
    title: 'Subscription',
    subtitle: 'Manage your subscription and billing',
    trial: {
      title: 'Trial Access',
      subtitle: 'You’re currently on a free trial.',
      description: 'Enjoy full access to all SLAY features and updates.',
      endDate: 'Ends on',
    },
    active: {
      title: 'Subscription',
      description: 'You have full access to all SLAY features and updates.',
      startDate: 'Started on',
      renewDate: 'Next renewal',
    },
    canceled: {
      title: 'No Active Plan',
      subtitle: 'You currently don’t have an active subscription.',
      description: 'Choose a plan to restore full access to SLAY features and updates.',
      endDate: 'Access ended on',
      status: 'Access status',
      isStatus: 'Limited',
      statusDescription: 'Premium features are locked',
      trial: {
        subtitle: 'Your free trial has ended.',
        description: 'Choose a plan to continue using SLAY.',
      },
      isBilling: {
        subtitle: 'Your subscription is no longer active.',
        description: 'Renew your plan to restore full access.',
      },
    },
    history: {
      title: 'Billing History',
      subTitle: 'View your past transactions and invoices.',
      table: {
        date: 'Date',
        invoice: 'Invoice',
        amount: 'Amount',
        tax: 'Tax',
        status: 'Status',
      }
    },
    cancel: {
      title: 'Cancel subscription?',
      description: 'Your subscription will remain active until the end of the current billing period. After that, access will be revoked unless you renew.'
    },
    thanks: {
      title: 'Thanks for your purchase',
      subtitle: 'Your subscription has been activated.',
      welcome: 'Welcome to SLAY!',
      description: 'You now have full access to all SLAY features.',
      info: {
        title: 'Subscription details',
        list: [
          {
            title: 'Plan',
          },
          {
            title: 'Next renewal',
          },
          {
            title: 'Amount paid',
          },
          {
            title: 'Payment method',
          },
        ]
      },
      receipt: 'Receipt sent to {data}',
      transaction: 'Transaction ID: {data}',
      tax: 'Incl. {data} tax'
    }
  },
  badges: {
    trial: 'Free Trial',
    active: 'Active',
    noActive: 'No Active Plan',
    best: 'Best Value'
  },
  text: {
    allRightsReserved: 'All rights reserved',
    haveQuestion: "Have a question or need help? We're here for you",
    and: 'and',
    plan: 'Plan',
    billed: 'Billed {data}',
    charged: 'Charged {data}',
    monthly: 'monthly',
    semiannually: 'semiannually',
    annually: 'annually',
  },
}
