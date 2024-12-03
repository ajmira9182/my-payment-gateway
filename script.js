{\rtf1\ansi\ansicpg1252\cocoartf2761
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 document.getElementById('generate-qr').addEventListener('click', function() \{\
    const amount = document.getElementById('amount').value;\
\
    if (amount > 0) \{\
        const upiLink = `upi://pay?pa=9618480093@ybl&pn=YourName&mc=0000&tid=1234567890&url=http://www.yourwebsite.com&am=$\{amount\}&cu=INR`;\
\
        // Clear the previous QR code if it exists\
        const qrCodeContainer = document.getElementById('qrcode');\
        qrCodeContainer.innerHTML = '';\
\
        // Generate new QR code\
        const qrCode = new QRCode(qrCodeContainer, \{\
            text: upiLink,\
            width: 150,\
            height: 150,\
        \});\
\
        // Show the QR code section\
        const qrSection = document.getElementById('qr-section');\
        qrSection.classList.remove('hidden');\
\
        // Check if the user is on a mobile device\
        if (isMobileDevice()) \{\
            // Show UPI app payment options\
            const paymentOptions = document.getElementById('payment-options');\
            paymentOptions.classList.remove('hidden');\
        \} else \{\
            alert("Please use a mobile device to make the payment.");\
        \}\
    \} else \{\
        alert("Please enter a valid amount.");\
    \}\
\});\
\
// Function to detect mobile devices\
function isMobileDevice() \{\
    return /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);\
\}\
\
// Function to redirect to UPI apps\
function redirectToUPI(app) \{\
    const amount = document.getElementById('amount').value;\
    const upiLink = `upi://pay?pa=9618480093@ybl&pn=YourName&am=$\{amount\}&cu=INR`;\
\
    switch (app) \{\
        case 'phonepe':\
            window.location.href = `phonepe://upi/pay?pa=9618480093@ybl&pn=YourName&am=$\{amount\}&cu=INR`;\
            break;\
        case 'googlepay':\
            window.location.href = `upi://pay?pa=9618480093@ybl&pn=YourName&am=$\{amount\}&cu=INR`;\
            break;\
        case 'paytm':\
            window.location.href = `paytm://upi/pay?pa=9618480093@ybl&pn=YourName&am=$\{amount\}&cu=INR`;\
            break;\
        default:\
            alert("Invalid payment option.");\
            break;\
    \}\
\}\
}