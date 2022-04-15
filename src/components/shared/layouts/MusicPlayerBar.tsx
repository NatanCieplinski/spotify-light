import { MusicControls } from './MusicControls'

export const MusicPlayerBar: React.FC = () => {
  return (
    <div className="grid grid-cols-3 px-4 h-[90px] bg-white  border-t border-gray-300">
      <div className="flex justify-start items-center">Track Info</div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col">
          <MusicControls />
        </div>
      </div>
      <div className="flex justify-end items-center">Volume Info</div>
    </div>
  )
}
