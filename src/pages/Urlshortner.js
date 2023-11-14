import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';

function Urlshortner() {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');

  const handleShorten = async () => {
    try {
      const response = await axios.post('http://your-backend-url/api/shorten', {
        originalUrl: originalUrl,
      });

      setShortenedUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error shortening URL:', error);
    }
  };

  return (
    <div className="App">
      <h1>URL Shortener</h1>
        <TextField 
        label="Url"
         value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)} />
      <Button onClick={handleShorten} variant='contained'>Shorten URL</Button>

      {shortenedUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
            {shortenedUrl}
          </a>
        </div>
      )}
    </div>
  );
}

export default Urlshortner;
