import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HomePage from "../pages/HomePage";
import ResultsPage from "../pages/ResultsPage";
import LoadingBattle from "../components/LoadingBattle";
import "./index.css";

// API base URL - update this to your backend URL
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

function App() {
  const [view, setView] = useState("home"); // 'home' | 'loading' | 'results'
  const [battleData, setBattleData] = useState(null);

  const handleStartBattle = async (query) => {
    setView("loading");

    try {
      const response = await axios.post(`${API_BASE_URL}/run-graph`, {
        query,
      });

      setBattleData(response.data);
      setView("results");
      toast.success("Battle complete! The judge has spoken.", {
        style: {
          background: "#161625",
          color: "#F1F5F9",
          border: "1px solid rgba(124, 58, 237, 0.2)",
        },
        iconTheme: {
          primary: "#7C3AED",
          secondary: "#F1F5F9",
        },
      });
    } catch (error) {
      console.error("Battle failed:", error);
      setView("home");
      toast.error(
        error.response?.data?.message || "Battle failed. Please try again.",
        {
          style: {
            background: "#161625",
            color: "#F1F5F9",
            border: "1px solid rgba(239, 68, 68, 0.2)",
          },
        },
      );
    }
  };

  const handleNewBattle = () => {
    setBattleData(null);
    setView("home");
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg-primary)]">
      <Toaster position="top-right" />
      <Navbar />

      <main className="flex-1">
        {view === "home" && <HomePage onStartBattle={handleStartBattle} />}
        {view === "loading" && <LoadingBattle />}
        {view === "results" && battleData && (
          <ResultsPage data={battleData} onNewBattle={handleNewBattle} />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
