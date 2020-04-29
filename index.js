class Formatter {
  //add static methods here
  static capitalize(string){
    return string[0].toUpperCase() + string.slice(1)
  }
  static sanitize(string){
    return string.replace(/[^\w\s\'\-]/gi, '');
  }

  static titleize(string){
    let array=string.split(' ')
    console.log(array)
   let newString= array.map(word => {
      if (word!= 'the' &&
        word!= 'a' &&
        word!='an' &&
        word!='but' &&
        word!='of' &&
        word!='and' &&
        word!='for' &&
        word!='at' &&
        word!= 'by' &&
        word!= 'from'){
      return word[0].toUpperCase() + word.slice(1)
        }
        else {
          return word
        }
    }).join(' ')

    return  newString[0].toUpperCase() + newString.slice(1)

  }
}

// capitalizes all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.