export default {
  faq: {
    aiBadge: 'AI-Powered Support',
    title: 'Ask Slay anything',
    subtitle: 'Get an instant answer from our AI assistant — trained on everything Slay does. Prefer to read? Browse the topics below.',
    browseByTopic: 'Or browse by topic',
    searchPlaceholder: 'Search questions...',
    noResults: 'No questions match "{query}".',
    ctaEyebrow: 'Still stuck?',
    ctaTitle: 'Still have questions?',
    ctaSubtitle: 'Ask our AI assistant or reach out and we\'ll help you get set up.',
    askAi: 'Ask AI Assistant',
    categories: [
      {
        label: 'Project Manager',
        items: [
          { q: 'Why do I need a project manager?', a: 'Open the right project with the right program in one click — no digging through folders or an IDE\'s "Open Folder" dialog.' },
          { q: 'How do I add a project?', a: 'Drag a project folder and a program shortcut into Slay — that is the whole setup.' },
          { q: 'Do I have to assign an IDE to every project?', a: 'No, attaching a default program to a project is optional, not required.' },
          { q: 'Can I pin a project I use often?', a: 'Yes, mark it as a favorite and it stays at the top of the list.' },
          { q: 'Can I search my projects?', a: 'Yes, filter the list by project name.' },
        ],
      },
      {
        label: 'Program Launcher',
        items: [
          { q: 'What is the program launcher for?', a: 'Keep every program you use daily in one place instead of hunting for shortcuts across your disk.' },
          { q: 'How do I add a program?', a: 'Drag its shortcut into the drop zone.' },
          { q: 'Can I launch several programs at once?', a: 'Yes, select the ones you need and start them all with a single click.' },
        ],
      },
      {
        label: 'Console Aliases',
        items: [
          { q: 'Why use aliases?', a: 'Save a long terminal command — an SSH connection, a build command — under a short name instead of retyping it every day.' },
          { q: 'Where do aliases work?', a: 'In any terminal on your machine through the CLI integration, not just inside Slay.' },
          { q: 'What CLI commands are available?', a: 'slay run <alias> — run a saved alias directly.\nslay alias list — pick an alias from an interactive list.\nslay project list [ide] — pick a project and open it.\nslay project run <project> [ide] — open a specific project directly.\nslay profile — show the active profile.\nslay profile list — pick a profile from a list.\nslay profile use <name> — switch to a profile by name.\nslay version — show the installed CLI version.\nslay help — show command help.' },
        ],
      },
      {
        label: 'Password Manager',
        items: [
          { q: 'What is it for?', a: 'A structured vault for your dev credentials, organized in folders — no more digging through chat history.' },
          { q: 'How is it encrypted?', a: 'Argon2id for key derivation and XChaCha20-Poly1305 for the data itself, entirely on your device.' },
          { q: 'What if I forget my master password?', a: 'A one-time recovery code is issued when you create it. Without that code, encrypted data cannot be recovered.' },
        ],
      },
      {
        label: 'SSH / SFTP',
        items: [
          { q: 'How does Slay guard against a spoofed server?', a: 'Host-key fingerprint verification: the key is remembered on first connect, and any later change triggers an explicit warning instead of a silent connection.' },
          { q: 'Can I move files between two of my own servers?', a: 'Yes, drag and drop — files travel server to server directly, not through your computer.' },
          { q: 'Is there a built-in terminal?', a: 'Yes, opened directly against the SSH connection — no separate terminal app needed.' },
          { q: 'Does it support port forwarding?', a: 'Yes, configured directly on the SSH connection.' },
        ],
      },
      {
        label: 'Profiles',
        items: [
          { q: 'What is a profile?', a: 'An isolated environment — projects, servers, passwords, aliases, and programs — kept separate for each context, like work, personal projects, or freelance clients.' },
        ],
      },
      {
        label: 'Subscription & Billing',
        items: [
          { q: 'Is there a free trial?', a: 'Yes, one month from registration.' },
          { q: 'How do I cancel?', a: 'From your account on the website, at any time — access continues until the end of the paid period.' },
          { q: 'Can I get a refund?', a: 'Yes, within 14 days of your first payment, processed by Paddle. Applies to the first purchase only, not renewals or unused time.' },
          { q: 'Who processes payments?', a: 'Paddle handles billing and tax, including VAT — charges may appear under Paddle\'s name.' },
        ],
      },
      {
        label: 'Security & Privacy',
        items: [
          { q: 'Can Slay see my passwords or private keys?', a: 'No. Encryption and decryption happen locally on your device. Private SSH keys are never uploaded — only the local file path is stored.' },
          { q: 'Do you sell my data?', a: 'No. Data is shared only with services required to run Slay — Paddle for payment, Google if you sign in with it, and infrastructure providers.' },
          { q: 'Do you track my IP or device?', a: 'No, not intentionally.' },
        ],
      },
      {
        label: 'General',
        items: [
          { q: 'Which platforms are supported?', a: 'macOS (Intel and Apple Silicon), Windows, and Linux.' },
          { q: 'Do I need an internet connection?', a: 'Yes, Slay does not support a fully offline mode.' },
          { q: 'How do updates work?', a: 'Automatically on launch, plus a manual "Update" button in your profile.' },
        ],
      },
    ],
  },
}
