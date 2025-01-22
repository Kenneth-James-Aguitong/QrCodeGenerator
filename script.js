function generateQRCode() {
    var text = document.getElementById('textInput').value;
    if (text) {
        document.getElementById('qrcode').innerHTML = '';  // Clear any existing QR code
        var qrcode = new QRCode(document.getElementById('qrcode'), {
            text: text,
            width: 128,
            height: 128,
        });
    } else {
        alert("Please enter some text.");
    }
}
