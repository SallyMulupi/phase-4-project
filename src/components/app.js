import { useEffect, useState } from "react";
import uuid from "react-uuid";
import "./App.css";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
function App() {
    const [notes, setNotes] = useState(
      localStorage.notes ? JSON.parse(localStorage.notes) : []
    );
    const [activeNote, setActiveNote] = useState(false);
  