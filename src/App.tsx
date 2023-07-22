import './App.css'
import Hero from './content/Hero'
import About from './content/About'
import Images1 from './content/Images1'
import AboutVideo from './content/AboutVideo'
import HorizontalContent from './content/HorizontalContent'
import BottomContent from './content/BottomContent'

function App() {

  return (
    <div className="flex flex-col w-full">
      <Hero />
      <About />
      <Images1 />
      <AboutVideo />
      <HorizontalContent />
      <BottomContent />

    </div>
  )
}

export default App
