type XPBarProps = {
  value: number
}

export function XPBar({ value }: XPBarProps) {
  return (
    <div className="mt-3 w-full border-2 border-black bg-neutral-200">
      <div
        className="h-3 bg-green-600 transition-all duration-500"
        style={{ width: `${value}%` }}
      />
    </div>
  )
}
