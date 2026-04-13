const express = require('express');
const app = express();

app.use(express.json()); // Middleware to read JSON body

const PORT = 3000;



let books = [
    { id: 1, title: "Harry Potter", authorId: 1 },
    { id: 2, title: "The Hobbit", authorId: 2 }
];

let authors = [
    { id: 1, name: "J.K. Rowling" },
    { id: 2, name: "J.R.R. Tolkien" }
];


app.get('/books', (req, res) => {
    res.json(books);
});

app.get('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
});

app.post('/books', (req, res) => {
    const { title, authorId } = req.body;

    if (!title || !authorId) {
        return res.status(400).json({ message: "Title and authorId required" });
    }

    const newBook = {
        id: books.length + 1,
        title,
        authorId
    };

    books.push(newBook);
    res.status(201).json(newBook);
});

app.put('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    const { title, authorId } = req.body;

    if (title) book.title = title;
    if (authorId) book.authorId = authorId;

    res.json(book);
});

app.delete('/books/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const existing = books.find(b => b.id === id);

    if (!existing) {
        return res.status(404).json({ message: "Book not found" });
    }

    books = books.filter(b => b.id !== id);

    res.json({ message: "Book deleted successfully" });
});


app.get('/authors', (req, res) => {
    res.json(authors);
});

app.get('/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const author = authors.find(a => a.id === id);

    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    res.json(author);
});

app.post('/authors', (req, res) => {
    const { name } = req.body;

    if (!name) {
        return res.status(400).json({ message: "Name is required" });
    }

    const newAuthor = {
        id: authors.length + 1,
        name
    };

    authors.push(newAuthor);
    res.status(201).json(newAuthor);
});

app.put('/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const author = authors.find(a => a.id === id);

    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    const { name } = req.body;

    if (name) author.name = name;

    res.json(author);
});

app.delete('/authors/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const existing = authors.find(a => a.id === id);

    if (!existing) {
        return res.status(404).json({ message: "Author not found" });
    }

    authors = authors.filter(a => a.id !== id);

    res.json({ message: "Author deleted successfully" });
});

app.get('/authors/:id/books', (req, res) => {
    const id = parseInt(req.params.id);

    const author = authors.find(a => a.id === id);
    if (!author) {
        return res.status(404).json({ message: "Author not found" });
    }

    const authorBooks = books.filter(b => b.authorId === id);

    res.json(authorBooks);
});



app.listen(PORT, () => {
    console.log(` Server running at http://localhost:${PORT}`);
});