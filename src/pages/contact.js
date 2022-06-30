import React from 'react';

const Contact = () => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'center',
        alignItems: 'center',
        height: '90vh'
      }}
    >
    <article class="card" style={{width:"550px",height:"330px",align:"center"}}>
    <div>
      <h2 class="card__title">Vikash Kumar</h2>
      <p class="card__description" style={{justifyContent: 'space-between'}}>Email_ID: xyz@gmail.com<br></br>Phone No: +91-8888888888
</p>
    </div>
  </article>
      <article class="card" style={{width:"550px",height:"330px",align:"center"}}>
    <div>
      <h2 class="card__title">V Harshith</h2>
      <p class="card__description" style={{justifyContent: 'space-between'}}>Email_ID: xyz@gmail.com<br></br>Phone No: +91-8888888888</p>
    </div>
  </article>
      <article class="card" style={{width:"550px",height:"330px",align:"center"}}>
    <div>
      <h2 class="card__title">Vachan S Patil</h2>
      <p class="card__description" style={{justifyContent: 'space-between'}}>Email_ID: xyz@gmail.com<br></br>Phone No: +91-8888888888</p>
    </div>
  </article>
      <article class="card" style={{width:"550px",height:"330px",align:"center"}}>
    <div>
      <h2 class="card__title">Mohith K S</h2>
      <p class="card__description" style={{justifyContent: 'space-between'}}>Email_ID: xyz@gmail.com<br></br>Phone No: +91-8888888888</p>
    </div>
  </article>
  
    </div>
  );
};

export default Contact;
