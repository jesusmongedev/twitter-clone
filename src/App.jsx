import TwitterFollowCard from './components/TwitterFollowCard';
import TwitterFollowCardActions from './components/TwitterFollowCard/components/TwitterFollowCardActions';
import TwitterFollowCardHeader from './components/TwitterFollowCard/components/TwitterFollowCardHeader';
import TwitterFollowCardItem from './components/TwitterFollowCard/components/TwitterFollowCardItem';

function App() {
  return (
    <TwitterFollowCard>
      <TwitterFollowCardHeader />
      <div className="card_content">
        <TwitterFollowCardItem />
        <TwitterFollowCardItem />
      </div>
      <TwitterFollowCardActions />
    </TwitterFollowCard>
  );
}

export default App;
