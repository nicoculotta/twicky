export const ResizeFont = ( tweet_text ) =>{
   let font = 22;
    if (tweet_text.length < 60){
        console.log('cantidad de letra' + tweet_text.length)
        return font = 40
    }
   if (tweet_text.length > 60 && tweet_text.length < 100){
        console.log('cantidad de letra' + tweet_text.length)
       return font = 28
   }
   if (tweet_text.length > 100 && tweet_text.length < 120 ){
        console.log('cantidad de letra' + tweet_text.length)
        return font = 24
    }
    if (tweet_text.length > 120 && tweet_text.length < 160 ){
         console.log('cantidad de letra' + tweet_text.length)
        return font = 22
    }
   return font
}