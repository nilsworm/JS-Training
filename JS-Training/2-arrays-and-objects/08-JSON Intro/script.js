//api.github.com/users
const post = {
    id: 1
    title: 'Post one'
    body: 'This is the body'
}

//Convert to JSON

const str = JSON.stringify(post)

// Parse JSON

const obj = JSON.parse(str)

const posts = [ {
    id: 1
    title: 'Post one'
    body: 'This is the body'
},
{
    id: 2
    title: 'Post two'
    body: 'This is the body'
}
]

const str2 = JSON.stringify(posts)


console.log(posts)

//Zuerst parse benutzen bevor in JS in konsole anzeigen