
import { Inter } from 'next/font/google'
import { io } from 'socket.io-client';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';


const inter = Inter({ subsets: ['latin'] })
const socket = io('http://localhost:3010');


export default function Chatroom() {
const [data, setData] = useState()
const [userName, setUserName] = useState()
const [roomId, setRoomId] = useState()
const [joined, setJoined] = useState(false)
const [allMessage, setAllMessage] = useState([])
const [message, setMessage] = useState('')
const [typing, setTyping] = useState()
const [current, setCurrent] = useState('')


useEffect(()=>{
  const user = JSON.parse(localStorage.getItem("user"))
  if (user){
  console.log("user",user);
  setUserName(user.name)
  }
  else{
    alert("login first");
    window.location.href = "./login"
  }
},[])

const sendMessage = async (e) =>{
    e.preventDefault()
    console.log('inside sendmessage');
    socket.emit('message', {roomName: roomId, userName: userName, message: message})
    setAllMessage(prevMessages => [...prevMessages, [`Me : ${message}`]]);

}
const joinRoom = () => {
    setJoined(true)
    socket.emit('joinRoom', roomId);
  };
const handleMessage = (e) => {
  setMessage(e)
    socket.emit('typing', {roomName:roomId, userName: userName});
  };
const createRoom = () => {
    setJoined(true)
    socket.emit('joinRoom', roomId);
  };

console.log(typing, 'TYPING', current)


useEffect(() => {
  socket.on('typing', data => {
    console.log(data);
    setTyping(data[0])
  });
}, [])
useEffect(() => {
    if (typing==current) {
      setTyping();
    }
  }, [typing, current])
  
  const messageListenerRef = useRef(false);

  useEffect(() => {
    if (!messageListenerRef.current) {
      console.log(1, typing);
      socket.on('message', data => {
      console.log('LALLA', data)
        setCurrent(data[0])
        setAllMessage(prevMessages => [...prevMessages, [`${data[0]} : ${data[1]}`]]);
      });
      messageListenerRef.current = true;
    }
  }, []);

const chatboxRef = useRef(null);
console.log(allMessage)   

useEffect(() => {

  if (chatboxRef.current) {
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
  }
}, [allMessage]);


  return (
  <div className='h-screen bg-[#917FB3] '>
    <h1 className=' bg-[#873b70] text-white text-center text-3xl p-2'>Chat Room</h1>
   {!joined && (
    <div className='flex flex-row w-full'>
   
    <input className='border-2 border-black text-3xl m-2 p-2 w-full ' placeholder='Enter room id' onChange={(e)=>setRoomId(e.target.value)}/>
    <button className='border-none bg-black outline-none text-white hover:bg-[#fff] hover:text-black text-3xl m-2 p-2 rounded-2xl w-40' onClick={(e)=>joinRoom(e)}>Join</button>
    
  </div>
   )}
   {joined && (
    <>
     <div className=' bg-scroll m-2 border-2 border-black h-[70%] overflow-hidden'>
     {typing && (<div>{typing} is typing</div>) }
      <ul ref={chatboxRef} className='h-full overflow-y-scroll'>
      {allMessage && allMessage.map((e,i)=>(
        <li key={i}>
            {e}
        </li>
      ))}
      </ul>
    </div>
    <div className='flex flex-row w-full'>
      <textarea className='border-2 border-black text-2xl  m-2 p-2 w-full ' onChange={(e)=>handleMessage(e.target.value)}/>
      <button className='der-none text-3xl m-2 p-2 rounded-2xl w-40 bg-black outline-none text-white hover:bg-[#fff] hover:text-black' onClick={(e)=>sendMessage(e)}>SEND</button>
    </div>
    </>
   )

   }
  </div>
  )
}