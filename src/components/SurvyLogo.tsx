import { useState, ChangeEvent } from 'react'

const SurvyLogo = () => {
  const [file, setFile] = useState<string>()

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFile(
      event.target.files?.[0] ? URL.createObjectURL(event.target.files[0]) : ''
    )
  }

  return (
    <div className='my-6'>
      {file ? (
        <div className="w-full min-w-full h-full flex justify-center">
          <img className="w-full max-w-[256px]" src={file} alt="survy-logo" />
        </div>
      ) : (
        <form className="flex flex-col justify-center items-center">
          <h1 className="text-neutral-700 font-medium mb-2">Survy logo</h1>
          <div className="flex flex-row items-center">
            <input
              type="file"
              id="custom-input"
              onChange={handleChange}
              hidden
            />
            <label
              htmlFor="custom-input"
              className="block text-sm text-slate-500 py-2 px-4 rounded-md border-0 font-semibold bg-pink-50 hover:bg-pink-100 cursor-pointer shadow-md"
            >
              Browse
            </label>
          </div>
        </form>
      )}
    </div>
  )
}

export default SurvyLogo
