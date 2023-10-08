type HeaderLogoProps = {
    imgUrl: string
}

export const HeaderLogo: React.FC<HeaderLogoProps> = ({ imgUrl }) => (
    <img className="h-8 w-8" src={imgUrl} alt="discflow" />
)
