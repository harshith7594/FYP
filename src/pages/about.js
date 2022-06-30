import React from 'react';

const About = () => {
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
      <h2 class="card__title">Project Details</h2>
      <p class="card__description" style={{justifyContent: 'space-between'}}>With the rapid development of modern technology and the popularization of social media and self-media, a large amount of visual information has followed. The images and videos have become an important carriers of a vast network of information. They bring us a convenient way of recording and sharing information about different objects, but it’s difficult for us to classify and recognize the gathered information directly. Hence, to end this complication, the use of the computer to classify and recognize data or objects in these images and videos has gained significant prominence.
</p>
    </div>
  </article>
      <article class="card" style={{width:"550px",height:"330px",align:"center"}}>
    <div>
      <h2 class="card__title">Objectives</h2>
      <p class="card__description" style={{justifyContent: 'space-between'}}>1. To build an effective neural network for detecting and classifying different objects in  
     the image or videos.<br></br>
2.  To be able to upload images or videos to the web application.<br></br>
3.  To be able to identify different characteristics of the uploaded files.<br></br>
4.  To classify and label the objects in the uploaded image or video.<br></br>
5.  To output the image or video having the identified objects highlighted in them.</p>
    </div>
  </article>
    </div>
  );
};

export default About;
