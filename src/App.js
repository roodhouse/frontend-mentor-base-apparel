import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Copy from './components/Copy';
import Form from './components/Form';
import DesktopImage from './components/DesktopImage';
import BG from './images/bg-pattern-desktop.svg'

console.log(BG)

function App() {
  return (
    <div className="App h-screen bg-gradient-150 flex justify-center items-center xl:justify-evenly xl:items-center xl:bg-transparent">
     <div id='contentWrapper' className='pt-8 pb-[92px] h-full max-w-[375px] xl:pt-0 xl:h-[800px] xl:flex xl:w-full xl:max-w-[100%] xl:flex-col xl:flex-wrap xl:pb-0 xl:bg-[url("./images/bg-pattern-desktop.svg")]'>
      <div id='headerWrapper' className='px-8 pb-8 flex xl:w-[50%] xl:px-0 xl:pl-[165px] xl:pb-[137px] xl:pt-[66px]'>
        <Header />
      </div>
      <div id='imageWrapper' className='pb-[64px] xl:hidden'>
        <Image />
      </div>
      <div id='copyWrapper' className='px-8 pb-8 xl:w-[50%] xl:px-0 xl:pl-[165px] xl:pb-10'>
        <Copy />
      </div>
      <div id='formWrapper' className='px-8 w-full xl:w-[50%] xl:px-0 xl:pl-[165px]'>
        <Form />
      </div>
      <div id='desktopImageWrapper' className='hidden xl:block xl:w-[50%]'>
        <DesktopImage />
      </div>
     </div>
    </div>
  );
}

export default App;
