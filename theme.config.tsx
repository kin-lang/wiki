import React from 'react';
import { logo } from "@/assets/logo";
import { useRouter } from "next/router";
import { useConfig } from 'nextra-theme-docs';
import DocsLanguageSwitcher from '@/components/DocsLanguageSwitcher';

const config = {
  logo,
  faviconGlyph: "🚀",
  project: {
    link: "https://github.com/kin-lang/kin",
  },
  banner: {
    key: "github-star-banner",
    text: () => {
      const { asPath } = useRouter();
      const [mounted, setMounted] = React.useState(false);
      
      React.useEffect(() => {
        setMounted(true);
      }, []);
      
      if (!mounted) {
        return (
          <a href="https://github.com/kin-lang/kin" target="_blank">
            🚀 Help us to grow - Leave a star on Kin's repo on GitHub → 🚀
          </a>
        );
      }
      
      if (asPath.startsWith('/rw')) {
        return (
          <a href="https://github.com/kin-lang/kin" target="_blank">
            🚀 Dufashe gukura - Siga inyenyeri kuri repo ya Kin kuri GitHub → 🚀
          </a>
        );
      }
      return (
        <a href="https://github.com/kin-lang/kin" target="_blank">
          🚀 Help us to grow - Leave a star on Kin's repo on GitHub → 🚀
        </a>
      );
    },
  },
  docsRepositoryBase: "https://github.com/kin-lang/wiki/tree/main/",
  footer: {
    text: "Made and Designed with 💖 by Murangwa Pacifique. Translated by Laurent",
  },
  toc: {
    backToTop: true,
  },
  nextThemes: {
    defaultTheme: 'dark'
  },
  search:{
    placeholder:()=>{
      const { asPath } = useRouter();
      const [mounted, setMounted] = React.useState(false);
      
      React.useEffect(() => {
        setMounted(true);
      }, []);
      
      if (!mounted) {
        return 'Search...';
      }
      
      if(asPath.startsWith('/rw')){
        return 'Shakisha...'
      }
      return 'Search...'
    }
  },
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: "%s – Kin"
    };
  },
  navigation: {
    prev: true,
    next: true
  },
  navbar: {
    extraContent: () => {
      const { asPath } = useRouter();
      const [mounted, setMounted] = React.useState(false);
      
      React.useEffect(() => {
        setMounted(true);
      }, []);
      
      if (!mounted) return null;
      
      const isRwandan = asPath.startsWith('/rw');
      const docsText = isRwandan ? 'Ibisobanuro' : 'Documentation';
      const playgroundText = isRwandan ? 'Gerageza Kin' : 'Playground';
      const docsHref = isRwandan ? '/rw/docs' : '/docs';
      const playgroundHref = isRwandan ? '/rw/editor' : '/editor';
      
      const isDocsActive = asPath.includes('/docs');
      const isEditorActive = asPath.includes('/editor');
      
      return (
        <div style={{ 
          display: 'flex', 
          gap: '1.5rem', 
          alignItems: 'center',
          fontSize: '0.875rem',
          fontWeight: '500',
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 10
        }}>
          <a 
            href={docsHref} 
            style={{ 
              textDecoration: 'none', 
              color: isDocsActive ? 'var(--nextra-primary-hue, #0070f3)' : 'rgba(156, 163, 175, 1)',
              fontWeight: isDocsActive ? '600' : '500',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isDocsActive) {
                (e.target as HTMLElement).style.color = 'var(--nextra-primary-hue, #0070f3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isDocsActive) {
                (e.target as HTMLElement).style.color = 'rgba(156, 163, 175, 1)';
              }
            }}
          >
            {docsText}
          </a>
          <a 
            href={playgroundHref} 
            style={{ 
              textDecoration: 'none', 
              color: isEditorActive ? 'var(--nextra-primary-hue, #0070f3)' : 'rgba(156, 163, 175, 1)',
              fontWeight: isEditorActive ? '600' : '500',
              transition: 'color 0.2s ease'
            }}
            onMouseEnter={(e) => {
              if (!isEditorActive) {
                (e.target as HTMLElement).style.color = 'var(--nextra-primary-hue, #0070f3)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isEditorActive) {
                (e.target as HTMLElement).style.color = 'rgba(156, 163, 175, 1)';
              }
            }}
          >
            {playgroundText}
          </a>
        </div>
      );
    }
  },
  editLink: {
    text: () => {
      const { asPath } = useRouter();
      const [mounted, setMounted] = React.useState(false);
      
      React.useEffect(() => {
        setMounted(true);
      }, []);
      
      if (!mounted) {
        return 'Edit this page on GitHub →';
      }
      
      if (asPath.startsWith('/rw')) {
        return 'Hindura urupapuro kuri GitHub →';
      }
      return 'Edit this page on GitHub →';
    }
  },
  feedback: {
    content: () => {
      const { asPath } = useRouter();
      const [mounted, setMounted] = React.useState(false);
      
      React.useEffect(() => {
        setMounted(true);
      }, []);
      
      if (!mounted) {
        return 'Question? Give us feedback →';
      }
      
      if (asPath.startsWith('/rw')) {
        return 'Ikibazo? Duhe igitekerezo →';
      }
      return 'Question? Give us feedback →';
    },
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }: { title: string; type: string }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  themeSwitch: {
    useOptions() {
      return {
        light: 'Light',
        dark: 'Dark',
        system: 'System'
      }
    }
  },
  main: ({ children }: { children: React.ReactNode }) => {
    return (
      <>
        <DocsLanguageSwitcher />
        {children}
      </>
    )
  }
};

export default config;
