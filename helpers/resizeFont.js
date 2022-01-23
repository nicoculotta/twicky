export const ResizeFont = ( tweet_text ) =>{
   let font = 28;
    if (tweet_text.length < 60){
        return font = 60
    }
   if (tweet_text.length > 60 && tweet_text.length < 100){
       return font = 48
   }
   if (tweet_text.length > 100 && tweet_text.length < 120 ){
        return font = 36
    }
    if (tweet_text.length > 120 && tweet_text.length < 160 ){
        return font = 30
    }
   return font
}