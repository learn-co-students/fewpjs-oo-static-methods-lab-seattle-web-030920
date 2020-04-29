class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '')
  }
  static titleize(string) {
    const words = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let array = string.split(" ")
    let result = []
    result.push(this.capitalize(array[0]) + " ")
    for (let i = 1; i < array.length; i++) {
      if (words.includes(array[i])) {
        result.push(array[i])
      } else {
        result.push(this.capitalize(array[i]))
      }
    }
    return result.join(" ")
  }
}