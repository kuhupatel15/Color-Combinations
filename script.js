function timelineone(){
    var tl=gsap.timeline({
        scrollTrigger:{
            trigger:"#home",
            start:"top top",
            scrub:1,
            markers:true,
            pin:true,
            end:"bottom -250%"
        }
    })
    tl.to("#centerimage",{
        left:"50%",
        duration:1,
        ease:Power1
    })
    .to("#circle #btm img",{
        rotate:"-360deg",
        scale:0,
        duration:1,
        stagger:.05,
        ease:Power1
    },"a1")
    .to("#topnav",{
        color:"#fff",
        fontWeight:"100"
    },"a1")
    .to("#btmnav img",{
        opacity:0
    },"a1")
    .to("#btmnav2 ",{
        delay:1,
        opacity:1
    },"a1")
    .to("#circle #top img",{
        scale:0,
        
        duration:1,
        stagger:0.05,
        ease:Power1
    },"a1")
    .to("#cimg img",{
        scale:0,
        duration:1,
        // stagger:.1,
        ease:Power1
    },"a1")
    .to("#centerimage h4",{
        opacity:0,
        duration:.5,
        stagger:0.1,
        ease:Power1
    },"a1")
    .to("#smcircle",{
        scale:0,
        duration:1,
        // stagger:.1,
        ease:Power1
    },"a2")
    .to("#circle",{
        scale:0.5,
        duration:1,
        // stagger:.1,
        ease:Power1
    },"a1")
    .to("#circle",{
        scale:0,
        duration:1,
        // stagger:.1,
        ease:Power1
    },"a2")
    .to("#overlay h1",{
        bottom:"-150%",
        duration:1
    },"a1")
    .to("#pinkcircle",{
        top:"50%",
        scale:2,
        duration:0.5,
        transform:" translate(-50%,-50%) scale(2.5)"
    
    },"a1")
    .to("#pinkcircle",{
        opacity:0,
        
    },"a2")
    .to("#pk",{
        rotate:0,
        bottom:"8%",
        ease:Power1
    },"a2")
    .to("#sqtxt",{
        top:"0%",
        duration:2,
        ease:Power1
    },"a2")
    .to("#sqtxt",{
        top:"-90%",
        duration:2,
        ease:Power1
    })
    .to("#b1",{
        backgroundColor:" #ffffff00"
    },"a1")
    .to("#b2",{
        backgroundColor:" #ffffff27"
    },"a1")
    .to("#b3",{
        backgroundColor:" #ffffff4f"
    },"a1")
    .to("#b4",{
        backgroundColor:" #ffffff7d"
    },"a1")
    .to("#b5",{
        backgroundColor:" #ffffffb0"
    },"a1")
    .to("#b6",{
        backgroundColor:" #fff"
    },"a1")
    
}
function timelinetwo(){
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            start:"top top",
            scrub:1,
            markers:true,
            pin:true,
            end:"bottom -150%"
        }
    })
    gsap.set("#no2",{y:50})
    gsap.set("#no3",{y:50})
    gsap.set(".rect",{y:480})
    gsap.set(".rect1",{x:260})
    gsap.set(".rect2",{x:260})
    tl2
    .to(".circ",{
        top:"50%",
        scale:2,
        stagger:0.5,
        duration:2,
        ease:Power1
    },"s")
    .to(".tn",{
        color:"#000"
    },"s")
    .to("#b1",{
        backgroundColor:"#13020213"
    },"s")
    .to("#b2",{
        backgroundColor:"#1302022a"
    },"s")
    .to("#b3",{
        backgroundColor:"#13020261"
    },"s")
    .to("#b4",{
        backgroundColor:"#1302027d"
    },"s")
    .to("#b5",{
        backgroundColor:"#130202c9"
    },"s")
    .to("#b6",{
        backgroundColor:"#130202f1"
    },"s")
    .to("#btmnav img",{
        delay:1,
        opacity:1
    },"s")
    // .to("#btmnav2",{
    //     opacity:1
    // },"s")
    .to(".circ",{
        left:"50%",
    
        duration:2,
        ease:Power1
    })
    .to(".circ",{
        
        scale:1,
        
        duration:2,
        ease:Power1
    })
    .to(".pi",{
        scale:12,
    
        duration:2,
        ease:Power1
    },"s0")
    .to("#b1",{
        backgroundColor:" #ffffff00"
    },"s0")
    .to("#b2",{
        backgroundColor:" #ffffff27"
    },"s0")
    .to("#b3",{
        backgroundColor:" #ffffff4f"
    },"s0")
    .to("#b4",{
        backgroundColor:" #ffffff7d"
    },"s0")
    .to("#b5",{
        backgroundColor:" #ffffffb0"
    },"s0")
    .to("#b6",{
        backgroundColor:" #fff"
    },"s0")
    .to(".tn",{
        color:"#fff"
    })
    .to(".pu",{
        opacity:0,
    
        duration:1,
        ease:Power1
    },"s0")
    .to(".pi",{
        background:"linear-gradient(to right,#D5A7B4, #B4AAD5)",
    
        duration:2,
        ease:Power1
    })
    .to("#stop h1",{
        left:"-150%",
    
        duration:8,
        ease:Power1
    },"s1")
    .to("#p1",{
        opacity:0,
    
        duration:1,
        ease:Power1
    },"s1")
    .to("#p2",{
        opacity:1,
        delay:1,
        duration:2,
        ease:Power1
    },"s1")
    .to("#no1",{
        y:-50,
        duration:2,
        ease:Power1
    },"s1")
    .to("#no2",{
        y:0,
        duration:2,
        ease:Power1
    },"s1")
    .to(".rect",{
        y:0,
        stagger:0.5,
        duration:3,
        ease:Power1
    },"s2")
    .to("#no2",{
        y:-50,
        duration:2,
        ease:Power1
    },"s2")
    .to("#no3",{
        y:0,
        duration:2,
        ease:Power1
    },"s2")
    .to(".rect1",{
        x:125,
        duration:2,
        ease:Power1
    },"s3")
    .to(".rect2",{
        x:125,
        duration:2,
        ease:Power1
    },"s3")
    .to(".rect2",{
        x:60,
        duration:2,
        ease:Power1
    })
}
timelineone();
timelinetwo();