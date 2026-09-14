const scenes=document.querySelectorAll(".scene");
const progressDots=document.querySelectorAll(".progress-dot");
const music=document.getElementById("backgroundMusic");
const musicButton=document.getElementById("musicButton");
const musicText=document.getElementById("musicText");
const heartsContainer=document.getElementById("heartsContainer");

let currentScene=0;
let musicPlaying=false;
let memoryIndex=0;
let thingIndex=0;
let storyIndex=0;
let celebrationShown=false;

const memories=[
    {
        number:"01",
        image:"images/photo1.jpg",
        title:"The First Beautiful Memory",
        text:"Some moments become special simply because you shared them with someone you love."
    },
    {
        number:"02",
        image:"images/photo2.jpg",
        title:"That Smile",
        text:"Your smile is one of those little things I could never get tired of seeing."
    },
    {
        number:"03",
        image:"images/photo3.jpg",
        title:"A Moment Together",
        text:"Being with you makes even ordinary moments feel beautiful."
    },
    {
        number:"04",
        image:"images/photo4.jpg",
        title:"One Of My Favorites",
        text:"This is one of those memories I wish I could pause and keep forever."
    },
    {
        number:"05",
        image:"images/photo5.jpg",
        title:"Just Us",
        text:"There is something special about the moments when it is just you and me."
    },
    {
        number:"06",
        image:"images/photo6.jpg",
        title:"A Happy Memory",
        text:"Looking back at moments like this always puts a smile on my face."
    },
    {
        number:"07",
        image:"images/photo7.jpg",
        title:"You Being You",
        text:"I love the little moments where you are simply yourself."
    },
    {
        number:"08",
        image:"images/photo8.jpg",
        title:"Another Memory",
        text:"Every picture has a story, and every story with you means something to me."
    },
    {
        number:"09",
        image:"images/photo9.jpg",
        title:"A Memory To Keep",
        text:"I hope we create hundreds more memories like this together."
    },
    {
        number:"10",
        image:"images/photo10.jpg",
        title:"Forever A Favorite",
        text:"No matter how many memories we make, I will always treasure these."
    }
];

const things=[
    "Your beautiful smile ❤️",
    "The way you make me laugh.",
    "Your kindness.",
    "Your cute little habits.",
    "The way you care about people.",
    "Your beautiful eyes.",
    "Your voice.",
    "Your honesty.",
    "Your patience.",
    "The way you understand me.",
    "How comfortable I feel around you.",
    "Your sense of humor.",
    "Your confidence.",
    "Your adorable reactions.",
    "The way you make ordinary days special.",
    "Your beautiful heart.",
    "The way you support me.",
    "Your little messages that make my day.",
    "The happiness you bring into my life.",
    "The memories we have created.",
    "The person you are becoming.",
    "Simply... you. ❤️"
];

const stories=[
    {
        icon:"✨",
        title:"The Beginning",
        text:"Every beautiful story has a beginning. Ours started with two people who slowly became something much more special to each other."
    },
    {
        icon:"🌸",
        title:"Getting Closer",
        text:"Little conversations became longer conversations. Small moments became memories. And somehow, you became an important part of my life."
    },
    {
        icon:"💕",
        title:"The Little Things",
        text:"It was never only about the big moments. It was the tiny conversations, random laughs, silly things and quiet moments that made everything special."
    },
    {
        icon:"❤️",
        title:"Us",
        text:"Somewhere along the way, 'you and me' became something I never wanted to lose."
    },
    {
        icon:"🌙",
        title:"And The Story Continues",
        text:"This is not the end of our story. It is just another beautiful chapter, and I hope there are many more waiting for us."
    }
];

function showScene(index){
    if(index<0){
        index=0;
    }

    if(index>=scenes.length){
        index=scenes.length-1;
    }

    currentScene=index;

    scenes.forEach((scene,i)=>{
        scene.classList.toggle("active",i===currentScene);
    });

    progressDots.forEach((dot,i)=>{
        dot.classList.toggle("active",i===currentScene);
    });
}

function nextScene(){
    if(currentScene<scenes.length-1){
        showScene(currentScene+1);
    }
}

function previousScene(){
    if(currentScene>0){
        showScene(currentScene-1);
    }
}

