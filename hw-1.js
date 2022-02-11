Array.prototype.includeCI = function(data){
    const len = this.length
    
    for(let i=0; i<len; i++){
        if(this[i] === data){
            return true
        }
    }
    return false
}


const a = ["mecit","sezgin","yazılım","mekatronik","opencv"]

console.log(a.includeCI("sezgin"))