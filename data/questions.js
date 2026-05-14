const quizConfig = {
  shuffleQuestions: false, // trộn câu
  shuffleOptions: true, // trộn đáp án
  shuffleBlocks: false, // trộn đoạn đọc
};
window.questions = [
  // ==========================================================
  // PHAN I: DIEN TU VUNG VAO CHO TRONG (CLOZE TEST - PASSAGE 1)
  // ==========================================================

  {
    type: "reading",
    passage:
      "Living independently allows students to develop valuable life skills, such as time management and financial responsibility. (1) ________ research, students who live independently tend to have better academic and personal growth.<br><br>The (2) ________ of students choosing to live on their own has increased dramatically over the past decade. This shift signifies a change in the way students are approaching their education and life with (3) ________.<br><br>Learning to manage finances and handle day-to-day challenges gives them a sense of autonomy. Many students (4) ________ each other in various social settings, which improves their communication (5) ________. Ultimately, independent living fosters greater self-reliance and responsibility, key qualities for future success.",
    questions: [
      {
        q: "Question 1: ",
        options: [
          "Thanks to",
          "In addition to",
          "On account of",
          "According to",
        ],
        answer: 3,
        // According to research - cum gioi tu chi nguon tham khao
      },
      {
        q: "Question 2:",
        options: ["portion", "item", "number", "amount"],
        answer: 2,
        // number of students - dung voi danh tu dem duoc so nhieu
      },
      {
        q: "Question 3: ",
        options: ["others", "each other", "the others", "another"],
        answer: 0,
        // life with others - song voi nguoi khac (ko xac dinh cu the)
      },
      {
        q: "Question 4: ",
        options: ["interact with", "stand out", "keep up", "focus on"],
        answer: 0,
        // interact with each other - tuong tac voi nhau
      },
      {
        q: "Question 5: ",
        options: ["skills", "challenges", "achievements", "responsibilities"],
        answer: 0,
        // communication skills - ky nang giao tiep
      },
    ],
  },

  // ==========================================================
  // PHAN I: DIEN TU VUNG VAO CHO TRONG (CLOZE TEST - PASSAGE 2)
  // ==========================================================

  {
    type: "reading",
    passage:
      "Modern technology is rapidly transforming how we interact with public services, making them significantly more efficient and secure. Consider, for example, the recent introduction of advanced biometric identification systems at major transport hubs. These solutions are designed to (6) ________ a seamless travel experience for everyone. By verifying identities quickly and accurately, they not only enhance security (7) ________ also dramatically reduce processing times. Passengers can now enjoy a (8) ________ verification process, cutting down on long queues and potential delays. These innovations also free up staff for (9) ________ important customer service roles. To fully benefit, we encourage everyone to familiarize with these new methods. Embracing such technological shifts can truly (10) ________ for our daily routines and overall safety.",
    questions: [
      {
        q: "Question 6: Chon tu/cum tu thich hop dien vao cho trong (6).",
        options: ["give", "make", "create", "provide"],
        answer: 3,
        // provide a seamless experience - provide + trai nghiem
      },
      {
        q: "Question 7: Chon tu/cum tu thich hop dien vao cho trong (7).",
        options: ["or", "but", "so", "and"],
        answer: 1,
        // not only... but also - cap lien tu tuong quan
      },
      {
        q: "Question 8: Chon tu/cum tu thich hop dien vao cho trong (8). Chon trinh tu tinh tu dung.",
        options: [
          "quick secure identity",
          "identity secure quick",
          "secure quick identity",
          "identity quick secure",
        ],
        answer: 0,
        // Trinh tu tinh tu tieng Anh: Y kien/chat luong - Toc do - Loai: quick (speed) secure (opinion/quality) - nhung day la cum tu bo nghia cho verification process: quick, secure la tinh tu, identity la danh tu. Dap an A: quick secure identity verification
      },
      {
        q: "Question 9: Chon tu/cum tu thich hop dien vao cho trong (9).",
        options: ["others", "the other", "other", "another"],
        answer: 2,
        // other important customer service roles - other + danh tu so nhieu (khong xac dinh)
      },
      {
        q: "Question 10: Chon tu/cum tu thich hop dien vao cho trong (10).",
        options: [
          "hold promises",
          "work wonders",
          "make efforts",
          "play games",
        ],
        answer: 1,
        // work wonders - lam ky dieu, hieu qua bat ngo
      },
    ],
  },

  // ==========================================================
  // PHAN II: SAP XEP CAU THANH DOAN VAN CO NGHIA
  // ==========================================================

  {
    type: "mcq",
    q: "a. Consequently, degraded ecosystems result in a loss of biodiversity, reduced natural resources, and increased vulnerability to climate change.<br>b. Restoring local ecosystems has become an urgent necessity as environmental degradation continues to escalate.<br>c. Without intervention, damaged ecosystems will struggle to recover, endangering both human well-being and wildlife.<br>d. Increased funding for ecosystem restoration can provide long-term benefits, such as improved resilience, biodiversity, and economic opportunities.<br>e. These efforts ensure a sustainable future, preserving natural resources and protecting communities from environmental disasters.",
    options: ["b-c-a-d-e", "b-a-c-d-e", "c-b-a-e-d", "b-c-d-a-e"],
    answer: 0,
    // b (gioi thieu van de) - c (hau qua neu khong hanh dong) - a (hau qua da xay ra) - d (giai phap tai chinh) - e (ket qua ky vong)
  },

  {
    type: "mcq",
    q: "[Lan: It helps me keep track of all my assignments and appointments. Plus, it keeps me focused on my goals.<br>b. Huy: I think using a planner might take too much time. I usually just rely on my phone's calendar.<br>c. Lan: I'm going to use a planner to stay organized and make sure I don't forget important things.<br>d. Huy: Why a planner?<br>e. Huy: How do you plan to manage your daily tasks now that you're living on your own?",
    options: ["e-c-d-a-b", "c-e-d-b-a", "d-b-a-e-c", "b-d-e-a-c"],
    answer: 0,
    // e (dat cau hoi mo dau) - c (Lan tra loi ke hoach) - d (Huy hoi tai sao) - a (Lan giai thich) - b (Huy phan bien)
  },

  {
    type: "mcq",
    q: "a. Nam believes that there are major teen problems today such as bullying, peer pressure, and body shaming that many people don't feel comfortable talking about them.<br>b. Mai agrees with him.<br>c. However, they'll try to use Mai's ideas for another project.<br>d. Finally, Nam suggests focusing their campaign on bullying because this issue is very common among teenagers these days.<br>e. Mark thinks they should focus on a problem teens struggle with every day.",
    options: ["a-b-e-c-d", "a-d-b-c-e", "e-b-a-d-c", "e-d-b-a-c"],
    answer: 2,
    // e (Mark neu quan diem chung) - b (Mai dong y) - a (Nam neu van de cu the) - d (Nam de xuat tap trung vao bully) - c (ket luan ve du an khac)
  },

  {
    type: "mcq",
    q: "a. I enjoy the freedom that comes with working from home, which lets me manage my time and focus better.<br>b. Though deadlines can be stressful, I enjoy the independence of setting my own schedule.<br>c. My love for languages and cultures naturally pushed me towards a career in translation and interpretation.<br>d. I'm thrilled with the opportunities my career offers and the way it aligns with my passion for languages.<br>e. This year, I've been working with an international firm, translating documents and providing language support in various settings.",
    options: ["c-e-a-b-d", "a-b-c-d-e", "b-c-d-a-e", "c-a-d-b-e"],
    answer: 0,
    // c (gioi thieu dam me) - e (cong viec hien tai) - a (uu diem lam viec tai nha) - b (kho khan nhung thich) - d (ket luan ve su nghiep)
  },

  {
    type: "mcq",
    q: "a. The growing student population has also brought in more businesses like convenience stores and gyms, making life more convenient for us.<br>b. This influx of students has led to crowded streets, especially during rush hour.<br>c. Many of the old buildings near campus have been replaced with new dorms and cafes, making the area feel more modern.<br>d. However, even though the town is growing, it still lacks a large library, which is a bit inconvenient for studying.<br>e. My university town has changed a lot over the last few years.",
    options: ["c-a-e-b-d", "d-c-a-b-e", "d-e-a-b-c", "e-c-a-b-d"],
    answer: 3,
    // e (gioi thieu chu de) - c (thay doi kien truc) - a (them nhieu tien ich) - b (mat tieu cuc) - d (van con thieu sot)
  },

  {
    type: "mcq",
    q: "[a. Lan: That's a great idea. I'm thinking of going to the show near Hoan Kiem Lake myself.<br>b. Mai: You should! The city has organized displays at several locations, so it should be easy for everyone to find a spot.<br>c. Lan: Did you hear about the fare exemption for Hanoi's public transport during the upcoming holiday?<br>d. Mai: Yes, I did! It's fantastic news. I'm planning to use the metro to get to the fireworks display.<br>e. Lan: Definitely. It'll be a nice way to enjoy the festivities without worrying about parking or traffic.",
    options: ["d-c-a-b-e", "c-d-a-e-b", "c-d-b-a-e", "c-d-a-b-e"],
    answer: 3,
    // c (Lan mo dau tin tuc) - d (Mai phan ung) - a (Lan chia se ke hoach) - b (Mai khuyen) - e (Lan dong y ket luan)
  },

  // ==========================================================
  // PHAN III: TRAC NGHIEM NGU PHAP - TU VUNG
  // ==========================================================

  {
    type: "mcq",
    q: "David denied ________ the accused man on the day of the crime.",
    options: ["having seen", "seen", "to have seen", "to see"],
    answer: 0,
    // deny + V-ing; perfect gerund (having seen) chi hanh dong xay ra truoc
  },

  {
    type: "mcq",
    q: "It is now considered essential for any new fish-farming businesses to consult the relevant ________ agency.",
    options: [
      "conservationist",
      "conservative",
      "conservation",
      "conservatism",
    ],
    answer: 2,
    // conservation agency - co quan bao ton (danh tu lam tinh tu bo nghia cho agency)
  },

  {
    type: "mcq",
    q: "I think this time we should focus on problems teens ________ every day because this won't be a big campaign.",
    options: ["stand up", "come over", "struggle with", "call off"],
    answer: 2,
    // struggle with - vat lon voi (van de hang ngay)
  },

  {
    type: "mcq",
    q: "His parents think his friends have a bad influence ________ him. Therefore, they do not allow him to hang out with them.",
    options: ["for", "on", "with", "in"],
    answer: 1,
    // have an influence on sb - gioi tu co dinh
  },

  {
    type: "mcq",
    q: "________ can lead to unhealthy behaviors, such as extreme dieting or excessive exercise.",
    options: ["Cyberbullying", "Toxic friends", "Alcoholic", "Body shaming"],
    answer: 3,
    // Body shaming dan den hanh vi an kieng qua muc hoac tap the duc qua do
  },

  {
    type: "mcq",
    q: "Clearing forests for timber has ________ the loss of biodiversity.",
    options: ["connected with", "looked at", "resulted in", "stood for"],
    answer: 2,
    // result in - dan den (ket qua)
  },

  {
    type: "mcq",
    q: "Campaigns have led to a dramatic increase in ________ of social issues.",
    options: ["knowledge", "awareness", "sympathy", "experience"],
    answer: 1,
    // awareness of social issues - nhan thuc ve cac van de xa hoi
  },

  {
    type: "mcq",
    q: "It was brave of her to ________ those bullies.",
    options: ["came up against", "stand up to", "kept up with", "put up with"],
    answer: 1,
    // stand up to - dung len chong lai; (to + those bullies)
  },

  {
    type: "mcq",
    q: "________ involves thousands of people visiting the same place at the same time.",
    options: [
      "Ecotourism",
      "Responsible tourism",
      "Sustainable tourism",
      "Mass tourism",
    ],
    answer: 3,
    // Mass tourism - du lich dai tra, hang nghin nguoi cung mot dia diem
  },

  {
    type: "mcq",
    q: "Lan and her friends decided to start an awareness campaign to ________ attention to a pressing social issue.",
    options: ["look", "bring", "keep", "draw"],
    answer: 3,
    // draw attention to - thu hut su chu y
  },

  {
    type: "mcq",
    q: 'Yen: "What do you think about his speech on protecting the ecosystem?"<br>Duong: "________ It was useful and well-prepared."',
    options: [
      "It is my favourite.",
      "I am not really into it.",
      "I feel nervous.",
      "I am afraid I cannot make it.",
    ],
    answer: 0,
    // Duong khen bai phat bieu - "It is my favourite" phu hop nhat truoc loi giai thich "useful and well-prepared"
    //WR - Dap an kha tranh cai, vi "It is my favourite" nghe co ve khong tu nhien bang "I think it was great." Tuy nhien theo cac luac chon thi A la hop ly nhat.
  },

  {
    type: "mcq",
    q: "Examples of ________ can range from insults on instant messages to photos shared without consent.",
    options: ["hurting", "frightening", "cyberbullying", "cyberterrorism"],
    answer: 2,
    // cyberbullying - bao luc mang (tu nhan xet den anh chia se khong co su dong y)
  },

  {
    type: "mcq",
    q: "There is tremendous peer ________ among teenagers to dress a certain way.",
    options: ["stress", "tension", "pressure", "reaction"],
    answer: 2,
    // peer pressure - ap luc ban be
  },

  {
    type: "mcq",
    q: "We should raise people's awareness ________ these social issues.",
    options: ["with", "in", "on", "of"],
    answer: 3,
    // awareness of - nhan thuc ve (gioi tu co dinh)
  },

  {
    type: "mcq",
    q: "The problems of ________, homelessness and unemployment are all interconnected.",
    options: ["happiness", "hopelessness", "honesty", "poverty"],
    answer: 3,
    // poverty, homelessness, unemployment - ba van de xa hoi lien quan
  },

  {
    type: "mcq",
    q: "This week's broadcast features a report on victims of domestic ________.",
    options: ["violence", "war", "argument", "debate"],
    answer: 0,
    // domestic violence - bao luc gia dinh
  },

  {
    type: "mcq",
    q: "Carol showed up for the meeting ________ I asked her not to be there.",
    options: ["even though", "despite", "provided that", "because"],
    answer: 0,
    // even though + menh de - mac du (su tuong phan)
  },

  {
    type: "mcq",
    q: "I turned on the fan ________ the room was hot.",
    options: ["due to", "despite", "even though", "because"],
    answer: 3,
    // because + menh de - vi (nguyen nhan)
  },

  {
    type: "mcq",
    q: "The sky was grey and cloudy. ________, we went to the beach.",
    options: ["Therefore", "However", "Even though", "In spite of"],
    answer: 1,
    // However - tuy nhien (lien tu phu nghich dung dau menh de)
  },

  {
    type: "mcq",
    q: "I ask Mary to run the office while I'm away ________ I know I can depend on her.",
    options: ["unless", "since", "although", "therefore"],
    answer: 1,
    // since - vi (dua tren ly do hien tai)
  },

  {
    type: "mcq",
    q: "________ Nancy is an honest person, I still wonder whether she's telling the truth about the incident.",
    options: ["In spite of", "Since", "Though", "In the event that"],
    answer: 2,
    // Though + menh de - du rang (tuong phan, nhuong bo)
  },

  {
    type: "mcq",
    q: "She does not approve ________ what I said. Peer pressure sometimes can be positive.",
    options: ["in", "on", "off", "of"],
    answer: 3,
    // approve of - chap thuan, dong y
  },

  {
    type: "mcq",
    q: "Many teenagers experienced body shaming as they are not ________.",
    options: ["drunk", "slim", "painful", "offensive"],
    answer: 1,
    // slim - thon gon (ly do bi body shaming vi khong dat chuan ngoai hinh)
  },

  {
    type: "mcq",
    q: "Schools often have ________ actions to protect students and maintain a positive learning environment.",
    options: ["anti-bullying", "case", "distance", "awareness"],
    answer: 0,
    // anti-bullying actions - hanh dong chong bao luc hoc duong
  },

  {
    type: "mcq",
    q: "A lot of people joined our campaign. ________, it was a huge success.",
    options: ["Moreover", "However", "As a result", "Besides"],
    answer: 2,
    // As a result - vi vay (ket qua logic)
  },

  {
    type: "mcq",
    q: "He is asking his parents to buy him a new smartphone so that he can ________ with his new friends.",
    options: ["stand up", "fit in", "take off", "call on"],
    answer: 1,
    // fit in with - hoa nhap, thuoc ve nhom
  },

  {
    type: "mcq",
    q: "________ the rules and regulations of society is seen as a sign of respect.",
    options: ["Bullying", "Struggling", "Obeying", "Skipping"],
    answer: 2,
    // Obeying the rules - tuan theo quy tac (dau hieu cua su ton trong)
  },

  {
    type: "mcq",
    q: "We should focus on problems teens ________ every day because this won't be a big campaign.",
    options: ["stand up", "come over", "struggle with", "call off"],
    answer: 2,
    // struggle with - vat lon voi (lap lai chua Q3 Phan III)
  },

  {
    type: "mcq",
    q: 'Jane is talking to his teacher, Peter:<br>Jane: "I think I cannot meet the deadline of this project, teacher! I had a severe headache last night."<br>Peter: "That\'s okay! ________"',
    options: [
      "What a pity!",
      "I can sympathise.",
      "How disappointing!",
      "You should quit the course.",
    ],
    answer: 1,
    // I can sympathise - toi co the cam thong (thay giao dong cam voi hoc sinh)
  },

  {
    type: "mcq",
    q: "You can see ________ animals like aquatic birds, crocodiles, and Indian elephants in Nagarahole National Park in India.",
    options: ["nature", "wildlife", "environment", "open"],
    answer: 1,
    // wildlife animals - dong vat hoang da
  },

  {
    type: "mcq",
    q: "No building can be put up in this conservation ________.",
    options: ["work", "size", "extent", "area"],
    answer: 3,
    // conservation area - khu bao ton
  },

  {
    type: "mcq",
    q: "They will be able to ________ voice to suggestions and solutions to these problems.",
    options: ["lend", "express", "raise", "give"],
    answer: 3,
    // give voice to - noi len, bieu dat (ý kien, de xuat)
  },

  {
    type: "mcq",
    q: "________ becomes more and more popular in the world.",
    options: [
      "It is English that",
      "English that",
      "It was English that",
      "It was English which",
    ],
    answer: 0,
    // Cau biet ngu voi thi hien tai: It is English that becomes... (nhan manh chu ngu)
  },

  {
    type: "mcq",
    q: "There is a growing body of evidence that the vaccine ________ by Biotech Firm can have some serious side effects.",
    options: ["developing", "to be develop", "is developed", "developed"],
    answer: 3,
    // developed - qua khu phan tu (the vaccine developed = the vaccine which was developed)
  },

  {
    type: "mcq",
    q: "The locals were appreciative of the volunteers' efforts to reconstruct their buildings ________ during the storm.",
    options: ["collapsed", "collapsing", "were collapsed", "were collapsing"],
    answer: 0,
    // collapsed - qua khu phan tu (buildings collapsed = buildings which collapsed/had collapsed)
  },

  {
    type: "mcq",
    q: "________ skills are important because we hardly have enough time to do everything that we want to do.",
    options: [
      "Time management",
      "Money management",
      "Life management",
      "Work management",
    ],
    answer: 0,
    // Time management skills - ky nang quan ly thoi gian
  },

  {
    type: "mcq",
    q: "This ________ bird could have been extinct but thanks to considerable efforts put in to save it, it still persists.",
    options: ["endanger", "endangering", "endangered", "endangerment"],
    answer: 2,
    // endangered bird - loai chim nguy cap (qua khu phan tu lam tinh tu)
  },

  {
    type: "mcq",
    q: "Almost 3000 homes and many buildings have been ________ since the great storm broke.",
    options: ["wasted", "killed", "destroyed", "defeated"],
    answer: 2,
    // destroyed - bi pha huy (cong trinh/nha cua)
  },

  {
    type: "mcq",
    q: "________ can sometimes lead students to do bad behaviours such as drinking alcohol, but it can also encourage positive choices.",
    options: [
      "Peer influence",
      "Social group",
      "School performance",
      "Body shaming",
    ],
    answer: 0,
    // Peer influence - anh huong tu ban be (co the tieu cuc hoac tich cuc)
  },

  {
    type: "mcq",
    q: "Grand Canyon is a land of breathtaking natural beauty and wide regional diversity which is created by massive mountains, plain areas and deserts. The word 'diversity' is CLOSEST in meaning to ________.",
    options: ["difference", "similarity", "stability", "feature"],
    answer: 0,
    // diversity = variety/difference - su da dang, khac biet
  },

  {
    type: "mcq",
    q: "It is parents ________ help their children understand the risks and responsibilities that come with using money.",
    options: ["when", "where", "which", "who"],
    answer: 3,
    // Cau biet ngu nhan manh chu ngu nguoi: It is parents who...
  },

  {
    type: "mcq",
    q: "My father doesn't like some of my friends ________ he thinks they have a bad influence on me.",
    options: ["because", "due to", "so", "but"],
    answer: 0,
    // because + menh de chi nguyen nhan
  },

  {
    type: "mcq",
    q: "It is never easy to stand up to peer pressure; ________, many teenagers copy their peer bad behaviours.",
    options: ["in addition", "because", "as a result", "so"],
    answer: 2,
    // as a result - vi vay, ket qua la (dung dau menh de sau dau cham phay)
  },

  {
    type: "mcq",
    q: "________ some students are living in poverty, they are still very positive about the future.",
    options: ["As", "Besides", "Moreover", "Although"],
    answer: 3,
    // Although + menh de - mac du (tuong phan)
  },

  {
    type: "mcq",
    q: "________ is a growing concern as technology becomes more common in students' lives.",
    options: ["Overpopulation", "Policy", "Self-confidence", "Cyberbullying"],
    answer: 3,
    // Cyberbullying - bao luc mang (moi lo ngai khi cong nghe phat trien)
  },

  // ==========================================================
  // PHAN IV: DOC HIEU - MODERN TECHNOLOGIES AND COMMUNICATION
  // ==========================================================

  {
    type: "reading",
    passage:
      "Modern technologies have changed the way that people communicate with one another. These technologies provide new and innovative ways for people to communicate - text messaging, email, chat and social networks. They allow faster and more efficient communication and can help build relationships. However, modern technologies can also have negative effects such as limiting personal contact and straining relationships. The nature of the effect depends in large part on the type of relationship.<br><br>Modern technologies limit the amount of separation between work and home. With the advent of computers, the Internet and cell phones people can - and are often expected to - address work issues from home. This can limit family interactions and cause conflict between family members. The use of Internet and television by children and teenagers also limits the amount time spent with family and can increase conflict between children and their parents.<br><br>Young people use modern technologies in increasing numbers to communicate with their friends. Text messaging and online chats have become the preferred method of youth communication. A California State University and UCLA study indicates that for young people face-to-face interactions are less desirable than modern modes of communication. This preference could cause an inability to form lasting friendships or difficulty understanding social cues. Others believe that modern technologies increase communication and therefore strengthen friendships.<br><br>Starting new relationships - romantic and otherwise - can be difficult. Modern technologies allow people to make new connections without the fears characteristic of face-to-face contact. The anonymity and low risk are what makes Internet dating and social networks popular ways of meeting people. However, this anonymity can also be dangerous. In April 2011, a woman sued an online dating site after allegedly being raped by a man she met online.<br><br>Modern technologies allow couples to be in contact with each other more than ever before. This can lead to increased expectations and conflict. With the increasing use of cell phones and email, people often expect an instant reply to communication. A delayed reply - or none at all - can lead to suspicion and anger. The use of social networks can also affect relationships. Information that was once private - such as relationship conflicts - is now part of the public sphere.",
    questions: [
      {
        q: "Question 1: Which of the following can be the best title for the passage?",
        options: [
          "The advantages and disadvantages of social networks on communication",
          "The positive and negative effects of modern technologies on communication",
          "The differences between the way people communicate in the past and now",
          "How people's relationships have to change to keep up with the development of modern technologies",
        ],
        answer: 1,
        // Bai doc noi ve ca tac dong tich cuc lan tieu cuc cua cong nghe hien dai len giao tiep
      },
      {
        q: "Question 2: The word 'They' in the first paragraph refers to ________.",
        options: [
          "Emails",
          "Relationships",
          "Social networks",
          "Modern technologies",
        ],
        answer: 3,
        // They = Modern technologies (chu ngu cua menh de truoc)
      },
      {
        q: "Question 3: According to paragraph 2, why do modern technologies cause conflict between family members?",
        options: [
          "Because people often take advantage of these technologies to work from home.",
          "Since parents spend so much time on TV and the Internet that they can't take care of their children.",
          "As the pressure of work in modern time is too heavy for parents to solve at the workplace.",
          "Because people prefer spending time on the Internet to talking with each other.",
        ],
        answer: 0,
        // Cong viec tran vao nha qua cong nghe, han che tuong tac gia dinh
      },
      {
        q: "Question 4: What does the phrase 'this preference' in paragraph 3 refer to?",
        options: [
          "the preference for face-to-face communication.",
          "the preference to young people.",
          "the preference for communicating by modern modes.",
          "the preference for communicating with their friends.",
        ],
        answer: 2,
        // this preference = (the preference for) modern modes of communication (thay vi giao tiep truc tiep)
      },
      {
        q: "Question 5: Which of the following is NOT true, according to the passage?",
        options: [
          "People are easier to keep in touch with their friends.",
          "Singles can have all information about their partners before face-to-face meeting.",
          "More work is done from home instead of at the workplace.",
          "People will have a more efficient way to build new relationships.",
        ],
        answer: 1,
        // B sai - bai doc khong noi rang nguoi doc than co the biet TAT CA thong tin ve doi tuong truoc khi gap mat; ma chi noi tinh an danh va it rui ro
      },
      {
        q: "Question 6: The word 'instant' in paragraph 5 is OPPOSITE in meaning to ________.",
        options: ["exact", "appropriate", "delayed", "immediate"],
        answer: 2,
        // instant = immediate (tuc thi) >< delayed (bi tri hoan)
      },
      {
        q: "Question 7: It can be inferred from the last paragraph that ________.",
        options: [
          "people's personal information now is no longer confidential due to the social networks.",
          "people's relationships become worse and worse with the increasing use of modern technologies.",
          "couples are likely to separate because of the pressure of keeping in touch on social networks.",
          "conflicts between people are not difficult to solve with the help of modern technologies.",
        ],
        answer: 0,
        // Suy luan: Thong tin tu rieng tu giu day tro thanh cong khai tren mang xa hoi
      },
    ],
  },

  // ==========================================================
  // PHAN V: VIET LAI CAU (REWRITE)
  // ==========================================================

  {
    type: "rewrite",
    q: "Many people destroy forests uncontrollably. Many animal species are facing extinction. (Because of)",
    answer: [
      "Because of many people destroying forests uncontrollably, many animal species are facing extinction.",
      "Because of the uncontrollable destruction of forests by many people, many animal species are facing extinction.",
    ],
    // Because of + N/V-ing clause - ket noi nguyen nhan
  },

  {
    type: "rewrite",
    q: "Despite development in agriculture, hunger and food insecurity still exist globally. (Although)",
    answer: [
      "Although agriculture has developed, hunger and food insecurity still exist globally.",
      "Although there has been development in agriculture, hunger and food insecurity still exist globally.",
    ],
    // Although + menh de chinh - tuong phan voi Despite + N
  },

  {
    type: "rewrite",
    q: "I was injured. I kept running forward. (Although)",
    answer: [
      "Although I was injured, I kept running forward.",
      "Although I had been injured, I kept running forward.",
    ],
    // Although + menh de phu - mac du bi thuong van chay tiep
  },

  {
    type: "rewrite",
    q: "Because of poverty, many children are forced to drop out of school. (Because)",
    answer: [
      "Because many children are living in poverty, they are forced to drop out of school.",
      "Because they are poor, many children are forced to drop out of school.",
    ],
    // Because + menh de chinh thay cho Because of + N
  },

  {
    type: "rewrite",
    q: "Helen was very lazy. She passed the final examination well. (Although)",
    answer: [
      "Although Helen was very lazy, she passed the final examination well.",
      "Although she was very lazy, Helen passed the final examination well.",
    ],
    // Although - tuong phan giua luoi bieng va ket qua tot
  },

  {
    type: "rewrite",
    q: "Several people cannot control their anger when drinking alcohol. They become violent. (As a result)",
    answer: [
      "Several people cannot control their anger when drinking alcohol. As a result, they become violent.",
      "Several people cannot control their anger when drinking alcohol; as a result, they become violent.",
    ],
    // As a result - ket qua cua viec khong kiem soat duoc con gian
  },

  {
    type: "rewrite",
    q: "Alcohol can affect people's mind and behaviour. They can cause other health problems. (Consequently)",
    answer: [
      "Alcohol can affect people's mind and behaviour. Consequently, they can cause other health problems.",
      "Alcohol can affect people's mind and behaviour; consequently, it can cause other health problems.",
    ],
    // Consequently - dung dau cau hoac sau dau cham phay
  },

  {
    type: "rewrite",
    q: "Sharing someone's personal information online is illegal. You should be very careful about what you post online. (Therefore)",
    answer: [
      "Sharing someone's personal information online is illegal. Therefore, you should be very careful about what you post online.",
      "Sharing someone's personal information online is illegal; therefore, you should be very careful about what you post online.",
    ],
    // Therefore - vi vay (dua ra loi khuyen tu thuc te phap ly)
  },

  {
    type: "rewrite",
    q: "They had a flat tire. They managed to reach their destination on time. (Although)",
    answer: [
      "Although they had a flat tire, they managed to reach their destination on time.",
      "They managed to reach their destination on time although they had a flat tire.",
    ],
    // Although - mac du bi xep banh van den kip gio
  },

  {
    type: "rewrite",
    q: "It rained heavily. The soccer match continued as scheduled. (In spite of)",
    answer: [
      "In spite of the heavy rain, the soccer match continued as scheduled.",
      "In spite of it raining heavily, the soccer match continued as scheduled.",
      "The soccer match continued as scheduled in spite of the heavy rain.",
    ],
    // In spite of + N/V-ing - mac du mua lon tran dau van dien ra
  },

  {
    type: "rewrite",
    q: "Jane studies for exams. She also participates in extracurricular activities. (In addition to)",
    answer: [
      "In addition to studying for exams, Jane also participates in extracurricular activities.",
      "In addition to her exam studies, Jane also participates in extracurricular activities.",
    ],
    // In addition to + V-ing - ngoai viec hoc ky thi
  },

  {
    type: "rewrite",
    q: "It is warm and sunny today. We go to the park. (Because)",
    answer: [
      "Because it is warm and sunny today, we go to the park.",
      "We go to the park because it is warm and sunny today.",
    ],
    // Because - vi troi am va nhieu nang nen di cong vien
  },

  {
    type: "rewrite",
    q: "Although the weather was bad, the football match went ahead. (Despite)",
    answer: [
      "Despite the bad weather, the football match went ahead.",
      "Despite the weather being bad, the football match went ahead.",
      "The football match went ahead despite the bad weather.",
    ],
    // Despite + N/V-ing - chuyen doi tu Although + menh de
  },

  {
    type: "rewrite",
    q: "The teacher explained the lesson again. He wanted his students to understand it clearly. (in order that)",
    answer: [
      "The teacher explained the lesson again in order that his students could understand it clearly.",
      "The teacher explained the lesson again in order that his students would understand it clearly.",
    ],
    // in order that + menh de - muc dich (can them modal verb)
  },

  {
    type: "rewrite",
    q: "We wore warm clothes. We didn't want to get cold during the hike. (so that)",
    answer: [
      "We wore warm clothes so that we wouldn't get cold during the hike.",
      "We wore warm clothes so that we didn't get cold during the hike.",
    ],
    // so that - de khong bi lanh (muc dich + phu dinh)
  },
];

// So luong cau hoi: 72 cau (bao gom cac cau con trong READING va TRUEFALSE)
// Export de su dung
// module.exports = quizData;
