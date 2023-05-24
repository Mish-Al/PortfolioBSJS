// About section
let about = document.querySelector('section#about .row:last-child');
let aboutContents = ["I am an individual who loves spreading postivity wherever I go, regardless of the situation. I am 20 years of age and I was born on 31 May 2002. I am from Athlone and I follow the Islamic Way of Life.", "I attended Groenvlei High School which is based in Lansdowne. I started high school in 2016 and I completed high school with a Diploma Pass. Thereafter, the only other education programme that I participated in is the Life Choices Academys Coding Programme."
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


