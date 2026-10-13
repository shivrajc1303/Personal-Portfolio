/* All content lives here. Empty strings/arrays are hidden by the UI. Source: Detailed CV. */
window.PORTFOLIO = {
  siteUrl: "", // set to your real domain, then add a canonical <link> in index.html
  email: "chorageshivraj@gmail.com",
  phone: "+91 9834243018",
  links: {
    github: "https://github.com/shivrajc1303",
    linkedin: "https://www.linkedin.com/in/shivraj-chorage-36208723a",
    certs: "https://drive.google.com/drive/folders/1VgDpxdQc7tW_BJhfFiiNppT_9-aFTeKb",
    resume: "Shivraj_Chorage_Detailed_CV.pdf", // add a real PDF path (e.g. "assets/resume.pdf") to show a Resume button
    instagram: "https://www.instagram.com/shivrajc1303/",
  },
  spoken: "English, Hindi, Marathi",
  // levels: c = Comfortable, f = Familiar, b = Beginner (self-assessed; adjust to taste)
  skills: [
    { cat: "Languages", items: [["Python", "c"], ["C++", "c"], ["C", "c"], ["Java", "c"]] },
    { cat: "AI and machine learning", items: [["Machine learning", "f"], ["Deep learning", "f"], ["Neural networks", "f"], ["CNN", "f"]] },
    { cat: "Natural language processing", items: [["NLP", "f"], ["TF-IDF", "f"], ["Logistic regression", "f"], ["DistilBERT", "f"]] },
    { cat: "Computer vision", items: [["OpenCV", "f"], ["Facial emotion recognition", "f"]] },
    { cat: "Libraries and frameworks", items: [["TensorFlow", "f"], ["Scikit-learn", "f"], ["Gradio", "f"]] },
    { cat: "Cloud and DevOps", items: [["AWS", "f"], ["Google Cloud Platform", "f"], ["Kubernetes", "f"]] },
    { cat: "Databases", items: [["DBMS", "b"]] },
    { cat: "Core practice", items: [["Object-oriented programming", "c"], ["Software development", "c"], ["Debugging", "c"], ["Problem solving", "c"], ["Project research", "c"]] }
  ],
  projects: [
  {
    title: "PhishGuard AI: Phishing & Scam Detection System",
    category: "Natural Language Processing & Cybersecurity",
    status: "Planned AI Project",
    shortDescription:
      "A planned NLP-based system to identify potential phishing and scam messages in emails and text content.",
    technologies: [
      "Python",
      "NLP",
      "Scikit-learn",
      "DistilBERT",
      "Gradio"
    ],
    problem:
      "Phishing messages and scam content can deceive users through misleading language, suspicious requests, and fraudulent links.",
    solution:
      "The planned system will compare a classical machine-learning text classifier with a transformer-based approach to classify potentially malicious messages.",
    features: [
      "Planned TF-IDF and Logistic Regression baseline using Scikit-learn",
      "Proposed DistilBERT-based text classification",
      "Planned Gradio interface for testing email and message text",
      "Intended evaluation using precision, recall, F1-score, and confusion matrix"
    ],
    evaluation:
      "Evaluation will be performed after implementation using suitable labelled data and standard classification metrics.",
    architecture:
      "Planned pipeline: Email or Message Input → Text Preprocessing → TF-IDF Baseline / DistilBERT → Classification → Prediction Output.",
    challenges:
      "Handling varied phishing language, class imbalance, misleading messages, and generalisation to previously unseen scams.",
    lessonsLearned:
      "To be documented during implementation, experimentation, and model evaluation.",
    githubUrl: "",
    liveUrl: ""
  },
  {
    title: "EmotionVision AI: Real-Time Facial Emotion Recognition",
    category: "Computer Vision",
    status: "Completed Applied AI Project",
    shortDescription:
      "A real-time facial emotion recognition application that predicts facial expressions from webcam input.",
    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Convolutional Neural Networks (CNN)"
    ],
    problem:
      "Recognising facial expressions automatically requires image classification and integration with a real-time video stream.",
    solution:
      "Developed a CNN-based facial emotion classifier using TensorFlow and integrated it with OpenCV for webcam-based face detection and emotion prediction.",
    features: [
      "Classification across seven emotion categories: Angry, Disgust, Fear, Happy, Neutral, Sad, and Surprise",
      "Real-time webcam input and face detection using OpenCV",
      "Predicted emotion and confidence score display",
      "Model evaluation using classification metrics and a confusion matrix"
    ],
    evaluation:
      "The improved model achieved approximately 98.26% test accuracy on a test set of 7,178 images. Results were also examined using classification metrics and a confusion matrix.",
    architecture:
      "Pipeline: Webcam Input → Face Detection → Image Preprocessing → CNN Classifier → Emotion Prediction and Confidence Display.",
    challenges:
      "Achieving consistent classification performance across emotion categories and integrating the model with the webcam pipeline.",
    lessonsLearned:
      "Gained practical experience with Python, CNN-based image classification, OpenCV, model evaluation, confusion matrices, and GitHub project organisation.",
    githubUrl: "https://github.com/shivrajc1303/EmotionVision-AI",
    liveUrl: ""
  },
  {
    title: "Multilingual Sarcasm and Onomatopoeia AI: Audience Feedback Analysis Platform",
    category: "Natural Language Processing (NLP)",
    status: "Ongoing Final-Year AI/ML Project",
    shortDescription:
      "Developing a multilingual NLP platform to analyse sarcasm, sound-imitative expressions, and audience feedback in comments and reviews.",
    technologies: [
      "Python",
      "PyTorch",
      "Hugging Face Transformers",
      "XLM-RoBERTa",
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Streamlit"
    ],
    problem:
      "Sarcasm, code-mixed languages, and onomatopoeic expressions can make audience comments difficult to interpret accurately across multilingual online platforms.",
    solution:
      "Developing a multilingual NLP pipeline to detect sarcasm and onomatopoeia, with planned sentiment analysis and audience feedback visualisation for supported comment datasets.",
    features: [
      "Planned analysis of English, Hindi, Marathi, and code-mixed text",
      "Development of a sarcasm detection baseline",
      "Planned rule-based onomatopoeia detection and expression analysis",
      "Proposed sentiment analysis and audience feedback visualisation",
      "Planned Streamlit dashboard for text input and CSV/JSON dataset analysis"
    ],
    evaluation:
      "Model performance will be evaluated using accuracy, precision, recall, macro-F1 score, confusion matrices, and per-language results where labelled data supports evaluation.",
    architecture:
      "Planned pipeline: Text or Dataset Input → Unicode-Preserving Preprocessing → Sarcasm Detection and Onomatopoeia Identification → Optional Sentiment Analysis → Audience Insights Dashboard.",
    challenges:
      "Building reliable multilingual datasets, handling code-mixed text, defining consistent onomatopoeia labels, and evaluating model performance across languages.",
    lessonsLearned:
      "Currently working towards practical experience in multilingual NLP, dataset preparation, text preprocessing, model evaluation, and AI application development.",
    githubUrl: "",
    liveUrl: ""
  }
],
  internships: [
    { type: "Internship", role: "Python Programming and Artificial Intelligence Intern", org: "Domain Computer Education, Kolhapur, Maharashtra", date: "May 2023 – July 2023",
      points: ["Completed a three-month internship focused on Python programming and artificial intelligence.", "Received training in Python programming.", "Learned the fundamentals of artificial intelligence and the basics of neural networks."] },
    { type: "Virtual internship", role: "Google Cloud Data Analytics Virtual Internship", org: "Google Cloud", date: "2025", points: [] },
    { type: "Virtual internship", role: "Generative AI Virtual Internship", org: "AWS Academy", date: "2026", points: [] }
  ],
  certGroups: [
    { group: "AI, machine learning and cloud", items: [
      "Machine Learning using Python, Simplilearn (2025)", "Introduction to Gen AI, Microsoft (2025)", "AI Fundamentals, IBM SkillsBuild (2025)",
      "Google Cloud Data Analytics Certificate, Google Cloud (2025)", "AWS Academy Graduate: Generative AI Foundations (training badge, 2026)",
      "AWS Academy Graduate: Machine Learning for Natural Language Processing (training badge, 2026)", "AWS Academy Graduate: Machine Learning Foundations (training badge, 2026)",
      "Hands-on Training on AWS and Cloud Computing, JSPM University (2025)"] },
    { group: "Programming and computer science", items: [
      "MS-CIT, Maharashtra State Certificate in Information Technology (2021)", "KLiC Certificate Course in C Programming (2021)", "C++ Programming (Abdul Bari), Udemy (2022)",
      "Introduction to Sorting Algorithms, Simplilearn (2025)", "Operating Systems Basics, Cisco (2025)", "Computer Networks and Internet Protocol, NPTEL (2025)",
      "Cyber Security and Privacy, NPTEL (2025)", "Human Computer Interaction, NPTEL (2026)"] }
  ],
  education: [
    { inst: "JSPM University, Pune", prog: "B.Tech, Artificial Intelligence and Machine Learning", date: "2024 – 2027 (expected)", note: "Ongoing. CGPA 8.00/10 up to third year." },
    { inst: "KBP Polytechnic, Satara", prog: "Diploma in Computer Engineering (MSBTE)", date: "2021 – 2024", note: "Final semester: 81.88%",},
    { inst: "Abhinav Madhyamik Vidyalaya, Shahupuri, Satara", prog: "Class 10 (Maharashtra State Board)", date: "2018 – 2021", note: "78.20%" }
  ],
  achievements: [
    { kind: "Sports", title: "Boxing: silver medal, 6th Sub-Junior Boys Maharashtra State Boxing Championship (Maharashtra Boxing Association)", date: "2019" },
    { kind: "Sports", title: "Boxing: silver medal, district-level school games", date: "2018" },
    { kind: "Creative", title: "Drawing: Elementary grade B and Intermediate grade C, Government of Maharashtra examinations", date: "2018, 2019" }
  ],
  volunteering: ["Kshitij Foundation for Rural Development", "Satara Half Hill Marathon, volunteer (2022)", "Satara Half Hill Marathon, volunteer (2023)"],
  interests: ["Bike riding and touring", "Photography", "Music", "Travelling", "Exploring AI technology", "Building software projects"]
};
