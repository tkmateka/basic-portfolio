function loadBlogs() {
    const blogContainer = document.getElementById('blogContainer');
    const blogs = [
        {
            heading: 'UI Interactions of the week',
            date: '12 Feb 2019',
            skills: 'Express, Handlebars',
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            heading: 'Making a design system from scratch',
            date: '13 Feb 2019',
            skills: 'Design, Pattern',
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            heading: 'UI Interactions of the week',
            date: '14 Feb 2019',
            skills: 'Express, Handlebars',
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        },
        {
            heading: 'Making a design system from scratch',
            date: '15 Feb 2019',
            skills: 'Design, Pattern',
            content: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'
        }
    ];

    blogs.forEach((obj) => {
        blogContainer.innerHTML += `
            <div class="border-bottom-1px">
                <h3>${obj.heading}</h3>
                <p>${obj.date} | ${obj.skills}</p>
                <p>${obj.content}</p>
            </div>
        `
    });

    loadAontherImage();
}

function loadAontherImage() {
    // Fetch random cat image fromgit free API
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => response.json().then(data => {
            document.getElementById('img').innerHTML = `
                <img src='${data[0].url}' alt='Random cat image' class='round' width='100' height='100' />
            `
        }))
        .catch(err => console.log(err));
}

loadBlogs();