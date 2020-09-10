function verifyProfile(user) {
    const url = "https://skboard.herokuapp.com/api/unverified/approve/"+user
    console.log(url) 
    fetch(url, { 
        method: "POST", 
        body: null,
        headers: { 
            "Content-type": "application/json;"
        } 
    }) 
    .then(response => response.json()) 
    .then(json => console.log(json));
    alert("verified " +user);
    location.reload()
}

