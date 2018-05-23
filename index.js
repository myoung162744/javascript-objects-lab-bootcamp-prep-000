var recipes = {
  chickenParm: 'chicken cheese',
  oatmeal: 'oats milk'
};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
}
