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
    feature: 'Funzionalità',
    download: 'Scarica',
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
    start: 'Inizia la prova gratuita',
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
              title: 'Terminale smart',
              price: '$180/anno'
            },
            {
              title: 'Avvio spazio',
              price: '$60/anno'
            },
            {
              title: 'Setup manuale',
              price: 'ogni settimana'
            },
            {
              title: 'Cambio contesto',
              price: 'ogni giorno'
            },
          ],
        },
        features: {
          title: 'Spazio Slay',
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
    features: {
      projectsManager: {
        title: 'Gestione progetti',
        subtitle: 'La ricerca di un progetto non dovrebbe far parte dello sviluppo',
        description: 'Non dovresti ricordare dove è archiviato ogni progetto né cercarlo tra i progetti recenti del tuo IDE. Slay tiene tutto il tuo lavoro a portata di mano.',
        list: [
          {
            title: 'AGGIUNGI I TUOI PROGETTI',
            description: 'Aggiungi le cartelle dei progetti a Slay e organizzale per profilo. Non dovrai più cercare la directory giusta prima di iniziare a lavorare.',
          },
          {
            title: 'SCEGLI IL TUO IDE',
            description: 'Aggiungi le applicazioni che usi per aprire le cartelle dei progetti — VS Code, WebStorm, PhpStorm, Cursor o qualsiasi altro editor. Conservale nell’elenco “Apri con” e scegli lo strumento giusto quando avvii un progetto da Slay.',
          },
          {
            title: 'CREA PROFILI DI LAVORO',
            description: 'Raggruppa i progetti per cliente, team o flusso di lavoro. Cambia profilo quando cambia il contesto e tieni a portata di mano i progetti, le applicazioni, i comandi e gli accessi necessari.',
          },
          {
            title: 'IMPOSTAZIONI DEL PROGETTO',
            description: 'Imposta l’applicazione preferita per ogni progetto. Scegli una volta l’IDE o l’editor e Slay aprirà automaticamente il progetto con quell’applicazione la volta successiva.',
          },
        ],
        cta: {
          title: 'Accesso ai progetti',
          description: 'Connettiti al server giusto senza reinserire indirizzi IP, porte o password. Mantieni cartelle di progetto, dati di accesso, comandi salvati e connessioni ai server in un unico ambiente di lavoro. Rinomina i progetti in Slay in base al tuo flusso di lavoro: le cartelle originali sul computer rimarranno invariate.'
        }
      }
    }
  },
  components: {
    footer: {
      description: 'Un ambiente di sviluppo multi-workspace e uno strumento di orchestrazione pensato per la massima produttività quotidiana.',
      allRightsReserved: 'Tutti i diritti riservati',
      titles: {
        features: 'Funzionalità',
        start: 'Ottieni SLAY',
        support: 'Supporto',
        legal: 'Informazioni legali',
      },
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
    title: 'Inizia con 30 giorni gratuiti oppure scegli un’opzione a pagamento quando vuoi.',
    subtitle: 'Disponibile dopo il periodo di prova gratuito',
    description: 'Gli abbonamenti a pagamento si rinnovano automaticamente fino alla cancellazione. L’accesso continua fino alla fine del periodo di fatturazione. Al momento del pagamento potrebbero essere applicate imposte in base alla tua posizione.',
    cards: {
      trial: {
        title: 'Prova Slay gratis per 30 giorni',
        description: 'Accesso completo a tutte le funzionalità di Slay. Nessuna carta di credito richiesta. Nessun addebito automatico.',
        subtitle: 'PROVA GRATUITA DI 30 GIORNI',
        list: ['Tutte le funzionalità di Slay incluse', 'Disponibile su macOS, Windows e Linux', 'Nessun dato di pagamento richiesto'],
        btn: 'Inizia la prova gratuita di 30 giorni',
        notice: 'Il periodo di prova inizia dopo che accedi al tuo account e apri Slay per la prima volta.'
      },
      monthly: {
        title: 'Mensile',
        discountPrice: "",
        badge: "",
        period: 'mese',
        list: ['Fatturazione mensile', 'Annulla in qualsiasi momento'],
      },
      sixMonths: {
        title: '6 mesi',
        discountPrice: 'Equivalente a $6.99/mese',
        badge: 'Risparmia il 12%',
        period: '6 mesi',
        list: ['Fatturazione ogni 6 mesi']
      },
      yearly: {
        title: 'Annuale',
        discountPrice: 'Equivalente a $5.99/mese',
        badge: 'Risparmia il 25%',
        period: 'anno',
        list: ['Fatturazione annuale']
      }
    },
    steps: {
      title: 'Inizia in 4 semplici passaggi',
      list: [
        {
          title: 'Scarica Slay',
          description: 'Scarica Slay per macOS, Windows o Linux e avvia la rapida installazione locale.'
        },
        {
          title: 'Accedi',
          description: 'Crea un account Slay sicuro oppure accedi per configurare i tuoi ambienti di lavoro.'
        },
        {
          title: '30 giorni gratuiti',
          description: 'Prova tutte le funzionalità dello Smart Launcher senza limitazioni. Nessun dato di pagamento richiesto.'
        },
        {
          title: 'Scegli un piano',
          description: 'Scegli un’opzione di fatturazione a pagamento solo quando vuoi continuare dopo il periodo di prova.'
        },
      ],
    },
    features: {
      title: 'Tutte le funzionalità sono disponibili durante la prova',
      note: 'TUTTO INCLUSO',
      description: 'Accesso completo a tutte le funzionalità di SLAY con ogni piano',
      list: [
        {
          icon: 'folder',
          title: 'Progetti',
          description: 'Organizza i tuoi progetti e aprili con gli strumenti che utilizzi.'
        },
        {
          icon: 'workspaces',
          title: 'Avvio dell’ambiente di lavoro',
          description: 'Avvia insieme l’ambiente di lavoro del progetto, le applicazioni e gli strumenti.'
        },
        {
          icon: 'terminal',
          title: 'Alias della console',
          description: 'Salva i comandi del terminale più usati come alias brevi e riutilizzabili.'
        },
        {
          icon: 'key',
          title: 'Password',
          description: 'Mantieni organizzati password, chiavi API e dati sensibili.'
        },
        {
          icon: 'cloud',
          title: 'Server',
          description: 'Connettiti ai server e gestisci ambienti e file remoti.'
        },
      ],
    },
    faq: {
      title: 'Domande frequenti',
      description: 'Tutto ciò che devi sapere sulla prova, sui pagamenti e su come iniziare.',
      note: 'DOMANDE COMUNI',
      list: [
        {
          title: 'Quando inizia il periodo di prova?',
          description: 'La prova gratuita di 30 giorni inizia la prima volta che accedi e avvii SLAY.',
        },
        {
          title: 'È necessaria una carta di credito?',
          description: 'No. Puoi iniziare la prova gratuita di 30 giorni senza aggiungere una carta di credito o altri dati di pagamento.',
        },
        {
          title: 'Mi verrà addebitato automaticamente un importo?',
          description: 'Non durante la prova gratuita. L’addebito avverrà solo dopo che avrai scelto e acquistato un piano di abbonamento.',
        },
        {
          title: 'Cosa succede dopo 30 giorni?',
          description: 'La prova gratuita terminerà, ma il tuo account resterà disponibile. Scegli un piano di abbonamento per continuare a utilizzare SLAY.',
        },
      ],
    },
    cta: {
      title: 'Prova gratuitamente tutte le funzionalità di Slay per 30 giorni',
      subtitle: 'Nessuna carta di credito. Nessun addebito automatico.',
      btn: 'Inizia la prova gratuita di 30 giorni',
    },
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

    haveQuestion: "Hai una domanda o hai bisogno di aiuto? Siamo sempre pronti ad aiutarti.",
    and: 'e',
    charged: 'Addebito {data}',
    monthly: 'mensile',
    semiannually: 'ogni 6 mesi',
    annually: 'annuale',
  },
}
