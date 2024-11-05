import MainHeader from './components/MainHeader';
import SideBar from './components/SideBar';
import HomeDiv from './components/HomeDiv';
import './index.css';

function App() {
  return (
    <div className='border border-black w-[1920px] h-[1558px] top[-804px] left[-960px] bg-gradient-to-l from-white to-[#F1FBFF] m-8'>
      <MainHeader />
      <SideBar />
      <HomeDiv />
    </div>
  );
}

export default App;
