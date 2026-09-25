# PC FixXpress

Static site, no build step. `index.html`, `css/style.css`, `js/main.js`.

## Before you go live

1. **Contact form** — wired up to [web3forms.com](https://web3forms.com) with your access key already in
   `index.html` as a hidden `access_key` field. Submit a test message once the site is live to confirm it
   arrives; if you ever need to rotate the key, regenerate it on web3forms.com and swap the `value` there.
2. Check the phone and WhatsApp links in `index.html` (`tel:`, `wa.me`) are correct.

## Push to GitHub

```bash
cd pcfixxpress-site
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin https://github.com/joaoteixxeira/pcfixxpress.git
git push -u origin main
```

## Deploy on Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Pick the `pcfixxpress` repo.
3. Build settings: framework preset **None**, build command **(leave blank)**, build output directory **`/`**.
4. Deploy. Cloudflare gives you a `*.pages.dev` URL first — check the draft there.

## Connect pcfixxpress.com

1. In the Pages project → **Custom domains** → **Set up a custom domain** → enter `pcfixxpress.com` (and `www.pcfixxpress.com` if you want both).
2. If the domain's DNS is already on Cloudflare, it adds the records automatically.
   If it's registered elsewhere, point it at Cloudflare's nameservers first (Cloudflare dashboard → **Add a site** → follow the nameserver instructions), then repeat step 1.
3. Every future push to `main` auto-deploys; pushes to other branches get their own preview URL.

## Editing later

- Copy/prices/services live directly in `index.html`.
- Colors and type are CSS variables at the top of `css/style.css` (`:root { ... }`) — change them once, they apply everywhere.

## Manter uma cópia local e publicar atualizações

Depois do primeiro `git push` (secção "Push to GitHub" acima), a pasta no seu computador **é** a cópia de trabalho — não precisa de a recriar. Fluxo a partir daí:

1. Abra a pasta `pcfixxpress` no seu computador (num editor como o VS Code, ou só num explorador de ficheiros) e edite `index.html`, `css/style.css` ou `js/main.js` normalmente.
2. Abra um terminal dentro dessa pasta e confirme o que mudou:
   ```bash
   git status
   ```
3. Grave as alterações como um novo "commit":
   ```bash
   git add .
   git commit -m "descreva aqui o que mudou"
   ```
4. Envie para o GitHub:
   ```bash
   git push
   ```
5. O Cloudflare Pages deteta o push automaticamente e publica a nova versão em `pcfixxpress.com` dentro de 1–2 minutos — não é preciso fazer mais nada no Cloudflare.

Se algum dia trabalhar noutro computador (ou apagar a pasta por engano), recupera a cópia local com:
```bash
git clone https://github.com/joaoteixxeira/pcfixxpress.git
```

