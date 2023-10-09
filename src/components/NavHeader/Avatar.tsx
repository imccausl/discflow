type AvatarProps = {
    imgUrl: string
}

export const Avatar: React.FC<AvatarProps> = ({ imgUrl }) => (
    <img className="h-10 w-10 rounded-full md:h-8 md:w-8" src={imgUrl} alt="" />
)
