import { ActionWithPayload } from '../actionWithPayload';
import { LanguageActions } from './language.actions';
import { Language, updateMessage } from '../../models/language';

export function languageReducer(
  language: Language = { message: 'UNKNOWN' },
  action: ActionWithPayload
): Language {
  switch (action.type) {
    case LanguageActions.FRENCH:
      return updateMessage(language, action.payload);
    case LanguageActions.ENGLISH:
      return updateMessage(language, action.payload);
    case LanguageActions.SPANISH:
      return updateMessage(language, action.payload);
    case LanguageActions.DEFAULT:
      return updateMessage(language, action.payload);
    default:
      return language;
  }
}
