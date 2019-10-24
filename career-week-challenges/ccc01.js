const addDate = (date, diff) => {
  const val = diff.slice(0, diff.length - 1);
  const operator = diff.slice(diff.length - 1, diff.length);
  let multiplier;
  (operator === 's') ? multiplier = 1000 
    : (operator === 'm') ? multiplier = 1000 * 60
      : (operator === 'h') ? multiplier = 1000 * 60 * 60
        : (operator === 'd') ? multiplier = 1000 * 60 * 60 * 24
          : (operator === 'w') ? multiplier = 1000 * 60 * 60 * 24 * 7
            : (operator === 'M') ? multiplier = 1000 * 60 * 60 * 24 * 7 * 30.44
              : (operator === 'y') ? multiplier = 1000 * 60 * 60 * 24 * 7 * 30.44 * 12
                : console.log(multiplier);
  return (date + parseInt(val) * multiplier);
};

module.exports = addDate;