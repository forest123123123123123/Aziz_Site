import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation()

  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <header className="bg-blue-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold hover:text-blue-200 transition-colors">
            Drolly Inc
          </Link>
          <nav className="space-x-6">
            <Link
              to="/"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/') ? 'text-blue-200 font-semibold' : ''
              }`}
            >
              Home
            </Link>
            <Link
              to="/privacy-policy"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/privacy-policy') ? 'text-blue-200 font-semibold' : ''
              }`}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className={`hover:text-blue-200 transition-colors ${
                isActive('/terms') ? 'text-blue-200 font-semibold' : ''
              }`}
            >
              Terms
            </Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
