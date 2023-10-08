import { Link } from '@remix-run/react'

type HeaderLogoProps = {
    imgUrl: string
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ imgUrl }) => (
    <Link to="/">
        <img className="h-8 w-8" src={imgUrl} alt="discflow" />
    </Link>
)
