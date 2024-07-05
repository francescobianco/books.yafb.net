# 📚 books.yafb.net

Welcome to **books.yafb.net**! This is a simple tool designed to shorten long URLs, but with a twist: only users who know the password can be redirected to the destination page. Perfect for securing access to your personal library! 📖🔒

## 🌟 Features

- **URL Shortening**: Convert long URLs to short, manageable links.
- **Password Protection**: Ensure only those with the correct password can access the target URL.
- **Secure Redirect**: Users are redirected to the destination only after entering the correct password.

## 🚀 Getting Started

### Node.js Usage

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/books.yafb.net.git
    cd books.yafb.net
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Run the script to encrypt your URL:
    ```bash
    node crypt-url.js <url> <password>
    ```

4. Copy the generated encrypted URL and use it in your web page.

### Browser Usage

1. Include the `crypt-url.js` script in your HTML file:
    ```html
    <!DOCTYPE html>
    <html>
    <head>
        <title>Decoding and Redirect</title>
        <script src="crypt-url.js"></script>
    </head>
    <body>
        <h1>Decoding and Redirect</h1>
        <p>Enter the decoding key to be redirected to your URL.</p>
    </body>
    </html>
    ```

2. Replace the `encryptedUrl` in `crypt-url.js` with the one generated from the Node.js script.

## 🌐 Public Website

You can also use our public website to shorten and secure your URLs:
[books.yafb.net](http://books.yafb.net)

## 📜 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🙌 Contributing

Feel free to submit issues and pull requests. We appreciate all contributions!

## 💬 Contact

For any inquiries or questions, please open an issue on GitHub or contact us via [bianco@javanile.org](mailto:bianco@javanile.org).
