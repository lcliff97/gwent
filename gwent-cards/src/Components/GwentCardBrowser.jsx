import { useState, useEffect } from "react";
import { Search, Loader2, Sword, Shield, Zap } from "lucide- react";

const GwentCardBrowser = () => {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFaction, setSelectedFaction] = useState("all");
};
