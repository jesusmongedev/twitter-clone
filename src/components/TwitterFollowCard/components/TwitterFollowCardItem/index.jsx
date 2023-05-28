function TwitterFollowCardItem({ username, initialIsFollowing, children }) {
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
            <span className="tw-followCard-infoAccountDetailsUserName">
              @{username}
            </span>
            {initialIsFollowing ? (
              <span className="tw-followCard-infoAccountDetailsIsFollowing">
                Follows you
              </span>
            ) : null}
          </div>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Follow</button>
      </aside>
    </article>
  );
}

export default TwitterFollowCardItem;
