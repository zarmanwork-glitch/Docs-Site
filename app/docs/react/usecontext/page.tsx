import { CodeBlock } from '@/components/code-block';

export default function UseContextPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>useContext Hook</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          Share data globally without prop drilling through multiple component
          layers.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is useContext?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              useContext
            </code>{' '}
            is a React Hook that lets you read and subscribe to context from
            your component. It's perfect for sharing data like themes, user
            authentication, or language settings across your entire component
            tree without passing props through every level.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Creating and Using Context
          </h2>
          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                Step 1: Create Context
              </h3>
              <CodeBlock>{`import { createContext } from 'react';

// Create a context with a default value
export const ThemeContext = createContext('light');`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                Step 2: Provide Context
              </h3>
              <CodeBlock>{`import { useState } from 'react';
import { ThemeContext } from './ThemeContext';

function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={theme}>
      <Header />
      <MainContent />
      <Footer />
    </ThemeContext.Provider>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                Step 3: Consume Context
              </h3>
              <CodeBlock>{`import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Header() {
  const theme = useContext(ThemeContext);
  
  return (
    <header className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>
      <h1>My App</h1>
    </header>
  );
}`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Complete Example: Theme Context
          </h2>
          <CodeBlock>{`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext();

// 2. Create Provider Component
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 3. Create Custom Hook
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 4. Use in Components
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Common Use Cases
          </h2>

          <div className='space-y-4'>
            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                1. Authentication
              </h3>
              <CodeBlock>{`const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  const login = async (credentials) => {
    const userData = await loginAPI(credentials);
    setUser(userData);
  };
  
  const logout = () => setUser(null);
  
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}`}</CodeBlock>
            </div>

            <div>
              <h3 className='text-lg font-semibold text-zinc-800 dark:text-zinc-200 mb-2'>
                2. Language/i18n
              </h3>
              <CodeBlock>{`const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en');
  
  const translations = {
    en: { greeting: 'Hello' },
    es: { greeting: 'Hola' },
    fr: { greeting: 'Bonjour' }
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}`}</CodeBlock>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Best Practices
          </h2>
          <div className='bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4'>
            <ul className='list-disc list-inside space-y-2 text-zinc-700 dark:text-zinc-300'>
              <li>Create custom hooks (like useTheme) for better ergonomics</li>
              <li>
                Add error checking to ensure context is used within Provider
              </li>
              <li>Split large contexts into smaller, focused ones</li>
              <li>
                Use useMemo to prevent unnecessary re-renders of Provider value
              </li>
              <li>
                Don't use Context for everything - props are fine for nearby
                components
              </li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}
