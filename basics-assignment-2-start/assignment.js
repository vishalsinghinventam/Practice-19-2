const task3Element = document.getElementById('task-3');

function numbA()
{
    alert('Hello there!');
}

function numbB(name)
{
    alert(name);
}
numbA();
numbB('Vishal');

task3Element.addEventListener('click', numbA);

function numbC(a, b, c)
{
    const combinedText = `${a} ${b} ${c}`
    return combinedText;
}
let result = numbC( 'welcome', 'to', 'JS');
alert(result);