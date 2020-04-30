class Formatter {
  static capitalize(str){
    let first = str.charAt(0).toUpperCase()
    return first + str.slice(1)
  }

  static sanitize(str){
    return str.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize(str){
    let arr = str.split(" ")
    let noTitle = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let nuArr = arr.map(word => {
      if (!noTitle.includes(word)){
        return this.capitalize(word)
      } else {
        return word
      }
    })
    nuArr[0] = this.capitalize(nuArr[0])
    return nuArr.join(' ')
  }
}