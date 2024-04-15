import { FC } from 'react'
import { InitialTypes } from '../interfaces/IntialTypes'

interface Props {
  widget: InitialTypes
  onDragStart: (e: React.DragEvent<HTMLDivElement>, widget: InitialTypes) => void
}


export const Droplet: FC<Props> = (props) => {
  const { widget, onDragStart } = props
  return (
    <section
      draggable
      onDragStart={(e: React.DragEvent<HTMLDivElement>) => onDragStart(e, widget)}
      className="w-[90px] h-[90px] py-2 flex flex-col justify-between items-center border border-neutral-200 rounded hover:cursor-move"
    >
      <div className="w-[20px] h-[20px]">
        <svg className="text-neutral-600 w-4 h-4">
          <use xlinkHref={`icons.svg#${widget.icon}`} />
        </svg>
      </div>
      <div className="text-center text-wrap px-1">
        <h1 className="text-neutral-600 text-center text-[12px] text-wrap font-normal">
          {widget.name}
        </h1>
      </div>
      <div>
        <svg className="text-neutral-600 w-4 h-4">
          <use xlinkHref="icons.svg#more-h" />
        </svg>
      </div>
    </section>
  )
}