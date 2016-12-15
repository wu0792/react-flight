let id = 0;
class Error {
    constructor(level, message) {
        this.id = id++;
        this.level = level;
        this.message = message;
    }
}

export default Error