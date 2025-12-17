import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { searchDocuments, Document } from "@/data/documents";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Document[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.length >= 2) {
      const found = searchDocuments(query);
      setResults(found);
      setShowResults(true);
      setSelectedIndex(-1);
    } else {
      setResults([]);
      setShowResults(false);
    }
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        resultsRef.current && 
        !resultsRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex(prev => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex(prev => Math.max(prev - 1, 0));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && results[selectedIndex]) {
        navigate(`/document/${results[selectedIndex].id}`);
        setShowResults(false);
        setQuery("");
      } else if (results.length === 1) {
        navigate(`/document/${results[0].id}`);
        setShowResults(false);
        setQuery("");
      }
    } else if (e.key === "Escape") {
      setShowResults(false);
    }
  };

  const handleResultClick = (docId: string) => {
    navigate(`/document/${docId}`);
    setShowResults(false);
    setQuery("");
  };

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          ref={inputRef}
          type="text"
          placeholder="Caută un document (ex: pașaport, buletin, PFA...)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => query.length >= 2 && setShowResults(true)}
          className="pl-12 pr-4 py-6 text-base rounded-xl border-2 border-border focus:border-primary bg-card shadow-sm"
        />
      </div>

      {showResults && results.length > 0 && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg overflow-hidden z-50"
        >
          {results.map((doc, index) => (
            <button
              key={doc.id}
              onClick={() => handleResultClick(doc.id)}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${
                index === selectedIndex 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-muted'
              }`}
            >
              <Search className="h-4 w-4 flex-shrink-0" />
              <div>
                <p className="font-medium">{doc.shortName}</p>
                <p className={`text-sm ${index === selectedIndex ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                  {doc.institution}
                </p>
              </div>
            </button>
          ))}
        </div>
      )}

      {showResults && query.length >= 2 && results.length === 0 && (
        <div 
          ref={resultsRef}
          className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg p-4 z-50"
        >
          <p className="text-muted-foreground text-center">
            Nu am găsit documente pentru "{query}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;