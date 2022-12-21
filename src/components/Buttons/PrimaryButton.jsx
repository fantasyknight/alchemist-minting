const PrimaryButton = ({
  text = "Text",
  leftIcon,
  onClick,
  className = "",
}) => {
  return (
    <div className={"v-h-center primary-button " + className} onClick={onClick}>
      {leftIcon && leftIcon}
      <span className={leftIcon ? "ms-2" : ""}>{text}</span>
    </div>
  );
};

export default PrimaryButton;
