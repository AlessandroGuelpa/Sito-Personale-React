# Prompt routine — post blog giornaliero

Schedule: ogni giorno alle 09:00 Europe/Rome.
Repo: blog personale React/Vite, deploy automatico Vercel dal branch `main`.

---

Pubblica un nuovo post sul blog personale. Lavora sul branch `main`.

1. `git checkout main && git pull origin main`.
2. Apri `blog-topics.md` nella root. Se non esiste, crealo con i 4 temi
   (1=Ingegneria generale, 2=Coding, 3=Spazio e Artemis, 4=Salvaguardia del
   pianeta), `Prossimo tema: 1` e una sezione Storico vuota.
3. Leggi `Prossimo tema: N` da `blog-topics.md`.
4. Leggi `src/data/blogPosts.ts`: scorri i post esistenti (title/id/content)
   per NON ripetere argomenti o angolazioni già trattate.
5. Scrivi un post nuovo sul tema N, scegliendo un sottotema/angolazione non
   ancora coperto. Stile da rispettare (guarda i post esistenti):
   - prima persona, tono personale e diretto, italiano;
   - `content` è una template string con backtick: paragrafi separati da riga
     vuota, `>` per le citazioni in evidenza;
   - lunghezza simile ai post esistenti.
   Se il tema sembra ormai molto coperto, scegli comunque un angolo originale
   nuovo sullo stesso tema (modalità tema libero, stesso stile).
6. Aggiungi l'oggetto in CIMA all'array `blogPosts` in `src/data/blogPosts.ts`:
   `id` (slug kebab-case unico, non già presente), `title`, `date` = data di
   oggi in formato AAAA-MM-GG, `icon` (un emoji adatto al post), `content`.
7. Aggiorna `blog-topics.md`: porta `Prossimo tema` al successivo (dopo 4 → 1)
   e aggiungi nello Storico la riga `AAAA-MM-GG — [tema] — titolo`.
8. `npm run build`. Se fallisce, correggi il post finché la build passa.
9. `npm run publish-post` (fa add + commit `📝 Pubblicato nuovo post` + push).
   Verifica che il push su `origin/main` sia andato a buon fine.
10. Riassumi in una riga: tema, titolo e che il deploy Vercel partirà da solo.
