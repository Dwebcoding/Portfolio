# GitHub Setup Guide

This guide will help you upload your portfolio to GitHub and make it public.

## Step 1: Create a GitHub Account

If you don't have one, go to [github.com](https://github.com) and create a free account.

## Step 2: Create a New Repository

1. Log in to GitHub
2. Click the **+** in the top right and select **New repository**
3. **Repository name**: choose between:
   - `portfolio` (generic)
   - `yourusername.github.io` (for GitHub Pages - **recommended**)
4. Description: "Lorenzo Delibero Portfolio - Web Developer"
5. Select **Public** (so it's visible to everyone)
6. **DO NOT** add README.md/gitignore/license (we already have them)
7. Click **Create repository**

## Step 3: Configure Git Locally

Open terminal (PowerShell or Command Prompt on Windows):

```bash
# Navigate to project folder
cd "C:\Users\CAdre\Desktop\PC\Portfolio\DWebcoding - Portfolio"

# Initialize git repository (if not done)
git init

# Add remote (replace "yourusername" with your GitHub username)
git remote add origin https://github.com/yourusername/portfolio.git

# Configure git with your data (use once)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

## Step 4: Upload the Project

```bash
# Add all files
git add .

# Create first commit
git commit -m "Initial commit: Portfolio website"

# Upload to GitHub (branch name might be 'main' or 'master')
git branch -M main
git push -u origin main
```

## Step 5: Enable GitHub Pages (for Automatic Deploy)

### If repository is `yourusername.github.io`:
- Automatically the site will be available at `https://yourusername.github.io` (no configuration needed)

### If repository is `portfolio`:
1. Go to repository settings on GitHub
2. Scroll down to **Pages**
3. Under "Build and deployment":
   - Source: select `Deploy from a branch`
   - Branch: select `main` and folder `/ (root)`
4. Click **Save**
5. Wait 2-3 minutes, the site will be at `https://yourusername.github.io/portfolio`

## Step 6: Update Links

In README.md, replace placeholders with your real data:

```markdown
**[Live Portfolio](https://yourusername.github.io)**

**Lorenzo Delibero**
- Email: your.email@example.com
- LinkedIn: linkedin.com/in/yourusername
- GitHub: github.com/yourusername
- Website: yourusername.github.io
```

## Step 7: Future Updates

When you make changes to your portfolio:

```bash
# Add changes
git add .

# Create a commit
git commit -m "Description of changes"

# Upload to GitHub
git push
```

## Final Links to Use

- **Repository**: `https://github.com/yourusername/portfolio`
- **Live Portfolio**: `https://yourusername.github.io`
- **Portfolio on GitHub Pages**: `https://yourusername.github.io/portfolio` (if not using .github.io)

## Troubleshooting

### "fatal: not a git repository"
```bash
git init
```

### Authentication error
GitHub has removed password access. Use:
1. **Personal Token** (PAT): [Create here](https://github.com/settings/tokens)
2. **SSH Keys**: [Generate SSH key](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Changes don't appear immediately
GitHub Pages takes 2-3 minutes to update. Clear browser cache (Ctrl+Shift+Del).

---

**Have questions? Check the [official GitHub documentation](https://docs.github.com)**