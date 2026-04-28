export default {
  routes: {
    download: 'Scarica',
    pricing: 'Prezzi',
    faq: 'FAQ',
    contacts: 'Contattaci',
    terms: 'Termini e Privacy',
    privacyPolicy: 'Informativa privacy'
  },
  buttons: {
    join: 'Unisciti',
    download: 'Scarica',
    downloadFor: 'Scarica per',
    login: 'Accedi',
    logout: 'Esci',
    registration: 'Registrazione',
    signIn: 'Accedi',
    signUp: 'Registrati',
    profile: 'Profilo',
    edit: 'Modifica',
    save: 'Salva',
    cancel: 'Annulla',
    send: 'Inviare'
  },
  inputData: {
    firstName: 'Nome',
    lastName: 'Cognome',
    email: 'Email',
    password: 'Password',
    passwordConfirmation: 'Conferma la password',
    name: 'Nome',
    message: 'Messaggio',
  },
  validation: {
    required: 'Questo campo è obbligatorio',
    notValid: 'Questo campo non è valido',
    onlyOneFileAllowed: 'È consentito un solo file',
    passwordMismatch: 'Le password non corrispondono',
    minLength: 'La lunghezza minima è di {min} caratteri',
  },
  status: {
    failed: 'Azione non riuscita',
    success: 'Azione completata con successo',
  },
  sections: {
    home: {
      title: 'Centro intelligente di gestione degli strumenti per',
      subtitle: 'Il tuo centro di comando tutto-in-uno',
      description: 'Rendi il tuo lavoro più efficiente e confortevole',
    },
    about: {
      titleProject: 'Gestore di progetti',
      descriptionProject: 'Apri tutti gli strumenti istantaneamente',
      titleLauncher: 'Avvio immediato',
      descriptionLauncher: 'Avvia l\'intero ambiente di lavoro con un clic',
      titleAlias: 'Alias della console',
      descriptionAlias: 'Crea alias brevi per qualsiasi operazione da console',
      titlePassword: 'Gestore di password',
      descriptionPassword: 'Archiviazione sicura e organizzazione semplice delle password',
      titleServer: 'Gestione del server',
      descriptionServer: 'Connessione facile al server e controllo completo dei file',
    },
    project: {
      title: 'Gestore di progetti',
      description: 'Archiviazione centralizzata di tutti i progetti in un unico spazio per un accesso rapido e un avvio immediato nell’ambiente preferito',
    },
    launcher: {
      title: 'Avvio immediato',
      description: 'Avvia istantaneamente tutti gli strumenti e le applicazioni necessarie per lavorare comodamente in un unico posto',
    },
    alias: {
      title: 'Alias della console',
      description: 'Crea alias brevi e facili da ricordare per qualsiasi comando complesso della console',
      list: [
        {
          title: 'Personalizzazione e flessibilità',
          description: 'Personalizza gli alias in base alle tue esigenze e ai tuoi flussi di lavoro per il massimo comfort'
        },
        {
          title: 'Semplificazione delle attività ripetitive',
          description: 'Accedi facilmente ai container Docker, avvia server locali con un solo comando e gestisci le versioni dei linguaggi di programmazione',
        },
        {
          title: 'Aumento dell’efficienza',
          description: 'Riduci il tempo di digitazione dei comandi e aumenta la produttività nel terminale ',
        },
      ],
    },
    password: {
      title: 'Gestore di password',
      description: 'Archiviazione sicura e organizzazione semplice delle password',
      list: {
        titleCoding: 'Crittografia AES-256-GCM affidabile',
        descriptionCoding: 'Massima protezione delle tue credenziali grazie a standard di crittografia avanzati.',
        titleFrame: 'Struttura gerarchica delle cartelle',
        descriptionFrame: 'Organizza password e dati sensibili in comode cartelle e sottocartelle.',
        titleDefense: 'Protezione con password principale',
        descriptionDefense: 'I tuoi dati sono crittografati con una password principale unica conosciuta solo da te.',
        titleSafety: 'Archiviazione sicura di qualsiasi informazione',
        descriptionSafety: 'Archivia non solo password, ma anche note, chiavi API e altri dati sensibili.',
      }
    },
    sftp: {
      title: 'Gestione del server',
      description: 'Trasferisci file, gestisci i contenuti ed esegui operazioni senza rischi per i dati grazie a una connessione sicura',
    },
    reviews: {
      title: 'Cosa dicono i nostri utenti',
      list: [
        {
          author: 'Alexey K.',
          role: 'Sviluppatore Frontend (Windows)',
          text: 'Prima avviare il mio ambiente di lavoro richiedeva un’eternità. Ora con Slay inizio a lavorare con un clic, risparmiando 10 minuti ogni mattina! È una vera salvezza per la produttività.',
          feature: 'Avvio immediato',
          date: '07.01.2026'
        },
        {
          author: 'Ivan T.',
          role: 'Sviluppatore PHP/Laravel',
          text: 'Gli alias della console in Slay hanno cambiato il mio lavoro con le versioni PHP e Docker. Accesso rapido ai container, passaggio tra versioni PHP su Windows — tutto è diventato molto più semplice. Niente più comandi lunghi!',
          feature: 'Alias della console',
          date: '28.05.2026'
        },
        {
          author: 'Maria S.',
          role: 'Sviluppatore freelance',
          text: 'Come freelance con decine di progetti, mi trovavo costantemente nel caos. Il gestore di progetti e password di Slay ha messo tutto in ordine. Tutti i progetti sono organizzati e le password sono conservate in modo sicuro. La mia produttività è aumentata notevolmente!',
          feature: 'Gestore di progetti & password',
          date: '19.02.2026'
        },
        {
          author: 'Olga P.',
          role: 'QA Engineer',
          text: 'Per i test ho bisogno di decine di account (admin, utente, manager). Il gestore di password di Slay mi permette di tenerli tutti in ordine, passare rapidamente da uno all’altro e avere sempre accesso alle credenziali necessarie. Indispensabile!',
          feature: 'Gestore di password',
          date: '15.06.2026'
        },
        {
          author: 'Dmitry V.',
          role: 'Sviluppatore Backend',
          text: 'Conservare le password di Stripe, Mailgun, Mailtrap e di molti server è un problema. Slay non solo le conserva in modo sicuro, ma gli alias della console hanno anche accelerato il mio accesso ai server e l’esecuzione di comandi complessi. È un must-have per il backend.',
          feature: 'Alias della console & Gestore di password',
          date: '03.03.2026'
        }
      ]
    },
    cta: {
      title: 'Pronto ad aumentare la tua produttività?',
      subtitle: 'Inizia a usare Slay oggi'
    }
  },
  account: {
    profile: {
      title: 'Profilo',
      created_at: 'Creato',
      updated_at: 'Aggiornato',
    },
    login: {
      title: 'Login',
      reg_text: "Se non hai un account, puoi",
    },
    register: {
      title: 'Registrazione',
      have_account_text: 'Se hai già un account, puoi',
    },
  },
  download: {
    title: 'Scarica SLAY',
    subtitle: 'Scegli una piattaforma e inizia a sviluppare più velocemente',
    instruction: 'Istruzioni',
    list: [
      {
        title: 'Scarica e installa SLAY',
      },
      {
        title: 'Esegui <code>slay --help</code> per verificare l’interfaccia a riga di comando',
      },
      {
        title: 'Goditi un accesso rapido agli strumenti per sviluppatori',
      },
    ]
  },
  text: {
    allRightsReserved: 'Tutti i diritti riservati',
    haveQuestion: "Hai una domanda o hai bisogno di aiuto? Siamo sempre pronti ad aiutarti.",
  }
}
