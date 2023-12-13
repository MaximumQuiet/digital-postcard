'use client'

import { useEffect, useState } from 'react';

const getSavedValue = (key, initialValue) => {
  const savedValue = localStorage.getItem(key)
  const saved = savedValue ? savedValue : null
  if (saved) return saved

  return initialValue
}

function useLocalStorage(key, initialValue = '') {
  const [items, setItems] = useState(() => { return getSavedValue(key, initialValue) });

  useEffect(() => {
    localStorage.setItem(key, items)
  }, [items])


  return [items, setItems];
}

export default useLocalStorage;