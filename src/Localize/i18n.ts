import I18n from 'i18n-js';
import en from './en';
import fr from './fr';

I18n.fallbacks = true;

I18n.translations = {
  en,
  fr,
};

export default I18n;
