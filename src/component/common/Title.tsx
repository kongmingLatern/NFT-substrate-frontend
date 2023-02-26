type IProps = {
  title: string
}

const Title = ({ title }: IProps) => {
  return (
    <h1 className="mb-2">
      <span className="text-2xl font-bold tracking-wide font-['Poppins'] pl-3">
        {title}
      </span>
    </h1>
  )
}

export default Title
