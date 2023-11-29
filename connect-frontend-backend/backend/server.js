import express from "express"
import cors from "cors";

const app = express();

app.use(cors());
// app.get('/', (req, res) => {
//     res.send('Server is ready')
// })

// get a list of five jokes
app.get('/api/jokes', (req, res) => {
    const jokes = [ 
        {
            id : 1,
            title : 'Joke 1',
            content : 'This is a joke'
        },
        {
            id : 2,
            title : 'Joke 2',
            content : 'This is a joke'
        },
        {
            id : 3,
            title : 'Joke 3',
            content : 'This is a joke'
        },
        {
            id : 4,
            title : 'Joke 4',
            content : 'This is a joke'
        },
        {
            id : 5,
            title : 'Joke 5',
            content : 'This is a joke'
        },
    ];
    res.send(jokes);
})

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running on port : ${port}`);
});

