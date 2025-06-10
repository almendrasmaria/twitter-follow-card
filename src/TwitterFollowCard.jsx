import { useState } from "react";

export default function TwitterFollowCard() {
    const [IsFollowing, setIsFollowing] = useState(false);

    const Button = IsFollowing ? "Siguiendo" : "Seguir"

    function handleClick() {
        setIsFollowing(!IsFollowing)
    }

    return (
        <button onClick={handleClick}>{Button}</button>
    )

}