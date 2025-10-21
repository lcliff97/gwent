import { useState, useEffect } from "react";
import { Search, Loader2, Sword, Shield, Zap } from "lucide- react";

const GwentCardBrowser = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaction, setSelectedFaction] = useState("all");
};

useEffect(() => {
  fetchCards();
}, []);

const fetchCards = async () => {
  try {
    setLoading(true);

    const response = await fetch("https://api.gwent.one/?key=data");
    const data = await response.json();

    const cardsArray = Object.values(data);
    setCards(cardsArray);
    setError(null);
  } catch (err) {
    setError("Failed to load cards. Please try again");
    console.error("Error fetching cards:", err);
  } finally {
    setLoading(false);
  }
};

const filteredCards = cards.filter((card) => {
  const matchesSearch = card.name?.en?.toLowerCase().includes;
});