function startSurprise(){
    startMusic();
    showScene(1);
    createHearts(8);
}

function startMusic(){
    music.volume=0.4;

    music.play()
    .then(()=>{
        musicPlaying=true;
        musicText.textContent="Playing";
    })
    .catch(()=>{
        musicPlaying=false;
        musicText.textContent="Music";
    });
}

function stopMusic(){
    music.pause();
    musicPlaying=false;
    musicText.textContent="Music";
}

function toggleMusic(){
    if(musicPlaying){
        stopMusic();
    }else{
        startMusic();
    }
}

musicButton.addEventListener("click",toggleMusic);

const answerYes=document.getElementById("answerYes");
const answerNo=document.getElementById("answerNo");
const answerText=document.getElementById("answerText");
const questionNext=document.getElementById("questionNext");

answerYes.addEventListener("click",()=>{
    answerText.textContent=
        "I hope you know... because you mean more to me than words can explain. ❤️";

    questionNext.classList.remove("hidden");
    createHearts(6);
});

answerNo.addEventListener("click",()=>{
    answerText.textContent=
        "Then let me spend a little time reminding you. You are incredibly special to me. 🥺❤️";

    questionNext.classList.remove("hidden");
    createHearts(6);
});

questionNext.addEventListener("click",()=>{
    showScene(3);
});

const memoryNumber=document.getElementById("memoryNumber");
const memoryImage=document.getElementById("memoryImage");
const photoPlaceholder=document.getElementById("photoPlaceholder");
const memoryTitle=document.getElementById("memoryTitle");
const memoryText=document.getElementById("memoryText");
const memoryButton=document.getElementById("memoryButton");

function updateMemory(){
    const memory=memories[memoryIndex];

    memoryNumber.textContent=memory.number;
    memoryImage.src=memory.image;
    memoryTitle.textContent=memory.title;
    memoryText.textContent=memory.text;

    memoryImage.style.display="block";
    photoPlaceholder.style.display="none";

    memoryImage.onerror=()=>{
        memoryImage.style.display="none";
        photoPlaceholder.style.display="flex";
    };
}

function nextMemory(){
    if(memoryIndex<memories.length-1){
        memoryIndex++;
        updateMemory();
    }else{
        memoryIndex=0;
        showScene(4);
    }
}

function previousMemory(){
    if(memoryIndex>0){
        memoryIndex--;
    }else{
        memoryIndex=memories.length-1;
    }

    updateMemory();
}

memoryButton.addEventListener("click",nextMemory);

updateMemory();

const thingNumber=document.getElementById("thingNumber");
const thingText=document.getElementById("thingText");
const thingButton=document.getElementById("thingButton");

function updateThing(){
    thingNumber.textContent=
        String(thingIndex+1).padStart(2,"0");

    thingText.textContent=things[thingIndex];
}

thingButton.addEventListener("click",()=>{
    if(thingIndex<things.length-1){
        thingIndex++;
        updateThing();
    }else{
        thingIndex=0;
        showScene(5);
    }
});

updateThing();

const storyIcon=document.getElementById("storyIcon");
const storyTitle=document.getElementById("storyTitle");
const storyText=document.getElementById("storyText");
const storyButton=document.getElementById("storyButton");

function updateStory(){
    const story=stories[storyIndex];

    storyIcon.textContent=story.icon;
    storyTitle.textContent=story.title;
    storyText.textContent=story.text;
}

storyButton.addEventListener("click",()=>{
    if(storyIndex<stories.length-1){
        storyIndex++;
        updateStory();
    }else{
        storyIndex=0;
        showScene(6);
    }
});

updateStory();

const envelope=document.getElementById("envelope");
const letter=document.getElementById("letter");
const letterNext=document.getElementById("letterNext");

envelope.addEventListener("click",()=>{
    envelope.classList.add("hidden");
    letter.classList.remove("hidden");
    letterNext.classList.remove("hidden");
    createHearts(10);
});

letterNext.addEventListener("click",()=>{
    showScene(7);
});

function createHeart(){
    const heart=document.createElement("div");

    heart.className="floating-heart";
    heart.textContent=Math.random()>0.5?"♥":"♡";

    heart.style.left=Math.random()*100+"%";
    heart.style.fontSize=(14+Math.random()*20)+"px";
    heart.style.animationDuration=(5+Math.random()*5)+"s";

    heartsContainer.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },10000);
}

