function driversWithRevenueOver(drivers, revenue) {
  return drivers.filter(function(driver) {
    return driver.revenue > revenue;
  });
}

function driverNamesWithRevenueOver(drivers, revenue) {
  let filteredDrivers = driversWithRevenueOver(drivers, revenue);
  return filteredDrivers.map(function(driver) {
    return driver.name;
  });
}

function exactMatch(drivers, condition) {
  return drivers.filter(function(driver) {
    return driver[Object.keys(condition)[0]] === Object.values(condition)[0];
  });
}

function exactMatchToList(drivers, condition) {
  let matches = exactMatch(drivers, condition);
  return matches.map(function(driver) {
    return driver.name;
  });
}
