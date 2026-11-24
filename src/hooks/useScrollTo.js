import { useCallback } from 'react';

export function useScrollTo() {
  return useCallback((id) => {
    const target = document.getElementById(id);
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);
}
