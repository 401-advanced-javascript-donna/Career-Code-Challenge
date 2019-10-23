function dailyRevenue(transactions) {

  let results = {};

  transactions.map(data => {
    const date = data.timestamp; 
    const utcDate = new Date(date)
      .toUTCString()
      .split(',')
      .join('')
      .substring(0, 15);
    const dateFormat = new Date(utcDate).toDateString();
    const val = data.price;
    results[dateFormat] ? results[dateFormat] += val : results[dateFormat] = val;
  });

  return results;
}

module.exports = {
  dailyRevenue
};