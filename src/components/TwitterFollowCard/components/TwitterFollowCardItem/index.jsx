function TwitterFollowCardItem() {
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          src={`https://unavatar.io/jesusmongedev`}
          alt="El avatar de jesusmongedev"
          className="tw-followCard-avatar"
        />
        <div className="tw-followCard-info">
          <strong>Jesus Monge</strong>
          <div className="tw-followCard-infoAccountDetails">
            <span className="tw-followCard-infoAccountDetailsUserName">
              @jmongedev
            </span>
            <span className="tw-followCard-infoAccountDetailsIsFollowing">
              Follows you
            </span>
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
