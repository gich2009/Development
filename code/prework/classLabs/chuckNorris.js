let whatChuckWants = !true;
let something = Boolean(Math.random);

console.log(chuck(whatChuckWants, something));

function chuck(whatChuckWantsParameter, somethingParameter){
  if (somethingParameter === whatChuckWantsParameter)
    return somethingParameter;
  if (somethingParameter != whatChuckWantsParameter)
    return whatChuckWantsParameter;
}