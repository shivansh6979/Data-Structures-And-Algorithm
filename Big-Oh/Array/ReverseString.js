function reverse(str) {
  if (!str) {
    console.log("Not good!");
  }

  const backwards = [];

  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }
  return backwards.toString();
}

console.log("reversed string", reverse("shivansh"));
