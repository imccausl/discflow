type AvatarProps = {
    imgUrl: string
}

export const Avatar: React.FC<AvatarProps> = ({ imgUrl }) => (
    <img className="h-8 w-8 rounded-full" src={imgUrl} alt="" />
)
