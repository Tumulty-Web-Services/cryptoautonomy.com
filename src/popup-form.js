// https://reactjs.org/docs/add-react-to-a-website.html
// const form = () => `
//     <div id="form-container">
//         <svg id="top-svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-22 c2-r c2-s c2-1m c2-23 c2-24 c2-j c2-3 c2-4 c2-25 c2-5 c2-6 c2-7 c2-8"><path fill-rule="evenodd" d="M19.245 4.313a1.065 1.065 0 0 0-1.508 0L11.78 10.27 5.82 4.313A1.065 1.065 0 1 0 4.312 5.82l5.958 5.958-5.958 5.959a1.067 1.067 0 0 0 1.508 1.508l5.959-5.958 5.958 5.958a1.065 1.065 0 1 0 1.508-1.508l-5.958-5.959 5.958-5.958a1.065 1.065 0 0 0 0-1.508"></path></svg>
//         <h4 id="popup-heading" role="heading" aria-level="4" data-ux="Heading" data-typography="HeadingDelta" class="x-el x-el-h4 c2-26 c2-2 c2-w c2-x c2-27 c2-28 c2-29 c2-2a c2-2b c2-q c2-2c c2-n c2-2d c2-2e c2-2f c2-2g c2-2h c2-3 c2-10 c2-2i c2-2j c2-2k c2-2l c2-2m">CryptoAutonomy</h4>
//         <div id="popup-message" data-ux="Block" class="x-el x-el-div c2-1 c2-2 c2-1g c2-1h c2-1a c2-2n c2-2o c2-2p c2-2q c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><p data-ux="Text" data-typography="BodyAlpha" class="x-el x-el-p c2-1 c2-2 c2-w c2-x c2-2r c2-2a c2-2b c2-1h c2-2s c2-2t c2-2u c2-2v c2-2w c2-2x c2-2y c2-3 c2-10">Hi! Let us know how we can help and we’ll respond shortly.</p>
//         <svg id="tail" data-ux="Element" width="33px" height="16px" viewBox="0 0 33 16" xmlns="http://www.w3.org/2000/svg" class="x-el x-el-svg c2-1 c2-2 c2-2z c2-1m c2-30 c2-31 c2-32 c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><path d="M0.342304 14.5C7.35025 6.3293 3.35025 0.829295 0 0.0.0 0.0 5.4 2.1 32.3502 0.329295C32.3503 3.8293 -3.13481 20.7261 0.342304 14.5Z"></path></svg></div>
//         <div id="form-block>
//             <form netlify name="popup-form">
//                 <label for="form-name" style="visibility:hidden;">Name</label>
//                 <input type="email" name="email" class="form-input" placeholder="Email" />
//                 <label for="form-name" style="visibility:hidden;">Email</label>
//                 <textarea role="textbox" class="form-textarea" aria-multiline="true" rows="4" aria-label="How can we help?*" data-ux="InputTextArea" placeholder="How can we help?*" data-aid="How can we help?"></textarea>
//                 <button id="popup-btn" onclick="handleSubmit()" type="submit">Send</button>
//             </form>
//         </div>
//     </div>
// `;
const form = (elm) => {
    const div = document.createElement('div');
    div.setAttribute('id', 'form-container');
    div.insertAdjacentHTML('afterbegin',`<svg id="top-svg" viewBox="0 0 24 24" fill="currentColor" width="22" height="22" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-22 c2-r c2-s c2-1m c2-23 c2-24 c2-j c2-3 c2-4 c2-25 c2-5 c2-6 c2-7 c2-8"><path fill-rule="evenodd" d="M19.245 4.313a1.065 1.065 0 0 0-1.508 0L11.78 10.27 5.82 4.313A1.065 1.065 0 1 0 4.312 5.82l5.958 5.958-5.958 5.959a1.067 1.067 0 0 0 1.508 1.508l5.959-5.958 5.958 5.958a1.065 1.065 0 1 0 1.508-1.508l-5.958-5.959 5.958-5.958a1.065 1.065 0 0 0 0-1.508"></path></svg>
    <h4 id="popup-heading" role="heading" aria-level="4" data-ux="Heading" data-typography="HeadingDelta" class="x-el x-el-h4 c2-26 c2-2 c2-w c2-x c2-27 c2-28 c2-29 c2-2a c2-2b c2-q c2-2c c2-n c2-2d c2-2e c2-2f c2-2g c2-2h c2-3 c2-10 c2-2i c2-2j c2-2k c2-2l c2-2m">CryptoAutonomy</h4>
    <div id="popup-message" data-ux="Block" class="x-el x-el-div c2-1 c2-2 c2-1g c2-1h c2-1a c2-2n c2-2o c2-2p c2-2q c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><p data-ux="Text" data-typography="BodyAlpha" class="x-el x-el-p c2-1 c2-2 c2-w c2-x c2-2r c2-2a c2-2b c2-1h c2-2s c2-2t c2-2u c2-2v c2-2w c2-2x c2-2y c2-3 c2-10">Hi! Let us know how we can help and we’ll respond shortly.</p>
    `);

    // create the form
    const form = document.createElement('form');
    form.setAttribute('name',"popup");
    form.setAttribute('data-netlify',true);
    form.setAttribute('method', 'POST');
    form.setAttribute('action', '/');
    form.setAttribute('id', 'form-block');

    var name = document.createElement("input"); //input element, text
    name.setAttribute('type',"text");
    name.setAttribute('name',"name");
    name.setAttribute('class', 'form-input');
    name.setAttribute('placeholder', 'Name');

    var email = document.createElement("input");
    email.setAttribute('type',"email");
    email.setAttribute('name',"email");
    email.setAttribute('class', 'form-input');
    email.setAttribute('placeholder', 'Email');

    var textarea = document.createElement('input');
    textarea.setAttribute('type',"textarea");
    textarea.setAttribute('name',"message");
    textarea.setAttribute('role', 'textbox');
    textarea.setAttribute('class', 'form-textarea');
    textarea.setAttribute('aria-multiline', true);
    textarea.setAttribute('rows', '10');
    textarea.setAttribute('placeholder', 'How can we help?*');
    

    var button = document.createElement("button");
    button.setAttribute('type',"submit");
    button.setAttribute('id', 'popup-btn');
    button.setAttribute('value',"Send");
    button.innerText = "Send"

    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(textarea);
    form.appendChild(button);

    div.insertAdjacentElement('beforeend', form);


    return elm.appendChild(div);
}

