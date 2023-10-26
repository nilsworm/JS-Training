

const library = [{
title: 'Rome',
author: 'Nils',
status: {
    own: true,
    reading: false,
    read: false
} 
},
{
    title: 'Soest',
    author: 'Slim',
    status: {
        own: true,
        reading: false,
        read: false
    } 
    },
    {
        title: 'London',
        author: 'Worm',
        status: {
            own: true,
            reading: false,
            read: false
        } 
        }
    ]

 library[0].status.read = true
 library[1].status.read = true  
 library[2].status.read = true  

 console.log(library)

 //step 3

 const {title: firstBook} = library[0]

 console.log(firstBook)

 const str = JSON.stringify(library)




