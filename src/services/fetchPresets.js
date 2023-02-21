const fetchPresets = (setter, setError) => {
  fetch("https://demo7919674.mockable.io")
    .then((res) => res.json())
    .then((res) => setter(res))
    .catch((err) => setError(err));
};
export default fetchPresets;
