import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      "Layout & Style": "การจัดการหน้าเว็บ",
      "Test 1": "แบบทดสอบที่ 1",
      "Test 2": "แบบทดสอบที่ 2",
      "Test 3": "แบบทดสอบที่ 3",
      "Layout&Style": "การจัดการหน้าเว็บ",
      "Connect API": "การเชื่อมต่อ API",
      "Form & Table": "การจัดการหน้าฟอร์ม",
      "EN": "อังกฤษ",
      "TH": "ไทย",
      "Home page": "กลับหน้าหลัก"
    }
  },
  en: {
    translation: {
      "Layout & Style": "Layout & Style",
      "Test 1": "Test 1",
      "Test 2": "Test 2",
      "Test 3": "Test 3",
      "Layout&Style": "Layout & Style",
      "Connect API": "Connect API",
      "Form & Table": "Form & Table",
      "EN": "EN",
      "TH": "TH",
      "Home page": "Home page"
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;