
function xorEncryptDecrypt(input, key) {
    let output = '';

    for (let i = 0; i < input.length; i++) {
        output += String.fromCharCode(input.charCodeAt(i) ^ key.charCodeAt(i % key.length));
    }

    return output;
}

function base64Encode(str) {
    return Buffer.from(str, 'binary').toString('base64');
}

function base64Decode(str) {
    return Buffer.from(str, 'base64').toString('binary');
}

var args = process.argv.slice(2);

if (args.length < 2) {
    console.error('Uso: node crypt-url.js <url> <chiave>');
    process.exit(1);
}

var url = args[0];
var key = args[1];

var encryptedUrl = xorEncryptDecrypt(url, key);
var encodedUrl = base64Encode(encryptedUrl);

console.log(`URL cifrato: ${encodedUrl}`);
