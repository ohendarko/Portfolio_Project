let status_on = false;
let status_on2 = false;
document.querySelector('.nsr0-no').addEventListener('click', () => {
  if (!status_on) {
    document.querySelector('.nine').innerHTML = `Asystole/PEA`;
    document.querySelector('.ar1').innerHTML = `↓`;
    document.querySelector('.ar2').innerHTML = `↓`;
    document.querySelector('.ar3').innerHTML = `↓`;
    document.querySelector('.ar4').innerHTML = `↓`;
    document.querySelector('.nine-A').innerHTML = `Epinephrine 1mg ASAP`;
    document.querySelector('.ten').innerHTML = `<p>CPR 2 min</p>
    <ul>
      <li>IV/IO Access</li>
      <li><strong>Epinephrine</strong> 1mg every 3 to 5 mins</li>
      <li>Consider advanced airway, capnography</li>
    </ul>`;
    document.querySelector('.nsr1').innerHTML = `<p>Rhythm Shockable?</p>
    <div style="display: flex; justify-content: center; align-items: center;">
      <button class="algorythm-button nsr1-yes" style="margin-right: 20px;">Yes</button>
      <button class="algorythm-button nsr1-no">No</button>
    </div>`
    //document.querySelector('.nine').classList.add('asystole');
    status_on = true;
  } else {
    document.querySelector('.nine').innerHTML = ``;
    document.querySelector('.ar1').innerHTML = ``;
    document.querySelector('.ar2').innerHTML = ``;
    document.querySelector('.ar2').innerHTML = ``;
    document.querySelector('.ar2').innerHTML = ``;
    document.querySelector('.nine-A').innerHTML = ``;
    document.querySelector('.ten').innerHTML = ``;
    status_on = false;
  }

  document.querySelector('.nsr1-no').addEventListener('click', () => {
    if (!status_on2) {
      document.querySelector('.ar5').innerHTML = `↓`;
      document.querySelector('.eleven').innerHTML = `<p>CPR 2 min</p>
      <ul>
        <li>Treat reversible causes</li>
      </ul>`;
      document.querySelector('.ar6').innerHTML = `↓`;
      status_on2 = true;
    } else {
      document.querySelector('.ar5').innerHTML = ``;
      document.querySelector('.eleven').innerHTML = ``;
      document.querySelector('.ar6').innerHTML = `↓`;
      status_on2 = false;
    }
  });
});

document.querySelector('.nsr1-no').addEventListener('click', () => {
  //if (!status_on2) {
  document.querySelector('.ar5').innerHTML = `↓`;
  document.querySelector('.eleven').innerHTML = `<p>CPR 2 min</p>
    <ul>
      <li>Treat reversible causes</li>
    </ul>`;
  //status_on2 = true;
  /*} else {
    document.querySelector('.ar5').innerHTML = ``;
    document.querySelector('.eleven').innerHTML = ``;
    status_on2 = false;
  }*/
});