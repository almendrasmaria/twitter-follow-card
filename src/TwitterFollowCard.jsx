import { useState } from "react";

export default function TwitterFollowCard() {
    const [IsFollowing, setIsFollowing] = useState(false);

    const button = IsFollowing ? "Siguiendo" : "Seguir"

    const colorState = IsFollowing ? 'button-following-card' : 'button-follow-card'; 


    function handleClick() {
        setIsFollowing(!IsFollowing)
    }

    return (
        <button onClick={handleClick} className={colorState}>
            {button} 
            <span className="button-unfollow-card">dejar de seguir</span>
        </button>
        
    )

}