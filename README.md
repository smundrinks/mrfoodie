# Mr Foodie — GitHub Pages website

## 1) Connect your Gmail (required)
1. Open `script.js`.
2. At the very top, replace `YOUR_GMAIL@gmail.com` with the Gmail address where you want to receive customer orders.
3. Save the file.

Orders are sent using FormSubmit's AJAX email endpoint. On the first real order, FormSubmit may send an activation/confirmation email to that Gmail address. Open it and activate the form. Test a sample order after activation. This external email service is required because GitHub Pages only hosts static files and cannot run a private mail server.

## 2) Publish directly from repository root
1. Extract this ZIP.
2. Create a GitHub repository.
3. Upload **all files inside this folder** directly into the repository's top level (not inside another nested folder).
4. Make sure `index.html` is visible at the repository root.
5. Open repository **Settings → Pages**.
6. Under Build and deployment, choose **Deploy from a branch**, select `main` and `/(root)`, then Save.
7. Wait for GitHub Pages to publish the site.

## Included
- `index.html` — website structure
- `style.css` — responsive black/white styling
- `script.js` — menu, cart, checkout and email order submission
- `.nojekyll` — root static hosting helper

## Important notes
- Menu prices are sample PKR prices; edit the `PRODUCTS` list in `script.js` to change them.
- Food photos are loaded from Unsplash over the internet, so customers need an internet connection to see them.
- GitHub Pages is static hosting. This site does not include online card payments, delivery tracking, stock management, or an admin dashboard.
- Never put Gmail passwords, API secrets, or private credentials in website JavaScript.
