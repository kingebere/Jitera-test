const ourVision = [
  "B$u$i$ld",
  "$t$$h$e",
  "N$e$x$t",
  "E$$ra",
  "$$o$f$",
  "S$$of$t$wa$r$e",
  "De$$ve$l$op$me$n$t"
];

const filterArray = (input) => {
  /* filter $ symbol from the given data and convert them to uppercase */
  const dollarsFilter = input.map((val) =>
    val.replace(/\$/g, "").toUpperCase()
  );

  /* return array as string */
  return dollarsFilter.join(" ");
};

console.log(filterArray(ourVision));
