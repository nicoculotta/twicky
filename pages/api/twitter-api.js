import Twitter from "twitter-v2";
import { errorHandler } from "../../helpers/api/error-handler";

const client = new Twitter({
  bearer_token: `${process.env.BEARER_TOKEN}`,
});

export default async(req, res) => {

  const paramsTweet = {
    ids: req.body.tweet_id,
    tweet: {
      fields: ['public_metrics', 'author_id', 'created_at', 'text'],
    },
    media: {
      fields: ['url', 'preview_image_url', 'width', 'height']
    }
  }

  // GET TWEET INFORMATION
  try {
    const { data:dataTweet } = await client.get('tweets', paramsTweet )
    const { author_id } = await dataTweet[0]
  
    const paramsUser = {
      ids: author_id,
      user: {
        fields: ['name', 'username', 'profile_image_url', 'public_metrics']
      }
    }
    // GET USER INFORMATION FROM TWEET
    const { data:dataUser } = await client.get('users', paramsUser)
  
    res.status(200).json({
      tweet: dataTweet[0],
      user: dataUser[0]
    })

  } catch (error) {
    errorHandler(error, res)
  }
 

}

