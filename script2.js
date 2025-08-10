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
    { src: 'assets/images/Stevenson.png', text: 'Training. Strength. Mobility.', size: 'athletesmall2' },
    { src: 'assets/images/Villinova-Freshmen.png', text: 'Reps. Footwork. Shot volume.', size: 'athletesmall3' },
    { src: 'assets/images/Player-Of-The-Year.png', text: 'Game day focus + recovery.', size: 'athletebig1' },
    { src: 'assets/images/Brunson-Draft.png', text: '2018', size: 'athletebig2' },
    { src: 'assets/images/22-PLayoffs.png', text: "2022 playoff run", size: 'athletebig3' },
    { src: 'assets/images/Free-Agent.png', text: "Signed to the Knicks", size: 'athletebig4'},
    { src: 'assets/images/All-Star-Jersey.png', text: "All Star jersey", size: 'athletebig5'},
    { src: 'assets/images/24-25poster.png', text: "2024-2025 knicks run", size: "athleteBig6"},
    { src: 'assets/images/Clutch.png', text: "Clutch Player of the Year", size: "athleteBig7"}
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

    window.addEventListener('scroll', transformAthlete);
    window.addEventListener('resize', transformAthlete);
    window.addEventListener('load', transformAthlete);
    transformAthlete();
  } else {
    console.warn('No .AtheleteScroll_section found');
  }
