import './App.css';
import Header from './components/Header';
import Image from './components/Image';
import Copy from './components/Copy';
import Form from './components/Form';

function App() {
  return (
    <div className="App h-screen">
     <div id='contentWrapper' className='pt-8 pb-[92px] bg-gradient-150 h-full'>
      <div id='headerWrapper' className='px-8 pb-8 flex'>
        <Header />
      </div>
      <div id='imageWrapper' className='pb-[64px]'>
        <Image />
      </div>
      <div id='copyWrapper' className='px-8 pb-8'>
        <Copy />
      </div>
      <div id='formWrapper' className='px-8 w-full'>
        <Form />
      </div>
     </div>
    </div>
  );
}

export default App;
