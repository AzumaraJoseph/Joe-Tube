const videoContainer = document.getElementById("video__container");
const video = document.getElementById("video");

const home = document.getElementById("home");
const player = document.getElementById("player");
let currentVideo 

const homeVideoList = document.getElementById("home_video_list");

let userHasInteracted = false;

playVideo = () => {
  if (!userHasInteracted) {
    userHasInteracted = true;
    video
      .play()
      .then(() => {
        // Video is playing
      })
      .catch((error) => {
        console.error(error);
      });
  }
};

// videoContainer.addEventListener("mouseover", () => {
//   playVideo();
// });
// videoContainer.addEventListener("mouseout", () => {
//   if (userHasInteracted) {
//     video.pause();
//   }
// });

const vids = [
  {
    id: 'VID0001',
    title: "Never Back Down No Surrender (2016)",
    img: "img/img-5.jpg",
    description: "In this video we are going to look at the common uniforms, weapons, gear and equipment of the men who were apart of the Long Range Reconnaissance Patrol (LRRP) of the Vietnam War.",
    path: "vid/Never_Back_Down_No_Surrender_(2016).mp4",
    channel: "Showmax TV - Nigerian Nollywood",
    views: "5.8M views 3 months ago",
    like: "3.1k",
    subscribers: "10K",
    comments: '1,264 Comments'
  },
  {
    id: 'VID0002',
    title: "Fast and Fierce Death Race (2020)",
    img: "img/img-3.jpg",
    description: "In this video we are going to look at the common uniforms, weapons, gear and equipment of the men who were apart of the Long Range Reconnaissance Patrol (LRRP) of the Vietnam War.",
    path: "vid/Fast_and_Fierce_Death_Race_(2020).mp4",
    channel: "Nigerian Nollywood",
    views: "800 views 1 month ago",
    like: "2.2k",
    subscribers: "310K",
    comments: '2,150 Comments'

  },
  {
    id: 'VID0003',
    title: "Tomb Invader (2018)",
    img: "img/img-1.jpeg",
    description: "In this video we are going to look at the common uniforms, weapons, gear and equipment of the men who were apart of the Long Range Reconnaissance Patrol (LRRP) of the Vietnam War.",
    path: "vid/Tomb_Invader_2018_(2018).mp4",
    channel: "American Movie",
    views: "6.4k views 12 months ago",
    like: "7k",
    subscribers: "102K",
    comments: '189 Comments'

  },
  {
    id: 'VID0004',
    title: "My Spy (2020)",
    img: "img/img-1.jpeg",
    description: "In this video we are going to look at the common uniforms, weapons, gear and equipment of the men who were apart of the Long Range Reconnaissance Patrol (LRRP) of the Vietnam War.",
    path: "vid/My_Spy_(2020).mp4",
    channel: "Action Movie",
    views: "50 views . 5 weeks ago",
    like: "920k",
    subscribers: "315",
    comments: '389 Comments'

  },
  
  {
    id: 'VID0005',
    title: "The Huntsman Winters War (2016)",
    img: "img/img-1.jpeg",
    description: "In this video we are going to look at the common uniforms, weapons, gear and equipment of the men who were apart of the Long Range Reconnaissance Patrol (LRRP) of the Vietnam War.",
    path: "vid/The_Huntsman_Winters_War_(2016).mkv",
    channel: "Indian Movie",
    views: "100 views . 5 days ago",
    like: "3.5k",
    subscribers: "352",
    comments: '1,002 Comments'

  },
  {

    id: 'VID0006',
    title: "James Bond (2021)",
    img: "img/img-6.png",
    description:
      "In this video we are going to look at the common uniforms, weapons, gear and equipment of the men who were apart of the Long Range Reconnaissance Patrol (LRRP) of the Vietnam War.",
    path: "vid/James_Bond_2021.mp4",
    channel: "Bollywood Nollywood",
    views: "3.1k views 2 weeks ago",
    like: "1.8k",
    subscribers: "3K",
    comments: '45 Comments'
  },
];

// for (const vid of vids) {
    
