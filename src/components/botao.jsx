export default function ChoiceButtom({ valor, onClick }) {
  return (
    <div onClick={onClick}>
      {valor}
    </div>
  );
}