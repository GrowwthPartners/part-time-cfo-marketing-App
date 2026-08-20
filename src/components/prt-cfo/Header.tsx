import Brand from './Brand'

const navItems = [
  { href: '#benefits', label: 'Who we help' },
  { href: '#client-stories', label: 'Client stories' },
  { href: '#why', label: 'Why us' },
  { href: '#pricing', label: 'Pricing' },
  { href: '#region', label: 'Compliance' },
]

function Header() {
  return (
    <header className="pcfo-header">
      <nav className="pcfo-nav" aria-label="Part-Time CFO navigation">
        <Brand />
        <div className="pcfo-nav-links font-semibold">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="pcfo-btn pcfo-btn-primary"
          type="button"
          onClick={() =>
            window.open('https://calendly.com/jd-growwthpartners/demo', '_blank')
          }
        >
          Get a free consult
        </button>
      </nav>
    </header>
  )
}

export default Header
