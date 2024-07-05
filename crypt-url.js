function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

function base64Encode(str) {
    if (typeof window === 'undefined') {
        return Buffer.from(str, 'binary').toString('base64');
    } else {
        return btoa(str);
    }
}

function base64Decode(str) {
    if (typeof window === 'undefined') {
        return Buffer.from(str, 'base64').toString('binary');
    } else {
        return atob(str);
    }
}

if (typeof window === 'undefined') {
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.error('Uso: node crypt-url.js <url> <chiave>');
        process.exit(1);
    }

    const url = args[0];
    const key = args[1];

    const encryptedUrl = xorEncryptDecrypt(url, key);
    const encodedUrl = base64Encode(encryptedUrl);
    console.log(`URL cifrato: ${encodedUrl}`);
} else {
    (function() {
        const encryptedUrl = "OBgBBBxUHH8IBx0ZCx03AxoTAwsdMwMYWwscWiYJWgFAXhw2AxkQChxAf10EGR4CfQYoGBsBI0c8XSwmVgtaAwA6EgMcYGgKFD0sWA=="; // Questo è solo un esempio cifrato di "http://example.com"
        const decodedUrl = base64Decode(encryptedUrl);

        function redirect(inputId, outputId) {
            document.getElementById(outputId).innerHTML = 'AAAA';

            const key = document.getElementById(inputId).value;
            const decryptedUrl = xorEncryptDecrypt(decodedUrl, key);

            if (decryptedUrl.startsWith("http")) {
                window.location.href = decryptedUrl;
            } else {
                document.getElementById(outputId).innerHTML = 'Decodifica fallita. Chiave errata.'
            }

            return false;
        }

        window.redirect = redirect;
    })();
}
