import { useContext, createContext } from 'react';

export const SiteContext = createContext()

export function useSiteContext() {
    return useContext(SiteContext);
}
