'use client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export default function NavbarInjector() {
  const { asPath } = useRouter()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  useEffect(() => {
    if (!mounted) return
    
    const isRwandan = asPath.startsWith('/rw')
    const docsText = isRwandan ? 'Ibisobanuro' : 'Documentation'
    const playgroundText = isRwandan ? 'Gerageza Kin' : 'Playground'
    const docsHref = isRwandan ? '/rw/docs' : '/docs'
    const playgroundHref = isRwandan ? '/rw/editor' : '/editor'
    
    const isDocsActive = asPath.includes('/docs')
    const isEditorActive = asPath.includes('/editor')
    
    // Find the navbar and add navigation links
    const navbar = document.querySelector('nav')
    if (navbar && !document.getElementById('custom-nav-links')) {
      // Create navigation container
      const navLinks = document.createElement('div')
      navLinks.id = 'custom-nav-links'
      navLinks.style.cssText = `
        display: flex;
        gap: 1.5rem;
        align-items: center;
        font-size: 0.875rem;
        font-weight: 500;
        margin-left: auto;
        margin-right: 2rem;
      `
      
      // Create docs link
      const docsLink = document.createElement('a')
      docsLink.href = docsHref
      docsLink.textContent = docsText
      docsLink.style.cssText = `
        text-decoration: none;
        color: ${isDocsActive ? 'var(--nextra-primary-hue, #0070f3)' : 'rgba(156, 163, 175, 1)'};
        font-weight: ${isDocsActive ? '600' : '500'};
        transition: color 0.2s ease;
      `
      
      docsLink.addEventListener('mouseenter', () => {
        if (!isDocsActive) docsLink.style.color = 'var(--nextra-primary-hue, #0070f3)'
      })
      docsLink.addEventListener('mouseleave', () => {
        if (!isDocsActive) docsLink.style.color = 'rgba(156, 163, 175, 1)'
      })
      
      // Create playground link
      const playgroundLink = document.createElement('a')
      playgroundLink.href = playgroundHref
      playgroundLink.textContent = playgroundText
      playgroundLink.style.cssText = `
        text-decoration: none;
        color: ${isEditorActive ? 'var(--nextra-primary-hue, #0070f3)' : 'rgba(156, 163, 175, 1)'};
        font-weight: ${isEditorActive ? '600' : '500'};
        transition: color 0.2s ease;
      `
      
      playgroundLink.addEventListener('mouseenter', () => {
        if (!isEditorActive) playgroundLink.style.color = 'var(--nextra-primary-hue, #0070f3)'
      })
      playgroundLink.addEventListener('mouseleave', () => {
        if (!isEditorActive) playgroundLink.style.color = 'rgba(156, 163, 175, 1)'
      })
      
      navLinks.appendChild(docsLink)
      navLinks.appendChild(playgroundLink)
      
      // Find the navbar container and insert navigation properly
      const navContainer = navbar.querySelector('div')
      if (navContainer) {
        // Ensure the navbar container uses flexbox
        navContainer.style.cssText = `
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          max-width: none;
        `
        
        // Find the logo (first element) and search/github area (last elements)
        const logo = navContainer.querySelector('a') // Logo is usually the first anchor
        if (logo) {
          // Insert navigation links after the logo
          logo.parentNode?.insertBefore(navLinks, logo.nextSibling)
        } else {
          // Fallback: insert at the beginning
          navContainer.insertBefore(navLinks, navContainer.firstChild)
        }
      }
    }
    
    return () => {
      const existingLinks = document.getElementById('custom-nav-links')
      if (existingLinks) {
        existingLinks.remove()
      }
    }
  }, [asPath, mounted])
  
  return null
}
