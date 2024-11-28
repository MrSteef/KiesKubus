export interface QuestionData {
  questionId: number
  text: string
  topic: string
  changelog: ChangelogItem[]
  enabled: boolean
  answerOptions: AnswerOption[]
  questionSettings: QuestionSetting[]
}

interface ChangelogItem {
  versionId: number
  updateType: string
  questionId: number
  text: string
  topic: string
}

interface AnswerOption {
  questionId: number
  answerId: number
  text: string
  changelog: AnswerChangelogItem[]
  enabled: boolean
  answerOptionSettings: AnswerOptionSetting[]
  vectorComponents: VectorComponent[]
}

interface AnswerChangelogItem {
  versionId: number
  updateType: string
  questionId: number
  answerId: number
  text: string
}

interface AnswerOptionSetting {
  questionId: number
  answerId: number
  setting: string
  value: string
  changelog: AnswerOptionSettingChangelogItem[]
  enabled: boolean
}

interface AnswerOptionSettingChangelogItem {
  versionId: number
  updateType: string
  questionId: number
  answerId: number
  setting: string
  value: string
}

interface VectorComponent {
  questionId: number
  answerId: number
  componentType: string
  componentName: string
  value: string
  changelog: VectorComponentChangelogItem[]
  enabled: boolean
}

interface VectorComponentChangelogItem {
  versionId: number
  updateType: string
  questionId: number
  answerId: number
  componentType: string
  componentName: string
  value: string
}

interface QuestionSetting {
  questionId: number
  setting: string
  value: string
  changelog: QuestionSettingChangelogItem[]
  enabled: boolean
}

interface QuestionSettingChangelogItem {
  versionId: number
  updateType: string
  questionId: number
  setting: string
  value: string
}

