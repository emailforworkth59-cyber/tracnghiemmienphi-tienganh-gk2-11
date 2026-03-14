const quizConfig = {
  shuffleQuestions: false, // trộn câu
  shuffleOptions: true, // trộn đáp án
  shuffleBlocks: false, // trộn đoạn đọc
};
window.questions = [
  // ===== I. GRAMMAR AND VOCABULARY =====
  {
    type: "mcq",
    q: "Đon Ca Tai Tu is a traditional Vietnamese ___________ that combines music and poetry.",
    options: [
      "A. crowdfunding",
      "B. cultural heritage",
      "C. ancient architecture",
      "D. performing art",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "Next year, I have to decide which area of medicine I want to _________ in.",
    options: ["A. come", "B. focus", "C. Hand", "D. specialise"],
    answer: 3,
  },
  {
    type: "mcq",
    q: "______ teenagers to study local heritages, Can Tho university hosted several trips to other provinces.",
    options: [
      "A. To encourage",
      "B. Encouraging",
      "C. To encouraging",
      "D. Encouraged",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "For newcomers, the first place _______ in Can Tho is the bustling Cái Răng Floating Market.",
    options: ["A. visiting", "B. to visiting", "C. to visit", "D. is visited"],
    answer: 2,
  },
  {
    type: "mcq",
    q: "___________ helps protect and restore heritage by raising money for cultural projects.",
    options: ["A. Limestone", "B. Crowdfunding", "C. Valley", "D. State"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Marleen is the only girl ________ her opinion about going to historical sites.",
    options: ["A. to raise", "B. raising", "C. raised", "D. raises"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "___________ a perfect trip to famous heritages, they visited many tourism websites.",
    options: ["A. Planning", "B. To plan", "C. To planning", "D. Planned"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "Exploring ancient temples and pagodas has become a ________ activity for tourists who visit the Mekong Delta.",
    options: ["A. trending", "B. festive", "C. folk", "D. ancient"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Quin is always concerned about the group project, but he never gave voice _____ it.",
    options: ["A. for", "B. at", "C. in", "D. to"],
    answer: 3,
  },
  {
    type: "mcq",
    q: "In an effort to __________ cultural diversity, the festival featured performances of folk singing from mixed heritage communities.",
    options: ["A. recommend", "B. punish", "C. preserve", "D. reduce"],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Son Doong Cave is the largest cave __________ in Phong Nha-Ke Bang National Park.",
    options: [
      "A. to discover",
      "B. discovering",
      "C. to be discovered",
      "D. having discovered",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "After high school, many students choose to pursue __________ education, which includes universities and colleges.",
    options: ["A. vocational", "B. higher", "C. basic", "D. primary"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "A(n) _____ is a program where individuals receive training for a specific job while working.",
    options: [
      "A. internship",
      "B. gap year",
      "C. apprenticeship",
      "D. vocation",
    ],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Before enrolling in a university, many institutions require students to pass an __________.",
    options: [
      "A. exit exam",
      "B. online test",
      "C. interview",
      "D. entrance exam",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "In the job market, having a specific set of skills and ______ can increase your employment opportunities.",
    options: ["A. hobbies", "B. qualifications", "C. secrets", "D. ideas"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "A __________ is an informational booklet that provides details about educational programs and institutions.",
    options: ["A. novel", "B. brochure", "C. letter", "D. report"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "He regrets __________ so much money on unnecessary things.",
    options: ["A. spend", "B. to spend", "C. having spent", "D. spent"],
    answer: 2,
  },
  {
    type: "mcq",
    q: "__________ finished all my homework, I had some free time to relax.",
    options: ["A. Having", "B. Have", "C. Had", "D. Has"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "____________ her fears, she gave an excellent speech.",
    options: [
      "A. Having overcome",
      "B. Having been overcome",
      "C. Not having overcome",
      "D. Not having been overcome",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "To maintain independence, avoid _________ into the habit of procrastination.",
    options: ["A. getting", "B. to get", "C. get", "D. got"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Knowing how to use public transportation is essential to get _____ in the city.",
    options: ["A. onto", "B. into", "C. around", "D. within"],
    answer: 2,
  },
  {
    type: "mcq",
    q: "Emily makes ________ online resources to research and learn new things.",
    options: ["A. use of", "B. ends meet", "C. up with", "D. around"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "She specializes in ________ novels set in 18th-century England.",
    options: ["A. history", "B. historical", "C. ancient", "D. past"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "It is not easy at all to get a good job without any ____ qualifications.",
    options: ["A. academic", "B. social", "C. great", "D. favorite"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "______ education is a popular option for school-leavers who don't go to university.",
    options: ["A. Vocational", "B. Academic", "C. Secondary", "D. Formal"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "My brother wasn't offered the job because he didn't have the right ______.",
    options: [
      "A. qualifications",
      "B. trades",
      "C. apprentices",
      "D. skilled people",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "My father was proud of ________ many beautiful places in Viet Nam.",
    options: [
      "A. having visited",
      "B. visited",
      "C. have visited",
      "D. has visited",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Besides Con Moong Cave, other significant ______ sites have been investigated and excavated.",
    options: [
      "A. environmental",
      "B. technological",
      "C. important",
      "D. archaeological",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "Visitors should be careful not to litter at heritage sites, or they may have to pay a ________.",
    options: ["A. cost", "B. money", "C. finance", "D. fine"],
    answer: 3,
  },
  {
    type: "mcq",
    q: "I don't recall ______ him at the conference.",
    options: [
      "A. having seen",
      "B. to have seen",
      "C. having been seen",
      "D. to have been seen",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Traditional festivals are an important part of Vietnam's _______ heritage.",
    options: ["A. natural", "B. cultural", "C. historical", "D. historic"],
    answer: 1,
  },
  {
    type: "mcq",
    q: "These festivals are closely connected with _______ customs and rituals.",
    options: ["A. other", "B. others", "C. another", "D. the others"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "During festivals, people gather to celebrate, share joy, and _______ traditional values.",
    options: ["A. preserve", "B. destroy", "C. avoid", "D. reduce"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Many festivals include folk games, music, and dances, _______ attract tourists from different regions.",
    options: ["A. which", "B. who", "C. when", "D. where"],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Such events help ensure that cultural traditions are _______ to future generations.",
    options: [
      "A. passed down",
      "B. passed away",
      "C. passed out",
      "D. passed by",
    ],
    answer: 0,
  },

  // ===== II. READING =====
  {
    type: "reading",
    passage:
      "Dear Sir or Madam,<br>I am interested (36)_______________ applying to your college for admission to (37)_________ first year of the nurse training programme. I have visited the programme's website, reviewed the programme's brochure, and I would really appreciate it if you could send me information about the training programme.<br>I am interested in learning more about (38)_______ requirements, and areas of specialization. I would also like to know if grants or scholarships are available for first-year students.<br>If you have any questions about my request, please contact me by phone at 0946 9876 345 or by email at nguyenan2010@gmail.com. I look forward to hearing from you soon.<br>Yours faithfully,<br>Nguyen An",
    questions: [
      {
        q: "I am interested (36)_______________ applying to your college...",
        options: ["A. In", "B. On", "C. At", "D. For"],
        answer: 0,
      },
      {
        q: "...for admission to (37)_________ first year of the nurse training programme.",
        options: ["A. A", "B. An", "C. The", "D. Ø (no article)"],
        answer: 2,
      },
      {
        q: "I am interested in learning more about (38)_______ requirements, and areas of specialization.",
        options: [
          "A. Accepting",
          "B. Admission",
          "C. Performance",
          "D. Result",
        ],
        answer: 1,
      },
    ],
  },
  {
    type: "reading",
    passage:
      "Dear Sir or Madam,<br>My name is Atharva Ahire and I am a third-year BFM student at M.L. Dahanukar College. I would like (39)_______ for an internship of 3 months at your company as a stockbroker to get experience in the finance field.<br>I ________(40) the job description and it says the internship is not paid and I am totally fine with it. Gaining experience from a reputed company like yours ___________(41) my main motivation. I have attached my CV and all the required documents with the letter.<br>I shall be highly obliged if you accept my request for an internship at your company.<br>Thank you in anticipation.<br>Yours truly,",
    questions: [
      {
        q: "",
        options: ["A. Apply", "B. Applying", "C. To apply", "D. Applied"],
        answer: 2,
      },
      {
        q: "I",
        options: ["A. Read", "B. Have read", "C. Will read", "D. Am reading"],
        answer: 1,
      },
      {
        q: "",
        options: ["A. Is", "B. Are", "C. Were", "D. Was"],
        answer: 0,
      },
    ],
  },
  {
    type: "mcq",
    q: "Choose the correct arrangement of the sentences to make a meaningful paragraph.<br>a. Also, voluntary tasks help them connect with the community, making them aware of the needs around them.<br>b. In addition to this, students develop teamwork and communication skills while they volunteer.<br>c. Firstly, they will gain valuable real-world experience which can help in their future careers.<br>d. Last but not least, doing volunteer work can be a rewarding job, as students feel great about helping others.<br>e. Upper secondary school students get many benefits from doing voluntary work.",
    options: [
      "A. e — a — c — b — d",
      "B. c — e — a — b — d",
      "C. c — a — b — d — e",
      "D. e — c — a — b — d",
    ],
    answer: 3,
  },
  {
    type: "mcq",
    q: "Choose the correct arrangement of the sentences to make a meaningful paragraph.<br>a. Firstly, festivals are a great way to understand a nation's culture.<br>b. Finally, Western festivals also encourage extra-curricular activities at schools.<br>c. In my opinion, celebrating Western festivals has positive effects on young Vietnamese.<br>d. In conclusion, I believe Western festivals do no harm to Vietnamese young people.<br>e. Secondly, festivals help bring fun, happiness and joy to young people's lives.",
    options: ["A. a-b-c-d-e", "B. c-d-a-e-b", "C. a-e-b-c-d", "D. c-a-e-b-d"],
    answer: 3,
  },
  {
    type: "mcq",
    q: "Choose the correct arrangement of the sentences to make a meaningful letter.<br>a. I am interested in this job because I am a regular visitor of the Museum and I would love to challenge myself working in a new environment.<br>b. Dear Sir/Madam, My name is Hannah Eastwood. I am a 26 years old female from Nottingham.<br>c. Thank you for your consideration and I am looking forward to hearing back from you.<br>d. I came across your advertisement in the Sun newspaper and want to apply for the temporary cashier position at City Museum Shop.<br>e. I have 3 years experience working in the customer service sector. I used to work as a cashier at an ASDA store for 2 years and as a store helper for a year.<br>f. Yours sincerely,",
    options: [
      "A. b — d — e — a — c — f",
      "B. b — c — a — e — d — f",
      "C. b — e — d — a — c — f",
      "D. b — a — d — e — c — f",
    ],
    answer: 0,
  },
  {
    type: "mcq",
    q: "Choose the correct arrangement of the sentences to make a meaningful letter.<br>a. There will be buffet and of course singing and dancing.<br>b. Dear Kate, I've passed the entrance exam to Hanoi University of Science.<br>c. I look forward to your joining our party. I'm very happy if you say \"Yes\".<br>d. On this occasion, I am celebrating a warm party at home on Saturday, September 18th at 5 p.m. Would you like to come?<br>e. I also invite most of our classmates to come. This is an opportunity for all of us to meet each other for such a long time.<br>f. Love,",
    options: [
      "A. b — d — e — a — c — f",
      "B. b — c — a — e — d — f",
      "C. b — e — d — a — c — f",
      "D. b — a — d — e — c — f",
    ],
    answer: 0,
  },
  {
    type: "reading",
    passage:
      "Preserving our heritage is a crucial task that involves safeguarding our cultural history and identity. It means protecting both the physical objects and the intangible aspects of our past that have been passed down to us. Things like historical sites, artifacts, traditions, and languages are all part of our heritage and deserve to be taken care of.<br>Nations should be in an attempt to preserve their heritage because heritage allows future generations to learn from and appreciate the accomplishments and struggles of those who came before us. It helps us understand where we come from and how our societies have developed over time.<br>When we preserve our heritage, we also feel a strong sense of belonging, as it connects us to our shared history and cultural practices. In addition, preserving heritage promotes cultural diversity and encourages communication between different cultures. It helps us appreciate the uniqueness of each culture and promotes respect and understanding among people. By celebrating and protecting our diverse heritage, we create opportunities for cultural exchange, which brings people together and helps build a more harmonious and inclusive society.<br>Preserving heritage is not just a responsibility; it is an investment in our collective memory, identity, and the future well-being of generations to come. So let's cherish and protect our heritage, ensuring that it continues to enrich and inspire us for years to come.<br>(Adapted from Heritage Daily)",
    questions: [
      {
        q: "Which of the following can be the best title for the passage?",
        options: [
          "A. The Importance of Preserving Cultural Heritage",
          "B. Safeguarding Our Heritage for Future Generations",
          "C. Promoting Cultural Diversity through Heritage Preservation",
          "D. The Significance of Heritage in Building Inclusive Societies",
        ],
        answer: 0,
      },
      {
        q: "According to paragraph 1, preserving heritage means ________.",
        options: [
          "A. protecting the environment around us so that it will be sustainable",
          "B. carefully protecting historical sites and tourist attractions",
          "C. protecting both tangible and intangible aspects of our inherited past",
          "D. protecting the traditional values passed down from previous generations",
        ],
        answer: 2,
      },
      {
        q: 'The word "it" in paragraph 2 refers to ________.',
        options: [
          "A. future generation",
          "B. heritage",
          "C. nation",
          "D. accomplishments and struggles",
        ],
        answer: 1,
      },
      {
        q: 'The word "uniqueness" in paragraph 2 is closest in meaning to ________.',
        options: [
          "A. differentiation",
          "B. similarity",
          "C. resemblance",
          "D. distinctiveness",
        ],
        answer: 3,
      },
      {
        q: "Why should nations preserve their heritage?",
        options: [
          "A. To make more money",
          "B. To learn from the past and feel connected to history",
          "C. To build new cities",
          "D. To create more schools",
        ],
        answer: 1,
      },
      {
        q: "How does preserving heritage help different cultures?",
        options: [
          "A. It promotes cultural diversity and understanding",
          "B. It makes people speak the same language",
          "C. It stops people from learning about history",
          "D. It makes everyone follow only one tradition",
        ],
        answer: 0,
      },
      {
        q: "Which of the following is NOT true according to the passage?",
        options: [
          "A. Preserving heritage helps us understand our roots and societal development.",
          "B. Heritage preservation fosters a strong sense of belonging.",
          "C. Protecting physical objects is more important than intangible aspects of heritage.",
          "D. Preserving heritage promotes cultural diversity and intercultural understanding.",
        ],
        answer: 2,
      },
    ],
  },
];
