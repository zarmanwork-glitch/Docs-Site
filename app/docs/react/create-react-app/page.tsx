import { CodeBlock } from '@/components/code-block';

export default function CreateReactAppPage() {
  return (
    <div className='space-y-8'>
      <div className='space-y-4'>
        <h1 className='text-4xl font-bold text-blue-500'>Create React App</h1>
        <p className='text-lg text-zinc-600 dark:text-zinc-400'>
          The standard way to set up a React project with zero configuration.
        </p>
      </div>

      <div className='space-y-6'>
        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            What is Create React App?
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Create React App (CRA) is a CLI tool that sets up a React project
            with a single dependency: react-scripts. It is "opinionated,"
            meaning it makes all the configuration decisions for you. However,
            it has become much slower than Vite because it relies on Webpack,
            which bundles your entire application before the dev server can even
            start.
          </p>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Getting Started
          </h2>
          <CodeBlock>{`# Create a new React app
npx create-react-app my-app

# Navigate to project
cd my-app

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Key Features
          </h2>

          <div className='grid gap-4'>
            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-blue-500 mb-3'>
                ⚙️ Zero Configuration
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                All build configuration is hidden away. You can focus on writing
                React code without worrying about Webpack setup.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-green-500 mb-3'>
                📦 Single Dependency
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Only one npm dependency: react-scripts. Everything else is
                managed internally, making updates simple.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-purple-500 mb-3'>
                🧪 Built-in Testing
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Jest testing framework is pre-configured. Run tests with npm
                test and get instant feedback.
              </p>
            </div>

            <div className='border border-zinc-200 dark:border-zinc-800 rounded-lg p-6'>
              <h3 className='text-xl font-semibold text-orange-500 mb-3'>
                🛠️ Developer Tools
              </h3>
              <p className='text-zinc-600 dark:text-zinc-400'>
                Includes error overlays, fast refresh, and built-in ESLint
                configuration for better development experience.
              </p>
            </div>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Project Structure
          </h2>
          <CodeBlock>{`my-app/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── .gitignore
└── README.md`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Environment Variables
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400'>
            Create React App uses the{' '}
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              process.env
            </code>{' '}
            pattern with the{' '}
            <code className='bg-zinc-200 dark:bg-zinc-800 px-2 py-1 rounded'>
              REACT_APP_
            </code>{' '}
            prefix:
          </p>
          <CodeBlock>{`// .env file
REACT_APP_API_URL=https://api.example.com
REACT_APP_VERSION=1.0.0

// In your code
const apiUrl = process.env.REACT_APP_API_URL;
const version = process.env.REACT_APP_VERSION;`}</CodeBlock>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Vite vs. Create React App
          </h2>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse text-sm'>
              <thead>
                <tr className='bg-zinc-100 dark:bg-zinc-900'>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Feature
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    react-scripts (CRA)
                  </th>
                  <th className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-left'>
                    Vite
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Underlying Engine
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Webpack (JavaScript-based)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    esbuild (Go-based)
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Dev Startup
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Slow: Bundles everything first
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Instant: Serves files via ESM
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    HMR Speed
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Slower as project grows
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Constant speed regardless of size
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Configuration
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    Hidden (Must "Eject" to change)
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Open and easy via vite.config.ts
                  </td>
                </tr>
                <tr>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Current Status
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-orange-600 dark:text-orange-400'>
                    Deprecated / Maintenance only
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 text-green-600 dark:text-green-400'>
                    Recommended by React team
                  </td>
                </tr>
                <tr className='bg-zinc-50 dark:bg-zinc-950'>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3 font-medium'>
                    Env Variables
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    process.env.REACT_APP_
                  </td>
                  <td className='border border-zinc-300 dark:border-zinc-700 px-4 py-3'>
                    import.meta.env.VITE_
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            When to Use Create React App
          </h2>
          <ul className='list-disc list-inside space-y-2 text-zinc-600 dark:text-zinc-400'>
            <li>Learning React for the first time</li>
            <li>Prototyping quick projects</li>
            <li>Existing projects already using CRA</li>
            <li>Need hidden webpack configuration</li>
          </ul>
        </section>

        <section className='space-y-4'>
          <h2 className='text-2xl font-semibold text-zinc-900 dark:text-white'>
            Migrating to Vite
          </h2>
          <p className='text-zinc-600 dark:text-zinc-400 mb-4'>
            If you're using Create React App and want to switch to Vite for
            better performance:
          </p>
          <CodeBlock>{`# 1. Create a new Vite project
npm create vite@latest my-app -- --template react

# 2. Copy your src/ folder and public/ assets
# 3. Update environment variables:
#    REACT_APP_X -> VITE_X
#    process.env -> import.meta.env

# 4. Install and run
npm install
npm run dev`}</CodeBlock>
        </section>
      </div>
    </div>
  );
}
