import queryString from 'query-string'

export const LoginPage: React.FC = () => {
  const url =
    'https://accounts.spotify.com/authorize?' +
    queryString.stringify({
      client_id: '7b9179880e2746d5954a44f406ea647f',
      scope:
        'user-read-private user-read-email playlist-read-private user-modify-playback-state user-read-playback-state user-read-currently-playing app-remote-control',
      response_type: 'token',
      redirect_uri: 'http://localhost:3000/',
    })

  return (
    <div>
      <a href={url}>Login</a>
    </div>
  )
}