// }
//--${i + 1}
const initialHomeVideo = () => {
    let homeVideoMarkup = "";
    vids.forEach((vid, i) => {
    homeVideoMarkup += `
        <div class="content__video" data-vidid="${vid.id}">
            <div class="video">
                <video title="play video" autoplay controls>
                    <source src="${vid.path}" type="video/mp4">
                    Your brower is not supported
                </video>
            </div>             
            <div class="video__description">
                <img src="${vid.img}" class="video__description--pic" alt="Artist pic">
                <div>
                    <h3>${vid.title}</h3>
                    <span>${vid.channel}</span>
                    <p>${vid.views}</p>
                </div>               
            </div>
        </div>      
    `;
  });

  homeVideoList.innerHTML = homeVideoMarkup;
};

const renderVid = (vid) => `
    <div class="current__watch--video">
        <div class="video">
            <video title="play video" autoplay controls>
                <source src="${vid.path}" type="video/mp4">
                Your brower is not supported
            </video>
        </div>
        <h3 class="current__watch--title">${vid.title}</h3>
        <div class="info">
            <div class="video__description info__description">
                <img src="${vid.img}" class="video__description--pic" alt="Artist pic">
                <div>     
                    <h2 class="channel">${vid.channel}</h2>
                    <p class="subscribers">${vid.subscribers}</p>
                </div>               
            </div>
            <button class="btn info__sub" type="button" title="Subscribe">
                <h2>subscribe</h2>
            </button>
            <button class="btn info__btn" type="button" title="Like">
                <svg class="navigation__features--field-home">
                    <use href="img/icons.svg#icon-thumbs-up"></use>
                </svg>
                <span class="info__likes">${vid.like}</span>
                <svg class="navigation__features--field-home">
                    <use href="img/icons.svg#icon-thumbs-down"></use>
                </svg>
            </button>

            <button class="btn info__btn" type="button" title="Share">
                <svg class="navigation__features--field-home">
                    <use href="img/icons.svg#icon-arrow-forward-outline"></use>
                </svg>
                <span class="info__likes">Share</span>
            </button>

            <button class="btn info__btn" type="button" title="Download">
                <svg class="navigation__features--field-home">
                    <use href="img/icons.svg#icon-download"></use>
                </svg>
                <span class="info__likes">Download</span>
            </button>
            <button class="btn info__more" type="button" title="More">
                <svg class="navigation__features--field-home">
                    <use href="img/icons.svg#icon-dots-three-horizontal"></use>
                </svg>
            </button>
        </div>
        <div class="current__watch--description">
            <div class="current__views">
                <h4>${vid.views}</h4>
                <span>#hollywoodmovie #neverbackdown-nosurrender #thrillermovie</span>
            </div>                     
            <span>${vid.description}</span>
        </div>
        
        <div class="comment">
            <span>1,264 Comments</span>
            <div class="comment__icon" title="Sort comments">
                <svg >
                    <use href="img/icons.svg#icon-sort"></use>
                </svg>
                <p class="comment__sort">Sort by</p>
            </div>
        </div>
        <div class="comment__type">
            <img src="img/img-1.jpeg" alt="user" class="header__user" title="User">
            <input type="text" placeholder="Add a comment..." class="comment__add">
        </div>                           
    </div>
`;