function createHearts(amount=5){
    for(let i=0;i<amount;i++){
        setTimeout(()=>{
            createHeart();
        },i*150);
    }
}

setInterval(()=>{
    createHeart();
},1200);

function celebrate(){
    const popup=document.getElementById("lovePopup");

    popup.classList.remove("hidden");

    for(let i=0;i<35;i++){
        setTimeout(()=>{
            createBurstHeart();
        },i*50);
    }

    createHearts(20);
}

function createBurstHeart(){
    const heart=document.createElement("div");

    heart.className="burst-heart";
    heart.textContent=
        ["❤️","💕","💗","💖","💓"]
        [Math.floor(Math.random()*5)];

    const angle=Math.random()*Math.PI*2;
    const distance=150+Math.random()*300;

    heart.style.setProperty(
        "--x",
        Math.cos(angle)*distance+"px"
    );

    heart.style.setProperty(
        "--y",
        Math.sin(angle)*distance+"px"
    );

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },2000);
}

function closePopup(){
    document.getElementById("lovePopup").classList.add("hidden");
}

function updateAge(){
    const birthDate=new Date(2004,9,3,0,0,0);
    const now=new Date();

    let years=now.getFullYear()-birthDate.getFullYear();

    let lastBirthday=new Date(
        now.getFullYear(),
        9,
        3,
        0,
        0,
        0
    );

    if(now<lastBirthday){
        years--;

        lastBirthday=new Date(
            now.getFullYear()-1,
            9,
            3,
            0,
            0,
            0
        );
    }

    const difference=now-lastBirthday;

    const days=Math.floor(
        difference/(1000*60*60*24)
    );

    const hours=Math.floor(
        (difference/(1000*60*60))%24
    );

    const minutes=Math.floor(
        (difference/(1000*60))%60
    );

    const seconds=Math.floor(
        (difference/1000)%60
    );

    document.getElementById("years").textContent=
        String(years).padStart(2,"0");

    document.getElementById("days").textContent=
        String(days).padStart(2,"0");

    document.getElementById("hours").textContent=
        String(hours).padStart(2,"0");

    document.getElementById("minutes").textContent=
        String(minutes).padStart(2,"0");

    document.getElementById("seconds").textContent=
        String(seconds).padStart(2,"0");
}

function startBirthdayCelebration(){
    if(celebrationShown){
        return;
    }

    celebrationShown=true;

    const celebration=
        document.getElementById("birthdayCelebration");

    if(!celebration){
        return;
    }

    celebration.classList.remove("hidden");

    createBalloons(35);
    createSparkles(80);
    createCelebrationHearts(35);
    createFlowers(45);

    let fireworksInterval=setInterval(()=>{
        createFirework();

        if(Math.random()>0.4){
            setTimeout(()=>{
                createFirework();
            },200);
        }

        if(Math.random()>0.6){
            setTimeout(()=>{
                createFirework();
            },400);
        }

    },650);

    setTimeout(()=>{
        clearInterval(fireworksInterval);
    },20000);

    let lightningInterval=setInterval(()=>{
        createLightning();
    },3000);

    setTimeout(()=>{
        clearInterval(lightningInterval);
    },20000);

    startMusic();
}

function createBalloons(amount){
    const container=document.getElementById("balloons");

    if(!container){
        return;
    }

    for(let i=0;i<amount;i++){
        setTimeout(()=>{
            const balloon=document.createElement("div");

            balloon.className="balloon";
            balloon.style.left=Math.random()*100+"%";

            const colors=[
                "#ff6f91",
                "#ff9fbd",
                "#ffd166",
                "#cdb4db",
                "#a8dadc",
                "#f28482",
                "#90be6d",
                "#f9c74f"
            ];

            balloon.style.background=
                colors[Math.floor(Math.random()*colors.length)];

            balloon.style.animationDuration=
                (7+Math.random()*6)+"s";

            container.appendChild(balloon);

            setTimeout(()=>{
                balloon.remove();
            },15000);

        },i*100);
    }
}

