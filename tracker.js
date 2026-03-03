import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js"; 
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-database.js"; 


const app = initializeApp(firebaseConfig); 
const db = getDatabase(app);

const firebaseConfig = { apiKey: "AIzaSyC1Td2zrBIRb5JvdaNKwoK_6aTHVUqP2rA", 
authDomain: "sample2026-db0f9.firebaseapp.com", 
databaseURL: "https://sample2026-db0f9-default-rtdb.firebaseio.com", 
projectId: "sample2026-db0f9", 
storageBucket: "sample2026-db0f9.firebasestorage.app", 
messagingSenderId: "591014040082", 
appId: "1:591014040082:web:00baaac378af50bb4e7ecb" };
 
function loadProgress() { const plansRef = ref(db, "plans"); onValue(plansRef, (snapshot) => { let completed = 0, total = 0; snapshot.forEach((child) => { total++; if (child.val().completed) completed++; }); document.getElementById("progress").innerText = `Completed: ${completed}/${total}`; // Chart.js Pie Chart const ctx = document.getElementById("progressChart").getContext("2d"); new Chart(ctx, { type: "pie", data: { labels: ["Completed", "Pending"], datasets: [{ data: [completed, total - completed], backgroundColor: ["#4CAF50", "#FF5252"] }] }, options: { responsive: true, plugins: { legend: { position: "bottom" }, title: { display: true, text: "Study Progress" } } } }); }); } loadProgress();