import Header from '@/component/common/Header'
import PersonalCard from '@/component/personal/Card'

export default function Personal() {
  return (
    <>
      <Header />
      <div className="w-[60%] mx-auto my-2">
        <PersonalCard />
      </div>
    </>
  )
}
