'use client';
import SearchInputField from './SearchInputField';
import SubmitButton from './SubmitButton';
import styles from './Search.module.css';
import { useSearchParams, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Search() {
  const [query, setQuery] = useState('');
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const urlQuery = searchParams.get('q') || '';
    setQuery(urlQuery);
  }, [searchParams]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('search query', query);

    if (query.trim()) {
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <form className={styles['search']} onSubmit={handleSubmit}>
      <SearchInputField
        placeholder='Search cocktail by name...'
        value={query}
        onChange={setQuery}
      />
      <SubmitButton text='Search' />
    </form>
  );
}
