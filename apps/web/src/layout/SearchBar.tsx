"use client";

import React, { useState, useCallback } from "react";
import { Input } from "@repo/shadcn/components/ui/input";
import { Button } from "@repo/shadcn/components/ui/button";
import { Search, X } from "lucide-react";
import { cn } from "@repo/shadcn/lib/utils";
import { SearchHandler, SearchBarVariant } from "./types";

interface SearchBarProps extends SearchHandler, SearchBarVariant {
  placeholder?: string;
  className?: string;
}

export function SearchBar({
  placeholder = "Search...",
  onSearch,
  className,
  variant = "default",
}: SearchBarProps) {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = useCallback(
    (searchQuery: string) => {
      onSearch?.(searchQuery);
    },
    [onSearch]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(query);
  };

  const handleClear = () => {
    setQuery("");
    handleSearch("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setQuery("");
      setIsFocused(false);
      (e.target as HTMLInputElement).blur();
    }
  };

  return (
    <form onSubmit={handleSubmit} className={cn("relative", className)}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder={placeholder}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={handleKeyDown}
          className={cn(
            "pl-10 pr-10 transition-all duration-200",
            variant === "compact" && "h-8 text-sm",
            isFocused && "ring-2 ring-ring ring-offset-2"
          )}
        />
        {query && (
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={handleClear}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-6 w-6 hover:bg-muted"
          >
            <X className="w-3 h-3" />
          </Button>
        )}
      </div>
    </form>
  );
}

export default SearchBar;
