import Header from './components/Header'
import Top from './components/Top'
import TopNews from './screen/TopNews'

function App() {
  return (
    <>
      <Header />
      <div className='bg-[#EDEDED] lg:px-16 px-6'>
        <Top />
        <TopNews />
      </div>
    </>
  )
}

export default App
