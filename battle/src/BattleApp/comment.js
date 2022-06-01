export function generateCommentUser(){
    const comments = []
    if (!localStorage.getItem('comments')) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }
}
export function Create(useremail, idAge, idBattle,comment) {
   const newComment = {
       email : useremail,
       age : idAge,
       battle : idBattle,
       content : comment,
   }
   let comments = getComment() 
   comments.push(newComment)
   localStorage.setItem('comments',JSON.stringify(comments))
}
export function getComment() {
    let json = localStorage.getItem('comments')
    if(!json){
        return []
    }
    else{
        return JSON.parse(json)
    }
}

export function getCommentByid(ageId,battleId){
    let json = localStorage.getItem('comments')
    if(!json){
        return []
    }
    else{
        const commentById = JSON.parse(json)
        return commentById.filter((item)=>{
            return item.age==ageId && item.battle==battleId
        })
    }
}
