const Mordor = {
    functionBaggins() {
        return this.functionBilbo() + " and " + this.functionFrodo();
    },

    functionBilbo() {
        return "Bilbo going without ring";
    },

    functionFrodo() {
        return "Frodo going with ring";
    }
}

module.exports = Mordor;