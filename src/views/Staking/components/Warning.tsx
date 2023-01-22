import React from 'react';
import { ImWarning } from 'react-icons/all';

export default function Warning() {
  return (
    <section className="warning my-5 py-3" >
      <ImWarning style={{ fontSize: '5rem', paddingRight: '10px' }} />
      <div>
        <p>After Unstaking, you must wait 7 days before you can withdraw your SERA and rewards.</p>
        <p>The amount of tokens you Unstake will not count towards your tier level for upcoming Projects.</p>
      </div>
    </section >
  );
}
