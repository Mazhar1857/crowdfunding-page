import './App.css'
import Navigation from './component/navigation/Navigation';
import Mastercraft from './component/header/Mastercraft';
import ProgressBar from './component/ProgressBar/ProgressBar';
import About from './component/about/About';
import BackThisProject from './component/backThisProject/BackThisProject';
import Completion from './component/completion/Completion';
import { useState } from 'react';

function App() {

  const [completion, setCompletion] = useState(false);
  const [project, setProject] = useState(false);
  const [reward, setReward] = useState();

  const handleCompletion = () => {
    setProject((pre) => {
      return !pre;
    })
    setCompletion((pre) => {
      return !pre;
    })
  }

  const handleContinueBtn = () => {

    setCompletion((pre) => {
      return !pre;
    })
  }

  const handleCloseBtn = () => {
    setProject((pre) => {
      return !pre;
    })
  }

  const handleBackProjectBtn = () => {
    setProject((pre) => {
      return !pre;
    })
  }

  const handleRewardBtn = (value) => {
    setReward(value);
    setProject((pre) => {
      return !pre;
    })
  }

  return (
    <div className={`container ${project ? 'project-active' : ''}`}>
      <nav >
        <Navigation />
      </nav>
      <main>
        <header className='mastercraft-section'>
          <Mastercraft handleBackProjectBtn={handleBackProjectBtn} />
        </header>
        <section className='progress-section' >
          <ProgressBar />
        </section>
        <section className='about-section'>
          <About handleRewardBtn={handleRewardBtn} />
        </section>
        <section className={`back-project-section ${project ? 'project-active' : ''} ${completion ? 'completion-active' : ''}`}>
          <BackThisProject handleContinueBtn={handleContinueBtn} handleCloseBtn={handleCloseBtn} handleRewardBtn={handleRewardBtn} reward={reward} />
        </section>
        <section className={`completion-section ${completion ? 'completion-active' : ''}`}>
          <Completion handleCompletion={handleCompletion} />
        </section>
      </main>
    </div>
  )
}

export default App
