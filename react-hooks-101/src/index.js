import React from 'react';
import ReactDOM from 'react-dom/client'; // 'react-dom/client' をインポート
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// React 18では `createRoot` を使います
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// サービスワーカーを設定（オフライン対応）
serviceWorker.unregister();
