import { createContext } from 'react';
import { Theme } from '../ts/types/Theme';

const ThemeContext = createContext({
    theme: 'light',
    setTheme: (t: Theme) => {
        console.log(t);
    },
});

export default ThemeContext;
