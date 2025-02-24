import { useState } from 'react';
import { Terminal, Package, Zap, Github, Command, Copy, Check } from 'lucide-react';

function App() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('npx create-turboquick-app');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Terminal className="w-6 h-6" />
            <span className="font-bold text-xl">TurboQuick</span>
          </div>
          <a 
            href="https://github.com/bhupeshv29/turboquick-npm-cmd.git" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-gray-300 transition-colors"
          >
            <Github className="w-5 h-5" />
            <span>GitHub</span>
          </a>
        </nav>

        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
            Create Modern Apps in Seconds
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            A blazing fast CLI tool to scaffold your next project with best practices and modern tooling.
          </p>
          
          <div className="bg-gray-900 p-4 rounded-lg mb-8 font-mono text-sm relative group">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2 text-gray-400">
                <Command className="w-4 h-4" />
                <code>npx create-turboquick-app</code>
              </div>
              <button
                onClick={handleCopy}
                className="text-gray-400 hover:text-white transition-colors"
                title="Copy command"
              >
                {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <a 
              href="https://github.com/bhupeshv29/turboquick-npm-cmd.git" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-gray-400">
              Get your project up and running in seconds with our optimized scaffolding process.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Package className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Modern Stack</h3>
            <p className="text-gray-400">
              Built with the latest technologies and best practices for modern web development.
            </p>
          </div>

          <div className="bg-gray-900 p-6 rounded-xl">
            <div className="bg-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
              <Command className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-400">
              Simple CLI commands to create, develop, and deploy your applications.
            </p>
          </div>
        </div>
      </div>

      {/* How to Use Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Use</h2>
          <div className="space-y-8">
            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">1. Create Your Project</h3>
              <p className="text-gray-400 mb-4">
                Run the CLI command to create a new project. Replace "my-app" with your desired project name:
              </p>
              <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm mb-2">
                npx create-turboquick-app
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">2. Give a Name to your project
                 <br />
                 Navigate to Your Project</h3>
              <p className="text-gray-400 mb-4">
                Move into your project directory:
              </p>
              <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm mb-2">
                cd 'projectNamed'
              </div>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">3. Start Development</h3>
              <p className="text-gray-400 mb-4">
                Start the development server:
              </p>
              <div className="bg-gray-950 p-4 rounded-lg font-mono text-sm mb-2">
                pnpm run dev
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-gray-400 border-t border-gray-800">
        <p>Built with ❤️ by bhupesh</p>
      </footer>
    </div>
  );
}

export default App;