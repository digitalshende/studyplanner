
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"; 
import { getDatabase, ref, push } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js";

const firebaseConfig = { apiKey: "AIzaSyC1Td2zrBIRb5JvdaNKwoK_6aTHVUqP2rA", authDomain: "msample2026-db0f9.firebaseapp.com", databaseURL: "https://sample2026-db0f9-default-rtdb.firebaseio.com", projectId: "msample2026-db0f9", storageBucket: "msample2026-db0f9.appspot.com", messagingSenderId: "591014040082", appId: "1:591014040082:web:00baaac378af50bb4e7ecb" };
const app = initializeApp(firebaseConfig); 
const db = getDatabase(app);

document.getElementById("studyForm").addEventListener("submit", (e) => { e.preventDefault(); const subject = document.getElementById("subject").value; const topic = document.getElementById("topic").value; const date = document.getElementById("date").value; const completed = document.getElementById("completed")?.checked || false; push(ref(db, "plans"), { subject, topic, date, completed }).then(() => { alert("Plan saved to Realtime Database!"); }).catch((error) => { console.error("Error saving:", error); }); });