function createSparkles(amount){
    const container=document.getElementById("sparkles");

    if(!container){
        return;
    }

    for(let i=0;i<amount;i++){
        setTimeout(()=>{
            const sparkle=document.createElement("div");

            sparkle.className="sparkle";
            sparkle.style.left=Math.random()*100+"%";
            sparkle.style.top=Math.random()*100+"%";
            sparkle.style.animationDelay=Math.random()+"s";

            container.appendChild(sparkle);

            setTimeout(()=>{
                sparkle.remove();
            },2500);

        },i*70);
    }
}

function createCelebrationHearts(amount){
    const container=document.getElementById("celebrationHearts");

    if(!container){
        return;
    }

    const hearts=[
        "❤️",
        "💕",
        "💗",
        "💖",
        "💓",
        "💞",
        "💘"
    ];

    for(let i=0;i<amount;i++){
        setTimeout(()=>{
            const heart=document.createElement("div");

            heart.className="celebration-heart";
            heart.textContent=
                hearts[Math.floor(Math.random()*hearts.length)];

            heart.style.left=Math.random()*100+"%";
            heart.style.animationDuration=
                (5+Math.random()*6)+"s";

            heart.style.animationDelay=
                Math.random()*2+"s";

            container.appendChild(heart);

            setTimeout(()=>{
                heart.remove();
            },12000);

        },i*180);
    }
}

function createFlowers(amount){
    const container=document.getElementById("flowers");

    if(!container){
        return;
    }

    const flowers=[
        "🌸",
        "🌺",
        "🌷",
        "🌹",
        "🌻",
        "🌼",
        "💐",
        "🏵️"
    ];

    for(let i=0;i<amount;i++){
        setTimeout(()=>{
            const flower=document.createElement("div");

            flower.className="flower";
            flower.textContent=
                flowers[Math.floor(Math.random()*flowers.length)];

            flower.style.left=Math.random()*100+"%";

            flower.style.animationDuration=
                (6+Math.random()*7)+"s";

            flower.style.animationDelay=
                Math.random()*2+"s";

            container.appendChild(flower);

            setTimeout(()=>{
                flower.remove();
            },15000);

        },i*150);
    }
}

function createFirework(){
    const container=document.getElementById("fireworks");

    if(!container){
        return;
    }

    const firework=document.createElement("div");

    firework.className="firework";

    firework.style.left=
        (10+Math.random()*80)+"%";

    firework.style.top=
        (8+Math.random()*55)+"%";

    container.appendChild(firework);

    setTimeout(()=>{
        firework.remove();
    },1500);
}

function createLightning(){
    const celebration=
        document.getElementById("birthdayCelebration");

    if(!celebration){
        return;
    }

    const lightning=document.createElement("div");

    lightning.className="lightning";

    celebration.appendChild(lightning);

    setTimeout(()=>{
        lightning.remove();
    },900);
}

function checkBirthdayTime(){
    const now=new Date();

    if(
        now.getMonth()===9 &&
        now.getDate()===3 &&
        now.getHours()===0 &&
        now.getMinutes()===0 &&
        now.getSeconds()<=59
    ){
        startBirthdayCelebration();
    }
}

updateAge();

setInterval(()=>{
    updateAge();
},1000);

setInterval(()=>{
    checkBirthdayTime();
},1000);

document.addEventListener("keydown",(event)=>{
    if(event.key==="ArrowRight"){
        if(currentScene===3){
            nextMemory();
        }else{
            nextScene();
        }
    }

    if(event.key==="ArrowLeft"){
        if(currentScene===3){
            previousMemory();
        }else{
            previousScene();
        }
    }

    if(event.key===" "){
        event.preventDefault();
        toggleMusic();
    }
});

music.addEventListener("error",()=>{
    console.log(
        "Music could not be loaded. Check music/birthday.mp3"
    );
});

music.addEventListener("canplaythrough",()=>{
    console.log("Music loaded successfully.");
});

const celebrationContinue=
    document.getElementById("celebrationContinue");

if(celebrationContinue){
    celebrationContinue.addEventListener("click",()=>{
        const celebration=
            document.getElementById("birthdayCelebration");

        celebration.classList.add("hidden");

        showScene(0);

        window.scrollTo(0,0);
    });
}
