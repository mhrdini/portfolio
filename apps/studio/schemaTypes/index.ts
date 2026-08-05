import education from './documents/education'
import experience from './documents/experience'
import language from './documents/language'
import social from './documents/social'
import localizedString from './localized-string'
import localizedText from './localized-text'
import resume from './resume'
import keyValueBlock from './resume/key-value-block'
import referenceBlock from './resume/reference-block'
import resumeSection from './resume/resume-section'

export const schemaTypes = [
  language,
  localizedString,
  localizedText,
  resume,
  resumeSection,
  keyValueBlock,
  referenceBlock,
  social,
  experience,
  education,
]
