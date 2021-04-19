


const messageIcon = `<div class="circle" id="biege-cirlce">
    <svg viewBox="0 0 24 24" fill="currentColor" width="44" height="44" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-q c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><g fill="currentColor"><rect x="4" y="6" width="16" height="10.222" rx="1.129"></rect><path d="M8.977 18.578l.2-2.722a.564.564 0 01.564-.523h3.61c.548 0 .774.705.327 1.024l-3.81 2.721a.564.564 0 01-.89-.5z"></path></g></svg>
  </div>`;

const closedIcon = `<div class="circle" id="dark-circle"><svg style="color:#fff;" viewBox="0 0 24 24" fill="currentColor" width="34" height="34" data-ux="Icon" class="x-el x-el-svg c2-1 c2-2 c2-22 c2-r c2-s c2-3 c2-4 c2-5 c2-6 c2-7 c2-8"><path fill-rule="evenodd" d="M19.245 4.313a1.065 1.065 0 0 0-1.508 0L11.78 10.27 5.82 4.313A1.065 1.065 0 1 0 4.312 5.82l5.958 5.958-5.958 5.959a1.067 1.067 0 0 0 1.508 1.508l5.959-5.958 5.958 5.958a1.065 1.065 0 1 0 1.508-1.508l-5.958-5.959 5.958-5.958a1.065 1.065 0 0 0 0-1.508"></path></svg></div>`


    window.addEventListener('DOMContentLoaded', () => {
        let open = true;
        const form = document.getElementById('form-container');
        var div = document.createElement("div");
        div.style.height = '65px';
        div.style.width = '65px';
        div.style.zIndex = '9999';
        div.style.bottom = '24px';
        div.style.right = '24px';
        div.style.position = 'fixed';
        div.style.fontSize = '16px';
        div.setAttribute("id", "popup-container");   
        div.innerHTML = messageIcon;

        document.getElementById('pop-up').appendChild(div);
        form.style.display = 'none';
        document.getElementById('popup-container').addEventListener('click', () => {
            open = !open;
            if(!open){
                div.innerHTML = closedIcon;
                form.style.display = 'inherit';

            }else {
                div.innerHTML = messageIcon;
                form.style.display = 'none';
            }
        });
        
    });

