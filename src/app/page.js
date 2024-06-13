"use client";
import { useState } from 'react';
import QRCode from 'qrcode';

export default function QRCodeGenerator() {
  const [url, setUrl] = useState('');
  const [qrCodeUrl, setQrCodeUrl] = useState('');

  const generateQRCode = async () => {
    try {
      const qrCodeDataUrl = await QRCode.toDataURL(url);
      setQrCodeUrl(qrCodeDataUrl);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>URL to QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ padding: '10px', width: '300px', marginBottom: '20px' }}
      />
      <br />
      <button onClick={generateQRCode} style={{ padding: '10px 20px' }}>
        Generate QR Code
      </button>
      <br />
      {qrCodeUrl && (
        <div style={{ marginTop: '20px' }}>
          <img src={qrCodeUrl} alt="QR Code" />
        </div>
      )}
    </div>
  );
}