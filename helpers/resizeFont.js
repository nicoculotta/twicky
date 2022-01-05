export const ResizeFont = ( tweet_text ) =>{
   let font = "lg";
    if (tweet_text.length < 60){
        return font = "4xl"
    }
   if (tweet_text.length > 60 && tweet_text.length < 100){
       return font = "3xl"
   }
   if (tweet_text.length > 100 && tweet_text.length < 120 ){
        return font = "2xl"
    }
    if (tweet_text.length > 120 && tweet_text.length < 160 ){
        return font = "xl"
    }
   return font
}