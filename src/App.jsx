import './App.css'
import { Contact } from './components/Contact'
import { Heading } from './components/Heading'

function App() {

  return (
    <div>
      <Heading text="Contact List" />
      <Contact name="Jan Kuta" email="jan.kuta@email.cz" phone="+420 123 456 789" />
      <Contact name="Jana Kutová" email="jana.kutova@email.cz" phone="+420 987 654 321" />
    </div>
  )
}

export default App
