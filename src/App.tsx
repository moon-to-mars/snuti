import { useState } from 'react'
import { Layout } from './components/Layout'
import { type Tab } from './components/TabBar'
import { ParentDashboard } from './pages/ParentDashboard'
import { QuestPage } from './pages/QuestPage'
import { ObservePage } from './pages/ObservePage'
import { OptimizationPage } from './pages/OptimizationPage'
import { ClinicianReport } from './pages/ClinicianReport'
import { mockChildren } from './data'

type Screen =
  | { name: 'tab' }
  | { name: 'optimization'; completedQuestId: string }

const child = mockChildren[0]

export default function App() {
  const [activeTab, setActiveTab] = useState<Tab>('dashboard')
  const [screen, setScreen] = useState<Screen>({ name: 'tab' })
  const [startQuestId, setStartQuestId] = useState<string | undefined>()

  function handleStartQuest(questId: string) {
    setStartQuestId(questId)
    setActiveTab('quests')
    setScreen({ name: 'tab' })
  }

  function handleQuestComplete(questId: string) {
    setStartQuestId(undefined)
    setScreen({ name: 'optimization', completedQuestId: questId })
  }

  function handleTabChange(tab: Tab) {
    setActiveTab(tab)
    setScreen({ name: 'tab' })
    setStartQuestId(undefined)
  }

  function renderContent() {
    if (screen.name === 'optimization') {
      return (
        <OptimizationPage
          completedQuestId={screen.completedQuestId}
          onNext={() => { setScreen({ name: 'tab' }); setActiveTab('dashboard') }}
        />
      )
    }

    switch (activeTab) {
      case 'dashboard':
        return (
          <ParentDashboard
            child={child}
            onStartQuest={handleStartQuest}
            onTabChange={handleTabChange}
          />
        )
      case 'quests':
        return (
          <QuestPage
            initialQuestId={startQuestId}
            onComplete={handleQuestComplete}
          />
        )
      case 'observe':
        return (
          <ObservePage
            onSave={() => { setActiveTab('dashboard') }}
          />
        )
      case 'reports':
        return <ClinicianReport />
    }
  }

  return (
    <Layout
      child={child}
      activeTab={activeTab}
      onTabChange={handleTabChange}
      showTabs={screen.name === 'tab'}
    >
      {renderContent()}
    </Layout>
  )
}
