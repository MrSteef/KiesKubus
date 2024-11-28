import { QuestionData } from '@/app/types'

interface QuestionListProps {
  questions: QuestionData[]
  onSelectQuestion: (question: QuestionData) => void
}

export function QuestionList({ questions, onSelectQuestion }: QuestionListProps) {
  return (
    <div className="h-full overflow-y-auto bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Questions</h2>
      <ul>
        {questions.map((question) => (
          <li 
            key={question.questionId} 
            className="mb-2 p-2 bg-gray-100 rounded cursor-pointer hover:bg-gray-200 transition-colors"
            onClick={() => onSelectQuestion(question)}
          >
            {question.text}
          </li>
        ))}
      </ul>
    </div>
  )
}

