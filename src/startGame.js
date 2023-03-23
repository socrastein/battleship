export default function newGame(){
  getFirstName: () =>{
    return "Matt";
  }

  getSecondName: () =>{
    return "Summer";
  }

  return {getFirstName, getSecondName};
}