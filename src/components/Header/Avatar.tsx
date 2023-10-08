type AvatarProps = {
    imgUrl: string
}

export const Avatar: React.FC<AvatarProps> = ({ imgUrl }) => (
    <img className="h-8 w-8 rounded-full sm:h-10 sm:w-10" src={imgUrl} alt="" />
)
