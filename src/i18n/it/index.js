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
      },
      launcherWorkspace: {
        title: 'Avvio dell’ambiente di lavoro',
        note: "IL TUO AMBIENTE DI LAVORO, PRONTO CON UN CLIC",
        description: 'Salva le applicazioni che usi per ogni flusso di lavoro. Cambia profilo, avvia la selezione salvata e inizia a lavorare senza riconfigurare tutto.',
        home: {
          start: 'INIZIO DELLA GIORNATA DI LAVORO',
          end: 'Un clic<br> per iniziare',
        },
        about: {
          title: 'Aggiungi le applicazioni che usi già',
          description: 'Trascina applicazioni e collegamenti in Slay. Nomi, percorsi e icone disponibili vengono aggiunti automaticamente al profilo attivo.',
          note: 'AGGIUNGI APPLICAZIONI',
          step1: 'PASSAGGIO 1 — TRASCINA',
          step2: 'PASSAGGIO 2 — PRONTO',
          list: [
            {
              title: 'Nessuna configurazione manuale',
            },
            {
              title: 'Aggiunte al profilo attivo',
            },
            {
              title: 'Pronte per essere selezionate o avviate',
            },
          ],
        },
        steps: {
          title: 'Configura una volta. <br>Avvia con un clic.',
          description: 'Scegli le applicazioni che usi in ogni sessione. Slay ricorda la tua selezione, così il tuo ambiente di lavoro abituale è pronto ogni volta che torni.',
          note: 'AMBIENTE DI LAVORO CON UN CLIC',
          extra: 'Niente ricerche nei menu. Niente avvio delle stesse applicazioni una alla volta.',
          list: [
            {
              title: 'Scegli le applicazioni di tutti i giorni',
            },
            {
              title: 'Slay ricorda la tua selezione',
            },
            {
              title: 'Fai clic su Open Selected',
            },
          ],
        },
        profiles: {
          title: 'Cambia profilo. <br>Cambia ambiente di lavoro.',
          description: 'Ogni profilo conserva il proprio elenco di applicazioni e la selezione salvata. Passa da un flusso di lavoro all’altro senza riconfigurare gli stessi strumenti.',
          note: 'PROFILI',
          list: [
            {
              title: 'APP DEL PROFILO + SELEZIONE QUOTIDIANA SALVATA',
            },
            {
              title: 'APP DEL PROFILO + SELEZIONE QUOTIDIANA SALVATA',
            },
            {
              title: 'APP DEL PROFILO + SELEZIONE QUOTIDIANA SALVATA',
            },
          ],
        },
        essential: {
          title: 'Avvia l’essenziale. <br>Tieni il resto a portata di mano.',
          description: 'Le applicazioni selezionate si avviano insieme con Open Selected. Lascia deselezionati gli strumenti che usi occasionalmente e avviali singolarmente quando ti servono.',
          note: 'STRUMENTI QUOTIDIANI E OCCASIONALI',
          list: [
            {
              title: 'PRONTI PER OGNI SESSIONE',
              subtitle: 'Mantieni selezionati gli strumenti di tutti i giorni e avvia l’intera selezione insieme.'
            },
            {
              title: 'DISPONIBILI QUANDO SERVONO',
              subtitle: 'Avvia gli strumenti che usi occasionalmente uno alla volta con il pulsante Play.'
            },
          ],
        },
        platforms: {
          title: 'Il tuo ambiente di lavoro, sulla tua piattaforma',
          description: 'Crea e avvia la tua selezione di applicazioni su Windows, macOS e Ubuntu.',
        },
        cta: {
          title: 'Ogni ambiente di lavoro a un clic di distanza',
          subtitle: 'Crea un profilo per ogni modo di lavorare e tieni pronte le applicazioni giuste per ogni sessione.',
        }
      },
      consoleAliases: {
        title: 'Alias della console',
        note: 'Esegui i comandi dal terminale',
        description: 'Assegna un nome chiaro ai comandi ricorrenti in Slay, poi eseguili dal terminale senza riscrivere ogni volta il comando completo. Salva un comando una volta. Eseguilo da qualsiasi terminale.',
        home: {
          subtitle: 'Gestisci in Slay → Esegui nel terminale',
        },
        about: {
          title: 'Smetti di ricostruire i comandi a memoria',
          description: 'I lunghi comandi SSH, i percorsi dei progetti e le catene di comandi possono essere difficili da ricordare e facili da digitare male. Salva il comando esatto una volta e riutilizzalo con un nome che riconosci.',
          note: 'MENO COSE DA RICORDARE',
          before: 'INSERIMENTO MANUALE',
          after: 'CON GLI ALIAS DELLA CONSOLE',
          notice: 'Salva il comando completo una volta. Poi eseguilo per nome.'
        },
        steps: {
          title: 'Da comando ricorrente ad alias riutilizzabile',
          note: 'COME FUNZIONA',
          list: [
            {
              title: 'Salva un comando',
              description: 'Seleziona «Aggiungi nuovo alias» in Slay, assegna all’alias un nome facile da ricordare e inserisci il comando esatto da eseguire.',
              extra: {
                btn: 'Aggiungi nuovo alias',
                title: 'Nome: start-dev',
                subtitle: 'Comando',
                code: 'cd ~/Projects/mobile-app && npm start',
              }
            },
            {
              title: 'Eseguilo dal terminale',
              description: 'Usa la CLI di Slay e il nome dell’alias invece di inserire di nuovo il comando completo.',
              code: 'slay run start-dev',
            },
            {
              title: 'Non ricordi il nome? Cercalo',
              description: 'Apri l’elenco interattivo degli alias per cercare e selezionare un alias salvato.',
              code: 'slay alias list',
            },
          ],
        },
        management: {
          title: 'Trova facilmente i comandi ricorrenti',
          description: 'Crea, cerca, modifica, copia ed elimina i comandi salvati da un unico elenco organizzato in Slay.',
          note: 'RICERCA PER NOME: MOBILE',
          listContent: [
            {
              title: 'GESTIONE DEI COMANDI',
            },
            {
              title: 'I TUOI ALIAS SALVATI',
            },
          ],
          list: [
            {
              title: 'Cerca gli alias per nome',
              icon: 'search',
            },
            {
              title: 'Modifica i nomi degli alias e i comandi',
              icon: 'edit',
            },
            {
              title: 'Copia un nome o il comando completo',
              icon: 'content_copy',
            },
            {
              title: 'Elimina gli alias che non ti servono più',
              icon: 'delete',
            },
          ],
        },
        tasks: {
          title: 'Un nome per ogni attività ripetitiva',
          description: 'Salva i comandi per le attività ricorrenti di sviluppo e amministrazione, poi richiama ciascuno con un nome facile da ricordare.',
          note: 'LE TUE ATTIVITÀ RICORRENTI',
          notice: 'Gli esempi mostrano alias creati dagli utenti, non modelli integrati in Slay.',
          list: [
            {
              title: 'AVVIA LO SVILUPPO',
              icon: 'code',
              command: 'start-dev',
              code: 'slay run start-dev'
            },
            {
              title: 'ESEGUI I TEST',
              icon: 'science',
              command: 'mobile-test',
              code: 'slay run mobile-test'
            },
            {
              title: 'APRI LA CARTELLA DI UN PROGETTO',
              icon: 'folder_open',
              command: 'open-mobile',
              code: 'slay run start-dev'
            },
            {
              title: 'CONNETTITI A UN SERVER',
              icon: 'dns',
              command: 'production-server',
              code: 'slay run production-server'
            },
          ],
        },
        arguments: {
          title: 'Aggiungi argomenti quando servono',
          description: 'Tutto ciò che inserisci dopo il nome dell’alias viene passato al comando salvato come argomento.',
          subtitle: 'Riutilizza il comando salvato mantenendo flessibile ogni esecuzione.',
          note: 'ARGOMENTI',
          content: {
            before: 'COMANDO BASE',
            after: 'CON UN ARGOMENTO',
          }
        },
        commands: {
          title: 'Concatena i passaggi che ripeti',
          description: 'Salva una sequenza di comandi del terminale con un unico nome facile da ricordare.',
          note: 'CATENE DI COMANDI',
          subtitle: 'Gli strumenti usati da un comando salvato devono essere già installati e disponibili nel terminale dell’utente.',
          notice: 'Quando un alias deve cambiare directory o impostare una variabile d’ambiente nella sessione corrente della shell, Slay configura automaticamente l’integrazione necessaria con la shell.',
          card: {
            title: 'COMANDO SALVATO',
            command: 'cd ~/Projects/mobile-app && npm run build && npm test',
            list: [
              {
                title: 'Alias',
                command: 'verify-mobile'
              },
              {
                title: 'Esegui',
                command: 'slay run verify-mobile'
              },
            ]
          },
        },
        search: {
          title: 'Non ricordi il nome? Cercalo invece di tirare a indovinare.',
          description: 'Apri l’elenco interattivo degli alias e trova il comando salvato che ti serve senza cercare tra le note o nella cronologia del terminale.',
          notice: 'Scegli tra gli alias disponibili nel profilo CLI corrente.',
          note: 'CERCA DAL TERMINALE',
        },
        profiles: {
          title: 'Separa i gruppi di comandi per profilo',
          description: 'Gli alias della console usano il profilo selezionato nella CLI di Slay. Cambia profilo nella CLI per accedere ai comandi salvati per un altro contesto.',
          notice: 'L’app desktop e la CLI di Slay selezionano i profili in modo indipendente.',
          note: 'PROFILI CLI',
          list: [
            {
              title: 'SVILUPPO MOBILE',
              command: 'slay run mobile-test',
              subtitle: 'ESEMPI DI ALIAS IN QUESTO PROFILO CLI',
              commandsList: ['ios-run','android-run','mobile-test','open-mobile'],
            },
            {
              title: 'PROGETTO CLIENTE',
              command: 'slay run start-dev',
              subtitle: 'ESEMPI DI ALIAS IN QUESTO PROFILO CLI',
              commandsList: ['start-dev','test','logs','production-server'],
            },
          ],
          listCommands: ['slay profile', 'slay profile list', 'slay profile use "profile-name"'],
        },
        faq: {
          title: 'Domande frequenti',
          note: 'DOMANDE COMUNI',
          list: [
            {
              title: 'Che cos’è un alias della console?',
              description: 'Un alias della console è un comando del terminale salvato con un nome. Gestisci gli alias in Slay e li esegui tramite lo strumento da riga di comando di Slay.',
            },
            {
              title: 'Come eseguo un alias?',
              description: 'Inserisci slay run <alias-name> nel terminale. Se il nome dell’alias contiene spazi, racchiudilo tra virgolette.',
            },
            {
              title: 'Posso eseguire un alias senza tenere aperto Slay?',
              description: 'Sì. Dopo aver configurato la CLI di Slay e completato l’autorizzazione, puoi eseguire gli alias dal terminale senza tenere aperta la finestra di Slay.',
            },
            {
              title: 'Cosa faccio se non ricordo il nome di un alias?',
              description: 'Esegui slay alias list per aprire un elenco interattivo degli alias salvati con funzione di ricerca.',
            },
            {
              title: 'Un alias può accettare argomenti aggiuntivi?',
              description: 'Sì. Le parole aggiuntive inserite dopo il nome dell’alias vengono passate al comando salvato come argomenti.',
            },
            {
              title: 'Un alias può contenere più comandi?',
              description: 'Sì. Un alias può memorizzare una catena di comandi. La sintassi e il comportamento dipendono dagli strumenti e dalla shell usati dal comando.',
            },
            {
              title: 'Un alias può cambiare la directory corrente?',
              description: 'Sì. Quando un comando come cd deve agire sulla sessione corrente del terminale, Slay configura automaticamente l’integrazione necessaria con la shell.',
            },
            {
              title: 'Gli alias sono collegati ai profili?',
              description: 'Sì. Gli alias disponibili nella CLI di Slay provengono dal profilo attualmente selezionato nella CLI. L’app desktop e la CLI selezionano i profili in modo indipendente.',
            },
          ]
        },
        cta: {
          title: 'Tieni i comandi ricorrenti a portata di mano',
          subtitle: 'Salva i comandi che vuoi riutilizzare ed eseguili per nome dal terminale.',
          command: 'slay run your-next-command'
        }
      },
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
