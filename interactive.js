// heart counter

const heartElements = document.getElementsByClassName('heart-logo');
 for(let ele of heartElements){
    ele.addEventListener('click', function(){
    
        let heartCounter = parseInt(document.getElementById('hrt').innerText);
        heartCounter++;
       document.getElementById('hrt').innerText = heartCounter ;
    
});
 }
//  call function
const callGenarated = document.getElementsByClassName('callname');


 for(let i = 0; i < callGenarated.length; i++){
    callGenarated[i].addEventListener('click', function(){
        let getCredit = parseInt( document.getElementById('credit').innerText);
        if(getCredit >= 20){
            getCredit -= 20;
            document.getElementById('credit').innerText = getCredit;
            const Name = [  'National Emergency Services',
                            'Police Helpline Services',
                            'Fire Service Services',
                            'Ambulance Service',
                            'Women & Child Helpline',
                            'Anti-Corruption Helpline',
                            'Electricity Helpline',
                            'Brac Helpline',
                            'Bangladesh Railway Helpline'
                         ]

            const Number = ['999', '999', '999', '1994-999999', '109', '106', '16216', '16445',
                '163' 
            ]             

            const div = document.createElement('div');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const h2 = document.createElement('h2');
            const h3 = document.createElement('h3');
            let time = document.createTextNode(new Date().toLocaleTimeString());
            console.log(time)
            h2.innerText = Name[i];
            h3.innerText = Number[i];
            div.appendChild(div2);
            div.appendChild(div3);
            div3.appendChild(time)
            div2.appendChild(h2);
            div2.appendChild(h3);
            const classs = document.getElementById('call-list');
            classs.appendChild(div);
            div.classList.add('p-2', 'mt-3', 'rounded-xl', 'bg-[#d6dfe6]', 'shadow-md')
            div.classList.add('flex', 'justify-between', 'items-center')
            h2.classList.add('text-md', 'font-bold')
            
            
            
                         alert(
                            `📞 Calling...  ${Name[i]} ${Number[i]}`
                         )}
        else{
            alert('Insufficient Credit')
        }
    })
 }
//  clear
document.getElementById('clearbtn').addEventListener('click', function(){
    const div = document.getElementById('call-list');
    div.innerText = '';
    
});
// copy part
const copyCounter = document.getElementsByClassName('copy');
 for(let ele of copyCounter){
    ele.addEventListener('click', function(){
    
        let copyCounter = parseInt(document.getElementById('copycntr').innerText);
        copyCounter++;
       document.getElementById('copycntr').innerText = copyCounter ;


});
 }

// part 2
 function copyFunction(i){
        let textToCopy = document.getElementsByClassName('copying');
     let text = textToCopy[i].innerText;
     navigator.clipboard.writeText(text);
     alert(`👩‍💻 Hotline number  ${text} is copied.`);
 
     }

let btn = document.getElementsByClassName('copy');
     for(let i = 0; i < btn.length ; i++){
        btn[i].addEventListener('click', function(){
            copyFunction(i);
        })
     }

     
    