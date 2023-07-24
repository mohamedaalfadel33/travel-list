export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 😁</em>
      </p>
    );
  const numItem = items.length;
  const numPaked = items.filter((item) => item.packed).length;
  const precentage = Math.round((numPaked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {precentage === 100
          ? 'You got everything! Ready to go ✈'
          : `
          You Have ${numItem} items on your list,and you already packed ${numPaked}(
          ${precentage}%)`}
      </em>
    </footer>
  );
}
