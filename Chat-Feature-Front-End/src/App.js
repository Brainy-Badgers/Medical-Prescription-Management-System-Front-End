import { useState } from 'react';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import Lobby from './components/Lobby';
import Chat from './components/Chat';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/ChatRooms'
import ChatRooms from './components/ChatRooms';

const App = () => {
  return <ChatRooms/>
}

export default App;