const renderMain = () => {
    vids.forEach(vid => {       
        const playVideoMarkup = `
            <div class="views">
                <section class="watch">
                    <div class="current__watch">
                        <div class="current__watch--video" id=$ {vid.id}>
                            <div class="video">
                                <video title="play video" autoplay controls>
                                    <source src="${vid.path}" type="video/mp4">
                                    Your brower is not supported
                                </video>
                            </div>
                            <h3 class="current__watch--title">${vid.title}</h3>
                            <div class="info">
                                <div class="video__description info__description">
                                    <img src="${vid.img}" class="video__description--pic" alt="Artist pic">
                                    <div>     
                                        <h2 class="channel">${vid.channel}</h2>
                                        <p class="subscribers">${vid.subscribers}</p>
                                    </div>               
                                </div>
                                <button class="btn info__sub" type="button" title="Subscribe">
                                    <h2>subscribe</h2>
                                </button>
                                <button class="btn info__btn" type="button" title="Like">
                                    <svg class="navigation__features--field-home">
                                        <use href="img/icons.svg#icon-thumbs-up"></use>
                                    </svg>
                                    <span class="info__likes">${vid.like}</span>
                                    <svg class="navigation__features--field-home">
                                        <use href="img/icons.svg#icon-thumbs-down"></use>
                                    </svg>
                                </button>
                
                                <button class="btn info__btn" type="button" title="Share">
                                    <svg class="navigation__features--field-home">
                                        <use href="img/icons.svg#icon-arrow-forward-outline"></use>
                                    </svg>
                                    <span class="info__likes">Share</span>
                                </button>
                
                                <button class="btn info__btn" type="button" title="Download">
                                    <svg class="navigation__features--field-home">
                                        <use href="img/icons.svg#icon-download"></use>
                                    </svg>
                                    <span class="info__likes">Download</span>
                                </button>
                                <button class="btn info__more" type="button" title="More">
                                    <svg class="navigation__features--field-home">
                                        <use href="img/icons.svg#icon-dots-three-horizontal"></use>
                                    </svg>
                                </button>
                            </div>
                            <div class="current__watch--description">
                                <div class="current__views">
                                    <h4>${vid.views}</h4>
                                    <span>#hollywoodmovie #neverbackdown-nosurrender #thrillermovie</span>
                                </div>                     
                                <span>${vid.description}</span>
                            </div>
                    
                            <div class="comment">
                                <span>${vid.comments}</span>
                                <div class="comment__icon" title="Sort comments">
                                    <svg >
                                        <use href="img/icons.svg#icon-sort"></use>
                                    </svg>
                                    <p class="comment__sort">Sort by</p>
                                </div>
                            </div>
                            <div class="comment__type">
                                <img src="img/img-1.jpeg" alt="user" class="header__user" title="User">
                                <input type="text" placeholder="Add a comment..." class="comment__add">
                            </div>                           
                        </div>
                    </div>
            
                    <div class="watch__split">
                        <div class="current__comments">
                            <img src="img/img-5.jpg" class="video__description--pic current__comments-pic" alt="Artist pic">
            
                            <div class="current__views current__comments-views">
                                <h4>@limasierraone7107</h4>
                                <span>1 year ago</span>
                            </div>
                            
                            <div class="current__comments-all">
                                <span>It is uncanny that I have been putting together a lrrp setup over the past few months and this video comes out. This helped fill in some of the gaps about individual equipment and it really helps. Thanks to everyone that is involved in the making of these videos. Let's keep history alive brothers!</span>
                                <div class="comment__icon">
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-up" title="Like"></use>
                                    </svg>
                                    <p class="comment__likes">123</p>
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-down" title="Dislike"></use>
                                    </svg>
                                    <button class="btn">                         
                                        <h2 class="comment__likes-reply">Reply</h2>                           
                                    </button>
                                </div>
                                <div class="comment__icon comment__icon-color">
                                    <svg >
                                        <use href="img/icons.svg#icon-triangle-right" title="Like"></use>
                                    </svg>
                                    <p class="comment__icon comment__icon-reply">63 replies</p>
                                </div>
                            </div>
                        </div>
                        <div class="current__comments">
                            <img src="img/img-2.jpg" class="video__description--pic current__comments-pic" alt="Artist pic">
            
                            <div class="current__views current__comments-views">
                                <h4>
                                    @Spike-13</h4>
                                <span>3 years ago</span>
                            </div>
                            
                            <div class="current__comments-all">
                                <span>I love Vietnam era equipment, the perfect mix of old and new. I'll show this to my 86 year old dad he's a Vietnam combat vet. He was in 25th infantry, 38th scout dog platoon, 101st and 82nd airborne among others over the years</span>
                                <div class="comment__icon">
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-up" title="Like"></use>
                                    </svg>
                                    <p class="comment__likes">26</p>
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-down" title="Dislike"></use>
                                    </svg>
                                    <button class="btn">                         
                                        <h2 class="comment__likes-reply">Reply</h2>                           
                                    </button>
                                </div>
                                <div class="comment__icon comment__icon-color">
                                    <svg >
                                        <use href="img/icons.svg#icon-triangle-right" title="Like"></use>
                                    </svg>
                                    <p class="comment__icon comment__icon-reply">8 replies</p>
                                </div>
                            </div>
                        </div>
                        <div class="current__comments">
                            <img src="img/img-3.jpg" class="video__description--pic current__comments-pic" alt="Artist pic">
            
                            <div class="current__views current__comments-views">
                                <h4>@suspense8282</h4>
                                <span>3 months ago</span>
                            </div>
                            
                            <div class="current__comments-all">
                                <span>Another rucksack which is commonly overlooked, is the M1952 Mountain Ruck, it was used by SF, LRRP's etc, Early to even late war in some units, it's about the size of the tropical, only downside is the frame which was commonly ditched.</span>
                                <div class="comment__icon">
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-up" title="Like"></use>
                                    </svg>
                                    <p class="comment__likes">236</p>
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-down" title="Dislike"></use>
                                    </svg>
                                    <button class="btn">                         
                                        <h2 class="comment__likes-reply">Reply</h2>                           
                                    </button>
                                </div>
                                <div class="comment__icon comment__icon-color">
                                    <svg >
                                        <use href="img/icons.svg#icon-triangle-right" title="Like"></use>
                                    </svg>
                                    <p class="comment__icon comment__icon-reply">45 replies</p>
                                </div>
                            </div>
                        </div>
                        <div class="current__comments">
                            <img src="img/img-6.png" class="video__description--pic current__comments-pic" alt="Artist pic">
            
                            <div class="current__views current__comments-views">
                                <h4>@kwiturbitchin5277</h4>
                                <span>8 days ago</span>
                            </div>
                            
                            <div class="current__comments-all">
                                <span>I think I've flown in this very same Huey at an air show in Georgia in 2018. It was marked aircraft 104 of the 229th AHB flown and maintained by the Army Aviation Heritage Foundation. Great experience all around and went back the next year and flew with them again. I highly recommend to anyone to take a ride in a Huey. The sights and sound of the Huey is incredible!</span>
                                <div class="comment__icon">
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-up" title="Like"></use>
                                    </svg>
                                    <p class="comment__likes">102</p>
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-down" title="Dislike"></use>
                                    </svg>
                                    <button class="btn">                         
                                        <h2 class="comment__likes-reply">Reply</h2>                           
                                    </button>
                                </div>
                                <div class="comment__icon comment__icon-color">
                                    <svg >
                                        <use href="img/icons.svg#icon-triangle-right" title="Like"></use>
                                    </svg>
                                    <p class="comment__icon comment__icon-reply">73 replies</p>
                                </div>
                            </div>
                        </div>
                        <div class="current__comments">
                            <img src="img/img-4.jpg" class="video__description--pic current__comments-pic" alt="Artist pic">
            
                            <div class="current__views current__comments-views">
                                <h4>@MrBikboi</h4>
                                <span>9 years ago</span>
                            </div>
                            
                            <div class="current__comments-all">
                                <span>Another great video Brent, the fact that we get this level of effort and knowledge for free is fantastic! Can't forget Bruce too! Really wish I had the opportunity to go and train at One Shepherd. Such an awesome organization, migrate to Canada? :</span>
                                <div class="comment__icon">
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-up" title="Like"></use>
                                    </svg>
                                    <p class="comment__likes">10</p>
                                    <svg >
                                        <use href="img/icons.svg#icon-thumbs-down" title="Dislike"></use>
                                    </svg>
                                    <button class="btn">                         
                                        <h2 class="comment__likes-reply">Reply</h2>                           
                                    </button>
                                </div>
                                <div class="comment__icon comment__icon-color">
                                    <svg >
                                        <use href="img/icons.svg#icon-triangle-right" title="Like"></use>
                                    </svg>
                                    <p class="comment__icon comment__icon-reply">2 replies</p>
                                </div>
                            </div>
                        </div>                       
                    </div>
                </section>      
            
                <section class="similar">
                    <div>
                        <button class="btn btn__inline btn__inline--active" type="button" title="Watch">
                            <h2>All</h2>
                        </button>
                        <button class="btn btn__inline" type="button" title="Watch">
                            <h2>From Brent</h2>
                        </button>
                        <button class="btn btn__inline" type="button" title="Watch">
                            <h2>Troops</h2>
                        </button>
                        <button class="btn btn__inline" type="button" title="Watch">
                            <h2>thrillers</h2>
                        </button>
                        <button class="btn btn__inline" type="button" title="Watch">
                            <h2>Related</h2>
                        </button>                              
                    </div>
            
                    <div class="similar__video--1">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/The_Wolf_of_Wall_Street_(2012).mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>The Wolf of Wall Street (2012)</h3>
                            <span>Nollywood Base TV</span>
                            <p>1.6k views . 2 months ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--2">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Heavens_War_(2018)_WEB-DL_high_(fzmovies.net).mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Heavens War (2018)</h3>
                            <span>MagicNollyTV</span>
                            <p>1k views . 4 months ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--3">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Justice_League_(2017)_HDRip_high_(fzmovies.net)-1-1.mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Justice League (2017)</h3>
                            <span>NollyMax TV</span>
                            <p>900 views . 2 weeks ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--4">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/The Hottest Ariaria praise in the world (African praise ) part 2.mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>The Hottest Ariaria praise in the world</h3>
                            <span>PRIME MEGA ENTERTAINMENTS</span>
                            <p>4k views . 7 years ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--5">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Take_Point_(2018)_HDRip_high_(fzmovies.net).mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Take Point (2018)</h3>
                            <span>Nollywood Namaste TV</span>
                            <p>320 views . 3 days ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--6">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Mechanic_Resurrection.mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Mechanic Resurrection</h3>
                            <span>MovieTime Hollywood</span>
                            <p>2.3k views . 5 days ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--7">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/The_Matchmakers_Playbook_(2018)_HDRip_high_(fzmovies.net)_52ffe1b10c3c3877fe1917ebb0ce6b83.mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>The Matchmakers Playbook (2018)</h3>
                            <span>Nollywood Base TV</span>
                            <p>500k views . 14 months ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--8">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Mortal_Kombat_2021_(2021)_WEB-DL_high_(fzmovies.net)_eb45c991dccbb8255561f139b5681a4d.mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Mortal Kombat (2021)</h3>
                            <span>Brekete Family</span>
                            <p>841 views . 6 weeks ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--9">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Without_Remorse_(2021)_WEB-DL_high_(fzmovies.net)_411e9d9f61fc912e79eeb1044b61953b.mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Without Remorse (2021)</h3>
                            <span>Gon King</span>
                            <p>6.8k views . 8 months ago</p>
                        </div>                                                   
                    </div>
                    <div class="similar__video--10">
                        <div class="video">
                            <video title="play video" controls>
                                <source src="similarVid/Lady_Bloodfight_2017_(2017).mp4" type="video/mp4">
                                Your brower is not supported
                            </video>
                        </div>             
                        <div class="similar__description">
                            <h3>Blood Fight (2017)</h3>
                            <span>Bollywood TV</span>
                            <p>23 views . 4 month ago</p>
                        </div>                                                   
                    </div>       
                </section>
            </div>
        `;
        if (player) player.innerHTML = playVideoMarkup;
        home.style.display = "none";
        player.style.display = "block";
    });
  //const relatedVideo = vids.filter(vid=>vid.channel === currentVideo.channel)
};

controlDisplay = () => {

    renderMain();
};

initialHomeVideo()

const item = document.querySelectorAll('.content__video');
itemArr = Array.from(item);
itemArr.forEach(cur => {
    cur.addEventListener('click',controlDisplay);
});


