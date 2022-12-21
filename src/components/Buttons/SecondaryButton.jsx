const SecondaryButton = ({
  text = "Text",
  leftIcon,
  onClick,
  className = "",
}) => {
  return (
    <div className={"v-h-center secondary-button " + className}>
      {leftIcon && leftIcon}
      <span className={leftIcon ? "ms-2" : ""}>{text}</span>
    </div>
  );
};

export default SecondaryButton;
