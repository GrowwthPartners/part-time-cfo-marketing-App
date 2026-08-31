import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Brand from './Brand'

const navItems = [
  { href: '#benefits', label: 'Who we help' },
  { href: '#client-stories', label: 'Client stories' },
  { href: '#why', label: 'Why us' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#region', label: 'Compliance' },
]

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="pcfo-header">
      <nav className="pcfo-nav" aria-label="Part-Time CFO navigation">
        <Brand />
        <button
          className="pcfo-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
        <div
          className={`pcfo-nav-panel${isMenuOpen ? ' pcfo-nav-panel-open' : ''}`}
        >
          <div className="pcfo-nav-links font-semibold">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          </div>
          <button
            className="pcfo-btn pcfo-btn-primary"
            type="button"
            onClick={() => {
              setIsMenuOpen(false)
              window.open('https://calendly.com/jd-growwthpartners/demo', '_blank')
            }}
          >
            Get a free consult
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header
