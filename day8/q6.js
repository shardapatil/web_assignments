//Basic for loop Advanced for loop forEach using callback
let list = ['apple','banana','Chikoo'];
for(let i=0;i<list.length;i++)
{
    console.log(i+1 ,list[i])
}

for(let item of list)
{
    console.log(item);
}

//lambda expr
list.forEach(console.log);

// () => {} :: ARROW FUNCTION
list.forEach((item) => console.log(item));

