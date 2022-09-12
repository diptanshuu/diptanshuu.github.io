const logo = document.getElementById('logo');
const welcome = document.getElementById('welcome');
const ptr = document.getElementById('ptr');
const det = document.getElementById('details');
const buttons =document.getElementById('buttons');
//page 2
const who =document.getElementById('Who');
const whoHead =document.getElementById('WhoHeading');
const Whodetails =document.getElementById('Whodetails');
const banner = document.getElementById('banner');
const year =document.getElementById('year');

//page3
const gotDemo =document.getElementById('GotDemoHeading');
const demoBody =document.getElementById('DemoBody');
const demoBottom =document.getElementById('DemoBottom');


window.addEventListener('scroll', function (e) {
    const scrolled = window.scrollY;
    console.log(scroll);

    var rate2 = scrolled * -0.2;
    var rate3 = scrolled * 0.3;
    var rate4 = scrolled * -0.1;
    var rate5 = scrolled *  -0.1;

    var rate6 =scrolled*0.2;
    var rate7 = scrolled*0.25;
    var rate8 =scrolled*0.21;
    var rate9 =scrolled*-0.02;
    var ratde11 =scrolled*-0.013;
    var rate10 =scrolled*0.012;


    logo.style.transform = 'translate3d(0px,' + rate8 + 'px,0px)';
    welcome.style.transform = 'translate3d(0px,' + rate2 + 'px,0px)';
    ptr.style.transform = 'translate3d(0px,' + rate3 + 'px,0px)';
    det.style.transform = 'translate3d(0px,' + rate4 + 'px,0px)';
    buttons.style.transform='translate3d(0px,' + rate9 + 'px,0px)';

    //page 2
    whoHead.style.transform = 'translate3d(0px,' + rate6 + 'px,0px)';
    Whodetails.style.transform = 'translate3d(0px,' + rate7 + 'px,0px)';
    banner.style.transform = 'translate3d(0px,' + rate8+ 'px,0px)';
    year.style.transform = 'translate3d(0px,' + rate9+ 'px,0px)';
    //page 3
    gotDemo.style.transform = 'translate3d(0px,' + ratde11+ 'px,0px)';
    demoBody.style.transform = 'translate3d(0px,' + rate10+ 'px,0px)';
    demoBottom.style.transform = 'translate3d(0px,' + rate10+ 'px,0px)';
})


//fetch releases on home page json
fetch("./Releases.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        appendData1(data);
    })
    .catch(function (err) {
        console.log(err);
    })
function appendData1(data) {
    document.getElementById("ReleaseBoxes").innerHTML = `
            ${data.map(function (Rel) {
        return `
        <div class="ReleaseCard">
                <div class ="CardImage" 
                    style="
                    background-image:url(${Rel.imageLink});
                    background-size:cover;
                   ">

                </div>

                <div class ="CardBottom">
                    <div class="CardLeft">
                        <p class ="Title">
                            ${Rel.Title}
                        </p>
                        <p class ="Artist">
                            ${Rel.Artist}
                            
                        </p>
                    </div>
                
                    <div class ="CardRight">
                        ${Rel.year}
                    </div>
                </div>
        </div>

                
                        `
    }).join('')}  
            `
}


//menu popup opening
function togglePopup() {
    document.getElementById('popup').classList.toggle("active");
}
function closeMenu() {
    document.getElementById('popup').classList.toggle("active");

}