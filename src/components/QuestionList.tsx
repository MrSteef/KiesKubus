import { QuestionData } from '@/app/types'

interface QuestionListProps {
  questions: QuestionData[]
  onSelectQuestion: (question: QuestionData) => void
  selectedQuestionId: number | null
}

export function QuestionList({ questions, onSelectQuestion, selectedQuestionId }: QuestionListProps) {
  return (
    <div className="h-full overflow-y-auto bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Questions</h2>
      <ul className="space-y-2">
        {questions.map((question) => (
          <li 
            key={question.questionId} 
            className={`
              flex items-center p-2 rounded cursor-pointer transition-colors hover:bg-gray-100
              ${question.enabled ? '' : 'text-gray-400'}
              ${selectedQuestionId === question.questionId ? 'bg-blue-100 hover:bg-blue-200' : ''}
            `}
            onClick={() => onSelectQuestion(question)}
          >
            <span className="w-12 flex-shrink-0 font-semibold">{question.questionId}.</span>
            <span className="flex-grow">{question.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

