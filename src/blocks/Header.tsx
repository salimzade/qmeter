export const Header = () => {
  return (
    <header className="w-full h-[48px] flex flex-col justify-center items-center px-4 col-start-1 col-end-4 bg-white border border-b-neutral-200">
      <div className="mx-2 w-full flex flex-row justify-between items-center">
        <div className="flex flex-row justify-start items-center">
          <span className="text-sm text-neutral-700 font-medium capitalize mr-2">Task Template</span>
          <svg className="w-4 h-4 text-blue-500">
            <use xlinkHref="icons.svg#edit" />
          </svg>
        </div>

        <div className="flex flex-row gap-4">
          <button className="border-b-2 border-b-blue-500 bg-white p-1 rounded-sm text-sm text-neutral-700 font-medium uppercase px-3">widget</button>
          <button className="border-b-2 border-b-white bg-white p-1 rounded-sm text-sm text-neutral-700 font-medium uppercase px-3">flow</button>
          <button className="border-b-2 border-b-white bg-white p-1 rounded-sm text-sm text-neutral-700 font-medium uppercase px-3">preview</button>
        </div>

        <div className="flex flex-row gap-2">
          <button className="border border-neutral-200 bg-white p-1 rounded-sm text-sm text-neutral-700 font-medium capitalize px-3">Dublicate</button>
          <button className="border border-neutral-200 bg-white p-1 rounded-sm text-sm text-neutral-700 font-medium capitalize px-3">Save preview</button>
          <button className="border border-neutral-200 bg-blue-500 p-1 rounded-sm text-sm text-white font-medium capitalize px-3">Save</button>
        </div>
      </div>
    </header>
  )
}
