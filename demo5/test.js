let doc = document,
  outer = doc.querySelector('.outer'),
  inner = doc.querySelector('.inner');

inner.addEventListener('click', function() {
  console.log('inner bubble');
}, false);

inner.addEventListener('click', function() {
  console.log('inner capture');
}, true);


outer.addEventListener('click', function() {
  console.log('outer bubble');
}, false);
outer.addEventListener('click', function() {
  console.log('outer capture');
}, true);

// inner.onclick = function() {
//   console.log('inner onclick');
// };
outer.onclick = function() {
  console.log('outer onclick');
};
