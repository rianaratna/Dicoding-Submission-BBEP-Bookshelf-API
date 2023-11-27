// eslint-disable-next-line import/no-extraneous-dependencies
const { nanoid } = require('nanoid');

class BooksData {
    constructor(data) {
        this.id = nanoid(16);
        this.name = data.name;
        this.year = data.year;
        this.author = data.author;
        this.summary = data.summary;
        this.publisher = data.publisher;
        this.pageCount = data.pageCount;
        this.readPage = data.readPage;
        this.finished = (data.pageCount === data.readPage);
        this.reading = data.reading;
        this.insertedAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
    }

    updateBookData(newData) {
        this.name = newData.name;
        this.year = newData.year;
        this.author = newData.author;
        this.summary = newData.summary;
        this.publisher = newData.publisher;
        this.pageCount = newData.pageCount;
        this.readPage = newData.readPage;
        this.reading = newData.reading;
        this.updatedAt = new Date().toISOString();
    }
}

module.exports = BooksData;
