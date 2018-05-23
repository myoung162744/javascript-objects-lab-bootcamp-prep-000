var recipes = {
  chickenParm: 'chicken cheese',
  oatmeal: 'oats milk'
};

function updateObjectWithKeyAndValue(object, key, value) {
  return object.assign({}, object, { [key]: value })
}
