import faq from './faq.js'
import assistant from './assistant.js'

export default {
  ...faq,
  ...assistant,
  routes: {
    faq: 'FAQ',
    pricing: 'Pricing',
    contacts: 'Contact Us',
    terms: 'Terms of Services',
    privacyPolicy: 'Privacy Policy',
    refundPolicy: 'Refund Policy',
    password: 'Password',
    feature: 'Features',
  },
  buttons: {
    download: 'Download {data}',
    downloadFor: 'Download for',
    login: 'Log in',
    logout: 'Log out',
    signUp: 'Sign up',
    profile: 'Profile',
    edit: 'Edit',
    save: 'Save',
    cancel: 'Cancel {data}',
    send: 'Send',
    delete: 'Delete',
    start: 'Start {data}',
    choose: 'Choose {data}',
    renew: 'Renew {data}',
    confirm: 'Confirm',
    continue: 'Continue',
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
    passwordMismatch: 'Passwords do not match',
    minLength: 'The minimum length is {min} characters',
  },
  pages: {
    home: {
      title: {
        note: 'Smart Launcher',
        title: 'Open your full dev workspace in seconds',
        description: 'Keep projects, apps, comments, passwords, and answers accessible in one place. Start working without hunting for tools, links, and credentials.',
        list: [
          {
            title: 'Project Management',
            description: 'Keep team projects, links, and context organized. Switch between workspaces without losing the thread.'
          },
          {
            title: 'Saved Access',
            description: 'Store passwords, credentials, and key links safely. Find what you need without digging through chats.'
          },
          {
            title: 'Routine Simplified',
            description: 'Reduce repeated setup and daily switching. Spend less time preparing and more time working.'
          },
          {
            title: 'Instant Launch',
            description: 'Open the right tools, apps, and tabs together. Start the day without rebuilding your setup.'
          },
        ],
      },
      workspace: {
        note: 'Workspace Control',
        title: 'Everything your project needs, always within reach',
        description: 'Stop searching for projects, reopening tools, and copying commands from old notes. Slay keeps your workspace organized and ready to work from a single place.',
        society: {
          title: 'Perfect for:',
          list: [
            {
              title: 'Developers',
              description: 'Launch your full development environment in one click.'
            },
            {
              title: 'QA Engineers',
              description: 'Switch between testing environments and projects faster.'
            },
            {
              title: 'Project Managers',
              description: 'Keep project resources, links, and documentation organized.'
            },
            {
              title: 'DevOps Engineers',
              description: 'Manage tools, credentials, and environments without repetitive setup.'
            },
          ],
        }
      },
      distinction: {
        note: 'Workflow Cost',
        title: 'How much does your scattered workflow cost you?',
        description: 'Instead of paying for separate launchers, vaults, SSH clients, and command tools, get one workspace that brings them together.',
        competitors: {
          title: 'Your current workflow receipt',
          subtitle: 'Total: $155-$371/year',
          list: [
            {
              title: 'SSH/SFTP client',
              price: '$120/year'
            },
            {
              title: 'Password vault',
              price: '$36/year'
            },
            {
              title: 'Terminal productivity',
              price: '$180/year'
            },
            {
              title: 'Workspace launcher',
              price: '$60/year'
            },
            {
              title: 'Manual setup',
              price: 'every week'
            },
            {
              title: 'Context switching',
              price: 'every day'
            },
          ],
        },
        features: {
          title: 'Slay workspace',
          subtitle: 'monthly',
          list: [
            {
              title: 'Projects',
            },
            {
              title: 'Apps',
            },
            {
              title: 'Commands',
            },
            {
              title: 'Credentials',
            },
            {
              title: 'Servers',
            },
            {
              title: 'SSH/SFTP',
            },
          ],
        }
      },
      subsequence: {
        note: 'One-click Workflow',
        title: 'How many steps before work actually starts?',
        description: 'Every project starts with folders, apps, credentials, servers, commands, and context. Slay turns that setup into one workspace launch.',
        before: {
          note: 'Before Slay',
          badge: 'Repeat every morning',
          list: [
            {
              title: 'Find the project folder',
            },
            {
              title: 'Open the right IDE',
            },
            {
              title: 'Launch required apps',
            },
            {
              title: 'Search for credentials',
            },
            {
              title: 'Connect to SSH/SFTP',
            },
            {
              title: 'Run saved commands',
            },
            {
              title: 'Reopen notes and context',
            },
          ],
        },
        after: {
          note: 'With Slay',
          title: 'Start Workspace',
          subtitle: '1 Workspace Launch',
          list: [
            {
              title: 'Projects',
            },
            {
              title: 'Apps',
            },
            {
              title: 'Commands',
            },
            {
              title: 'Credentials',
            },
            {
              title: 'Servers',
            },
            {
              title: 'SSH/SFTP',
            },
            {
              title: 'Context',
            },
          ],
        }
      },
      aliases: {
        note: 'Smart Commands',
        title: 'Command aliases',
        description: 'Long commands shouldn\'t live in your head. If you frequently copy-paste commands from notes, terminal history, or README, it\'s likely the routine is taking up too much of your attention. In Slay, you can save commands as short aliases and run them whenever you need them.',
        before: {
          badge: 'Repeat every day',
          description: 'сd /Users /find /var/log -type f -name \'*.log\' -mtime +30 -exec gzip -9 {} \\; && tar -czvf /backup/logs_$(date +%Y%m%d).tar.gz /var/log/*.gz | tee -a /var/log/backup.log | mail -s "Backup done $(date +%Y-%m-%d)" admin@example.com && echo \'Done\' >> /var/log/cron.log'
        },
        after: {
          badge: 'Simple Everyday',
          description: 'Slay_build_linux',
        },
      },
      passwords: {
        note: 'Project Credentials',
        title: 'Password manager',
        subtitle: 'Project access is too often scattered across chats, notes, and the browser',
        description: 'Passwords, API keys, test accounts, and access to admin panels and services quickly become a mess. Slay helps keep sensitive data close to your project and protects it with a master password and encryption.',
        list: [
          {
            icon: 'shield',
            title: 'Reliable AES-256-GCM encryption',
            subtitle: 'Maximum protection of your credentials using advanced encryption standards.'
          },
          {
            icon: 'lock',
            title: 'Master password protection',
            subtitle: 'Your data is encrypted with a unique master password known only to you.'
          },
          {
            icon: 'folder',
            title: 'Hierarchical folder structure',
            subtitle: 'Organize passwords and sensitive data into convenient folders and subfolders.'
          },
          {
            icon: 'verified_user',
            title: 'Secure storage of any information',
            subtitle: 'Store not only passwords, but also notes, API keys, and other sensitive data.'
          },
        ]
      },
      cta: {
        title: 'Server management',
        description: 'Project access is too often scattered across chats, notes, and the browser Finding access, opening the client, connecting, navigating to the desired folder, and transferring a file is a repeatable routine. Slay simplifies connecting to the server and working with project files from a single workspace.',
        banner: {
          title: 'Ready to stop losing time before the work even starts?',
          subtitle: 'Start using Slay today',
        },
      },
    },
    features: {
      projectsManager: {
        title: 'Projects Manager',
        subtitle: "Finding a project shouldn't be part of development",
        description: "You shouldn't have to remember where every project is stored or search through your IDE's recent projects. Slay keeps all your work within easy reach.",
        list: [
          {
            title: 'ADD YOUR PROJECTS',
            description: 'Drop your project folders into Slay and keep them organized by profile. No more searching for the right directory before work starts.',
          },
          {
            title: 'CHOOSE YOUR IDE',
            description: 'Add the apps you use to open project folders — VS Code, WebStorm, PhpStorm, Cursor, or any other editor. Keep them in your “Open with” list and choose the right tool when launching a project from Slay.',
          },
          {
            title: 'CREATE WORK PROFILES',
            description: 'Group projects by client, team, or workflow. Switch profiles when your context changes and keep the right projects, apps, commands, and access ready for work.',
          },
          {
            title: 'Project settings',
            description: 'Set the preferred app for each project. Choose the IDE or editor once, and Slay will automatically open the project with that editor next time.',
          },
        ],
        cta: {
          title: 'Project Access',
          description: 'Connect to the right server without re-entering IPs, ports, or passwords. Keep project folders, access details, saved commands, and server connections together in one workspace. Rename projects inside Slay to match your workflow — your original folders on the computer stay unchanged.'
        }
      }
    }
  },
  sections: {
    home: {
      title: 'Smart Launcher for All Your devtools',
    },
  },
  account: {
    profile: {
      title: 'Profile',
      created_at: 'Created',
      updated_at: 'Updated',
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
      title: 'Welcome to SLAY',
      reg_text: "Don’t you have an account?",
      forgotPassword: 'Forgot password?',
    },
    register: {
      title: 'Registration',
      have_account_text: 'If you already have an account, you can',
    },
    forgotPassword: {
      title: 'Reset your password',
      description: 'Enter your email and we will send you a password reset link.',
      submit: 'Send reset link',
    },
    resetPassword: {
      title: 'Create a new password',
      description: 'Choose a new password for your Slay account.',
      submit: 'Save new password',
      invalidLink: 'This reset link is incomplete or invalid. Request a new one.',
      backToLogin: 'Back to login',
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
        title: 'Run <code>slay help</code> to check the command line interface',
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
        discount: "",
        badge: "",
        period: 'month'
      },
      sixMonths: {
        title: "6 Months",
        subtitle: "Billed semiannually",
        discount: "12%",
        discountPrice: "$6.99/month",
        badge: "",
        period: 'every 6 month',
      },
      yearly: {
        title: "Yearly",
        subtitle: "Billed annually",
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
  },
  text: {
    allRightsReserved: 'All rights reserved',
    haveQuestion: "Have a question or need help? We're here for you",
    and: 'and',
    charged: 'Charged {data}',
    monthly: 'monthly',
    semiannually: 'semiannually',
    annually: 'annually',
  },
}
