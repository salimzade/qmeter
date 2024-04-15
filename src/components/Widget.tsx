import { FC } from 'react'
import { InitialTypes } from '../interfaces/IntialTypes'
interface Props {
  widget: InitialTypes
  handleDelete: () => void
  setEditMode: () => void
}

export const Widget: FC<Props> = (props) => {
  const { widget, setEditMode, handleDelete } = props

  return (
    <section className="w-full max-w-[512px] mx-auto my-2 bg-neutral-100 border border-neutral-100 rounded-md overflow-hidden hover:shadow-md duration-300">
      <div className="flex flex-row justify-between items-center bg-white px-4 py-2">
        <button
          onClick={setEditMode}
          className="flex flex-row justify-between items-center px-2 py-1 group border border-neutral-100 bg-white hover:bg-neutral-100 rounded-sm duration-300"
        >
          <span className="text-sm text-neutral-500 group-hover:text-neutral-600">
            {widget.name}
          </span>
          <span className="ml-2">
            <svg className="text-blue-500 w-4 h-4">
              <use xlinkHref="icons.svg#edit" />
            </svg>
          </span>
        </button>
        <div className="w-full max-w-16 flex flex-row justify-end gap-1">
          <button onClick={handleDelete} className="group p-1">
            <svg className="text-neutral-400 group-hover:text-red-500 w-4 h-4">
              <use xlinkHref="icons.svg#trash" />
            </svg>
          </button>

          <button>
            <svg className="text-neutral-400 group-hover:text-neutral-600 w-4 h-4">
              <use xlinkHref="icons.svg#more-v" />
            </svg>
          </button>
        </div>
      </div>

      <div className="p-4">
        <div className="w-full px-2 flex flex-row justify-between items-center bg-white rounded-md border border-neutral-200 border-l-2 border-l-blue-500">
          
          {/** this soulution is only for smilyRating 
           * if we will have more types of widgets 
           * we should to create new component like 
           * smilyRating card or somthig and pass date in this component
           * after we can use switch case solution to obtain more data and components
           * */}

          {widget.type === 'smilyRating' && widget?.ratingSet && (
            <>
              {widget.ratingSet.map((item) => {
                if (item.active === true) {
                  return (
                    <ul key={item.id} className='w-full flex flex-row justify-between items-center'>
                      {item.set.map((set) => (
                        <li key={set.id} className='w-[64px] h-[64px] flex flex-col justify-center items-center'>
                          <svg className="text-neutral-600 w-6 h-6 mb-1">
                            <use xlinkHref={`icons.svg#${set.icon}`} />
                          </svg>
                          <span className='text-[12px]'>{set.name}</span>
                        </li>
                      ))}
                    </ul>
                  )
                }
              })}
            </>
          )}

        </div>
      </div>
    </section>
  )
}
