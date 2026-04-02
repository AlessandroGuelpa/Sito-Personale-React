export interface BlogPost {
  id: string;
  title: string;
  date: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "3",
    title: "Quando l'Universo ti Cambia le Variabili in Produzione",
    date: "2026-04-02",
    content: `

C'è un momento preciso nella vita di ogni sviluppatore in cui inizi a dubitare di tutto quello che sai. 

È quel momento in cui un utente ti segnala un errore impossibile. Guardi i log e vedi che una variabile ha un valore che non avrebbe *mai* potuto avere. 

Provi a riprodurlo in locale. Niente. 
Rileggi il codice. È inattaccabile. 
Eppure, il disastro è lì, stampato nel database.

L'altro giorno imprecavo contro uno di questi "bug fantasma" sfogliando gli appunti di Architettura degli Elaboratori. Lì mi sono imbattuto in un concetto che ha dato senso al mio mal di testa: il **Single-Event Upset**. 

E credetemi, c'entra più con l'astrofisica che con la programmazione.

## Bit, transistor e stelle esplose

Noi sviluppatori viviamo in un mondo astratto. 

Pensiamo al nostro codice come a pura logica, dimenticandoci una verità scomoda: il software non esiste senza l'hardware. E l'hardware è fatto di materia.

Ogni \`0\` e ogni \`1\` del nostro codice è fisicamente intrappolato in un microscopico condensatore di silicio. 

Cosa succede quando una particella subatomica ad altissima energia—tipo un raggio cosmico generato da una supernova migliaia di anni fa—colpisce esattamente quel transistor? 
Semplice: ne altera la carica elettrica. 

* Un bit si capovolge. 
* Un \`0\` diventa un \`1\`. 

Se quel bit faceva parte di una variabile fondamentale per il gestionale su cui state lavorando... auguri. Il programma non ha sbagliato a contare. È letteralmente intervenuta la fisica a mescolare le carte.

## La democrazia spaziale di Artemis II

Sulla Terra, l'atmosfera ci fa da scudo. Questi eventi sono fastidiosi ma rari. 

Ma se usciamo dalla nostra bolla azzurra, la situazione precipita. 

Leggendo le specifiche della navicella Orion (missione Artemis II), mi è esplosa la testa. Quella capsula naviga nello spazio profondo, dove le radiazioni "friggono" i bit di continuo. 

* Se un raggio cosmico colpisce il tuo laptop, ti crasha il browser. 
* Se colpisce il computer che gestisce l'ossigeno a 380.000 chilometri da casa, sei morto.

La NASA non poteva semplicemente scrivere "codice migliore". Doveva aggirare la fisica. Come? Con la **Triple Modular Redundancy**. 

Sulla Orion ci sono tre computer che fanno girare *esattamente* lo stesso codice, processando gli stessi dati nello stesso istante. Quando devono prendere una decisione critica, votano. 

Se un raggio cosmico altera i dati nel Computer A, ma i Computer B e C ottengono il risultato corretto, l'astronave ignora il computer A. 

La maggioranza vince. Il bug viene isolato dal sistema stesso.

## Sopravvivere al caos terrestre

Se vado dal mio cliente a dirgli che voglio affittare tre server separati su AWS per farli votare a ogni click, probabilmente mi licenzia. 

Non possiamo permetterci la ridondanza hardware della NASA. Ma possiamo imparare da loro ad applicare la **Programmazione Difensiva**.

Invece di fidarci che tutto filerà liscio, scriviamo codice che si *aspetta* che l'universo trami alle sue spalle. Se ricevo un dato critico, lo controllo, anche se l'ho generato io.

\`\`\`python
def applica_sconto(prezzo_finale, sconto_percentuale):
    # Programmazione difensiva: l'universo è caotico, non fidarti.
    
    if not isinstance(prezzo_finale, (int, float)) or prezzo_finale < 0:
        raise ValueError("Allarme: il prezzo è stato alterato!")
        
    if not 0 <= sconto_percentuale <= 100:
         raise ValueError("Sconto impossibile. Radiazioni in corso?")
         
    # Se arriviamo qui, possiamo respirare
    return prezzo_finale - (prezzo_finale * (sconto_percentuale / 100))
\`\`\`

L'ingegneria del software moderna si basa su questo: *checksum*, hash di controllo, validazioni continue. Tutti strumenti per assicurarci che l'informazione non sia stata silenziosamente manipolata dalla rete o dalla fisica.

## Il bello del fango

Studiare informatica non ti insegna a creare macchine perfette. 

Ti insegna che la perfezione è un'illusione matematica. L'ingegneria, in realtà, è l'arte di gestire il caos con eleganza.

Quindi, la prossima volta che passate la notte a cercare un bug irreplicabile, mettetevi il cuore in pace. Forse il vostro codice era perfetto e siete solo stati vittime di uno scherzo galattico. 

C'è una certa poesia anche in questo.
    `
  },
  {
    id: "2",
    title: "Lezione di Tennis e Programmazione",
    date: "2026-04-01",
    content: `
Stamattina ottima sessione di allenamento a tennis. Il rovescio sta finalmente migliorando!

Nel pomeriggio mi sono dedicato ad alcuni progetti React, integrando Framer Motion per le animazioni. Devo dire che la differenza si nota subito! Le transizioni sono molto più fluide.
    `
  }
];