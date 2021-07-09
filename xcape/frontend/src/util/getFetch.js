import React from "react";

export const getFetch = async (url) => {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    })
    return response.json();
}