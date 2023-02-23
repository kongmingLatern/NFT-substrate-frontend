import Image from '@/assets/gd1.png'
export default function CardDetail() {
  return (
    <div className="card bg-base-100 shadow-xl w-[40%]">
      <img className=" h-96 " src={Image} alt="" />
      <div className="indent-8">
        <div className="card-title">
          详情
          <div className="indent-0 badge badge-secondary">
            New
          </div>
        </div>
        <div className="break-words ">
          pport server-side rendering. Currently in v4 all
          of the slides are positioned with position:
          absolute, which doesn't render the slides
          appropriately when javascript is disabled and
          there are flickering when the front-end is
          hydrated. This forced users to hardcode properties
          for the carousel like initialSlideHeight and
          initialSlideWidth. In v5 all slides are positioned
          with dynamic width, so the slides and carousel can
          be fully responsive and rendered correctly on
          server as well. Rewritten the library with
          TypeScript and React Hooks for obvious reasons.
          Reduce the size of the library and its
          dependencies. Currently v4 has 5 dependencies -
          prop-types, d3-ease, wicg-inert, exenv and
          react-move.
        </div>
      </div>
    </div>
  )
}