const handleSubmit = () => {
    let myForm = document.getElementById('form-container');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
      alert(error))
  }


const messageIcon = `<div class="circle" id="biege-cirlce">
    <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><g fill="currentColor"><rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect><path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path></g></svg>
  </div>`;

const closedIcon = `<div class="circle" id="dark-circle"><svg style="color:#fff;" viewBox="0 0 24 24" fill="currentColor" width="34" height="34" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-22 c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><path fill-rule="evenodd" d="M19.245 4.313a1.065 1.065 0 0 0-1.508 0L11.78 10.27 5.82 4.313A1.065 1.065 0 1 0 4.312 5.82l5.958 5.958-5.958 5.959a1.067 1.067 0 0 0 1.508 1.508l5.959-5.958 5.958 5.958a1.065 1.065 0 1 0 1.508-1.508l-5.958-5.959 5.958-5.958a1.065 1.065 0 0 0 0-1.508"></path></svg></div>`


    window.addEventListener('DOMContentLoaded', () => {
        let open = true;
        var div = document.createElement("div");
        var formDiv = document.createElement("div");
        div.style.height = '65px';
        div.style.width = '65px';
        div.style.zIndex = '9999';
        div.style.bottom = '24px';
        div.style.right = '24px';
        div.style.position = 'fixed';
        div.style.fontSize = '16px';
        formDiv.style.position = 'fixed';
        formDiv.style.bottom = '15%';
        formDiv.style.left = '70%';
        formDiv.style.zIndex ='9999';
        formDiv.setAttribute("id", "form-x");
        div.setAttribute("id", "popup-container");   
        div.innerHTML = messageIcon;

        document.getElementById('pop-up').appendChild(formDiv);
        document.getElementById('pop-up').appendChild(div);
        
        document.getElementById('popup-container').addEventListener('click', () => {
            open = !open;
            if(!open){
                const formElm = document.getElementById('form-x');
                
                form(formElm);
                div.innerHTML = closedIcon;
            }else {
                div.innerHTML = messageIcon;
                document.getElementById('form-x').innerHTML = ''; 
            }
        });
        
    });

