'use client'

import { useState, useEffect } from 'react'
import { Panel, PanelGroup, PanelResizeHandle } from 'react-resizable-panels'
import { QuestionList } from '@/components/QuestionList'
import { QuestionDetails } from '@/components/QuestionDetails'
import { QuestionData } from '@/app/types'

export default function Editor() {
  const [questions, setQuestions] = useState<QuestionData[]>([])
  const [selectedQuestion, setSelectedQuestion] = useState<QuestionData | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true)
        const response = await fetch('https://api.kieskubus.nl/questionlist?includeChangelog=true', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setQuestions(data.questions)
        setError(null)
      } catch (error) {
        console.error('Error fetching questions:', error)
        setError(`Failed to fetch questions: ${error instanceof Error ? error.message : String(error)}`)
        setQuestions([])
      } finally {
        setLoading(false)
      }
    }

    fetchQuestions()
  }, [])

  return (
    <main className="h-screen bg-gray-100">
      {loading ? (
        <div className="flex items-center justify-center h-full">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-gray-900"></div>
        </div>
      ) : error ? (
        <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      ) : (
        <PanelGroup direction="horizontal">
          <Panel defaultSize={25} minSize={20}>
            <QuestionList 
              questions={questions} 
              onSelectQuestion={(question: QuestionData) => setSelectedQuestion(question)}
            />
          </Panel>
          <PanelResizeHandle className="w-2 bg-gray-200 hover:bg-gray-300 transition-colors" />
          <Panel minSize={30}>
            <QuestionDetails question={selectedQuestion} />
          </Panel>
        </PanelGroup>
      )}
    </main>
  )
}

