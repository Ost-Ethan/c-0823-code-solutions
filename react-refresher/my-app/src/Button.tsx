type buttonProp = {
  text: string;
  onClick: () => void;
};

function ClickyButton({ text, onClick }: buttonProp) {
  return (
    <>
      <button onClick={onClick}>{text}</button>
    </>
  );
}

export default ClickyButton;
