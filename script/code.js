// About section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = ["I am an individual who loves spreading postivity wherever I go, regardless of the situation. I am 20 years of age and I was born on 31 May 2002. I am from Athlone and I follow the Islamic Way of Life.","I am a dancer and I have been dancing for about 11 years. I enjoy laearning about the tech industry, specifically smartphones, gadgets and upcoming inventions.", "I attended Groenvlei High School which is based in Lansdowne. I started high school in 2016 and I completed high school ,in 2020, with a Diploma Pass. Thereafter, the only other education programme that I participated in is the Life Choices Academys Coding Programme."
] 

// Loop through the contents
aboutContents.forEach( (content)=>{
    about.innerHTML += `
        <p class="lead">${content}</p>
    `
} )
// Education
let education = [
    {
        id: 1,
        year: 2020,
        description: 'Graduated from High School',
        place: 'Groenvlei High School',
        type: 'Certificate',
        certificate: 'National Senior Certificate'
    },
]
//
let divEducation = document.querySelector('.education');
education.forEach((data)=> {
    divEducation.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.year}</h4>
        <div class="card-body">
            <p class="text-white">
                ${data.description} @ <span>${data.place}</span> 
                <a href="${data.certificate}" target="_blank">${data.type}</a>
            </p>
        </div>
    </div>
    `
})
let skills = document.querySelector('section#skills .row');
let skillsContents = ["Some of my skills include adaptablity, creativity, problem solving and interpersonal skills.", "In addition to this, I have these basic web development skills."]

skillsContents.forEach( (content)=>{
    skills.innerHTML += `
        <p class="lead">${content}</p>
    `
} )

let testimonial = [{
    id: 1,
    name: 'Rayhaan Khan',
    image: 'https://i.postimg.cc/Y0bdBxXT/C12-Rayhaan-Khan-2.jpg',
    description: "Mish-Al is a highly thought intellectual from my perspective. He is extremely kind, passionate, ambitious, hardworking and always provides a helping hand to anyone who needs it. He has great communication and leadership  skills and any company would be lucky to have him on their team.",
},
{
    id: 2,
    name: 'Laiquah Cotie',
    image: 'https://i.postimg.cc/2ysRfb2J/C12-Laiquah-Cotie-2.jpg',
    description: "Working with Mish-Al was an incredible experience. His professionalism, attention to detail, and communication skills made the entire process seamless. He consistently exceeded my expectations and delivered exceptional results. I would highly recommend Mish-Al to anyone looking for a talented and dedicated professional."
},
{
    id: 3,
    name: 'Eighton-Lee Paulse',
    image: "https://i.postimg.cc/tCwYvByR/C12-C2-Eighton-Lee-Paulse-2.jpg",
    description: "It's always a pleasure to work with Mish-Al. He has an infectious personality and he always brings out the best in others. He motivates everyone around him and he's always ready to offer a helping hand to anybody when needed. He has a go getter mindset that he applies himself to and does his best to achieve what he wants. I would definitely recommend him.",
},
{
    id: 4,
    name: 'Mujahid Fisher',
    image: "https://i.postimg.cc/Wzsm113M/C12-C2-Mujahid-Fisher-1.jpg",
    description: "Mish-Al is an amazing person and contains qualities of a leader. He is hard working and pursues everything he does with passion and discipline. I see him face challenges everyday and overcome them with his determination to finish what he started.",
},
{
    id: 4,
    name: 'Nuraan Samodien',
    image: "https://i.postimg.cc/JnXvc960/C12-C2-Nuraan-Samsodien-1.jpg",
    description: "From my perspective, Mish-Al is a highly thought intellectual. He is passionate, ambitious, and hardworking. He brings the best vibes and always has a positive attitude. He has great communication and leadership skills and any company would be lucky to have him on their team."
},
]
let divTestimonial = document.querySelector('.testimonial');
testimonial.forEach((data)=> {
    divTestimonial.innerHTML += `
    <div class="card">
        <h4 class="display-4">${data.name}</h4>
        <div id="card-body">
               <img src= "${data.image}" class="img-fluid">
               <p class="text-black">${data.description}
            </p>
        </div>
    </div>
    `
})


