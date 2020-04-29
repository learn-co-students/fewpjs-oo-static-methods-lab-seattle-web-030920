class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^\w\s\'\-]/gi, '');
  }

  static titleize(string){
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let array=string.split(' ')
    console.log(array)
   let newString= array.map(word => {
      if (!exceptions.includes(word)){
      return word[0].toUpperCase() + word.slice(1)
        }
        else {
          return word
        }
    }).join(' ')

    return  newString[0].toUpperCase() + newString.slice(1)

  }
}