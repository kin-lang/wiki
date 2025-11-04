'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function DocsLanguageSwitcher() {
  const { asPath } = useRouter()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!mounted) return
    
    const isRwandan = asPath.startsWith('/rw')
    const toggleUrl = isRwandan ? asPath.replace('/rw', '') || '/' : `/rw${asPath}`
    const currentLang = isRwandan ? 'rw' : 'en'
    const otherLang = isRwandan ? 'en' : 'rw'
    
    const logoContainer = 
      document.querySelector('nav a[href="/"], nav a[href="/rw/"]') || 
      document.querySelector('nav > div:first-child') ||
      document.querySelector('nav div') ||
      document.querySelector('nav')

    const targetContainer = logoContainer;
    
    if ((targetContainer) && !document.getElementById('lang-switcher')) {
      const switcher = document.createElement('div')
      switcher.id = 'lang-switcher'
      switcher.style.cssText = `
        display: flex;
        align-items: center;
        margin-left: 1rem;
        gap: 0.25rem;
        font-size: 0.875rem;
        font-weight: 500;
      `
      
      const currentSpan = document.createElement('span')
      currentSpan.textContent = currentLang
      currentSpan.style.cssText = `
        color: var(--nextra-primary-hue);
        font-weight: 600;
      `
      
      const separator = document.createElement('span')
      separator.textContent = '/'
      separator.style.cssText = `
        color: #666;
        margin: 0 0.125rem;
      `
      
      const toggleLink = document.createElement('a')
      toggleLink.href = toggleUrl
      toggleLink.textContent = otherLang
      toggleLink.style.cssText = `
        color: #666;
        text-decoration: none;
        transition: color 0.2s ease;
        cursor: pointer;
      `
      
      toggleLink.addEventListener('mouseenter', () => {
        toggleLink.style.color = 'var(--nextra-primary-hue)'
      })
      toggleLink.addEventListener('mouseleave', () => {
        toggleLink.style.color = '#666'
      })
      
      switcher.appendChild(currentSpan)
      switcher.appendChild(separator)
      switcher.appendChild(toggleLink)
      
      logoContainer?.parentNode?.insertBefore(switcher, logoContainer.nextSibling)
    }
    
    return () => {
      const existingSwitcher = document.getElementById('lang-switcher')
      if (existingSwitcher) {
        existingSwitcher.remove()
      }
    }
  }, [asPath, mounted])
  
  return null;
}
