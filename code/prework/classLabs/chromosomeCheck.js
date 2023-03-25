function chromosomeCheck(sperm) {
  if (sperm == "XX"){
    return "Congratulations! You\'re going to have a daughter."
  }
  
  if (sperm == "XY"){
    return "Congratulations! You\'re going to have a son."
  }
  
  //Default case, no chromosomes of such type.
  return "No such chromosome";
}