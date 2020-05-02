class Formatter {  
  static capitalize(inputString)
  {
    return inputString.substr(0,1).toUpperCase() + inputString.substr(1,inputString.length-1);  
  }

  static sanitize(inputString)
  {    
    return inputString.replace(/[^ A-Za-z0-9-']+/g, '');
  }

  static titleize(inputString)
  {
    let nonCapitalizeWords = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];    
    let tempArray = inputString.split(" ");
    let mappedArray = tempArray.map(word => 
      {       
      if(nonCapitalizeWords.find(nonCap => nonCap == word) == undefined)
        {          
          return this.capitalize(word)
        }
        return word
    })

    mappedArray[0] = this.capitalize(mappedArray[0]);
    return mappedArray.join(" ");
  }
}
