import React from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';
import './assets/font-awesome/css/all.css';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);