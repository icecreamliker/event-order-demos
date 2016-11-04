let doc = document,
  outer = doc.querySelector('.outer'),
  inner = doc.querySelector('.inner');

inner.addEventListener('click', function() {
  console.log('inner bubble');
}, false);
inner.addEventListener('click', function() {
  console.log('inner bubble');
}, false);


outer.addEventListener('click', function() {
  console.log('outer bubble');
}, false);
outer.addEventListener('click', function() {
  console.log('outer bubble');
}, false);
