import { FC } from 'react'
import { Droplet } from '../components/Droplet';
import { InitialTypes } from '../interfaces/IntialTypes';
interface Props {
  initialWidgets: InitialTypes[]
  onDragStart: (
    e: React.DragEvent<HTMLDivElement>,
    widget: InitialTypes
  ) => void
}

export const WidgetsList: FC<Props> = (props) => {
  const { initialWidgets, onDragStart } = props
  return (
    <div className="w-full flex flex-col justify-start items-center max-w-[320px] col-start-1 col-end-2 bg-white border border-r-neutral-200 p-2">
      <section className="flex flex-wrap justify-center gap-2">
        {initialWidgets.map((widget) => (
          <Droplet
            key={widget.id}
            widget={widget}
            onDragStart={onDragStart}
          />
        ))}
      </section>
    </div>
  )
}
