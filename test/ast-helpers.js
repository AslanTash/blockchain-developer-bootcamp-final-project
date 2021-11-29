const isPayable = members => variableName => {
  if (members === undefined) return false;
  const definition = members.find((item) => item.name === variableName);
  return definition && definition.mutability === "payable";
};

module.exports = {
  isPayable,
};
