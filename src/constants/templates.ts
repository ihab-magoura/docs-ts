export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: "",
  },
  {
    id: "software-proposal",
    label: "Software Devlopement Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
    <h1>Software Development Proposal</h1>
    
    <h2>1. Project Overview</h2>
    <p>Brief description of the project, its purpose, and expected impact.</p>

    <h2>2. Scope of Work</h2>
    <ul>
      <li>Features and functionalities</li>
      <li>Technologies to be used</li>
      <li>Deliverables</li>
    </ul>

    <h2>3. Timeline & Milestones</h2>
    <p>Estimated project duration with key phases like planning, development, testing, and deployment.</p>

    <h2>4. Team & Responsibilities</h2>
    <p>Roles involved, such as Developers, Designers, and Testers, with assigned responsibilities.</p>

    <h2>5. Budget & Cost Estimation</h2>
    <p>Development costs and any third-party tools or licenses required.</p>

    <h2>6. Risks & Mitigation Strategies</h2>
    <p>Potential challenges and contingency plans.</p>

    <h2>7. Acceptance Criteria</h2>
    <p>Definition of project completion, quality, and performance benchmarks.</p>

    <h2>8. Support & Maintenance</h2>
    <p>Post-deployment support, future updates, and scalability options.</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
    <h1>Project Proposal</h1>
    
    <h2>1. Project Title</h2>
    <p>The official name of the project.</p>

    <h2>2. Project Overview</h2>
    <p>Brief summary of the project, its purpose, and the problem it aims to solve.</p>

    <h2>3. Objectives</h2>
    <ul>
      <li>Key goals and expected outcomes</li>
      <li>How the project aligns with business or user needs</li>
    </ul>

    <h2>4. Scope of the Project</h2>
    <p>Define what is included in the project and what is out of scope.</p>

    <h2>5. Methodology</h2>
    <p>Approach to be used for project execution (e.g., Agile, Waterfall, Scrum).</p>

    <h2>6. Project Deliverables</h2>
    <p>List of expected deliverables at each phase of the project.</p>

    <h2>7. Timeline & Milestones</h2>
    <ul>
      <li>Estimated project duration</li>
      <li>Important deadlines and key phases</li>
    </ul>

    <h2>8. Resources & Budget</h2>
    <p>Required resources, tools, and estimated costs.</p>

    <h2>9. Risk Assessment</h2>
    <p>Potential risks and strategies to mitigate them.</p>

    <h2>10. Conclusion</h2>
    <p>Final summary and next steps for approval or execution.</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
<h1>Business Letter</h1>

    <p>[Your Name] <br>
    [Your Position] <br>
    [Your Company Name] <br>
    [Your Company Address] <br>
    [City, State, ZIP Code] <br>
    [Your Email] <br>
    [Your Phone Number] <br>
    [Date]</p>

    <p>[Recipient's Name] <br>
    [Recipient's Position] <br>
    [Recipient's Company Name] <br>
    [Recipient's Company Address] <br>
    [City, State, ZIP Code]</p>

    <h2>Subject: [Letter Subject]</h2>

    <p>Dear [Recipient's Name],</p>

    <p>I am writing to [state the purpose of the letter, such as to propose a business collaboration, request information, or express appreciation]. [Briefly introduce the main point and its relevance to the recipient.]</p>

    <p>[Provide more details about your request, proposal, or message. Clearly explain any necessary information, ensuring that it is concise and professional.]</p>

    <p>[If applicable, include a call to action or a request for a response, such as scheduling a meeting, providing feedback, or considering a proposal.]</p>

    <p>Thank you for your time and consideration. I look forward to your response.</p>

    <p>Sincerely,</p>

    <p>[Your Name] <br>
    [Your Position] <br>
    [Your Company Name]</p>
`,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
<h1>[Your Name]</h1>
    <p><strong>Email:</strong> [your.email@example.com] | <strong>Phone:</strong> [Your Phone Number] | <strong>Location:</strong> [City, Country]</p>
    
    <h2>Professional Summary</h2>
    <p>[A brief summary highlighting your skills, experience, and career goals.]</p>

    <h2>Work Experience</h2>
    <h3>[Job Title] – [Company Name]</h3>
    <p><strong>[Start Date] – [End Date]</strong></p>
    <ul>
      <li>[Key responsibility or achievement]</li>
      <li>[Key responsibility or achievement]</li>
      <li>[Key responsibility or achievement]</li>
    </ul>

    <h3>[Job Title] – [Company Name]</h3>
    <p><strong>[Start Date] – [End Date]</strong></p>
    <ul>
      <li>[Key responsibility or achievement]</li>
      <li>[Key responsibility or achievement]</li>
      <li>[Key responsibility or achievement]</li>
    </ul>

    <h2>Education</h2>
    <h3>[Degree] – [University Name]</h3>
    <p><strong>[Year of Graduation]</strong></p>

    <h2>Skills</h2>
    <ul>
      <li>[Skill 1]</li>
      <li>[Skill 2]</li>
      <li>[Skill 3]</li>
      <li>[Skill 4]</li>
    </ul>

    <h2>Certifications</h2>
    <ul>
      <li>[Certification Name] – [Issuing Organization] ([Year])</li>
      <li>[Certification Name] – [Issuing Organization] ([Year])</li>
    </ul>

    <h2>Projects</h2>
    <h3>[Project Name]</h3>
    <p><strong>Description:</strong> [Brief description of the project, technologies used, and impact.]</p>

    <h2>Languages</h2>
    <ul>
      <li>[Language 1] – [Proficiency Level]</li>
      <li>[Language 2] – [Proficiency Level]</li>
    </ul>

    <h2>References</h2>
    <p>Available upon request.</p>
`,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
<h1>Cover Letter</h1>

    <p>[Your Name] <br>
    [Your Address] <br>
    [City, State, ZIP Code] <br>
    [Your Email] <br>
    [Your Phone Number] <br>
    [Date]</p>

    <p>[Hiring Manager's Name] <br>
    [Company Name] <br>
    [Company Address] <br>
    [City, State, ZIP Code]</p>

    <h2>Subject: Application for [Job Title]</h2>

    <p>Dear [Hiring Manager's Name],</p>

    <p>I am writing to express my interest in the [Job Title] position at [Company Name]. With my background in [mention relevant skills, experience, or education], I believe I can contribute significantly to your team.</p>

    <p>In my previous role at [Previous Company], I [mention a key achievement or responsibility that highlights your qualifications]. I have developed strong skills in [mention relevant skills], which align well with the requirements of this role.</p>

    <p>Beyond my technical expertise, I am passionate about [mention a relevant passion related to the job or industry]. I thrive in collaborative environments and am eager to bring my skills to [Company Name].</p>

    <p>I would love the opportunity to discuss how my experience and skills can benefit your team. Please feel free to contact me at your convenience to arrange an interview.</p>

    <p>Thank you for your time and consideration. I look forward to your response.</p>

    <p>Sincerely,</p>

    <p>[Your Name]</p>
`,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
<p>[Your Name] <br>
    [Your Address] <br>
    [City, State, ZIP Code] <br>
    [Your Email] <br>
    [Your Phone Number]</p>

    <p>[Date]</p>

    <p>[Recipient's Name] <br>
    [Recipient's Position] <br>
    [Company/Organization Name] <br>
    [Recipient's Address] <br>
    [City, State, ZIP Code]</p>

    <h2>Subject: [Brief Subject of the Letter]</h2>

    <p>Dear [Recipient's Name],</p>

    <h3>1. Introduction</h3>
    <p>A brief opening statement explaining the purpose of the letter.</p>

    <h3>2. Main Message</h3>
    <ul>
        <li>Key details or context of the message</li>
        <li>Any relevant points or requests</li>
        <li>Supporting information</li>
    </ul>

    <h3>3. Conclusion</h3>
    <p>A closing remark summarizing the message and any next steps, if applicable.</p>

    <p>Sincerely,</p>

    <p>[Your Name]</p>

`,
  },
];
