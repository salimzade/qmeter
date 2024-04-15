import React from 'react'
import { Main } from '../blocks/Main'
import { WidgetsList } from '../blocks/WidgetsList'
import { Editor } from '../blocks/Editor'
import { Header } from '../blocks/Header'
import { InitialTypes } from '../interfaces/IntialTypes'
import { SmilySet } from '../sets/smily'
import { VoiceFeedback } from '../sets/voice'
import { SingleChoice } from '../sets/single'
function App() {

  const [initialWidgets, _setInitialWidgets] = React.useState<InitialTypes[]>([
    SmilySet,
    VoiceFeedback,
    SingleChoice
  ])

  const [droppedWidgets, setDroppedWidgets] = React.useState<InitialTypes[]>([])

  const [editMode, setEditMode] = React.useState<number | null>(null)

  const [widgetCounter, setWidgetCounter] = React.useState<number>(0)

  const onDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    widget: InitialTypes
  ) => {
    e.dataTransfer.setData('text/plain', widget.id.toString())
  }

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    const widgetId = parseInt(e.dataTransfer.getData('text/plain'), 10)
    const droppedWidget = initialWidgets.find(
      (widget) => widget.id === widgetId
    )
    if (droppedWidget) {
      const newWidget = { ...droppedWidget, id: widgetCounter + 1 }
      setDroppedWidgets((prevDroppedWidgets) => [
        ...prevDroppedWidgets,
        newWidget
      ])
      setWidgetCounter((prevCounter) => prevCounter + 1)
    }
  }

  const onWidgetClick = (widgetId: number) => {
    setEditMode(widgetId)
  }

  const onNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    widgetId: number
  ) => {
    const updatedWidgets = droppedWidgets.map((widget) =>
      widget.id === widgetId ? { ...widget, name: e.target.value } : widget
    )
    setDroppedWidgets(updatedWidgets)
  }

  const onDeleteWidget = (widgetId: number) => {
    const updatedWidgets = droppedWidgets.filter(
      (widget) => widget.id !== widgetId
    )
    setDroppedWidgets(updatedWidgets)
  }

  return (
    <section className="w-full h-svh grid grid-cols-[320px_1fr] grid-rows-[48px_1fr] bg-neutral-100">
      <Header />

      <WidgetsList initialWidgets={initialWidgets} onDragStart={onDragStart} />

      <Main
        handleDrop={onDrop}
        handleDragOver={(e) => e.preventDefault()}
        droppedWidgets={droppedWidgets}
        setEditMode={setEditMode}
        onNameChange={onNameChange}
        onDeleteWidget={onDeleteWidget}
        onWidgetClick={onWidgetClick}
      />

      <Editor
        editMode={editMode}
        setEditMode={setEditMode}
        droppedWidgets={droppedWidgets}
        setDroppedWidgets={setDroppedWidgets}
      />
    </section>
  )
}

export default App
