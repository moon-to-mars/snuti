import { useState } from 'react'
import { Layout } from './components/Layout'
import { useRole } from './hooks/useRole'
import { ParentDashboard } from './pages/ParentDashboard'
import { QuestPage } from './pages/QuestPage'
import { OptimizationPage } from './pages/OptimizationPage'
import { ClinicianReport } from './pages/ClinicianReport'
import { ChildQuestView } from './pages/ChildQuestView'

type Screen =
  | { name: 'dashboard' }
  | { name: 'quest'; questId: string }
  | { name: 'optimization'; completedQuestId: string }

export default function App() {
  const { role, setRole } = useRole()
  const [screen, setScreen] = useState<Screen>({ name: 'dashboard' })
  const [completedQuests, setCompletedQuests] = useState<Record<string, Record<string, string>>>({})

  function handleStartQuest(questId: string) {
    setScreen({ name: 'quest', questId })
  }

  function handleQuestComplete(questId: string, answers: Record<string, string>) {
    setCompletedQuests((prev) => ({ ...prev, [questId]: answers }))
    setScreen({ name: 'optimization', completedQuestId: questId })
  }

  function renderContent() {
    if (role === 'child') return <ChildQuestView />
    if (role === 'clinician') return <ClinicianReport />

    // parent role
    if (screen.name === 'quest') {
      return (
        <QuestPage
          questId={screen.questId}
          onComplete={handleQuestComplete}
          onBack={() => setScreen({ name: 'dashboard' })}
        />
      )
    }
    if (screen.name === 'optimization') {
      return (
        <OptimizationPage
          completedQuestId={screen.completedQuestId}
          onNext={() => setScreen({ name: 'dashboard' })}
        />
      )
    }
    return (
      <ParentDashboard
        onStartQuest={handleStartQuest}
        completedQuests={completedQuests}
      />
    )
  }

  return (
    <Layout role={role} onRoleChange={(r) => { setRole(r); setScreen({ name: 'dashboard' }) }}>
      {renderContent()}
    </Layout>
  )
}
