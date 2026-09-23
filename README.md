# Royal Sutton Coldfield Philatelic Society

A static website built with HTML, CSS and a small JavaScript file for the mobile navigation menu. There is no build step or server-side component.

## Publish on GitHub Pages

1. Push the repository to GitHub. This repository's remote is `git@github.com:MargaretLangley/phil.git`.
2. On GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**.
4. Select the `main` branch and the `/ (root)` folder, then save.
5. Under **Custom domain**, enter `scphilatelic.org.uk` and save. The `CNAME` file in this repository contains that domain. Enable **Enforce HTTPS** after GitHub has issued the certificate; this can take some time after DNS is configured.

GitHub Pages publishes the files directly. Keep `index.html` at the repository root; it is the home page. Internal links and asset paths are relative, so they also work from the custom domain root.

## DNS records for `scphilatelic.org.uk`

At your domain registrar, remove conflicting records for the root (`@`) and add these records:

| Type | Host / name | Value | TTL |
| --- | --- | --- | --- |
| A | `@` | `185.199.108.153` | Default |
| A | `@` | `185.199.109.153` | Default |
| A | `@` | `185.199.110.153` | Default |
| A | `@` | `185.199.111.153` | Default |
| AAAA | `@` | `2606:50c0:8000::153` | Default |
| AAAA | `@` | `2606:50c0:8001::153` | Default |
| AAAA | `@` | `2606:50c0:8002::153` | Default |
| AAAA | `@` | `2606:50c0:8003::153` | Default |

To make `www.scphilatelic.org.uk` work too, add this DNS record. With the apex domain configured in GitHub Pages, GitHub will redirect between the apex and `www` domains when both DNS records are correct:

| Type | Host / name | Value | TTL |
| --- | --- | --- | --- |
| CNAME | `www` | `margaretlangley.github.io` | Default |

GitHub Pages normally redirects the additional `www` domain to the primary custom domain. DNS changes are made at the registrar; this repository does not make them.

## Updating the site

Edit the HTML pages and files in `assets/`, then commit and push to the `main` branch. GitHub Pages will publish the changes automatically.
