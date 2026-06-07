export default {
  routes: {
    download: 'Scarica',
    pricing: 'Prezzi',
    faq: 'FAQ',
    contacts: 'Contattaci',
    terms: 'Termini e Privacy',
    privacyPolicy: 'Informativa privacy',
    refundPolicy: 'Politica di rimborso',
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
    send: 'Inviare',
    delete: 'Eliminare',
    agreeTos: 'Ho letto e accetto i',
    start: 'Inizia {data}',
    upgrade: 'Passa a {data}',
    choose: 'Scegli {data}',
    renew: 'Rinnova {data}',
    confirm: 'Conferma',
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
      title: 'Smart Launcher per tutti i tuoi strumenti di sviluppo',
      subtitle: 'Smetti di ricostruire il tuo ambiente di sviluppo ogni mattina',
      description: 'Tieni progetti, app, comandi, password e accessi ai server in un unico posto. <br> Inizia a lavorare senza cercare strumenti e credenziali',
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
      subtitle: 'Quando i progetti sono tanti, il contesto si perde',
      description: 'Un progetto richiede VS Code, un altro Docker, un terzo un server di test. Gli accessi sono separati. Slay raccoglie il contesto attorno al progetto, così puoi tornare rapidamente al lavoro senza cercare e ricordare tutto.',    },
    launcher: {
      title: 'Avvio immediato',
      subtitle: 'La giornata di lavoro non dovrebbe iniziare con dieci clic',
      description: 'Aprire IDE, terminale, browser, server locale, Docker, documentazione — è una piccola cosa, ma si ripete ogni giorno. Slay avvia il set di strumenti necessario per il progetto con una sola azione.',    },
    alias: {
      title: 'Alias della console',
      subtitle: 'I comandi lunghi non dovrebbero vivere nella tua testa',
      description: 'Se copi spesso comandi da note, cronologia del terminale o README, significa che la routine sta già consumando la tua attenzione. In Slay puoi salvare i comandi come alias brevi ed eseguirli quando ti servono.',
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
      subtitle: 'Gli accessi dei progetti sono troppo spesso sparsi tra chat, note e browser',
      description: 'Password, chiavi API, account di test e accessi ad admin panel e servizi diventano rapidamente caos. Slay ti aiuta a tenere i dati sensibili vicino al progetto e li protegge con master password e crittografia.',      list: [
        {
          key: 'coding',
          title: 'Crittografia AES-256-GCM affidabile',
          description: 'Massima protezione delle tue credenziali grazie a standard di crittografia avanzati.'
        },
        {
          key: 'frame',
          title: 'Struttura gerarchica delle cartelle',
          description: 'Organizza password e dati sensibili in comode cartelle e sottocartelle.'
        },
        {
          key: 'defense',
          title: 'Protezione con password principale',
          description: 'I tuoi dati sono crittografati con una password principale unica conosciuta solo da te.'
        },
        {
          key: 'safety',
          title: 'Archiviazione sicura di qualsiasi informazione',
          description: 'Archivia non solo password, ma anche note, chiavi API e altri dati sensibili.'
        }
      ]
    },
    sftp: {
      title: 'Gestione del server',
      subtitle: 'Lavorare con il server richiede spesso troppi passaggi',
      description: 'Trovare l’accesso, aprire il client, connettersi, andare nella cartella giusta, trasferire un file — è una routine ripetitiva. Slay semplifica la connessione al server e la gestione dei file del progetto da un unico contesto di lavoro.',    },
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
      title: 'Pronto a smettere di perdere tempo ancora prima di iniziare a lavorare?',
      subtitle: 'Inizia a usare Slay oggi'
    }
  },
  account: {
    profile: {
      title: 'Profilo',
      created_at: 'Creato',
      updated_at: 'Aggiornato',
      trial_ends_at: 'Fine del periodo di prova',
      profileInfo: 'Informazioni del profilo',
      profileDescription: 'Visualizza e gestisci le tue informazioni personali.',
      profileAction: 'Azioni dell’account',
      profileActionDescription: 'Gestisci le impostazioni del tuo account.',
      profileRemove: 'Zona pericolosa',
      profileRemoveDescription: 'Azioni irreversibili e distruttive',
      deleteAccount: 'Elimina account',
      deleteAccountDescription: 'Elimina definitivamente il tuo account e tutti i tuoi dati',
      deleteConfirm: {
        title: 'Eliminazione dell\'account',
        text: 'Sei sicuro di voler eliminare definitivamente il tuo account?',
      }
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
        title: 'Esegui <code>slay help</code> per verificare l’interfaccia a riga di comando',
      },
      {
        title: 'Goditi un accesso rapido agli strumenti per sviluppatori',
      },
    ]
  },
  pricing: {
    freeTrial: 'gratis',
    subTitle: 'Scegli il tuo piano tariffario e ottieni l\'accesso completo a tutte le funzionalità di SLAY',
    info: {
      free: 'dopo 1 mese gratuito',
      list: [
        {
          key: 'full',
          title: 'Accesso completo a tutte le funzionalità'
        },
        {
          key: 'cancel',
          title: 'Annulla in qualsiasi momento'
        },
        {
          key: 'period',
          title: 'Accesso fino alla fine del periodo di fatturazione'
        },
        {
          key: 'renewal',
          title: 'Rinnovo automatico'
        },
        {
          key: 'discount',
          title: 'Risparmia {discount} - solo {discountPrice}'
        },
      ],
      taxes: 'Le tasse possono essere applicate al momento del pagamento in base alla tua posizione.',
    },
    features: {
      title: 'Tutto incluso',
      description: 'Accesso completo a tutte le funzionalità di SLAY in ogni piano',
      list: [
        {
          icon: 'folder',
          title: 'Gestore di progetti'
        },
        {
          icon: 'rocket_launch',
          title: 'Avvio rapido'
        },
        {
          icon: 'terminal',
          title: 'Alias della console'
        },
        {
          icon: 'lock',
          title: 'Gestore di password'
        },
        {
          icon: 'cloud',
          title: 'Gestione dei server'
        },
      ],
    },
    details: [
      {
        icon: 'calendar_month',
        title: 'Inizia con una prova gratuita di 1 mese.',
        description: 'La versione di prova inizia dal momento della registrazione.',
      },
      {
        icon: 'cached',
        title: 'Dopo la fine del periodo di prova, sarà richiesto il pagamento per continuare a utilizzare il servizio.',
        description: 'Dopo il pagamento, l\'accesso verrà ripristinato senza perdita di dati.',
      },
      {
        icon: 'free_cancellation',
        title: 'Puoi annullare in qualsiasi momento.',
        description: 'L\'accesso rimane attivo fino alla fine del periodo di fatturazione.',
      },
      {
        icon: 'safety_check',
        title: 'Pagamenti sicuri elaborati da Paddle.',
        description: 'Le tue informazioni di pagamento sono protette e non vengono mai memorizzate da noi.',
      },
      {
        icon: 'lock',
        title: 'Utilizziamo la crittografia end-to-end.',
        description: 'Per mantenere i tuoi dati al sicuro e protetti.',
      },
    ],
    cards: {
      monthly: {
        title: "Mensile",
        subtitle: "Fatturato mensilmente",
        price: "$7.99",
        discount: "",
        discountPrice: "",
        badge: "",
        period: 'mese'
      },
      sixMonths: {
        title: "6 mesi",
        subtitle: "Fatturato semestralmente",
        price: "$41.94",
        discount: "12%",
        discountPrice: "$6.99/mese",
        badge: "",
        period: 'ogni 6 mesi'
      },
      yearly: {
        title: "Annuale",
        subtitle: "Fatturato annualmente",
        price: "$71.88",
        discount: "25%",
        discountPrice: "$5.99/mese",
        badge: "Miglior valore",
        period: 'all’anno'
      }
    }
  },
  subscription: {
    title: 'Abbonamento',
    subtitle: 'Gestisci il tuo abbonamento e la fatturazione',
    trial: {
      title: 'Accesso di prova',
      subtitle: 'Attualmente stai utilizzando il periodo di prova gratuito.',
      description: 'Goditi l’accesso completo a tutte le funzionalità e agli aggiornamenti di SLAY.',
      endDate: 'Termina il',
    },
    active: {
      title: 'Abbonamento',
      description: 'Hai accesso completo a tutte le funzionalità e agli aggiornamenti di SLAY.',
      startDate: 'Data di inizio',
      renewDate: 'Prossimo rinnovo',
    },
    canceled: {
      title: 'Nessun piano attivo',
      subtitle: 'Al momento non hai un abbonamento attivo.',
      description: 'Scegli un piano per ripristinare l’accesso completo alle funzionalità e agli aggiornamenti di SLAY.',
      endDate: 'Accesso terminato il',
      status: 'Stato dell’accesso',
      isStatus: 'Limitato',
      statusDescription: 'Le funzionalità premium sono bloccate',
      trial: {
        subtitle: 'Il tuo periodo di prova gratuito è terminato.',
        description: 'Scegli un piano per continuare a utilizzare SLAY.',
      },
      isBilling: {
        subtitle: 'Il tuo abbonamento non è più attivo.',
        description: 'Rinnova il tuo piano per ripristinare l’accesso completo.',
      },
    },
    history: {
      title: 'Cronologia pagamenti',
      subTitle: 'Visualizza le transazioni e le fatture precedenti.',
      table: {
        date: 'Data',
        invoice: 'Fattura',
        amount: 'Importo',
        tax: 'Tasse',
        status: 'Stato',
      }
    },
    cancel: {
      title: 'Annullare l’abbonamento?',
      description: 'Il tuo abbonamento rimarrà attivo fino alla fine del periodo di fatturazione corrente. Successivamente, l’accesso verrà disattivato a meno che tu non rinnovi.'
    },
    thanks: {
      title: 'Grazie per il tuo acquisto',
      subtitle: 'Il tuo abbonamento è stato attivato.',
      welcome: 'Benvenuto in SLAY!',
      description: 'Ora hai accesso completo a tutte le funzionalità di SLAY.',
      info: {
        title: 'Dettagli dell’abbonamento',
        list: [
          {
            title: 'Piano',
          },
          {
            title: 'Prossimo rinnovo',
          },
          {
            title: 'Importo pagato',
          },
          {
            title: 'Metodo di pagamento',
          },
        ]
      },
      receipt: 'Ricevuta inviata a {data}',
      transaction: 'ID transazione: {data}',
      tax: 'Incl. imposte {data}'
    }
  },
  badges: {
    trial: 'Prova gratuita',
    active: 'Attivo',
    noActive: 'Nessun piano attivo',
    best: 'Miglior offerta'
  },
  text: {
    allRightsReserved: 'Tutti i diritti riservati',
    haveQuestion: "Hai una domanda o hai bisogno di aiuto? Siamo sempre pronti ad aiutarti.",
    and: 'e',
    plan: 'Plan',
    billed: 'Periodo di fatturazione: {data}',
    charged: 'Addebito {data}',
    monthly: 'mensile',
    semiannually: 'ogni 6 mesi',
    annually: 'annuale',
  },
}
