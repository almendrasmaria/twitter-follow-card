import { Children, useState } from "react";

export default function TwitterFollowCard({
  userName,
  children,
  initialFollowing,
}) {
  const [IsFollowing, setIsFollowing] = useState(initialFollowing);

  const button = IsFollowing ? "Siguiendo" : "Seguir";

  const colorState = IsFollowing
    ? "button-following-card"
    : "button-follow-card";

  function handleClick() {
    setIsFollowing(!IsFollowing);
  }

  return (
    <article className="twitter-card">
      <img
        className="avatar-twitter"
        src={`https://unavatar.io/${userName}`}
        alt={children}
      />
      <div className="twitter-info">
        <strong>{children}</strong>
        <span className="twitter-username">@{userName}</span>
      </div>
      <button onClick={handleClick} className={colorState}>
        {button}
        <span className="button-unfollow-card">dejar de seguir</span>
      </button>
    </article>
  );
}
