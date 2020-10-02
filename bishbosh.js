document.getElementById('runButton').addEventListener("click", run);

function run() {
    let max = document.getElementById('loopMaximum').value;
    let bishDiv = document.getElementById('bishDiv').value;
    let boshDiv = document.getElementById('boshDiv').value;
    
    let result = document.getElementById('result');
    result.textContent = '';

    if(max > 0 && bishDiv > 0 && boshDiv > 0) {
        for(let i=1; i <= max; i++) {
            let value = bishBosh(i, bishDiv, boshDiv);
            result.textContent += i + ': ' + value + '\n';
        }
    }
    else
    {
        result.textContent = 'OBS! Talen måste vara större än noll!';
    }

}

function bishBosh(tal, divBish, divBosh) {
  let bish = (tal % divBish) === 0;
  let bosh = (tal % divBosh) === 0;
  let output = bish ? 'Bish' : '';
  if(bosh) {
     output += (bish ? '-' : '') + "Bosh";
  }
  return (bish || bosh) ? output : tal;
}


    
    