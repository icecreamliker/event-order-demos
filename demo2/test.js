let doc = document,
  outer = doc.querySelector('.outer'),
  inner = doc.querySelector('.inner');

inner.addEventListener('click', function() {
  console.log('inner capture');
}, true);
inner.addEventListener('click', function() {
  console.log('inner capture');
}, true);


outer.addEventListener('click', function() {
  console.log('outer capture');
}, true);
outer.addEventListener('click', function() {
  console.log('outer capture');
}, true);
