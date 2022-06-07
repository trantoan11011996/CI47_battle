export function generateCommentUser(){
    const comments = []
    if (!localStorage.getItem('comments')) {
        localStorage.setItem('comments', JSON.stringify(comments))
    }
}
export function CreateByAge(useremail, idAge, idBattle,comment) {
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
export function CreateByBattle(useremail, idBattle,comment) {
    const newComment = {
        email : useremail,
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
            return item.age==ageId || item.battle==battleId
        })
    }
}

export function getCommentByidBattle(battleId){
    let json = localStorage.getItem('comments')
    if(!json){
        return []
    }
    else{
        const commentById = JSON.parse(json)
        return commentById.filter((item)=>{
            return  item.battle==battleId
        })
    }
}
