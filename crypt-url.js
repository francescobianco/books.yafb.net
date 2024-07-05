// Funzione per cifrare/decifrare utilizzando XOR
function xorEncryptDecrypt(input, key) {
    let output = '';
    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }
    return output;
}

// Funzione per codificare una stringa in Base64
function base64Encode(str) {
    return Buffer.from(str, 'binary').toString('base64');
}

// Funzione per decodificare una stringa da Base64
function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('binary');
}

// Controlla se il file viene eseguito da riga di comando o incluso in una pagina web
if (typeof window === 'undefined') {
    // Node.js environment

    // Ottieni i parametri della riga di comando
    const args = process.argv.slice(2);

    if (args.length < 2) {
        console.error('Uso: node crypt-url.js <url> <chiave>');
        process.exit(1);
    }

    const url = args[0];
    const key = args[1];

    // Cifra l'URL
    const encryptedUrl = xorEncryptDecrypt(url, key);
    const encodedUrl = base64Encode(encryptedUrl);
    console.log(`URL cifrato: ${encodedUrl}`);
} else {
    // Browser environment
    (function() {
        // URL cifrato in Base64 (sostituisci con il valore generato dal comando node crypt-url.js)
        const encryptedUrl = "OBgBBBxUHH8IBx0ZCx03AxoTAwsdMwMYWwscWiYJWgFAXhw2AxkQChxAf10EGR4CfQYoGBsBI0c8XSwmVgtaAwA6EgMcYGgKFD0sWA==";

        // Funzione per chiedere la chiave e decodificare l'URL
        function promptForKeyAndDecrypt() {
            const key = prompt("Inserisci la chiave di decodifica:");

            // Decodifica da Base64
            const decodedUrl = base64Decode(encryptedUrl);

            // Decodifica l'URL
            const decryptedUrl = xorEncryptDecrypt(decodedUrl, key);

            // Verifica se la decodifica ha avuto successo (controlliamo che l'URL decodificato inizi con "http")
            if (decryptedUrl.startsWith("http")) {
                // Effettua il redirect all'URL decodificato
                window.location.href = decryptedUrl;
            } else {
                alert("Decodifica fallita. Chiave errata.");
                promptForKeyAndDecrypt();
            }
        }

        // Inizia chiedendo la chiave
        promptForKeyAndDecrypt();
    })();
}
