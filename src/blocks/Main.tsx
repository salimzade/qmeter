import { FC } from 'react'
import SurvyLogo from '../components/SurvyLogo'
import { Widget } from '../components/Widget'

interface Props {
  handleDrop: (e: React.DragEvent<HTMLDivElement>) => void
  handleDragOver: (e: React.DragEvent<HTMLDivElement>) => void
  droppedWidgets: { id: number; name: string; icon: string }[]
  setEditMode: (widgetId: number | null) => void
  onNameChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    widgetId: number
  ) => void
  onWidgetClick: (widgetId: number) => void
  onDeleteWidget: (widgetId: number) => void
}

export const Main: FC<Props> = (props) => {
  const {
    handleDrop,
    handleDragOver,
    droppedWidgets,
    setEditMode,
    onDeleteWidget
  } = props

  const exportDataToJson = () => {
    // The second argument (null) is for replacer function or array, and the third argument (2) is for indentation.
    const jsonData = JSON.stringify(droppedWidgets, null, 2)
    const blob = new Blob([jsonData], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = 'widgets.json'
    link.click()
  }

  return (
    <main className="w-full col-start-2 col-end-3 bg-neutral-100 p-5">
      <section className="w-full h-[642px] bg-black rounded-2xl p-4">
        <div className="overflow-hidden h-full rounded-lg">
          <div className="w-full h-[42px] flex flex-row justify-center items-center bg-neutral-50 border border-b-neutral-200">
            <span>
              <h1 className="text-neutral-600 text-sm font-medium capitalize">
                Page {1}
              </h1>
            </span>
            <span className="ml-2">
              <svg className="text-blue-500 w-4 h-4">
                <use xlinkHref="icons.svg#edit" />
              </svg>
            </span>
          </div>

          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="w-full h-full max-h-[526px] px-6 bg-white overflow-y-auto py-4 box-border text-center"
          >
            <SurvyLogo />

            {droppedWidgets.length === 0 && (
              <div className="w-full max-w-[512px] mx-auto flex justify-center items-center border border-dashed border-neutral-300 my-10 p-5 box-border">
                <span>
                  <h1 className="text-center">Drag and drop a question here</h1>
                </span>
              </div>
            )}

            {droppedWidgets.map((widget) => (
              <div key={widget.id} className="dropped-widget">
                <Widget
                  // ?? types are exists mb typyscript issue
                  // @ts-ignore
                  widget={widget}
                  setEditMode={() => setEditMode(widget.id)}
                  handleDelete={() => onDeleteWidget(widget.id)}
                />
                <button
                  className="my-5 border border-neutral-200 bg-blue-600 p-1 rounded-sm text-sm text-white font-medium capitalize px-5"
                  onClick={exportDataToJson}
                >
                  submit
                </button>
              </div>
            ))}

          </div>

          <div className="w-full h-[42px] flex flex-row justify-center items-center bg-neutral-50 border border-b-neutral-200">
            <span>
              <h1 className="text-neutral-400 text-sm font-medium capitalize">
                powered by
              </h1>
            </span>
            <span className="ml-2">
              <svg className="w-[64px]">
                <use xlinkHref="icons.svg#logo" />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </main>
  )
}
