import React from 'react'

export default function About(props) {
    let myStyle={
        color:props.mode==='dark'?'white':'#212529',
        backgroundColor:props.mode==='dark'?'#212529':'white'
    }
  return (
    <div className="mx-5 my-5" >
    <h1 className="mx-1">ABOUT US</h1>
      <div className={`accordion bg:dark`} id="accordionExample" >
  <div className="accordion-item" style={myStyle}>
    <h2 className="accordion-header" >
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
       <strong>Convert to uppercase</strong>
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
        
Converting text to uppercase means changing all the letters in the text to their uppercase (capital letter) equivalents. This process does not affect numbers, symbols, or spaces; it only alters the case of alphabetical characters. For example, converting the sentence "Hello, World!" to uppercase would result in "HELLO, WORLD!"
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
      <strong>Convert to lowercase</strong>      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>

Converting text to lowercase means changing all the letters in the text to their lowecase (small letter) equivalents. This process does not affect numbers, symbols, or spaces; it only alters the case of alphabetical characters. For example, converting the sentence "HELLO, WORLD!" to uppercase would result in "Hello, World!"
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" >
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
      <strong>Clear extra spaces</strong>      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
      "Clearing extra spaces" typically refers to removing unnecessary or excessive spaces within a text or string of characters. Extra spaces may occur due to manual input errors, formatting issues, or various other reasons. The process of clearing extra spaces involves eliminating redundant spaces to enhance readability and maintain a consistent appearance in the text.
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
