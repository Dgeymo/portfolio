const Badget = ({textSize="text-xs", text, textColor = "text-gray-900",color = "bg-gray-300", logo = null }) => {
  return (
    <section className={`flex flex-row justify-center px-2 py-1 ${textSize} font-semibold rounded-md ${color} ${textColor} mb-2`}>
      {logo && <div className={`mr-2 ${textColor}`}>{logo}</div>}
      <span className="w-100">{text}</span>
    </section>
  );
};
export default Badget;