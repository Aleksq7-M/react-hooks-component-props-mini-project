import React from 'react';

function Article({
    title,
    date = 'January 1, 1970', 
    preview,
    minutes}){
        let minutesString = ''
        let emojiNum = 0
        if (minutes < 30){
            if (minutes%5 > 2){
                emojiNum = (minutes/5) + 1
            }else{
                emojiNum = (minutes/5)
            }
            for(let i = 0; i < emojiNum; i++){
                minutesString += '☕️'
            }
        }else{
            if (minutes%10 > 5){
                emojiNum = (minutes/10) + 1
            }else{
                emojiNum = (minutes/10)
            }
            for(let i = 0; i < emojiNum; i++){
                minutesString += '🍱'
            }
        }
    return(
        <article>
            <h3>{title}</h3>
            <small>{date}{`${minutesString}${minutes} min read`}</small>
            <p>{preview}</p>
        </article>
    )
}

export default Article;