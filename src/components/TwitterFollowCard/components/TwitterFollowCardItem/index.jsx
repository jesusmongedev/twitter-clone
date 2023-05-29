import { useState } from 'react';

function TwitterFollowCardItem({
  username,
  initialIsFollowing,
  children,
  followsUser,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const togleFollowing = () => setIsFollowing(!isFollowing);
  const buttonLabel = isFollowing ? 'Following' : 'Follow';
  const btnClassIsFollowing = isFollowing ? 'isFollowing' : '';

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/${username}`}
          alt={`El avatar de ${username}`}
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>{children}</strong>
          <div className="tw-followCard-infoAccountDetails">
            <div className="tw-followCard-infoUserNameContainer">
              <span>@{username}</span>
            </div>
            {followsUser ? (
              <span className="tw-followCard-infoAccountDetailsIsFollowing">
                Follows you
              </span>
            ) : null}
          </div>
        </div>
      </header>
      <aside>
        <button
          onClick={togleFollowing}
          className={`tw-followCard-button ${btnClassIsFollowing}`}
        >
          {buttonLabel}
        </button>
      </aside>
    </article>
  );
}

export default TwitterFollowCardItem;
