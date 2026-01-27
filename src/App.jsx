import { useState } from 'react'
import FolderLayout from './components/FolderLayout'
import ResumeSection from './components/ResumeSection'
import AssetGallery from './components/AssetGallery'

function App() {
    const [activeTab, setActiveTab] = useState('resume')

    return (
        <FolderLayout activeTab={activeTab} onTabChange={setActiveTab}>
            {activeTab === 'resume' ? <ResumeSection /> : <AssetGallery />}
        </FolderLayout>
    )
}

export default App
