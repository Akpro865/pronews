import Header from './components/Header'
import Top from './components/Top'
import TopNews from './screen/TopNews'
import Categories from './screen/Categories'

function App() {
  return (
    <>
      <Header />
      <div className='bg-[#f6f8fc] lg:px-24'>
        <Top />
        <TopNews />
        <Categories />
      </div>
    </>
  )
}

export default App
