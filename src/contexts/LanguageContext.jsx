// src/contexts/LanguageContext.js
import React, { createContext, useContext, useState } from 'react';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');

  const translations = {
    en: {
      // Hero Section
      greeting: "Welcome to my portfolio",
      role: "Full Stack Software Developer",
      specialization: "Specializing in modern web and mobile development",
      techStack: "Tech Stack",
      
      // What I Do Section
      whatIDo: "What I do",
      developerDesc: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
      services: {
        frontend: "Develop highly interactive Front end / User Interfaces for your web and mobile applications",
        pwa: "Progressive Web Applications ( PWA ) in normal and SPA Stacks",
        integration: "Integration of third party services such as Firebase/ AWS / Digital Ocean"
      },

      // Education Section
      education: "Education",
      duration: "Duration",
      achievements: "Achievements",
    },
    ku: {
      // Hero Section
      greeting: "بەخێربێن بۆ پۆرتفۆلیۆی من",
      role: "پەرەپێدەری تەواو کۆمەڵە",
      specialization: "پسپۆڕ لە پەرەپێدانی وێب و مۆبایلی مۆدێرن",
      techStack: "کۆمەڵەی تەکنەلۆژیا",
      
      // What I Do Section
      whatIDo: "من چی دەکەم",
      developerDesc: "پەرەپێدەری تەواو کۆمەڵە کە دەیەوێت هەموو کۆمەڵەیەکی تەکنەلۆژیا تاقی بکاتەوە",
      services: {
        frontend: "پەرەپێدانی ڕووکاری کارلێکەر / ڕووکاری بەکارهێنەر بۆ بەرنامەکانی وێب و مۆبایل",
        pwa: "بەرنامەکانی وێبی پێشکەوتوو ( PWA ) لە کۆمەڵە ئاساییەکان و SPA",
        integration: "تێکەڵکردنی خزمەتگوزاریەکانی وەک Firebase/ AWS / Digital Ocean"
      },

      // Education Section
      education: "خوێندن",
      duration: "ماوە",
      achievements: "دەستکەوتەکان",
    },
    ar: {
      // Hero Section
      greeting: "مرحباً بكم في ملفي الشخصي",
      role: "مطور برمجيات متكامل",
      specialization: "متخصص في تطوير الويب والموبايل الحديث",
      techStack: "المجموعة التقنية",
      
      // What I Do Section
      whatIDo: "ماذا أفعل",
      developerDesc: "مطور برمجيات متكامل مجنون يريد استكشاف كل المجموعات التقنية",
      services: {
        frontend: "تطوير واجهات مستخدم تفاعلية لتطبيقات الويب والموبايل",
        pwa: "تطبيقات الويب التقدمية (PWA) في المجموعات العادية وSPA",
        integration: "دمج خدمات الطرف الثالث مثل Firebase و AWS و Digital Ocean"
      },

      // Education Section
      education: "التعليم",
      duration: "المدة",
      achievements: "الإنجازات",
    }
  };

  const value = {
    language,
    setLanguage,
    t: (key) => {
      // Split the key by dots to access nested properties
      const keys = key.split('.');
      let translation = translations[language];
      
      for (const k of keys) {
        translation = translation[k];
        if (!translation) break;
      }
      
      return translation || key;
    }
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}