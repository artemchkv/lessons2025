var title = document.createElement('h1');
title.textContent = 'Индекс Биг Мака';
document.body.appendChild(title);

var infotext = document.createElement('p');
infotext.textContent =
  'Индекс Биг Мака - это стоимость гамбургера Биг Мак в разных странах, выраженная в долларах США. Он используется для сравнения покупательной способности валют разных стран и оценки уровня жизни в этих странах. Индекс Биг Мака был разработан журналом The Economist в 1986 году и с тех пор стал популярным инструментом для анализа экономической ситуации в разных странах. Он позволяет сравнивать стоимость жизни и уровень инфляции в разных странах, а также оценивать, насколько валюты недооценены или переоценены по отношению к доллару США.';
infotext.className = 'info-text';
document.body.appendChild(infotext);

infotext.addEventListener('click', function () {
  infotext.classList.add('info-text-color');
});
infotext.addEventListener('dblclick', function () {
  infotext.classList.remove('info-text-color');
});

var tabletitle = document.createElement('p');
tabletitle.textContent = 'Индекс Биг Мака в разных странах';
tabletitle.className = 'table-title';
document.body.appendChild(tabletitle);

var table = document.createElement('table');
table.className = 'table-wrapper';
var thead = [
  'Год',
  'Украина',
  'США',
  'Великобритания',
  'Израиль'
];
thead.forEach(item => {
  var th = document.createElement('th');
  th.className = 'table-element';
  th.textContent = item;
  table.appendChild(th);
});

var tbody = document.createElement('tbody');
var rows = [
  ['2012', '5.20', '5.05', '3.80', '6.50'],
  ['2013', '5.40', '5.20', '4.00', '6.80'],
  ['2014', '5.60', '5.40', '4.20', '7.10']
];
rows.forEach(row => {
  var tr = document.createElement('tr');
  row.forEach(element => {
    var td = document.createElement('td');
    td.className = 'table-element';
    td.textContent = element;
    tr.appendChild(td);
  });
  tbody.appendChild(tr);
});
table.appendChild(tbody);

document.body.appendChild(table);

var facttitle = document.createElement('p');
facttitle.textContent = 'Интересные факты';
facttitle.className = 'fact-title';
document.body.appendChild(facttitle);
var facts = document.createElement('ol');
var factarray = [
  'Индекс Биг Мака был впервые опубликован в 1986 году журналом The Economist.',
  'Индекс Биг Мака используется для оценки покупательной способности валют разных стран и уровня жизни в этих странах.',
  'Индекс Биг Мака позволяет сравнивать стоимость жизни и уровень инфляции в разных странах.',
];

facts.className = 'facts';
factarray.forEach(item => {
  var li = document.createElement('li');
  li.textContent = item;
  li.className = 'fact';
  facts.appendChild(li);
});

document.body.appendChild(facts);

// https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/table
