import { MusicPlayerBar } from './components/shared/layouts/MusicPlayerBar'

export const AppLayout: React.FC = () => {
  return (
    <div className="flex flex-col justify-between w-full h-screen bg-gray-100">
      Spotify Light
      <MusicPlayerBar />
    </div>
  )
}
