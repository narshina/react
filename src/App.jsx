import logo from './logo.svg';
import './App.css'
import img from './image.jpg'
import { Card } from './Card';


function App() {
  return (
    <>
    <div className='flex gap-5 flex-wrap w-[50%] m-auto'>

    <Card name='John' cls='bg-slate-500' image={img} position="ssdsd"/>
    <Card name='John' image={img} position="ssdsd"/>
    <Card name='John' image={img} position="ssdsd"/>
    <Card name='John' image={img} position="ssdsd"/>
    <Card name='John' image={img} position="ssdsd"/>
    <Card name='John'cls='bg-slate-500' image={img} position="ssdsd"/>
    </div>
    </>
  );
}

export default App;
