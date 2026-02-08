# Guida Setup GitHub

Questa guida ti aiuterà a caricare il tuo portfolio su GitHub e renderlo pubblico.

## Step 1: Crea un Account GitHub

Se non ne hai uno, vai su [github.com](https://github.com) e crea un account gratuito.

## Step 2: Crea un Nuovo Repository

1. Accedi a GitHub
2. Clicca il **+** in alto a destra e seleziona **New repository**
3. **Nome repository**: scegli tra:
   - `portfolio` (generico)
   - `tuonome.github.io` (per GitHub Pages - **consigliato**)
4. Descrizione: "Portfolio di Lorenzo Delibero - Web Developer"
5. Seleziona **Public** (così è visibile a tutti)
6. **NON** aggiungere README.md/gitignore/license (li abbiamo già)
7. Clicca **Create repository**

## Step 3: Configura Git Localmente

Apri il terminale (PowerShell o Command Prompt su Windows):

```bash
# Naviga nella cartella del progetto
cd "C:\Users\CAdre\Desktop\PC\Portfolio\DWebcoding - Portfolio"

# Inizializza il repository git (se non fatto)
git init

# Aggiungi il remote (sostituisci "tuonome" con il tuo username GitHub)
git remote add origin https://github.com/Dwebcoding/Dwebcoding-Portfolio.git

# Configura git con i tuoi dati (usa una sola volta)
git config user.name "Tuo Nome"
git config user.email "tua.email@example.com"
```

## Step 4: Carica il Progetto

```bash
# Aggiungi tutti i file
git add .

# Crea il primo commit
git commit -m "Initial commit: Portfolio website"

# Carica su GitHub (il nome del branch potrebbe essere 'main' o 'master')
git branch -M main
git push -u origin main
```

## Step 5: Attiva GitHub Pages (per Deploy Automatico)

### Se il repository è `tuonome.github.io`:
- Automaticamente il sito sarà disponibile su `https://tuonome.github.io` (no configurazione necessaria)

### Se il repository è `portfolio`:
1. Vai nelle impostazioni del repository su GitHub
2. Scendi a **Pages**
3. Under "Build and deployment":
   - Source: seleziona `Deploy from a branch`
   - Branch: seleziona `main` e cartella `/ (root)`
4. Clicca **Save**
5. Attendi 2-3 minuti, il sito sarà su `https://tuonome.github.io/portfolio`

## Step 6: Aggiorna i Link

Nel README.md, sostituisci i placeholder con i tuoi dati reali:

```markdown
**[Portfolio Live](https://tuonome.github.io)**

**Lorenzo Delibero**
- Email: tua.email@example.com
- LinkedIn: linkedin.com/in/tuonome
- GitHub: github.com/Dwebcoding
- Website: tuonome.github.io
```

## Step 7: Aggiornamenti Futuri

Quando fai modifiche al tuo portfolio:

```bash
# Aggiungi le modifiche
git add .

# Crea un commit
git commit -m "Descrizione delle modifiche"

# Carica su GitHub
git push
```

## Link Finali da Usare

- **Repository**: `https://github.com/Dwebcoding/Dwebcoding-Portfolio`
- **Portfolio Live**: `https://tuonome.github.io`
- **Portfolio su GitHub Pages**: `https://tuonome.github.io/portfolio` (se non usi .github.io)

## Troubleshooting

### "fatal: not a git repository"
```bash
git init
```

### Errore di autenticazione
GitHub ha rimosso l'accesso tramite password. Usa:
1. **Token Personale** (PAT): [Crea qui](https://github.com/settings/tokens)
2. **SSH Keys**: [Genera una chiave SSH](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Le modifiche non appaiono subito
GitHub Pages impiega 2-3 minuti per aggiornare. Pulisci la cache del browser (Ctrl+Shift+Del).

---

**Hai domande? Consulta la [documentazione ufficiale di GitHub](https://docs.github.com)**