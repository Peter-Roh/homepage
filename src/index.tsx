import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import detector from 'i18next-browser-languagedetector';
import App from './App';
import en from './i18n/en.json';
import ko from './i18n/ko.json';
import reportWebVitals from './reportWebVitals';

i18n
  .use(detector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      ko: {
        translation: ko
      }
    },
    fallbackLng: 'en',
    react: {
      useSuspense: false
    }
  });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
