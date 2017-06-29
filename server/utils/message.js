var generateMessage = (from, text) => {
  return {
    from,
    text,
    createdAt: new Date().getTime()
  }
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.co.th/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  }
};

module.exports = { generateMessage, generateLocationMessage };