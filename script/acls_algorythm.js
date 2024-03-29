let status_on = false;
let status_on2 = false;
let status_on3 = false;
let status_on4 = false;
//

//
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
    /*
    document.querySelector('.nine').classList.add('nsr0-no-arm');
    document.querySelector('.ar1').classList.add('nsr0-no-arm');
    document.querySelector('.ar2').classList.add('nsr0-no-arm');
    document.querySelector('.ar3').classList.add('nsr0-no-arm');
    document.querySelector('.ar4').classList.add('nsr0-no-arm');
    document.querySelector('.nine-a').classList.add('nsr0-no-arm');
    document.querySelector('.ten').classList.add('nsr0-no-arm');
    document.querySelector('.nsr1').classList.add('nsr0-no-arm');
    /
    //
    if (document.querySelector('.nsr0-yes-arm').innerHTML) {
      document.querySelector('.nsr0-yes-arm').innerHTML = ``;
    }
    */

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

    /*
    document.querySelector('.nine').classList.remove('nsr0-no-arm');
    document.querySelector('.ar1').classList.remove('nsr0-no-arm');
    document.querySelector('.ar2').classList.remove('nsr0-no-arm');
    document.querySelector('.ar3').classList.remove('nsr0-no-arm');
    document.querySelector('.ar4').classList.remove('nsr0-no-arm');
    document.querySelector('.nine-a').classList.remove('nsr0-no-arm');
    document.querySelector('.ten').classList.remove('nsr0-no-arm');
    document.querySelector('.nsr1').classList.remove('nsr0-no-arm');
    */
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
          <p>Consider appropriateness of continued rescuscitation</p>
        </div>`;
          status_on4 = true;
        } else {
          document.querySelector('.ar8').innerHTML = ``;
          document.querySelector('.twelve').innerHTML = ``;
          status_on4 = false;
        }
      });
      document.querySelector('.nsr3-yes').addEventListener('click', () => {
        if (!status_on4) {
          document.querySelector('.ar8').innerHTML = `↓`;
          document.querySelector('.twelve').innerHTML = `<ul>
          <li>Go to post-cardiac arrest care</li>
        </ul>
        <p>Consider appropriateness of continued rescuscitation</p>`;
          status_on4 = true;
        } else {
          document.querySelector('.ar8').innerHTML = ``;
          document.querySelector('.twelve').innerHTML = ``;
          status_on4 = false;
        }
      });
    });
  });
  let nsr1yes = true;
  let nsr1yes2 = true;
  let nsr1yes3 = true;

  document.querySelector('.nsr1-yes').addEventListener('click', () => {
    if (!nsr1yes) {
      document.querySelector('.ar5').innerHTML = `↓`;
      document.querySelector('.fiveb').innerHTML = `Shock`;
      document.querySelector('.ar6').innerHTML = `↓`;
      document.querySelector('.tenb').innerHTML = `<p>CPR 2 min</p>
    <ul>
      <li> Consider <strong>Epinephrine</strong>, <strong>Amiodarone</strong> or <strong>Lidocaine</strong></li>
      <li>Treat reversible causes</li>
    </ul>`;
      document.querySelector('.ar7').innerHTML = `↓`;
      document.querySelector('.nsr3').innerHTML = `<p>Rhythm Shockable?</p>
    <div style="display: flex; justify-content: center; align-items: center;">
      <button class="algorythm-button sr4-yes" style="margin-right: 20px;">Yes</button>
      <button class="algorythm-button sr4-no">No</button>`;
      nsr1yes = true;
    } else {
      document.querySelector('.ar5').innerHTML = ``;
      document.querySelector('.fiveb').innerHTML = ``;
      document.querySelector('.ar6').innerHTML = ``;
      document.querySelector('.tenb').innerHTML = ``;
      document.querySelector('.ar7').innerHTML = ``;
      document.querySelector('.nsr3').innerHTML = ``;
      nsr1yes = false;
    }

    document.querySelector('.sr4-yes').addEventListener('click', () => {
      if (!nsr1yes2) {
        document.querySelector('.ar8').innerHTML = `↓`;
        document.querySelector('.twelveb').innerHTML = `Shock`;
        document.querySelector('.ar9').innerHTML = `↓`;
        document.querySelector('.sr4').innerHTML = `<p>CPR 2 min</p>
      <ul>
        <li> Consider <strong>Epinephrine</strong>, <strong>Amiodarone</strong> or <strong>Lidocaine</strong></li>
        <li>Treat reversible causes</li>
      </ul>`;
        nsr1yes2 = true;
      } else {
        document.querySelector('.ar8').innerHTML = ``;
        document.querySelector('.twelveb').innerHTML = ``;
        document.querySelector('.ar9').innerHTML = ``;
        document.querySelector('.sr4').innerHTML = ``;
        nsr1yes2 = false;
      }
    });
    document.querySelector('.sr4-no').addEventListener('click', () => {
      if (!nsr1yes3) {
        document.querySelector('.ar8').innerHTML = `↓`;
        document.querySelector('.twelveb').innerHTML = `<p> Are there signs on return of spontaneus circulation (ROSC)?</p>
    <div style="display: flex; justify-content: center; align-items: center;">
      <button class="algorythm-button nsr5-yes" style="margin-right: 20px;">Yes</button>
      <button class="algorythm-button nsr5-no">No</button>
    </div>`;
        nsr1yes3 = true;
      } else {
        document.querySelector('.ar8').innerHTML = ``;
        document.querySelector('.twelveb').innerHTML = ``;
        nsr1yes3 = false;
      }

    });
  });
});

let status_yes = false;
let status_yes2 = false;
let status_yes3 = false;
let status_yes4 = false;
let status_yes5 = false;
let status_yes6 = false;
let status_yes7 = false;
let status_yes8 = false;
let status_yes9 = false;
let status_yes10 = false;
let astatus_yes8 = false;
let astatus_yes9 = false;
let astatus_yes10 = false;
document.querySelector('.nsr0-yes').addEventListener('click', () => {
  /*if (status_on) {
    console.log('yes');
    status_on = false;
  }*/
  if (!status_on) {
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
  </div>`;
    /*
      document.querySelector('.nine').classList.add('nsr0-yes-arm');
      
  
      if (document.querySelector('.nsr0-no-arm').innerHTML) {
        document.querySelector('.nsr0-no-arm').innerHTML = ``;
      }
      */
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

  document.querySelector('.sr1-yes').addEventListener('click', () => {
    if (!status_yes2) {
      document.querySelector('.ar5').innerHTML = `↓`;
      document.querySelector('.five').innerHTML = `Shock`;
      document.querySelector('.ar6').innerHTML = `↓`;
      document.querySelector('.tenn').innerHTML = `<p>CPR 2 min</p>
    <ul>
      <li><strong>Epinephrine</strong> 1mg every 3 to 5 mins</li>
      <li>Consider advanced airway, capnography</li>
    </ul>`;
      document.querySelector('.ar7').innerHTML = `↓`;
      document.querySelector('.sr2').innerHTML = `<p>Rhythm Shockable?</p>
    <div style="display: flex; justify-content: center; align-items: center;">
      <button class="algorythm-button sr2-yes" style="margin-right: 20px;">Yes</button>
      <button class="algorythm-button sr2-no">No</button>
    </div>`;
      status_yes2 = true;
    } else {
      document.querySelector('.ar5').innerHTML = ``;
      document.querySelector('.five').innerHTML = ``;
      document.querySelector('.ar6').innerHTML = ``;
      document.querySelector('.tenn').innerHTML = ``;
      document.querySelector('.ar7').innerHTML = ``;
      document.querySelector('.sr2').innerHTML = ``;
      status_yes2 = false;
    }

    document.querySelector('.sr2-yes').addEventListener('click', () => {
      if (!status_yes3) {
        document.querySelector('.ar8').innerHTML = `↓`;
        document.querySelector('.twelveb').innerHTML = `Shock`
        document.querySelector('.sr4').innerHTML = `<p>CPR 2 min</p>
      <ul>
        <li><strong>Amiodarone</strong> or <strong>Lidocaine</strong></li>
        <li>Treat reversible causes</li>
      </ul>`;
        document.querySelector('.ar9').innerHTML = `↓`;
        document.querySelector('.ar10').innerHTML = `↓`;
        document.querySelector('.sr5').innerHTML = `<p>Rhythm Shockable?</p>
      <div style="display: flex; justify-content: center; align-items: center;">
        <button class="algorythm-button sr3-yes" style="margin-right: 20px;">Yes</button>
        <button class="algorythm-button sr3-no">No</button>
      </div>`;
        status_yes3 = true;
      } else {
        document.querySelector('.ar8').innerHTML = ``;
        document.querySelector('.twelveb').innerHTML = ``;
        document.querySelector('.ar9').innerHTML = ``;
        document.querySelector('.ar10').innerHTML = ``;
        document.querySelector('.sr4').innerHTML = ``;
        document.querySelector('.sr5').innerHTML = ``;
        status_yes3 = false;
      }

      document.querySelector('.sr3-yes').addEventListener('click', () => {
        document.querySelector('.ar8').innerHTML = ``;
        document.querySelector('.twelveb').innerHTML = ``;
        document.querySelector('.ar9').innerHTML = ``;
        document.querySelector('.sr4').innerHTML = ``;
      });

      document.querySelector('.sr3-no').addEventListener('click', () => {
        if (!status_yes5) {
          document.querySelector('.ar10').innerHTML = `↓`;
          document.querySelector('.sr5').innerHTML = `<p> Are there signs on return of spontaneus circulation (ROSC)?</p>
          <div style="display: flex; justify-content: center; align-items: center;">
            <button class="algorythm-button sr5-yes" style="margin-right: 20px;">Yes</button>
            <button class="algorythm-button sr5-no">No</button>
          </div>`;
          status_yes5 = true;
        } else {
          document.querySelector('.ar10').innerHTML = ``;
          document.querySelector('.sr5').innerHTML = ``;
          status_yes5 = false;
        }

        document.querySelector('.sr5-no').addEventListener('click', () => {
          if (!status_yes6) {
            document.querySelector('.ar11').innerHTML = `↓`;
            document.querySelector('.thirteen').innerHTML = `<p>CPR 2 min</p>
            <ul>
              <li>IV/IO Access</li>
              <li><strong>Epinephrine</strong> 1mg every 3 to 5 mins</li>
              <li>Consider advanced airway, capnography</li>
            </ul>
            <p><strong>OR</strong></p>
            <ul>
              <li>Treat reversible causes</li>
            </ul>
            <p>Consider appropriateness of continued rescuscitation</p>`;
            status_yes6 = true;
          } else {
            document.querySelector('.ar11').innerHTML = ``;
            document.querySelector('.thirteen').innerHTML = ``;
            status_yes6 = false;
          }
        });
        document.querySelector('.sr5-yes').addEventListener('click', () => {
          if (!status_yes6) {
            document.querySelector('.ar11').innerHTML = `↓`;
            document.querySelector('.thirteen').innerHTML = `
            <ul>
              <li>Go to post-cardiac arrest care</li>
            </ul>
            <p>Consider appropriateness of continued rescuscitation</p>`;
            status_yes6 = true;
          } else {
            document.querySelector('.ar11').innerHTML = ``;
            document.querySelector('.thirteen').innerHTML = ``;
            status_yes6 = false;
            //an interesting development
            /*It seems I dont have to apply different statuses to all*/
          }
        });
      });
      //document.querySelector('.ar7').innerHTML = ``;
      //document.querySelector('.sr2').innerHTML = ``;
    });

    document.querySelector('.sr2-no').addEventListener('click', () => {
      if (!astatus_yes8) {
        document.querySelector('.ar8').innerHTML = `↓`;
        document.querySelector('.twelveb').innerHTML = `<p> Are there signs on return of spontaneus circulation (ROSC)?</p>
        <div style="display: flex; justify-content: center; align-items: center;">
          <button class="algorythm-button ssr7-yes" style="margin-right: 20px;">Yes</button>
          <button class="algorythm-button ssr7-no">No</button>
        </div>`;
        /*document.querySelector('.twelve').innerHTML = `<ul>
        <li>If no signs on return of spontaneus circulation (ROSC), got to 10 or 11</li>
        <li>If ROSC, go to post-cardiac arrest care</li>
        <li>Consider appropriateness of continued rescuscitation</li>
      </ul>`;
      */
        astatus_yes8 = true;
      } else {
        document.querySelector('.ar8').innerHTML = ``;
        document.querySelector('.twelveb').innerHTML = ``;
        astatus_yes8 = false;
      }

      document.querySelector('.ssr7-no').addEventListener('click', () => {
        if (!astatus_yes9) {
          document.querySelector('.ar9').innerHTML = `↓`;
          document.querySelector('.sr4').innerHTML = `<p>CPR 2 min</p>
          <ul>
            <li>IV/IO Access</li>
            <li><strong>Epinephrine</strong> 1mg every 3 to 5 mins</li>
            <li>Consider advanced airway, capnography</li>
          </ul>
          <p><strong>OR</strong></p>
          <ul>
            <li>Treat reversible causes</li>
          </ul>
          <p>Consider appropriateness of continued rescuscitation</p>
        </div>`;
          astatus_yes9 = true;
        } else {
          document.querySelector('.ar9').innerHTML = ``;
          document.querySelector('.sr4').innerHTML = ``;
          astatus_yes9 = false;
        }
      });
      document.querySelector('.ssr7-yes').addEventListener('click', () => {
        if (!astatus_yes10) {
          document.querySelector('.ar9').innerHTML = `↓`;
          document.querySelector('.sr4').innerHTML = `<ul>
          <li>Go to post-cardiac arrest care</li>
        </ul>
        <p>Consider appropriateness of continued rescuscitation</p>`;
          astatus_yes10 = true;
        } else {
          document.querySelector('.ar9').innerHTML = ``;
          document.querySelector('.sr4').innerHTML = ``;
          astatus_yes10 = false;
        }
      });
    });
  });

  document.querySelector('.sr1-no').addEventListener('click', () => {
    if (!status_yes8) {
      document.querySelector('.ar5').innerHTML = `↓`;
      document.querySelector('.fiveb').innerHTML = `<p> Are there signs on return of spontaneus circulation (ROSC)?</p>
      <div style="display: flex; justify-content: center; align-items: center;">
        <button class="algorythm-button sr7-yes" style="margin-right: 20px;">Yes</button>
        <button class="algorythm-button sr7-no">No</button>
      </div>`;
      /*document.querySelector('.twelve').innerHTML = `<ul>
      <li>If no signs on return of spontaneus circulation (ROSC), got to 10 or 11</li>
      <li>If ROSC, go to post-cardiac arrest care</li>
      <li>Consider appropriateness of continued rescuscitation</li>
    </ul>`;
    */
      status_yes8 = true;
    } else {
      document.querySelector('.ar5').innerHTML = ``;
      document.querySelector('.fiveb').innerHTML = ``;
      status_yes8 = false;
    }

    document.querySelector('.sr7-no').addEventListener('click', () => {
      if (!status_yes9) {
        document.querySelector('.ar6').innerHTML = `↓`;
        document.querySelector('.tenb').innerHTML = `<p>CPR 2 min</p>
        <ul>
          <li>IV/IO Access</li>
          <li><strong>Epinephrine</strong> 1mg every 3 to 5 mins</li>
          <li>Consider advanced airway, capnography</li>
        </ul>
        <p><strong>OR</strong></p>
        <ul>
          <li>Treat reversible causes</li>
        </ul>
        <p>Consider appropriateness of continued rescuscitation</p>
      </div>`;
        status_yes9 = true;
      } else {
        document.querySelector('.ar6').innerHTML = ``;
        document.querySelector('.tenb').innerHTML = ``;
        status_yes9 = false;
      }
    });
    document.querySelector('.sr7-yes').addEventListener('click', () => {
      if (!status_yes10) {
        document.querySelector('.ar6').innerHTML = `↓`;
        document.querySelector('.tenb').innerHTML = `<ul>
        <li>Go to post-cardiac arrest care</li>
      </ul>
      <p>Consider appropriateness of continued rescuscitation</p>`;
        status_yes10 = true;
      } else {
        document.querySelector('.ar6').innerHTML = ``;
        document.querySelector('.tenb').innerHTML = ``;
        status_yes10 = false;
      }
    });
  });

});
