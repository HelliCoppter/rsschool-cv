# Alexander Fufachev

![Hi, my name is Alexander Fufachev!](rsscool-cv-html\assets\photo.png)

## Contacts
**Phone:** +79091344834 | **Email:** alexfufachev@mail.ru | **GitHub:** [HelliCoppter](https://github.com/HelliCoppter)

## About me

Hi, my name is Alexander Fufachev! I've never done CV before so please don't judge me strongly. I'm from Russia. I was born in 1992 in a little village north of Kirov district. After graduating high school I got to university where I studied programming, circuit engineering, hardware and more other things. I've ended study and I've got a qualification as engineer. For a notice I haven't had practice of engineering work.

After serving in the army I returned to home and decided radically change my life. I moved to Sochi where I've worked as bartender and continue working right now.
It's difficult to explain how it happened but anyway this is a part of my life.

Okay, that was little part of my biography but is now more important what I know and what I can do. Well, I'd love to tell about. At one time with my studies I worked as project manager for a Event- company. What I did:
- *organize evets, meetings, actions*
- *social media marketing*
- *PR*
- *management of working group*

I worked in such a way four years. Since 2016 I work in the hospitality industry. I've got there many different helpful soft-skills. Notably:
- *I'm responsible for my work and my job*
- *I study quick*
- *Results-focused mindset*
- *Conscientiousness*

So let's get to the point. I'm learning programming more one year. I realized I like programming. At this time I have learned `HTML`, `CSS`, `preprocessors CSS`, `JavaScript`, `TypeScript`, `Rest API`, `Git`, `Webpack`, `Gulp`, basic knowledge about `MVC`. According to the tests my English level is intermediate.

### Code Example
``` async function solution(input) {
    const result = [];
    await (async function stepFunc(input) {
        let range = await (() => {
            return new Promise((resolve) => {
                input.size((size) => resolve(size));
            })
        })().then(result => result).catch(() => false);

        if (range) {
            for (let i = 0; i < range; i++) {
                const current = await new Promise((resolve) => {
                    input.read(i, (file) => resolve(file));
                }).then(result => result).catch(() => false);
                
                if (typeof current === 'string') {
                    if (current !== 'file') {
                        result.push(current)
                    } 
                } else if (typeof current === 'object') {
                    await stepFunc(current);
                }
            }
        }
    })(input);
    return result.sort();
}
```