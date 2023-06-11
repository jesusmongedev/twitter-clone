import TwitterFollowCard from './components/TwitterFollowCard'
import TwitterFollowCardActions from './components/TwitterFollowCard/components/TwitterFollowCardActions'
import TwitterFollowCardHeader from './components/TwitterFollowCard/components/TwitterFollowCardHeader'
import TwitterFollowCardItem from './components/TwitterFollowCard/components/TwitterFollowCardItem'
import { users } from './components/TwitterFollowCard/data'

function App() {
  return (
    <TwitterFollowCard>
      <TwitterFollowCardHeader />
      <div className="card_content">
        {users.map(({ userName, name, isFollowing, followsUser }) => (
          <TwitterFollowCardItem
            key={userName}
            username={userName}
            initialIsFollowing={isFollowing}
            followsUser={followsUser}
          >
            {name}
          </TwitterFollowCardItem>
        ))}
      </div>
      <TwitterFollowCardActions />
    </TwitterFollowCard>
  )
}

export default App
