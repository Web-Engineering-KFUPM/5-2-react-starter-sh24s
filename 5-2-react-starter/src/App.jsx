import './App.css'
import StudentCard from './components/StudentCard'

function App() {
  return (
    <div className="app">
      <header className="dashboard-header">
        <h1>Student Information Dashboard</h1>
        <p>View and manage student details</p>
      </header>

      <main className="dashboard-main">
        <div className="cards-container">
          {/* TODO: Import and render StudentCard components here */}
          <StudentCard 
    name="Shahad Alhassan" 
    id="12345" 
    department="Computer Science" />
      
      <StudentCard 
    name="Khawlah Almalki" 
    id="67890" 
    department="Software Engineering" 
  />
        </div>
      </main>
    </div>
  )
}

export default App
