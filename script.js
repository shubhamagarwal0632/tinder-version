let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: "2",
        location: "pune,india",
        name: "laxita",
        age: 7,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-pages-line"></i>`,
            interest: "writing"
        }

        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
        isFriend: null
    }, {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: "5",
        location: "delhi,india",
        name: "niharika",
        age: 7,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-pages-line"></i>`,
            interest: "writing"
        }

        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
        isFriend: null
    }, {
        profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: "7",
        location: "goa",
        name: "seenika",
        age: 7,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-pages-line"></i>`,
            interest: "writing"
        }

        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
        isFriend: null
    }, {
        profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: "9",
        location: "ajmer",
        name: "komal",
        age: 7,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-pages-line"></i>`,
            interest: "writing"
        }

        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
        isFriend: null
    }, {
        profilePic: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1522&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        pendingMessage: "6",
        location: "jaipur,india",
        name: "ronika",
        age: 7,
        interests: [{
            icon: `<i class="ri-music-2-line"></i>`,
            interest: "music"
        }, {
            icon: `<i class="ri-pages-line"></i>`,
            interest: "writing"
        }

        ],
        bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, unde!",
        isFriend: null
    }
]

let curr = 0;
let isanimation = false;

function setdata() {
    document.querySelector('.navbar img').src = users[curr].profilePic;
    document.querySelector('.badge h5').textContent = users[curr].pendingMessage;
    document.querySelector('.location h2').textContent = users[curr].location;
    document.querySelector('.name h2:nth-child(1)').textContent = users[curr].name;
    document.querySelector('.name h2:nth-child(2)').textContent = users[curr].age;
    let cluter = "";
    users[curr].interests.map((item) =>

        cluter += ` <div class="tag flex items-center gap-2 rounded-full bg-white/50 px-5 py-2">
        ${item.icon}

        <h2>${item.interest}</h2>  
</div>`

    )
    document.querySelector('.tags').innerHTML = cluter
    document.querySelector('.bio p').textContent = users[curr].bio;
}
function getdata() {
    document.querySelector('.maincard img').src = users[curr].displayPic;
    document.querySelector('.incomingcard img').src = users[curr + 1]?.displayPic;
    setdata();

    curr = 2;
}


function imagechange() {
    // agar animation nhi ho rha h to animation kro
    if (!isanimation) {
        isanimation = true;
        let tl = gsap.timeline({
            onComplete: function () {
                isanimation = false;
                let main = document.querySelector('.maincard')
                let incoming = document.querySelector('.incomingcard')
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[5]");
                incoming.classList.remove("incomingcard");

                main.classList.remove('z-[5]')
                main.classList.add('z-[2]')
                gsap.set(main, {
                    scale: 1,
                    opacity: 1
                })
                if (curr === users.length) {
                    curr = 0;
                } else {

                    document.querySelector('.maincard img').src = users[curr].displayPic;
                    curr++;
                }
                main.classList.remove('maincard')
                main.classList.add('incomingcard')
                incoming.classList.add('maincard')
            }
        });

        tl.to(".maincard", {
            scale: 1.1,
            opacity: 0,
            ease: Circ,
            duration: 0.5
        })
        tl.from(".incomingcard", {
            scale: 1.1,
            opacity: 0,
            duration: 0.5
        })
    }

}
let cross = document.querySelector('.cross');
let accept = document.querySelector('.accept');
cross.addEventListener('click', () => {
    imagechange();
    setdata(curr-1);
    gsap.from('.details-container .element', {
        y: "100%",
        opacity: 0,
        stagger: 0.06,
        duration: 0.5
    })
    // console.log('clicked')
})
accept.addEventListener('click', () => {
    imagechange();
    setdata(curr-1);
    gsap.from('.details-container .element', {
        y: "100%",
        opacity: 0,
        stagger: 0.06,
        duration: 0.5
    })
    // console.log('clicked')
})
getdata();
