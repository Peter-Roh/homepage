import React, { useCallback, useMemo } from 'react';
import i18n from 'i18next';
import AmericanFlag from '../assets/american_flag.png';
import KoreanFlag from '../assets/korean_flag.png';

function LanguageModal() {
  const ENG = useMemo(() => 'en-US', []);
  const KOR = useMemo(() => 'ko-KR', []);
  const changeLang = useCallback((lang: string) => {
    i18n.changeLanguage(lang);
  }, []);
  const getCurrentLang = useCallback(() => {
    return localStorage.getItem('i18nextLng') || '';
  }, []);

  return (
    <div className="btn btn-square btn-ghost rounded-lg flex-x-center mr-2 dropdown dropdown-left w-16 h-10">
      <div className="flex-x-center w-full h-full" tabIndex={0}>
        {/* 문자 모양 svg */}
        <svg
          className="fill-current w-8 h-8 mr-1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z" />
          <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z" />
        </svg>
        {/* 아래 방향 화살표 svg */}
        <svg
          className="fill-current h-3 w-3 opacity-60"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" />
        </svg>
      </div>
      <ul className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
        <li className="flex">
          <button
            type="button"
            className={`flex ${getCurrentLang() === ENG ? 'active' : ''}`}
            onClick={() => changeLang(ENG)}
          >
            <img src={AmericanFlag} alt="american flag" className="w-8 h-6" />
            <p>English</p>
          </button>
        </li>
        <li className="flex">
          <button
            type="button"
            className={`flex ${getCurrentLang() === KOR ? 'active' : ''}`}
            onClick={() => changeLang(KOR)}
          >
            <img src={KoreanFlag} alt="korean flag" className="w-8 h-6" />
            <p>한국어</p>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default LanguageModal;
