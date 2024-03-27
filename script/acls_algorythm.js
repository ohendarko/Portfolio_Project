let status_on = false;
let status_on2 = false;
let status_on3 = false;
let status_on4 = false;
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
    document.querySelector('.ar3').innerHTML = ``;
    document.querySelector('.ar4').innerHTML = ``;
    document.querySelector('.nine-A').innerHTML = ``;
    document.querySelector('.ten').innerHTML = ``;
    document.querySelector('.nsr1').innerHTML = ``;
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
      document.querySelector('.nsr2').innerHTML = `<p>Rhythm Shockable?</p>
      <div style="display: flex; justify-content: center; align-items: center;">
        <button class="algorythm-button nsr2-yes" style="margin-right: 20px;">Yes</button>
        <button class="algorythm-button nsr2-no">No</button>`;
      status_on2 = true;
    } else {
      document.querySelector('.ar5').innerHTML = ``;
      document.querySelector('.eleven').innerHTML = ``;
      document.querySelector('.ar6').innerHTML = ``;
      document.querySelector('.nsr2').innerHTML = ``;
      status_on2 = false;
    }

    document.querySelector('.nsr2-no').addEventListener('click', () => {
      if (!status_on3) {
        document.querySelector('.ar7').innerHTML = `↓`;
        document.querySelector('.nsr3').innerHTML = `<p> Are there signs on return of spontaneus circulation (ROSC)?</p>
        <div style="display: flex; justify-content: center; align-items: center;">
          <button class="algorythm-button nsr3-yes" style="margin-right: 20px;">Yes</button>
          <button class="algorythm-button nsr3-no">No</button>
        </div>`;
        /*document.querySelector('.twelve').innerHTML = `<ul>
        <li>If no signs on return of spontaneus circulation (ROSC), got to 10 or 11</li>
        <li>If ROSC, go to post-cardiac arrest care</li>
        <li>Consider appropriateness of continued rescuscitation</li>
      </ul>`;
      */
        status_on3 = true;
      } else {
        document.querySelector('.ar7').innerHTML = ``;
        document.querySelector('.nsr3').innerHTML = ``;
        status_on3 = false;
      }

      document.querySelector('.nsr3-no').addEventListener('click', () => {
        if (!status_on4) {
          document.querySelector('.ar8').innerHTML = `↓`;
          document.querySelector('.twelve').innerHTML = `<p>CPR 2 min</p>
          <ul>
            <li>IV/IO Access</li>
            <li><strong>Epinephrine</strong> 1mg every 3 to 5 mins</li>
            <li>Consider advanced airway, capnography</li>
          </ul>
          <p><strong>OR</strong></p>
          <ul>
            <li>Treat reversible causes</li>
          </ul>
        </div>`;
          status_on4 = true;
        } else {
          document.querySelector('.ar8').innerHTML = ``;
          document.querySelector('.twelve').innerHTML = ``;
          status_on4 = false;
        }
      })
    });
  });
});

let status_yes = false;
document.querySelector('.nsr0-yes').addEventListener('click', () => {
  /*if (status_on) {
    console.log('yes');
    status_on = false;
  }*/
  if (!status_yes) {
    document.querySelector('.nine').innerHTML = `VF/pVT`;
    document.querySelector('.ar1').innerHTML = `↓`;
    document.querySelector('.ar2').innerHTML = `↓`;
    document.querySelector('.ar3').innerHTML = `↓`;
    document.querySelector('.ar4').innerHTML = `↓`;
    document.querySelector('.nine-A').innerHTML = `Shock`;
    document.querySelector('.ten').innerHTML = `<p>CPR 2 min</p>
    <ul>
      <li>IV/IO Access</li>
    </ul>`;
    document.querySelector('.sr1').innerHTML = `<p>Rhythm Shockable?</p>
    <div style="display: flex; justify-content: center; align-items: center;">
      <button class="algorythm-button sr1-yes" style="margin-right: 20px;">Yes</button>
      <button class="algorythm-button sr1-no">No</button>
    </div>`
    status_yes = true;
  } else {
    document.querySelector('.nine').innerHTML = ``;
    document.querySelector('.ar1').innerHTML = ``;
    document.querySelector('.ar2').innerHTML = ``;
    document.querySelector('.ar3').innerHTML = ``;
    document.querySelector('.ar4').innerHTML = ``;
    document.querySelector('.nine-A').innerHTML = ``;
    document.querySelector('.ten').innerHTML = ``;
    document.querySelector('.nsr1').innerHTML = ``;
    status_yes = false;
  }
})
