import { QuestionData } from '@/app/types'

interface QuestionDetailsProps {
  question: QuestionData | null
}

export function QuestionDetails({ question }: QuestionDetailsProps) {
  if (!question) {
    return (
      <div className="h-full flex items-center justify-center bg-white">
        <p className="text-gray-500">Select a question to view details</p>
      </div>
    )
  }

  return (
    <div className="h-full overflow-y-auto bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">{question.text}</h2>
      <p><strong>Topic:</strong> {question.topic}</p>
      <p><strong>Enabled:</strong> {question.enabled ? 'Yes' : 'No'}</p>

      <h3 className="text-xl font-semibold mt-4 mb-2">Answer Options</h3>
      <ul>
        {question.answerOptions.map((option) => (
          <li key={option.answerId} className="mb-2">
            <p><strong>Text:</strong> {option.text}</p>
            <p><strong>Enabled:</strong> {option.enabled ? 'Yes' : 'No'}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Question Settings</h3>
      <ul>
        {question.questionSettings.map((setting, index) => (
          <li key={index}>
            <p><strong>{setting.setting}:</strong> {setting.value}</p>
          </li>
        ))}
      </ul>

      <h3 className="text-xl font-semibold mt-4 mb-2">Changelog</h3>
      <ul>
        {question.changelog.map((change, index) => (
          <li key={index} className="mb-2">
            <p><strong>Version:</strong> {change.versionId}</p>
            <p><strong>Update Type:</strong> {change.updateType}</p>
            <p><strong>Text:</strong> {change.text}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

