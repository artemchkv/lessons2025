var title = document.createElement('h1');
title.textContent = 'Индекс Биг Мака';
document.body.appendChild(title);

var infotext = document.createElement('p');
infotext.textContent = 'Индекс Биг Мака - это стоимость гамбургера Биг Мак в разных странах, выраженная в долларах США. Он используется для сравнения покупательной способности валют разных стран и оценки уровня жизни в этих странах. Индекс Биг Мака был разработан журналом The Economist в 1986 году и с тех пор стал популярным инструментом для анализа экономической ситуации в разных странах. Он позволяет сравнивать стоимость жизни и уровень инфляции в разных странах, а также оценивать, насколько валюты недооценены или переоценены по отношению к доллару США.';
infotext.classList.add('info-text');
document.body.appendChild(infotext);

var tabletitle = document.createElement('p');
tabletitle.textContent = 'Индекс Биг Мака в разных странах';
tabletitle.classList.add('table-title');
document.body.appendChild(tabletitle);

var table = document.createElement('div');
table.classList.add('table-wrapper');
table.appendChild(document.createElement('p')).textContent = 'Страна';
table.lastChild.classList.add('country');
table.appendChild(document.createElement('p')).textContent = 'Цена';
table.lastChild.classList.add('price');
document.body.appendChild(table);

var facts = document.createElement('h3');
facts.textContent = 'Интересные факты:';
document.body.appendChild(facts);

var fact1 = document.createElement('p');
fact1.textContent = '1. Индекс Биг Мака был впервые опубликован в 1986 году журналом The Economist. С тех пор он стал популярным инструментом для анализа экономической ситуации в разных странах.';
fact1.classList.add('fact');
document.body.appendChild(fact1);

var fact2 = document.createElement('p');
fact2.textContent = '2. Индекс Биг Мака используется для оценки уровня жизни и покупательной способности валют разных стран. Он позволяет сравнивать стоимость жизни в разных странах и оценивать, насколько валюты недооценены или переоценены по отношению к доллару США.';
fact2.classList.add('fact');
document.body.appendChild(fact2);

var fact3 = document.createElement('p');
fact3.textContent = '3. Индекс Биг Мака может быть использован для оценки уровня инфляции в разных странах. Если стоимость Биг Мака в одной стране растет быстрее, чем в другой, это может указывать на более высокую инфляцию в первой стране.';
fact3.classList.add('fact');
document.body.appendChild(fact3);