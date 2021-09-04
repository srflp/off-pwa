import { useRouter } from 'next/router';

export function useDebug() {
  const { query } = useRouter();
  return Boolean(query.debug);
}
