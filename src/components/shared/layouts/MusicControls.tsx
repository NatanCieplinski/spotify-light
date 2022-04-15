import classNames from 'classnames'
import { ComponentType, useState } from 'react'
import {
  IconDisabledRepeat,
  IconEnabledRepeat,
  IconNextSong,
  IconPause,
  IconPlay,
  IconPreviousSong,
  IconShuffle,
} from '../icons'
import { IconProps } from '../icons/IconTypes'

export const MusicControls: React.FC = () => {
  const [isShuffleEnabled, setIsShuffleEnabled] = useState(false)
  const [isRepeatEnabled, setIsRepeatEnabled] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="flex gap-3 justify-center items-center">
      <MusicControlsButton
        icon={IconShuffle}
        active={isShuffleEnabled}
        onClick={() => setIsShuffleEnabled(!isShuffleEnabled)}
      />
      <MusicControlsButton icon={IconPreviousSong} />
      <MusicControlsButton
        icon={isPlaying ? IconPause : IconPlay}
        variant={PlayerButtonVariant.fill}
        onClick={() => setIsPlaying(!isPlaying)}
      />
      <MusicControlsButton icon={IconNextSong} />
      <MusicControlsButton
        icon={isRepeatEnabled ? IconEnabledRepeat : IconDisabledRepeat}
        active={isRepeatEnabled}
        onClick={() => setIsRepeatEnabled(!isRepeatEnabled)}
      />
    </div>
  )
}

export const MusicControlsButton: React.FC<{
  icon: ComponentType<IconProps>
  variant?: PlayerButtonVariant
  active?: boolean
  onClick?: () => void
}> = ({
  active,
  icon: Icon,
  variant = PlayerButtonVariant.outline,
  onClick,
}) => {
  return (
    <>
      <button
        onClick={onClick}
        className={classNames(
          'relative grid place-items-center w-8 h-8',
          variantStyle[variant]
        )}
      >
        <Icon
          className={classNames(
            active ? 'text-primary' : 'text-gray-700',
            'fill-current'
          )}
        />
        {active && (
          <div className="absolute bottom-0 w-1 h-1 bg-primary rounded-full" />
        )}
      </button>
    </>
  )
}

export enum PlayerButtonVariant {
  fill = 'fill',
  outline = 'outline',
}

export const variantStyle: Record<PlayerButtonVariant, string> = {
  [PlayerButtonVariant.fill]:
    'rounded-full border border-gray-500 hover:scale-105',
  [PlayerButtonVariant.outline]: 'hover:opacity-75',
}
