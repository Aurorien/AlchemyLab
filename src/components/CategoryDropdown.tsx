"use client";

import { ICategory } from "@/types";
import { useState } from "react";

interface CategoryDropdownProps {
  categories: ICategory[];
}

export function CategoryDropdown({ categories }: CategoryDropdownProps) {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <select
      name="category"
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
    >
      <option defaultValue={""}>Choose a category</option>

      {categories &&
        categories.map((category, index) => (
          <option key={`${category}-${index}`} value={category.strCategory}>
            {category.strCategory}
          </option>
        ))}
    </select>
  );
}
