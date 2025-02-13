import React, { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('en');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'ku', name: 'Kurdish', flag: '🇮🇶' },
    { code: 'ar', name: 'Arabic', flag: '🇸🇦' }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (langCode) => {
    setSelectedLang(langCode);
    setIsOpen(false);
    // Here you would typically call a function to change the app's language
  };

  const currentLang = languages.find(lang => lang.code === selectedLang);

  return (
    <div className="fixed top-4 right-4 sm:top-6 sm:right-6 z-50">
      <div className="relative">
        {/* Language Button */}
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-2 px-3 py-2 bg-slate-800 rounded-lg border border-slate-700 
                     hover:border-teal-400 transition-colors duration-300 group"
        >
          <Globe className="w-4 h-4 text-teal-400" />
          <span className="hidden sm:inline text-gray-300 text-sm font-mono">
            {currentLang.name}
          </span>
          <span className="text-lg sm:ml-1">{currentLang.flag}</span>
          <ChevronDown 
            className={`w-4 h-4 text-gray-400 transition-transform duration-300 
                       ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          />
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-slate-800 rounded-lg border border-slate-700 
                          shadow-lg overflow-hidden backdrop-blur-sm">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => selectLanguage(lang.code)}
                  className={`w-full flex items-center gap-3 px-4 py-2 text-sm font-mono
                             ${selectedLang === lang.code ? 'bg-slate-700 text-teal-400' : 'text-gray-300'}
                             hover:bg-slate-700 transition-colors duration-200`}
                >
                  <span className="text-lg">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LanguageSelector;