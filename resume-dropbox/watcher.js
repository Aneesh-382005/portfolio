// Resume Public Folder Watcher Script
// Watches for new/updated PDF in the public folder and uploads to portfolio API

const chokidar = require('chokidar');
const axios = require('axios');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const DROPBOX_FOLDER = path.resolve(__dirname);
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const PUBLIC_RESUME_NAME = 'Aneesh_Grover_Resume.pdf'; 
const API_ENDPOINT = 'https://www.aneeshgrover.me/api/upload-resume';
const UPLOAD_SECRET = process.env.UPLOAD_SECRET; // Must match the server

function uploadResume(filePath) {
  const fileStream = fs.createReadStream(filePath);
  const FormData = require('form-data');
  const formData = new FormData();
  formData.append('file', fileStream, PUBLIC_RESUME_NAME);

  axios.post(API_ENDPOINT, formData, {
    headers: {
      ...formData.getHeaders(),
      'x-upload-secret': UPLOAD_SECRET,
    },
    maxContentLength: Infinity,
    maxBodyLength: Infinity,
  })
    .then(res => {
      console.log('Resume uploaded successfully:', res.data);
    })
    .catch(err => {
      console.error('Failed to upload resume:', err.message);
    });
}

chokidar.watch(path.join(PUBLIC_DIR, PUBLIC_RESUME_NAME), { persistent: true })
  .on('add', uploadResume)
  .on('change', uploadResume);

console.log(`Watching for ${PUBLIC_RESUME_NAME} in ${PUBLIC_DIR}`);