import { FC } from 'react'

interface Props {
  label?: string
}
export const SeparatorText: FC<Props> = ({ label = '??' }): JSX.Element => {
  return (
    <div className="w-full mb-6 mt-6 flex items-center justify-center">
      <div
        aria-hidden="true"
        className="h-px w-3/12 bg-neutral-200"
        data-orientation="horizontal"
        role="separator"
      ></div>
      <span className="mx-2 text-xs text-neutral-400 font-normal uppercase">
        {label}
      </span>
      <div
        aria-hidden="true"
        className="h-px w-3/12 bg-neutral-200"
        data-orientation="horizontal"
        role="separator"
      ></div>
    </div>
  )
}
