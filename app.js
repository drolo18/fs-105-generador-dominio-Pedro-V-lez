console.log("Cualquier string");

const pronoun = ['the', 'our'];
const adj = ['great', 'big'];
const noun = ['jogger', 'racoones'];
const extension = [".com", ".net", ".us", ".io", ".es"];

const combinations = [];

pronoun.forEach(pronoun => {
    adj.forEach(adj => {
        noun.forEach(noun => {
            extension.forEach(extension => {
                if (noun === 'racoones' && extension === '.es') {
                    noun = 'racoon';
                }
                combinations.push(`${pronoun}${adj}${noun}${extension}`);
            });
        });
    });
});

console.log(combinations);