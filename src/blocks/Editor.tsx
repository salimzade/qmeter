import { FC } from 'react'
import { InitialTypes } from '../interfaces/IntialTypes'
import { SeparatorText } from './SeparatorText'
interface Props {
  droppedWidgets: InitialTypes[]
  editMode: number | null
  setEditMode: (widgetId: number | null) => void
  setDroppedWidgets: React.Dispatch<React.SetStateAction<InitialTypes[]>>
}

export const Editor: FC<Props> = (props) => {
  const { droppedWidgets, editMode, setDroppedWidgets } = props

  const handleNameChane = (
    e: React.ChangeEvent<HTMLInputElement>,
    widgetId: number,
    setId: number
  ) => {
    setDroppedWidgets((prevWidgets) =>
      prevWidgets.map((widget) => {
        if (widget.id === widgetId) {
          const ratingSets = widget.ratingSet?.map((option) => ({
            ...option
          }))

          ratingSets?.map((option) => {
            option.set.map((set) => {
              if (set.id === setId) {
                set.name = e.target.value
              }
            })
          })
        }
        return widget
      })
    )
  }

  const handleRatingChange = (widgetId: number, optionId: number) => {
    setDroppedWidgets((prevWidgets) =>
      prevWidgets.map((widget) => {
        if (widget.id === widgetId) {
          const updatedSet = widget.ratingSet?.map((option) => ({
            ...option,
            active: option.id === optionId
          }))
          return { ...widget, ratingSet: updatedSet }
        }
        return widget
      })
    )
  }

  console.log(droppedWidgets)

  return (
    <section className="w-[320px] p-2 col-start-3 col-end-4 bg-white border border-l-neutral-200">
      <div>
        <div className='w-full px-2'>
          <h1 className='text-neutral-700 font-medium mb-2'>Template Editor</h1>
          <p className='text-sm text-neutral-600'>By customizing this template you will gather more precise information for your business field</p>
        </div>
        {droppedWidgets.length === 0 && (
          <div className='w-full px-2 mt-10 flex flex-col justify-center items-center'>
            <svg className="text-neutral-400 group-hover:text-red-500 w-12 h-12">
              <use xlinkHref="icons.svg#archive" />
            </svg>
          </div>
        )}
        {droppedWidgets.map((widget) => (
          <div key={widget.id} className="dropped-widget">
            {editMode === widget.id && (
              <div>
                {/** SmilyRating toolset */}
                {widget.type === 'smilyRating' && (
                  <div>
                    <SeparatorText label={'rate options'} />

                    {widget.ratingSet?.map((item) => (
                      <>
                        <label className="flex flex-row justify-start items-center mb-2 py-1">
                          <input
                            type="radio"
                            name={`widget-${widget.id}-options`}
                            onChange={() =>
                              handleRatingChange(widget.id, item.id)
                            }
                          />
                          <ul
                            key={item.id}
                            className="ml-2 flex flex-row gap-2"
                          >
                            {item.set.map((set) => (
                              <li key={set.id} className="last:mb-0">
                                <svg className="text-neutral-400 group-hover:text-red-500 w-4 h-4">
                                  <use xlinkHref={`icons.svg#${set.icon}`} />
                                </svg>
                              </li>
                            ))}
                          </ul>
                        </label>

                        {item.active && (
                          <div>
                            <h1 className="text-neutral-600 text-sm font-medium">
                              rate labels
                            </h1>
                            {item.set.map((set) => (
                              <label className="flex flex-row justify-start border border-neutral-300 rounded-md my-2">
                                <div className="mr-2 px-1 flex flex-row justify-center items-center gap-2 bg-slate-200">
                                  <svg className="text-neutral-500 group-hover:text-red-500 w-4 h-4">
                                    <use xlinkHref={`icons.svg#${set.icon}`} />
                                  </svg>
                                </div>
                                <input
                                  value={set.name}
                                  name={`widget-${widget.id}-input`}
                                  placeholder="option name"
                                  onChange={(e) =>
                                    handleNameChane(e, widget.id, set.id)
                                  }
                                  className="w-full outline-none"
                                />
                              </label>
                            ))}
                          </div>
                        )}
                      </>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
