import { Link } from '@remix-run/react'
import logo from './images/logo.png'

export const HeaderLogo: React.FC<{ className?: string }> = ({
    className = 'h-8 w-8',
}) => (
    <Link to="/">
        <img className={className} src={logo} alt="discflow" />
    </Link>
)
