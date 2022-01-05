export const getTweet = async( tweet_id ) => {

    const options = {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        tweet_id
      })
    }

    try {
        const data = await fetch('api/twitter-api', options)
        const response = await data.json()
        return response;
    } catch (error) {
        console.log(error)   
    }
}