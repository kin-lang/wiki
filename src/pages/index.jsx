import Link from 'next/link';
import Button from '@/components/ui/button';

export default function Component() {
  return (
    <div className='bg-background text-foreground min-h-screen'>
      <header className='py-8 px-4 md:px-6 flex items-center justify-between'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg font-semibold'
          prefetch={false}
        >
          <KeyIcon className='w-6 h-6 text-primary' />
          <span>Kin</span>
        </Link>
        <nav className='hidden md:flex items-center gap-6 text-sm'>
          <Link
            href='#'
            className='font-medium hover:text-primary'
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href='#'
            className='font-medium hover:text-primary'
            prefetch={false}
          >
            Code
          </Link>
          <Link
            href='#'
            className='font-medium hover:text-primary'
            prefetch={false}
          >
            Get Started
          </Link>
          <Link
            href='#'
            className='inline-flex items-center gap-2 font-medium hover:text-primary'
            prefetch={false}
          >
            <GithubIcon className='w-5 h-5' />
            GitHub
          </Link>
        </nav>
        <Button className='hidden md:inline-flex'>Try Kin</Button>
        <Button variant='ghost' size='icon' className='md:hidden'>
          <MenuIcon className='w-6 h-6' />
        </Button>
      </header>
      <main>
        <section
          id='hero'
          className='py-16 md:py-24 lg:py-32 px-4 md:px-6 flex flex-col items-center text-center'
        >
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
            Kin: The Delightful Programming Language
          </h1>
          <p className='mt-4 max-w-3xl text-lg md:text-xl text-muted-foreground'>
            Kin is a modern, expressive programming language that makes it easy
            to build fast, reliable, and scalable applications.
          </p>
          <div className='mt-8 flex flex-col sm:flex-row gap-4'>
            <Button className='w-full sm:w-auto'>Try Kin</Button>
            <Button variant='secondary' className='w-full sm:w-auto'>
              Learn More
            </Button>
          </div>
        </section>
        <section
          id='features'
          className='py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-muted'
        >
          <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            <div className='group relative rounded-xl overflow-hidden bg-background/50 backdrop-blur-lg border border-input/50 hover:border-primary transition-all'>
              <div className='p-6 flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center'>
                    <BoltIcon className='w-5 h-5' />
                  </div>
                  <h3 className='text-xl font-semibold'>Fast and Efficient</h3>
                </div>
                <p className='text-muted-foreground'>
                  Kin is designed to be fast and efficient, with a focus on
                  performance and scalability.
                </p>
              </div>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity' />
            </div>
            <div className='group relative rounded-xl overflow-hidden bg-background/50 backdrop-blur-lg border border-input/50 hover:border-primary transition-all'>
              <div className='p-6 flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center'>
                    <CodeIcon className='w-5 h-5' />
                  </div>
                  <h3 className='text-xl font-semibold'>Expressive Syntax</h3>
                </div>
                <p className='text-muted-foreground'>
                  Kin's syntax is designed to be intuitive and easy to read,
                  making it a joy to write code.
                </p>
              </div>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity' />
            </div>
            <div className='group relative rounded-xl overflow-hidden bg-background/50 backdrop-blur-lg border border-input/50 hover:border-primary transition-all'>
              <div className='p-6 flex flex-col gap-4'>
                <div className='flex items-center gap-4'>
                  <div className='bg-primary/10 text-primary rounded-full w-10 h-10 flex items-center justify-center'>
                    <PuzzleIcon className='w-5 h-5' />
                  </div>
                  <h3 className='text-xl font-semibold'>
                    Extensible and Modular
                  </h3>
                </div>
                <p className='text-muted-foreground'>
                  Kin is designed to be extensible and modular, making it easy
                  to build and integrate complex applications.
                </p>
              </div>
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity' />
            </div>
          </div>
        </section>
        <section
          id='code'
          className='py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-background'
        >
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8'>
            <div className='flex-1 grid gap-4'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                Explore the Kin Codebase
              </h2>
              <p className='text-lg md:text-xl text-muted-foreground'>
                Take a look at some sample Kin code and see how it works.
              </p>
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                <div className='bg-muted/50 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-2'>
                  <div className='bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center'>
                    <BoltIcon className='w-4 h-4' />
                  </div>
                  <pre className='font-mono text-sm text-primary-foreground'>
                    <code>{`
                        function main() {
                          println("Hello, Kin!")
                        }
                      `}</code>
                  </pre>
                </div>
                <div className='bg-muted/50 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-2'>
                  <div className='bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center'>
                    <CodeIcon className='w-4 h-4' />
                  </div>
                  <pre className='font-mono text-sm text-primary-foreground'>
                    <code>{`
                        let x = 42
                        let y = 3.14
                        println(x + y)
                      `}</code>
                  </pre>
                </div>
                <div className='bg-muted/50 backdrop-blur-lg rounded-xl p-4 flex flex-col gap-2'>
                  <div className='bg-primary/10 text-primary rounded-full w-8 h-8 flex items-center justify-center'>
                    <PuzzleIcon className='w-4 h-4' />
                  </div>
                  <pre className='font-mono text-sm text-primary-foreground'>
                    <code>{`
                        import math
                        let result = math.sqrt(16)
                        println(result)
                      `}</code>
                  </pre>
                </div>
              </div>
            </div>
            <div className='flex-1'>
              <img
                src='/placeholder.svg'
                width={600}
                height={400}
                alt='Kin Code'
                className='w-full max-w-md mx-auto'
                style={{ aspectRatio: '600/400', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>
        <section
          id='get-started'
          className='py-16 md:py-24 lg:py-32 px-4 md:px-6 bg-muted'
        >
          <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8'>
            <div className='flex-1'>
              <img
                src='/placeholder.svg'
                width={400}
                height={400}
                alt='Kin Logo'
                className='w-full max-w-md mx-auto'
                style={{ aspectRatio: '400/400', objectFit: 'cover' }}
              />
            </div>
            <div className='flex-1 grid gap-4'>
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold'>
                Get Started with Kin
              </h2>
              <p className='text-lg md:text-xl text-muted-foreground'>
                Ready to start building with Kin? Follow our quick start guide
                to get up and running.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button className='w-full sm:w-auto'>Quick Start Guide</Button>
                <Button variant='secondary' className='w-full sm:w-auto'>
                  Install Kin
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className='py-8 px-4 md:px-6 bg-background border-t'>
        <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4'>
          <div className='flex items-center gap-2'>
            <KeyIcon className='w-6 h-6 text-primary' />
            <span className='text-lg font-semibold'>Kin</span>
          </div>
          <nav className='flex items-center gap-6 text-sm'>
            <Link
              href='#'
              className='font-medium hover:text-primary'
              prefetch={false}
            >
              Features
            </Link>
            <Link
              href='#'
              className='font-medium hover:text-primary'
              prefetch={false}
            >
              Code
            </Link>
            <Link
              href='#'
              className='font-medium hover:text-primary'
              prefetch={false}
            >
              Get Started
            </Link>
            <Link
              href='#'
              className='inline-flex items-center gap-2 font-medium hover:text-primary'
              prefetch={false}
            >
              <GithubIcon className='w-5 h-5' />
              GitHub
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BoltIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z' />
      <circle cx='12' cy='12' r='4' />
    </svg>
  );
}

function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polyline points='16 18 22 12 16 6' />
      <polyline points='8 6 2 12 8 18' />
    </svg>
  );
}

function GithubIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4' />
      <path d='M9 18c-4.51 2-5-2-7-2' />
    </svg>
  );
}

function KeyIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4' />
      <path d='m21 2-9.6 9.6' />
      <circle cx='7.5' cy='15.5' r='5.5' />
    </svg>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <line x1='4' x2='20' y1='12' y2='12' />
      <line x1='4' x2='20' y1='6' y2='6' />
      <line x1='4' x2='20' y1='18' y2='18' />
    </svg>
  );
}

function PuzzleIcon(props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z' />
    </svg>
  );
}
