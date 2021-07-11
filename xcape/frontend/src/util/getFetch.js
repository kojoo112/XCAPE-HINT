export const getFetch = async (url) => {
    let response = await fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    }).then(function (response){
        return response.json();
    })
    return await response
}