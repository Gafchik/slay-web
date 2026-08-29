import faq from './faq.js'
import assistant from './assistant.js'

export default {
  ...faq,
  ...assistant,
  routes: {
    faq: 'FAQ',
    pricing: 'Prezzi',
    contacts: 'Contattaci',
    terms: 'Termini e Privacy',
    privacyPolicy: 'Informativa privacy',
    refundPolicy: 'Politica di rimborso',
  },
  buttons: {
    download: 'Scarica',
    downloadFor: 'Scarica per',
    login: 'Accedi',
    logout: 'Esci',
    signUp: 'Registrati',
    profile: 'Profilo',
    edit: 'Modifica',
    save: 'Salva',
    cancel: 'Annulla',
    send: 'Inviare',
    delete: 'Eliminare',
    start: 'Inizia {data}',
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
    passwordMismatch: 'Le password non corrispondono',
    minLength: 'La lunghezza minima è di {min} caratteri',
  },
  pages: {
    home: {
      title: {
        note: 'Launcher intelligente',
        title: 'Apri l’intero ambiente di sviluppo in pochi secondi',
        description: 'Tieni progetti, app, commenti, password e risposte accessibili in un unico posto. Inizia a lavorare senza perdere tempo a cercare strumenti, link e credenziali.',
        list: [
          {
            title: 'Gestione dei progetti',
            description: 'Mantieni organizzati i progetti del team, i link e il contesto. Passa da un ambiente di lavoro all’altro senza perdere il filo.'
          },
          {
            title: 'Accessi salvati',
            description: 'Conserva in sicurezza password, credenziali e link importanti. Trova ciò che ti serve senza cercare nelle chat.'
          },
          {
            title: 'Routine semplificata',
            description: 'Riduci le configurazioni ripetitive e i continui passaggi da uno strumento all’altro. Dedica meno tempo alla preparazione e più al lavoro.'
          },
          {
            title: 'Avvio immediato',
            description: 'Apri insieme gli strumenti, le app e le schede giuste. Inizia la giornata senza dover ricreare ogni volta la configurazione.'
          },
        ],
      },
      workspace: {
        note: 'Controllo dell’ambiente di lavoro',
        title: 'Tutto ciò che serve al tuo progetto, sempre a portata di mano',
        description: 'Smetti di cercare progetti, riaprire strumenti e copiare comandi da vecchie note. Slay mantiene organizzato il tuo ambiente di lavoro e lo rende pronto all’uso da un unico posto.',
        society: {
          title: 'Ideale per:',
          list: [
            {
              title: 'Sviluppatori',
              description: 'Avvia l’intero ambiente di sviluppo con un solo clic.'
            },
            {
              title: 'Tester QA',
              description: 'Passa più velocemente tra ambienti di test e progetti.'
            },
            {
              title: 'Responsabili di progetto',
              description: 'Mantieni organizzati risorse, link e documentazione dei progetti.'
            },
            {
              title: 'Ingegneri DevOps',
              description: 'Gestisci strumenti, credenziali e ambienti senza configurazioni ripetitive.'
            },
          ],
        }
      },
      distinction: {
        note: 'Costo del flusso di lavoro',
        title: 'Quanto ti costa un flusso di lavoro frammentato?',
        description: 'Invece di pagare separatamente launcher, gestori di password, client SSH e strumenti da riga di comando, scegli un unico ambiente di lavoro che li riunisca tutti.',
        competitors: {
          title: 'Il conto del tuo flusso di lavoro attuale',
          subtitle: 'Totale: $155–$371/anno',
          list: [
            {
              title: 'Client SSH/SFTP',
              price: '$120/anno'
            },
            {
              title: 'Archivio password',
              price: '$36/anno'
            },
            {
              title: 'Produttività nel terminale',
              price: '$180/anno'
            },
            {
              title: 'Launcher dell’ambiente di lavoro',
              price: '$60/anno'
            },
            {
              title: 'Configurazione manuale',
              price: 'ogni settimana'
            },
            {
              title: 'Cambio di contesto',
              price: 'ogni giorno'
            },
          ],
        },
        features: {
          title: 'Ambiente di lavoro Slay',
          subtitle: 'al mese',
          list: [
            {
              title: 'Progetti',
            },
            {
              title: 'App',
            },
            {
              title: 'Comandi',
            },
            {
              title: 'Credenziali',
            },
            {
              title: 'Server',
            },
            {
              title: 'SSH/SFTP',
            },
          ],
        }
      },
      subsequence: {
        note: 'Flusso di lavoro con un clic',
        title: 'Quanti passaggi servono prima di iniziare davvero a lavorare?',
        description: 'Ogni progetto parte da cartelle, app, credenziali, server, comandi e contesto. Slay trasforma tutta questa configurazione in un unico avvio dell’ambiente di lavoro.',
        before: {
          note: 'Prima di Slay',
          badge: 'Da ripetere ogni mattina',
          list: [
            {
              title: 'Trovare la cartella del progetto',
            },
            {
              title: 'Aprire l’IDE corretto',
            },
            {
              title: 'Avviare le app necessarie',
            },
            {
              title: 'Cercare le credenziali',
            },
            {
              title: 'Connettersi tramite SSH/SFTP',
            },
            {
              title: 'Eseguire i comandi salvati',
            },
            {
              title: 'Riaprire note e contesto',
            },
          ],
        },
        after: {
          note: 'Con Slay',
          title: 'Avvia l’ambiente di lavoro',
          subtitle: '1 avvio dell’ambiente di lavoro',
          list: [
            {
              title: 'Progetti',
            },
            {
              title: 'App',
            },
            {
              title: 'Comandi',
            },
            {
              title: 'Credenziali',
            },
            {
              title: 'Server',
            },
            {
              title: 'SSH/SFTP',
            },
            {
              title: 'Contesto',
            },
          ],
        }
      },
      aliases: {
        note: 'Comandi intelligenti',
        title: 'Alias dei comandi',
        description: 'I comandi lunghi non dovrebbero essere tenuti a memoria. Se li copi spesso da note, cronologia del terminale o README, probabilmente la routine richiede già troppa attenzione. In Slay puoi salvarli come alias brevi ed eseguirli quando ti servono.',
        before: {
          badge: 'Da ripetere ogni giorno',
          description: 'сd /Users /find /var/log -type f -name \'*.log\' -mtime +30 -exec gzip -9 {} \\; && tar -czvf /backup/logs_$(date +%Y%m%d).tar.gz /var/log/*.gz | tee -a /var/log/backup.log | mail -s "Backup done $(date +%Y-%m-%d)" admin@example.com && echo \'Done\' >> /var/log/cron.log'
        },
        after: {
          badge: 'Più semplice ogni giorno',
          description: 'Slay_build_linux',
        },
      },
      passwords: {
        note: 'Credenziali di progetto',
        title: 'Gestore di password',
        subtitle: 'Gli accessi al progetto sono troppo spesso sparsi tra chat, note e browser',
        description: 'Password, chiavi API, account di test e accessi a pannelli di amministrazione e servizi diventano rapidamente difficili da gestire. Slay conserva i dati sensibili vicino al progetto e li protegge con una password principale e la crittografia.',
        list: [
          {
            icon: 'shield',
            title: 'Crittografia AES-256-GCM affidabile',
            subtitle: 'Massima protezione delle credenziali grazie a standard di crittografia avanzati.'
          },
          {
            icon: 'lock',
            title: 'Protezione con password principale',
            subtitle: 'I tuoi dati sono crittografati con una password principale unica, conosciuta solo da te.'
          },
          {
            icon: 'folder',
            title: 'Struttura gerarchica delle cartelle',
            subtitle: 'Organizza password e dati sensibili in pratiche cartelle e sottocartelle.'
          },
          {
            icon: 'verified_user',
            title: 'Archiviazione sicura di qualsiasi informazione',
            subtitle: 'Conserva non solo password, ma anche note, chiavi API e altri dati sensibili.'
          },
        ]
      },
      cta: {
        title: 'Gestione dei server',
        description: 'Gli accessi al progetto sono troppo spesso sparsi tra chat, note e browser. Cercare le credenziali, aprire il client, connettersi, raggiungere la cartella corretta e trasferire un file è una routine ripetitiva. Slay semplifica la connessione al server e la gestione dei file del progetto da un unico ambiente di lavoro.',
        banner: {
          title: 'Pronto a smettere di perdere tempo ancora prima di iniziare a lavorare?',
          subtitle: 'Inizia a usare Slay oggi',
        },
      },
    },
  },
  sections: {
    home: {
      title: 'Launcher intelligente per tutti i tuoi strumenti di sviluppo',
    },
  },
  account: {
    profile: {
      title: 'Profilo',
      created_at: 'Creato',
      updated_at: 'Aggiornato',
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
      forgotPassword: 'Password dimenticata?',
    },
    register: {
      title: 'Registrazione',
      have_account_text: 'Se hai già un account, puoi',
    },
    forgotPassword: {
      title: 'Reimposta la password',
      description: 'Inserisci la tua email e ti invieremo un link per reimpostare la password.',
      submit: 'Invia il link',
    },
    resetPassword: {
      title: 'Crea una nuova password',
      description: 'Scegli una nuova password per il tuo account Slay.',
      submit: 'Salva la nuova password',
      invalidLink: 'Questo link è incompleto o non valido. Richiedine uno nuovo.',
      backToLogin: 'Torna al login',
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
        discount: "",
        badge: "",
        period: 'mese'
      },
      sixMonths: {
        title: "6 mesi",
        subtitle: "Fatturato semestralmente",
        discount: "12%",
        discountPrice: "$6.99/mese",
        badge: "",
        period: 'ogni 6 mesi'
      },
      yearly: {
        title: "Annuale",
        subtitle: "Fatturato annualmente",
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
  },
  text: {
    allRightsReserved: 'Tutti i diritti riservati',
    haveQuestion: "Hai una domanda o hai bisogno di aiuto? Siamo sempre pronti ad aiutarti.",
    and: 'e',
    charged: 'Addebito {data}',
    monthly: 'mensile',
    semiannually: 'ogni 6 mesi',
    annually: 'annuale',
  },
}
