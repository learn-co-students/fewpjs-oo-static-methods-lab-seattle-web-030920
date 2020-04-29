class Formatter {
  //add static methods here

  static capitalize(string){
    return (string.charAt(0).toUpperCase() + string.slice(1))
  }

  static sanitize(string){
    return (string.replace(/[^a-zA-Z0-9 '-]/g, ""))
  }

  static titleize(string){

    let helpers = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let workingArray = Formatter.sanitize(string).split(" ")
    let titleized = []

    for (let i=0; i < workingArray.length; i++ ){
      if (i == 0){ titleized.push(Formatter.capitalize(workingArray[i])) }
      else{
        if (helpers.includes(workingArray[i])){
          titleized.push(workingArray[i])
        }else{
          titleized.push(Formatter.capitalize(workingArray[i]))
        }
      }
    }

    return titleized.join(" ")
  }

}