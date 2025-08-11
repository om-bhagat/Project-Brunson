function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }
document.addEventListener('DOMContentLoaded', () => {
  // ----- Sticky sections: "The Philanthropist" -----
  const stickySections = [...document.querySelectorAll('.sticky')];

  const images = [
    'assets/images/Brunson-Philanthropist.png',
    'assets/images/Brunson-Covenant.png',
    'assets/images/Brunson-Academy.png',
    'assets/images/Brunson-Stevenson.png',
    'assets/images/Second-Round-Foundation.png',
    'assets/images/Golf-Charity.png',
  ];

  images.forEach(img => {
    stickySections.forEach(section => {
      let container = document.createElement('div');

      container.style.display = 'flex';
      container.style.flexDirection = 'row';
      container.style.alignItems = 'center';
      container.style.width = img.includes('Golf-Charity') ? '2000px' : '1800px';
      container.style.marginRight = '50px';
      container.style.backgroundColor = 'black';
      container.style.padding = '20px';

      let image = document.createElement('img');
      image.src = img;
      image.style.height = 'auto';
      image.style.borderRadius = '8px';

      let label = document.createElement('div');
      label.style.marginLeft = '30px';
      label.style.fontSize = '2rem';
      label.style.color = 'white';
      label.style.fontWeight = 'bold';

      if (img.includes('Brunson-Philanthropist')) {
        image.style.width = '80%';
        label.textContent = 'The Philanthropist';
      } else if (img.includes('Brunson-Academy')) {
        image.style.width = '60%';
        label.textContent = ' In 2018, Brunson created the annual Jalen Brunson Skills Academy to raise funds for the Stevenson Foundation.';
      } else if (img.includes('Brunson-Covenant')) {
        image.style.width = '60%';
        label.textContent = 'In early 2023, Brunson has worked with Covenant House as a founding member and chair of the Player Ambassador Council. His family has also hosted Thanksgiving dinners to serve meals alongside the residents.';
      } else if (img.includes('Brunson-Stevenson')) {
        image.style.width = '60%';
        label.textContent = 'In 2022, Brunson has provided tools and necessities for financially under-resourced students. These donations expand the access from just healthy food and nutrition to also atheltic wear, shoes, and accessories.';
      } else if (img.includes('Second-Round-Foundation')) {
        image.style.width = '30%';
        label.textContent = "In 2018, Brunson's Second Round Foundation empowers underserved youth by supporting education, personal development, and community enrichment through scholarships, mentorship, and access to essential resoucres.";
      } else if (img.includes('Golf-Charity')) {
        image.classList.add('scroll-image');
        image.style.width = '60%';
        label.textContent = "In 2023, Jalen Brunson's Annual Golf Charity Event raises funds for his Second Round Foundation, bringing together supporters to enjoy golf while supporting youth education, mentorship, and community programs in underserved areas.";
      } else {
        image.style.width = '60%';
        label.textContent = 'Additional Coverage';
      }

      container.appendChild(image);
      container.appendChild(label);

      section.querySelector('.scroll_section')?.appendChild(container);
    });
  });

  function clamp(v, min, max) { return Math.min(Math.max(v, min), max); }

  function transform(section) {
    const offsetTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    if (!scrollSection) return;
    let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;
    percentage = clamp(percentage, 0, 400);
    scrollSection.style.transform = `translate3d(${-percentage}vw, 0, 0)`;
  }

  window.addEventListener('scroll', () => {
    stickySections.forEach(section => transform(section));
  });

  // ----- BUSINESSMAN horizontal scroll -----
  const businessmanSection = document.querySelector('.BusinessmanScroll_section');

  const businessmanImages = [
    {
      src: 'assets/images/Brunson-Businessman.png',
      text: 'The Businessman',
      size: 'small1'
    },
    {
      src: 'assets/images/BrunsonXBose.png',
      text: 'In 2023, Jalen Brunson partners with Bose as a brand ambassador, promoting products on social media, attending sponsored events, and gifting Bose earbuds to teammates, showcasing the collaboration through endorsements, public appearances, and goodwill gestures.',
      size: 'small2'
    },
    {
      src: 'assets/images/FahertyXBrunson.png',
      text: 'In 2021, Jalen Brunson’s partnership with Faherty centers on an exclusive capsule collection. It features his mantra, “The Magic Is in the Work,” includes seven limited-edition pieces like hoodies, T-shirts, and hats, and supports his foundation through charitable donations.',
      size: 'small3'
    },
    {
      src: 'assets/images/NikeXBrunson.png',
      text: "Jalen Brunson partners with Nike, wearing their gear—especially Kobe Bryant shoes—in games, joining marketing campaigns, and earning performance bonuses while reinforcing a strong, loyal brand connection.",
      size: 'big1'
    }
  ];

  if (businessmanSection) {
    businessmanImages.forEach(item => {
      let container = document.createElement('div');
      container.classList.add('slide');

      let image = document.createElement('img');
      image.src = item.src;
      image.classList.add(item.size);

      let label = document.createElement('div');
      label.classList.add('caption');
      label.textContent = item.text;

      container.appendChild(image);
      container.appendChild(label);
      businessmanSection.appendChild(container);
    });

    function transformBusinessman() {
      const sectionParent = document.querySelector('.BusinessmanSticky_Parent');
      if (!sectionParent) return;
      const sticky = sectionParent.querySelector('.BusinessmanSticky');
      if (!sticky) return;
      const scrollSection = sticky.querySelector('.BusinessmanScroll_section');
      if (!scrollSection) return;

      const offsetTop = sectionParent.offsetTop;
      const stickyHeight = sectionParent.clientHeight;
      const trackWidth = scrollSection.scrollWidth;
      const maxX = Math.max(0, trackWidth - window.innerWidth);

      const progress = clamp(
        (window.scrollY - offsetTop) / (stickyHeight - window.innerHeight),
        0, 1
      );

      const x = -maxX * progress;
      scrollSection.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    window.addEventListener('scroll', transformBusinessman);
  }

  // ----- The Man horizontal scroll -----
  const ManSection = document.querySelector('.ManScroll_section');

  let ManImages = [
    {
      src: 'assets/images/TheManCover.png',
      text: 'The Man',
      size: 'small1'
    },
    {
      src: 'assets/images/JordynBrunson.png',
      text: 'In 2023, Jordyn Brunson has been a constant source of support, grounding Jalen through every high and low. Their relationship reflects mutual respect, understanding, and shared values, giving him balance and perspective both on and off the court.',
      size: 'small2'
    },
    {
      src: 'assets/images/Jay-Wright.png',
      text: 'Under Coach Jay Wright at Villanova, Jalen Brunson learned discipline, poise, and championship habits. Wright’s mentorship instilled leadership qualities and a team-first mentality, shaping Brunson’s game IQ and setting the foundation for his professional success.',
      size: 'small3'
    },
    {
      src: 'assets/images/Speaking-To-Kids.png',
      text: "Through his Second Round Foundation and personal outreach, Jalen Brunson invests in underserved communities. He values mentorship, education, and opportunity, using his platform to inspire youth and create pathways for success beyond the basketball court.",
      size: 'big1'
    },
    {
      src: 'assets/images/Walking-NYC.png',
      text: "New York City’s energy fuels Jalen Brunson’s drive. He embraces its fast pace, tough crowds, and bright lights, thriving under pressure and connecting with fans who value hard work, grit, and a relentless competitive spirit.",
      size: 'big1'
    },
    {
      src: 'assets/images/Knicks-Huddle.png',
      text: "Brunson leads with action and words, earning trust through consistency and commitment. He builds bonds off the court, values honest communication, and ensures every teammate feels respected, fostering a culture of accountability, unity, and shared goals.",
      size: 'big1'
    },
    {
      src: 'assets/images/Ice-Bath.png',
      text: "Postgame, Jalen Brunson embraces the ice bath ritual. It’s a physical reset and mental cooldown, helping his body recover from the grind, reduce soreness, and prepare for the next challenge with clarity and focus.",
      size: 'big1'
    }
  ];

  if (ManSection) {
    ManImages.forEach(item => {
      let container = document.createElement('div');
      container.classList.add('slide');

      let image = document.createElement('img');
      image.src = item.src;
      image.classList.add(item.size);

      let label = document.createElement('div');
      label.classList.add('caption');
      label.textContent = item.text;

      container.appendChild(image);
      container.appendChild(label);
      ManSection.appendChild(container);
    });

    function transformMan() {
      const sectionParent = document.querySelector('.ManSticky_Parent');
      if (!sectionParent) return;
      const sticky = sectionParent.querySelector('.ManSticky');
      if (!sticky) return;
      const scrollSection = sticky.querySelector('.ManScroll_section');
      if (!scrollSection) return;

      const offsetTop = sectionParent.offsetTop;
      const stickyHeight = sectionParent.clientHeight;
      const trackWidth = scrollSection.scrollWidth;
      const maxX = Math.max(0, trackWidth - window.innerWidth);

      const progress = clamp(
        (window.scrollY - offsetTop) / (stickyHeight - window.innerHeight),
        0, 1
      );

      const x = -maxX * progress;
      scrollSection.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    window.addEventListener('scroll', transformMan);
  }

  const video = document.querySelector('.highlight-video');
  function handleVideoZoom() {
    if (!video) return;
    const rect = video.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const scrollRatio = 1 - Math.abs((rect.top + rect.bottom - windowHeight) / windowHeight);
    const scale = Math.max(0.9, Math.min(1.3, scrollRatio * 1.3));
    video.style.transform = `scale(${scale})`;
  }
  // keep one listener set
  window.addEventListener('scroll', handleVideoZoom);
  window.addEventListener('load', handleVideoZoom);

  const logos = document.querySelectorAll('.logo-container');

  const endorsementInfo = {
    catalina: {
      title: "Catalina Crunch",
      lines: [
        "Brunson fuels his game with Catalina Crunch,",
        "a brand known for its low-sugar, high-protein snacks",
        "that deliver on both taste and nutrition.",
        "Whether it’s a quick breakfast or a post-practice",
        "pick-me-up, Catalina Crunch helps Jalen",
        "stay sharp, energized, and focused on the court.",
      ]
    },
    dunkin: {
      title: "Dunkin Donuts",
      lines: [
        "As a fan-favorite both on and off the hardwood,",
        "Jalen Brunson partners with Dunkin’ to",
        "celebrate hustle, heart, and hometown flavor.",
        "Whether grabbing a morning coffee or",
        "fueling up between workouts,",
        "Dunkin’ is part of Jalen’s daily routine."
      ]
    },
    secondround: {
      title: "Second Round Foundation",
      lines: [
        "Jalen Brunson proudly supports the",
        "Second Round Foundation, using his platform to",
        "empower youth and inspire the next",
        "generation of leaders. Through scholarships,",
        "mentorship, and community outreach,",
        "he remains committed to creating lasting change",
        "off the court",
      ]
    },
    oura: {
      title: "Oura Ring",
      lines: [
        "Recovery is just as important as training,",
        "and Jalen relies on Oura Ring to track his sleep,",
        "readiness, and overall health. With",
        "data-driven insights, the ring helps him",
        "optimize performance and stay at",
        "the top of his game, both physically and mentally.",
      ]
    },
    okeeffe: {
      title: "O'Keeffe's",
      lines: [
        "Enduring hours of training takes a toll,",
        "but O’Keeffe’s keeps Brunson’s hands and skin",
        "game-ready. Trusted by athletes and workers alike",
        "O’Keeffe’s reliable, long-lasting",
        "protection ensures Jalen stays",
        "comfortable no matter how tough the grind.",
      ]
    }
  };

  logos.forEach((logo, index) => {
    logo.addEventListener('click', () => {
      const isActive = logo.classList.contains('active');

      logos.forEach((l) => {
        l.classList.remove('active', 'shift-left', 'shift-right');
        const panel = l.querySelector('.endorsement-panel');
        if (panel) panel.remove();
      });

      if (isActive) return;

      logo.classList.add('active');

      logos.forEach((l, i) => {
        if (i < index) l.classList.add('shift-left');
        else if (i > index) l.classList.add('shift-right');
      });

      const brand = logo.getAttribute('data-brand');
      const info = endorsementInfo[brand];
      if (!info) return;

      const panel = document.createElement('div');
      panel.className = 'endorsement-panel';
      panel.innerHTML = `
        <h2>${info.title}</h2>
        ${info.lines.map(line => `<p>${line}</p>`).join('')}
      `;
      logo.appendChild(panel);
    });
  });

  const modal = document.getElementById('endorsement-modal');
  const closeBtn = document.querySelector('.close-btn');
  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      logos.forEach(l => l.classList.remove('shift-left', 'shift-right', 'active'));
      document.querySelectorAll('.endorsement-panel').forEach(p => p.remove());
    });
  }

  // ----- BodyArmor ad controls -----
  (function setupBodyArmorAd() {
    const wrap = document.querySelector('.bodyarmor-wrap');
    if (!wrap) return;

    const video = wrap.querySelector('.BodyArmorAd');
    const btn = wrap.querySelector('.unmute-btn');
    if (!video || !btn) return;

    let hasLoaded = false;
    const updateBtn = () => { btn.textContent = video.muted ? 'Unmute ' : 'Mute '; };

    const io = new IntersectionObserver(async ([entry]) => {
      if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
        if (!hasLoaded) { try { video.load(); } catch(_) {} hasLoaded = true; }
        try { await video.play(); } catch(_) {}
      } else {
        video.pause();
        video.currentTime = 0;
        video.muted = true;
        updateBtn();
      }
    }, { threshold: [0, 0.6, 1] });

    io.observe(video);

    btn.addEventListener('click', async () => {
      video.muted = !video.muted;
      if (!video.muted) video.volume = 1.0;
      updateBtn();
      try { await video.play(); } catch(_) {}
    });

    video.addEventListener('click', () => {
      video.muted = !video.muted;
      updateBtn();
    });

    updateBtn();
  })();
});
  // ----- The Athlete horizontal scroll -----
  const athleteSection = document.querySelector('.AtheleteScroll_section');

  const athleteImages = [
    { src: 'assets/images/Three-Celebration.png', text: 'The Athlete', size: 'athletesmall1' },
    { src: 'assets/images/Stevenson.png', text: 'Jalen Brunson’s dominance at Stevenson High School was undeniable, leading his team to the 2015 Illinois 4A state championship. Named Illinois Mr. Basketball, he showcased elite leadership, scoring, and poise, setting the stage for future greatness.', size: 'athletesmall2' },
    { src: 'assets/images/U19-World-Cup.png', text: "Representing Team USA at the U19 World Cup, Brunson led with maturity beyond his years, guiding his squad to a gold medal. His stellar performance earned him tournament MVP, cementing his reputation as a rising international star.", size: 'athletesmall2.5'},
    { src: 'assets/images/Villinova-Freshmen.png', text: "In his freshman season at Villanova, Brunson’s court vision, decision-making, and composure under pressure played key roles in the Wildcats’ NCAA Championship run. His ability to contribute immediately made him a cornerstone of the program’s success.", size: 'athletesmall3' },
    { src: 'assets/images/Player-Of-The-Year.png', text: "By 2018, Brunson reached college basketball’s summit: National Player of the Year and a second NCAA title. His blend of scoring, leadership, and relentless work ethic made him one of Villanova’s most decorated players ever.", size: 'athletebig1' },
    { src: 'assets/images/Brunson-Draft.png', text: "Selected 33rd overall by the Dallas Mavericks, Brunson entered the NBA with a chip on his shoulder. Draft night marked the start of his professional journey, carrying the same work ethic that defined his earlier successes.", size: 'athletebig2' },
    { src: 'assets/images/22-PLayoffs.png', text: "In the 2022 NBA Playoffs with Dallas, Brunson delivered breakout performances, including a 41-point game against Utah. His poise, scoring versatility, and leadership on the big stage earned him league-wide respect and changed his career trajectory.", size: 'athletebig3' },
    { src: 'assets/images/Free-Agent.png', text: "Signing with the Knicks in 2022, Brunson instantly transformed the team’s culture. His leadership, clutch play, and ability to command the offense have reenergized Madison Square Garden, making New York a serious playoff contender again.", size: 'athletebig4'},
    { src: 'assets/images/All-Star-Jersey.png', text: "Brunson’s recent seasons have elevated him into All-Star and All-NBA conversations. His elite footwork, mid-range mastery, and leadership on both ends have established him as one of the league’s premier point guards and consistent difference-makers.", size: 'athletebig5'},
    { src: 'assets/images/24-25poster.png', text: "In playoff runs at Madison Square Garden, Brunson thrives under pressure. His ability to hit clutch shots, control tempo, and embrace the roaring New York crowd has made him a fan favorite and postseason leader.", size: "athleteBig6"},
    { src: 'assets/images/Clutch.png', text: "Brunson’s fearless late-game performances have earned him recognition as one of the league’s most reliable closers. The Clutch Player Award honors his ability to rise in decisive moments, delivering for his team when it matters most.", size: "athleteBig7"}
  ];

  if (athleteSection) {
    athleteImages.forEach(item => {
      const slide = document.createElement('div');
      slide.classList.add('slide');

      const img = document.createElement('img');
      img.src = item.src;
      img.classList.add(item.size);

      const cap = document.createElement('div');
      cap.classList.add('caption');
      cap.textContent = item.text;

      slide.appendChild(img);
      slide.appendChild(cap);
      athleteSection.appendChild(slide);
    });

    function transformAthlete() {
      const sectionParent = document.querySelector('.AtheleteSticky_Parent');
      if (!sectionParent) return;
      const sticky = sectionParent.querySelector('.AtheleteSticky');
      if (!sticky) return;
      const track = sticky.querySelector('.AtheleteScroll_section');
      if (!track) return;

      const offsetTop = sectionParent.offsetTop;
      const stickyHeight = sectionParent.clientHeight;
      const trackWidth = track.scrollWidth;
      const maxX = Math.max(0, trackWidth - window.innerWidth);

      const progress = clamp(
        (window.scrollY - offsetTop) / (stickyHeight - window.innerHeight),
        0, 1
      );

      const x = -maxX * progress;
      track.style.transform = `translate3d(${x}px, 0, 0)`;
    }

    // tune this: how many vertical pixels to scroll per 1px horizontal movement
const SCROLL_PER_PX = 1.6; // increase -> slower, decrease -> faster

function sizeAthleteTrack() {
  const sectionParent = document.querySelector('.AtheleteSticky_Parent');
  const sticky = sectionParent?.querySelector('.AtheleteSticky');
  const track = sticky?.querySelector('.AtheleteScroll_section');
  if (!sectionParent || !sticky || !track) return;

  const maxX = Math.max(0, track.scrollWidth - window.innerWidth);
  const targetHeightPx = window.innerHeight + maxX * SCROLL_PER_PX;

  // lock the parent height so progress maps 0..1 over the computed distance
  sectionParent.style.height = `${targetHeightPx}px`;
}

window.addEventListener('load', sizeAthleteTrack);
window.addEventListener('resize', sizeAthleteTrack);
sizeAthleteTrack();  // call once after slides are appended


    window.addEventListener('scroll', transformAthlete);
    window.addEventListener('resize', transformAthlete);
    window.addEventListener('load', transformAthlete);
    transformAthlete();
  } else {
    console.warn('No .AtheleteScroll_section found');
  }
